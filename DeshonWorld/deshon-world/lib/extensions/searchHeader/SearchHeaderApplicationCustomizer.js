var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import { SPHttpClient } from '@microsoft/sp-http';
import styles from './AppCustomizer.module.scss';
import * as strings from 'SearchHeaderApplicationCustomizerStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
import './Appcustomizer.css';
import * as jQuery from 'jquery';
import 'jqueryui';
import { ODataVersion } from '@microsoft/sp-http';
var spHttpClient;
var currentWebUrl;
var LOG_SOURCE = 'SearchHeaderApplicationCustomizer';
var availableTags = [];
var searchuserinput = "test";
var autocompleteplace;
/** A Custom Action which can be run during execution of a Client Side Application */
var SearchHeaderApplicationCustomizer = (function (_super) {
    __extends(SearchHeaderApplicationCustomizer, _super);
    function SearchHeaderApplicationCustomizer() {
        var _this = _super.call(this) || this;
        SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
        return _this;
    }
    SearchHeaderApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        // Wait for the placeholders to be created (or handle them being changed) and then
        // render.
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        return Promise.resolve();
    };
    SearchHeaderApplicationCustomizer.prototype._renderListAsync = function () {
        // Here, 'this' refers to my SPFx webpart which inherits from the BaseClientSideWebPart class.
        // Since I am calling this method from inside the class, I have access to 'this'.
        spHttpClient = this.context.spHttpClient;
        currentWebUrl = this.context.pageContext.web.absoluteUrl;
        /*Since the SP Search REST API works with ODataVersion 3,
        we have to create a new ISPHttpClientConfiguration object with defaultODataVersion = ODataVersion.v3*/
        var spSearchConfig = {
            defaultODataVersion: ODataVersion.v3
        };
        //Override the default ODataVersion.v4 flag with the ODataVersion.v3
        var clientConfigODataV3 = SPHttpClient.configurations.v1.overrideWith(spSearchConfig);
        //Make the REST call
        spHttpClient.get(currentWebUrl + "/_api/search/query?querytext='" + searchuserinput + "'&selectproperties='Author,Path,Title'", clientConfigODataV3)
            .then(function (response) {
            response.json().then(function (responseJSON) {
                //  console.log(responseJSON);
                var results = responseJSON.PrimaryQueryResult.RelevantResults.Table.Rows;
                console.log(availableTags);
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i].Cells[4].Value);
                    availableTags.push(results[i].Cells[4].Value);
                }
            });
        });
    };
    SearchHeaderApplicationCustomizer.prototype._renderPlaceHolders = function () {
        //call _renderlistasync from the change
        this._renderListAsync();
        console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
        console.log("Available placeholders: ", this.context.placeholderProvider.placeholderNames
            .map(function (name) { return PlaceholderName[name]; })
            .join(", "));
        // Handling the top placeholder
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._topPlaceholder) {
                console.error("The expected placeholder (Top) was not found.");
                return;
            }
            if (this.properties) {
                var topString = this.properties.Top;
                if (!topString) {
                    topString = "(Top property was not defined.)";
                }
                if (this._topPlaceholder.domElement) {
                    this._topPlaceholder.domElement.innerHTML = "\n \t\t\t\t\t<div class=\"" + styles.app + "\">\n             <div class=\"" + styles.top + "\">\n             <form method=\"get\" class=\"" + styles.searchFieldGroup + "\" name=\"search\" action=\"" + this.context.pageContext.web.absoluteUrl + "/sitepages/search.aspx\">\n             <div class=\"" + styles.search__container + "\">\n             <input id=\"Autosearch\" class=\"" + styles.search__input + "\" name=\"q\" type=\"text\" placeholder=\"Search\">\n             <input type=\"hidden\" id=\"project\">\n            <input type=\"hidden\" id=\"project-id\">\n            <p id=\"project-description\"></p>\n             </div>\n            </form>\n             </div>\n           </div>";
                    autocompleteplace = this._topPlaceholder.domElement;
                    jQuery('#Autosearch', this._topPlaceholder.domElement).autocomplete({ source: availableTags });
                    document.getElementById("Autosearch").addEventListener("keyup", this.readItems);
                }
            }
        }
    };
    SearchHeaderApplicationCustomizer.prototype.readItems = function () {
        // Here, 'this' refers to my SPFx webpart which inherits from the BaseClientSideWebPart class.
        // Since I am calling this method from inside the class, I have access to 'this'.
        var x = jQuery('#Autosearch').val();
        console.log(x);
        searchuserinput = x;
        if (searchuserinput.length >= 2) {
            /*Since the SP Search REST API works with ODataVersion 3,
            we have to create a new ISPHttpClientConfiguration object with defaultODataVersion = ODataVersion.v3*/
            var spSearchConfig = {
                defaultODataVersion: ODataVersion.v3
            };
            //Override the default ODataVersion.v4 flag with the ODataVersion.v3
            var clientConfigODataV3 = SPHttpClient.configurations.v1.overrideWith(spSearchConfig);
            //Make the REST call
            spHttpClient.get(currentWebUrl + "/_api/search/query?querytext='" + searchuserinput + "*'&selectproperties='Author,Path,Title,FileExtension'", clientConfigODataV3)
                .then(function (response) {
                response.json().then(function (responseJSON) {
                    var results = responseJSON.PrimaryQueryResult.RelevantResults.Table.Rows;
                    availableTags = [];
                    for (var i = 0; i < results.length; i++) {
                        availableTags.push({
                            path: results[i].Cells[3].Value,
                            label: results[i].Cells[4].Value,
                            icon: results[i].Cells[5].Value,
                            key: i,
                        });
                    }
                });
            });
        }
        jQuery('#Autosearch', autocompleteplace).autocomplete({ source: availableTags,
            focus: function (event, ui) {
                $("#Autosearch").val(ui.item.label);
                return false;
            } /*function( event, ui ) {
                      $( "#Autosearch" ).val( ui.item.label );
                      return false;
                  }*/,
            select: function (event, ui) {
                $("#Autosearch").val(ui.item.label);
                window.location.href = currentWebUrl + "/sitepages/search.aspx?q=" + ui.item.label;
                /*$( "#project-description" ).html( ui.item.desc );*/
                return false;
            }
        })
            .data("ui-autocomplete")._renderItem = function (ul, item) {
            return $("<li>")
                .append("<a '>" + item.label + "</a>")
                .appendTo(ul);
        };
    };
    SearchHeaderApplicationCustomizer.prototype._onDispose = function () {
        console.log('[SearchHeaderApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    };
    __decorate([
        override
    ], SearchHeaderApplicationCustomizer.prototype, "onInit", null);
    return SearchHeaderApplicationCustomizer;
}(BaseApplicationCustomizer));
export default SearchHeaderApplicationCustomizer;
//# sourceMappingURL=SearchHeaderApplicationCustomizer.js.map