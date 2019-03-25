import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';
import { Dialog } from '@microsoft/sp-dialog';
import styles from './AppCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'SearchHeaderApplicationCustomizerStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
import './Appcustomizer.css';
import * as jQuery from 'jquery';
import 'jqueryui';
import MyAccordionTemplate from './MyAccordionTemplate';
import { SPHttpClientConfiguration, ODataVersion, ISPHttpClientConfiguration } from '@microsoft/sp-http';



let spHttpClient: SPHttpClient;
let currentWebUrl: string;
const LOG_SOURCE: string = 'SearchHeaderApplicationCustomizer';
var availableTags = [];
var searchuserinput="test";
let autocompleteplace;
export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISearchHeaderApplicationCustomizerProperties {
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SearchHeaderApplicationCustomizer
  extends BaseApplicationCustomizer<ISearchHeaderApplicationCustomizerProperties> {
  private _topPlaceholder: PlaceholderContent | undefined;
  private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // Wait for the placeholders to be created (or handle them being changed) and then
    // render.
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

    return Promise.resolve<void>();
  }
  public constructor() {
    super();

    SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
    
  }
  private _renderListAsync(): void {

    // Here, 'this' refers to my SPFx webpart which inherits from the BaseClientSideWebPart class.
    // Since I am calling this method from inside the class, I have access to 'this'.
    spHttpClient = this.context.spHttpClient;
    currentWebUrl = this.context.pageContext.web.absoluteUrl;

    /*Since the SP Search REST API works with ODataVersion 3, 
    we have to create a new ISPHttpClientConfiguration object with defaultODataVersion = ODataVersion.v3*/
    const spSearchConfig: ISPHttpClientConfiguration = {
      defaultODataVersion: ODataVersion.v3
    };

    //Override the default ODataVersion.v4 flag with the ODataVersion.v3
    const clientConfigODataV3: SPHttpClientConfiguration = SPHttpClient.configurations.v1.overrideWith(spSearchConfig);

    //Make the REST call
    spHttpClient.get(`${currentWebUrl}/_api/search/query?querytext='`+searchuserinput+`'&selectproperties='Author,Path,Title'`, clientConfigODataV3)
      .then((response: SPHttpClientResponse) => {
        response.json().then((responseJSON: any) => {
          
          //  console.log(responseJSON);
          const results = responseJSON.PrimaryQueryResult.RelevantResults.Table.Rows;
          console.log(availableTags);
          for(var i = 0; i<results.length; i++) {
            console.log(results[i].Cells[4].Value);
            availableTags.push(results[i].Cells[4].Value);
         }
        });
      });

  }

  private _renderPlaceHolders(): void {
    //call _renderlistasync from the change
    this._renderListAsync();
    console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    
        );

    // Handling the top placeholder
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      if (this.properties) {
        let topString: string = this.properties.Top;
        if (!topString) {
          topString = "(Top property was not defined.)";
        }

        if (this._topPlaceholder.domElement) {
          this._topPlaceholder.domElement.innerHTML = `
 					<div class="${styles.app}">
             <div class="${styles.top}">
             <form method="get" class="${styles.searchFieldGroup}" name="search" action="${this.context.pageContext.web.absoluteUrl}/sitepages/search.aspx">
             <div class="${styles.search__container}">
             <input id="Autosearch" class="${styles.search__input}" name="q" type="text" placeholder="Search">
             <input type="hidden" id="project">
            <input type="hidden" id="project-id">
            <p id="project-description"></p>
             </div>
            </form>
             </div>
           </div>`;
          autocompleteplace = this._topPlaceholder.domElement;
          jQuery('#Autosearch', this._topPlaceholder.domElement).autocomplete({ source: availableTags });
          document.getElementById("Autosearch").addEventListener("keyup", this.readItems);

        }
      }
    }
  }


  private readItems(): void {
    
    // Here, 'this' refers to my SPFx webpart which inherits from the BaseClientSideWebPart class.
    // Since I am calling this method from inside the class, I have access to 'this'.
    
    var x = jQuery('#Autosearch').val();
    console.log(x);
    searchuserinput=x;
    if(searchuserinput.length>=2)
    {
  
    /*Since the SP Search REST API works with ODataVersion 3, 
    we have to create a new ISPHttpClientConfiguration object with defaultODataVersion = ODataVersion.v3*/
    const spSearchConfig: ISPHttpClientConfiguration = {
      defaultODataVersion: ODataVersion.v3
    };

    //Override the default ODataVersion.v4 flag with the ODataVersion.v3
    const clientConfigODataV3: SPHttpClientConfiguration = SPHttpClient.configurations.v1.overrideWith(spSearchConfig);

    //Make the REST call
    
    spHttpClient.get(currentWebUrl +`/_api/search/query?querytext='`+searchuserinput + "*'&selectproperties='Author,Path,Title,FileExtension'", clientConfigODataV3)
      .then((response: SPHttpClientResponse) => {
        response.json().then((responseJSON: any) => {
          
          const results = responseJSON.PrimaryQueryResult.RelevantResults.Table.Rows;
          availableTags=[];
          for(var i = 0; i<results.length; i++) {
             availableTags.push({
              path: results[i].Cells[3].Value,
              label: results[i].Cells[4].Value,
              icon: results[i].Cells[5].Value,
              key:i,
            });
          }
         });
      });
    }
    jQuery('#Autosearch', autocompleteplace).autocomplete({ source: availableTags,
      focus: (event,ui)=>{
        $( "#Autosearch" ).val( ui.item.label );
        return false;
      } /*function( event, ui ) {
				$( "#Autosearch" ).val( ui.item.label );
				return false;
			}*/,
      select: ( event, ui )=> {
        $( "#Autosearch" ).val( ui.item.label );
        window.location.href = currentWebUrl+"/sitepages/search.aspx?q="+ui.item.label;
        /*$( "#project-description" ).html( ui.item.desc );*/
        return false;
        }
        })
        .data( "ui-autocomplete" )._renderItem = ( ul, item )=> {
        return $( "<li>" )
        .append( "<a '>" + item.label +"</a>" )
        .appendTo( ul );
        };
    }
  private _onDispose(): void {
    console.log('[SearchHeaderApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }  
}

