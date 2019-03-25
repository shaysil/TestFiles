"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("@microsoft/decorators");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_application_base_1 = require("@microsoft/sp-application-base");
var strings = require("SpfxToastrApplicationCustomizerStrings");
//Needed to reference external CSS files
var sp_loader_1 = require("@microsoft/sp-loader");
var $ = require("jquery");
var toastr = require("toastr");
var SpfxToastr_module_scss_1 = require("./SpfxToastr.module.scss");
var ToastService_1 = require("../../services/toastService/ToastService");
var LOG_SOURCE = 'SpfxToastrApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var SpfxToastrApplicationCustomizer = (function (_super) {
    __extends(SpfxToastrApplicationCustomizer, _super);
    function SpfxToastrApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxToastrApplicationCustomizer.prototype.onInit = function () {
        var _this = this;
        sp_core_library_1.Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        //Load the Toastr CSS
        sp_loader_1.SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css');
        //Go ahead and request the toasts, but we can't use them until jQuery and Toastr are ready
        this.toastsPromise = ToastService_1.ToastService.getToasts(this.context.spHttpClient, this.context.pageContext.web.absoluteUrl, this.context.pageContext.web.id);
        //jQuery document ready
        $(document).ready(function () {
            //***********************
            //Toastr Options
            //***********************
            //Determines where the toast shows up.
            // styles.topRight and styles.topLeft take into account the SuiteBar
            // there are also the native toast-bottom-right and toast-bottom-left
            toastr.options.positionClass = SpfxToastr_module_scss_1.default.topRight + " " + SpfxToastr_module_scss_1.default.spfxToastr;
            toastr.options.preventDuplicates = true;
            toastr.options.newestOnTop = false; //Ensures the first toast we send is on top
            toastr.options.timeOut = 0; //Prevents auto dismissal
            toastr.options.extendedTimeOut = 0; //Prevents auto dismissal during hover
            toastr.options.tapToDismiss = true; //Allows messages to go away on click
            toastr.options.closeButton = true; //Shows a close button to let end users know to click to close
            //A combination of Office UI-Fabric classes and custom classes are used
            // to ensure the notifications don't look too out of place
            //We use a custom styles.fabricIcon style to imitage the ms-Icon class
            // the ms-Icon class has extra properties that mess up our toast
            //We are unable to use the ms-bgColor styles since the Toast CSS loads
            // later and takes precedence, so we use our own color classes
            // For more background on this issue, see this article: https://dev.office.com/sharepoint/docs/spfx/web-parts/guidance/office-ui-fabric-integration
            toastr.options.titleClass = 'ms-font-m ms-fontWeight-semibold';
            toastr.options.messageClass = 'ms-font-s';
            toastr.options.iconClasses = {
                info: SpfxToastr_module_scss_1.default.info + " " + SpfxToastr_module_scss_1.default.fabricIcon + " ms-Icon--Info",
                warning: SpfxToastr_module_scss_1.default.warning + " " + SpfxToastr_module_scss_1.default.fabricIcon + " ms-Icon--Warning",
                error: SpfxToastr_module_scss_1.default.error + " " + SpfxToastr_module_scss_1.default.fabricIcon + " ms-Icon--Error",
                success: SpfxToastr_module_scss_1.default.success + " " + SpfxToastr_module_scss_1.default.fabricIcon + " ms-Icon--Completed"
            };
            //***********************
            //Toast Display
            //***********************
            _this.toastsPromise.then(function (toasts) {
                var _loop_1 = function (t) {
                    //Setup callbacks to track dismisal status
                    var overrides = {
                        onclick: function () {
                            ToastService_1.ToastService.acknowledgeToast(t.Id, _this.context.pageContext.web.id);
                        },
                        onCloseClick: function () {
                            ToastService_1.ToastService.acknowledgeToast(t.Id, _this.context.pageContext.web.id);
                        }
                    };
                    console.log(t.Demo);
                    console.log(t.Demo['Description']);
                    switch (t.Severity) {
                        case 'Warning':
                            if (t.Demo != null) {
                                toastr.warning(t.Message +
                                    ("<input type=\"button\" onclick=\"location.href='" + t.Demo["Url"] + "';\" value=\"" + t.Demo["Description"] + "\" />"), t.Title, overrides);
                            }
                            else {
                                toastr.warning(t.Message, t.Title, overrides);
                            }
                            break;
                        case 'Error':
                            if (t.Demo != null) {
                                toastr.error(t.Message +
                                    ("<input type=\"button\" onclick=\"location.href='" + t.Demo["Url"] + "';\" value=\"" + t.Demo["Description"] + "\" />"), t.Title, overrides);
                            }
                            else {
                                toastr.error(t.Message, t.Title, overrides);
                            }
                            break;
                        case 'Success':
                            toastr.success(t.Message +
                                ("<input type=\"button\" onclick=\"location.href='" + t.Demo["Url"] + "';\" value=\"" + t.Demo["Description"] + "\" />"), t.Title, overrides);
                            break;
                        default:
                            toastr.info(t.Message +
                                ("<input type=\"button\" onclick=\"location.href='" + t.Demo["Url"] + "';\" value=\"" + t.Demo["Description"] + "\" />"), t.Title, overrides);
                            break;
                    }
                };
                for (var _i = 0, toasts_1 = toasts; _i < toasts_1.length; _i++) {
                    var t = toasts_1[_i];
                    _loop_1(t);
                }
            }).catch(function (error) {
                //Generic error handler for any issues that occurred throughout
                // the promise chain. Display it in a toast!
                toastr.error(error, strings.FailedToLoad);
            });
        });
        return Promise.resolve();
    };
    __decorate([
        decorators_1.override
    ], SpfxToastrApplicationCustomizer.prototype, "onInit", null);
    return SpfxToastrApplicationCustomizer;
}(sp_application_base_1.BaseApplicationCustomizer));
exports.default = SpfxToastrApplicationCustomizer;

//# sourceMappingURL=SpfxToastrApplicationCustomizer.js.map
