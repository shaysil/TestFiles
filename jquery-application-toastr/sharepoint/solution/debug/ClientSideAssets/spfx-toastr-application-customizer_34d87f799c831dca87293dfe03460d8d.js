define("a861c815-e425-416d-9520-04bcdf557e27_0.0.1",["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base","SpfxToastrApplicationCustomizerStrings","@microsoft/sp-loader","jquery","toastr","@microsoft/sp-http"],function(e,t,n,o,r,a,s,i){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n(2),i=n(3),c=n(4),u=n(5),l=n(6),f=n(7),p=n(8),d=n(14),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onInit=function(){var e=this;return s.Log.info("SpfxToastrApplicationCustomizer","Initialized "+c.Title),u.SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"),this.toastsPromise=d.ToastService.getToasts(this.context.spHttpClient,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.id),l(document).ready(function(){f.options.positionClass=p.default.topRight+" "+p.default.spfxToastr,f.options.preventDuplicates=!0,f.options.newestOnTop=!1,f.options.timeOut=0,f.options.extendedTimeOut=0,f.options.tapToDismiss=!0,f.options.closeButton=!0,f.options.titleClass="ms-font-m ms-fontWeight-semibold",f.options.messageClass="ms-font-s",f.options.iconClasses={info:p.default.info+" "+p.default.fabricIcon+" ms-Icon--Info",warning:p.default.warning+" "+p.default.fabricIcon+" ms-Icon--Warning",error:p.default.error+" "+p.default.fabricIcon+" ms-Icon--Error",success:p.default.success+" "+p.default.fabricIcon+" ms-Icon--Completed"},e.toastsPromise.then(function(t){for(var n=0,o=t;n<o.length;n++){var r=o[n];!function(t){var n={onclick:function(){d.ToastService.acknowledgeToast(t.Id,e.context.pageContext.web.id)},onCloseClick:function(){d.ToastService.acknowledgeToast(t.Id,e.context.pageContext.web.id)}};switch(console.log(t.Demo),console.log(t.Demo.Description),t.Severity){case"Warning":f.warning(t.Message+'<input type="button" onclick="location.href=\''+t.Demo.Url+'\';" value="'+t.Demo.Description+'" />',t.Title,n);break;case"Error":f.error(t.Message+'<input type="button" onclick="location.href=\''+t.Demo.Url+'\';" value="'+t.Demo.Description+'" />',t.Title,n);break;case"Success":f.success(t.Message+'<input type="button" onclick="location.href=\''+t.Demo.Url+'\';" value="'+t.Demo.Description+'" />',t.Title,n);break;default:f.info(t.Message+'<input type="button" onclick="location.href=\''+t.Demo.Url+'\';" value="'+t.Demo.Description+'" />',t.Title,n)}}(r)}}).catch(function(e){f.error(e,c.FailedToLoad)})}),Promise.resolve()},r([a.override],t.prototype,"onInit",null),t}(i.BaseApplicationCustomizer);t.default=h},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(9);var o={topRight:"topRight_6608c0ab",topLeft:"topLeft_6608c0ab",spfxToastr:"spfxToastr_6608c0ab",fabricIcon:"fabricIcon_6608c0ab",info:"info_6608c0ab",warning:"warning_6608c0ab",error:"error_6608c0ab",success:"success_6608c0ab"};t.default=o},function(e,t,n){var o=n(10),r=n(12);"string"==typeof o&&(o=[[e.i,o]]);for(var a=0;a<o.length;a++)r.loadStyles(o[a][1],!0);o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(11)(!1),t.push([e.i,'.topRight_6608c0ab{top:62px;right:12px}.topLeft_6608c0ab{top:62px;left:12px}.spfxToastr_6608c0ab .fabricIcon_6608c0ab:before{position:fixed;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;font-size:28px;margin:4px 0 0 -36px;-webkit-font-smoothing:antialiased}.spfxToastr_6608c0ab .info_6608c0ab{background-color:"[theme:blue, default:#0078d7]"}.spfxToastr_6608c0ab .warning_6608c0ab{background-color:"[theme:orangeLighter, default:#ff8c00]"}.spfxToastr_6608c0ab .error_6608c0ab{background-color:"[theme:redDark, default:#a80000]"}.spfxToastr_6608c0ab .success_6608c0ab{background-color:"[theme:green, default:#107c10]"}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";(function(e){function n(e){var t=D();e();var n=D();w.perf.duration+=n-t}function o(e,t){void 0===t&&(t=!1),n(function(){var n=Array.isArray(e)?e:m(e);void 0===S&&(S=b());var o=w.runState,r=o.mode,a=o.buffer,s=o.flushTimer;t||1===r?(a.push(n),s||(w.runState.flushTimer=i())):c(n)})}function r(e){w.loadStyles=e}function a(e){w.runState.mode=e}function s(){n(function(){var e=w.runState.buffer.slice();w.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&c(t)})}function i(){return setTimeout(function(){w.runState.flushTimer=0,s()},0)}function c(e,t){w.loadStyles?w.loadStyles(h(e).styleString,e):S?y(e,t):g(e)}function u(e){w.theme=e,p()}function l(e){void 0===e&&(e=3),3!==e&&2!==e||(f(w.registeredStyles),w.registeredStyles=[]),3!==e&&1!==e||(f(w.registeredThemableStyles),w.registeredThemableStyles=[])}function f(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function p(){if(w.theme){for(var e=[],t=0,n=w.registeredThemableStyles;t<n.length;t++){var o=n[t];e.push(o.themableStyle)}e.length>0&&(l(1),c([].concat.apply([],e)))}}function d(e){return e&&(e=h(m(e)).styleString),e}function h(e){var t=w.theme,n=!1;return{styleString:(e||[]).map(function(e){var o=e.theme;if(o){n=!0;var r=t?t[o]:void 0,a=e.defaultValue||"inherit";return t&&!r&&console,r||a}return e.rawString}).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,o=void 0;o=x.exec(e);){var r=o.index;r>n&&t.push({rawString:e.substring(n,r)}),t.push({theme:o[1],defaultValue:o[2]}),n=x.lastIndex}t.push({rawString:e.substring(n)})}return t}function g(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),o=h(e),r=o.styleString,a=o.themable;n.type="text/css",n.appendChild(document.createTextNode(r)),w.perf.count++,t.appendChild(n);var s={styleElement:n,themableStyle:e};a?w.registeredThemableStyles.push(s):w.registeredStyles.push(s)}function y(e,t){var n=document.getElementsByTagName("head")[0],o=w.registeredStyles,r=w.lastStyleElement,a=r?r.styleSheet:void 0,s=a?a.cssText:"",i=o[o.length-1],c=h(e).styleString;(!r||s.length+c.length>_)&&(r=document.createElement("style"),r.type="text/css",t?(n.replaceChild(r,t.styleElement),t.styleElement=r):n.appendChild(r),t||(i={styleElement:r,themableStyle:e},o.push(i))),r.styleSheet.cssText+=d(c),Array.prototype.push.apply(i.themableStyle,e),w.lastStyleElement=r}function b(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var v=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var S,T="undefined"==typeof window?e:window,w=function(){var e=T.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=v({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=v({},e,{registeredThemableStyles:[]})),T.__themeState__=e,e}(),x=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,_=1e4,D=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=o,t.configureLoadStyles=r,t.configureRunMode=a,t.flush=s,t.loadTheme=u,t.clearStyles=l,t.detokenize=d,t.splitStyles=m}).call(t,n(13))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),r=function(){function e(){}return e.getToasts=function(e,t,n){var o=this;return new Promise(function(r,a){o.ensureToasts(e,t,n).then(function(e){r(e)}).catch(function(e){a(e)})})},e.acknowledgeToast=function(t,n){var o=e.retrieveCache(n),r=e.indexOfToastStatusById(t,o.ToastStatuses);r>=0?o.ToastStatuses[r].Ack=new Date:o.ToastStatuses.push({Id:t,Ack:new Date}),e.storeCache(o,n)},e.webStorageKey=function(t){return e.storageKeyBase+"_"+t},e.retrieveCache=function(e){var t=localStorage?JSON.parse(localStorage.getItem(this.webStorageKey(e))):void 0;return t?t.Loaded=new Date(t.Loaded.valueOf()):t={Toasts:[],ToastStatuses:[]},t},e.storeCache=function(e,t){localStorage&&localStorage.setItem(this.webStorageKey(t),JSON.stringify(e))},e.ensureToasts=function(t,n,o){return new Promise(function(r,a){var s=e.retrieveCache(o);if(s.Loaded){var i=new Date,c=new Date(i.getTime()+-12e4);if(s.Loaded>c&&!e.getFromListAlways)return void r(e.reduceToasts(s))}window.spfxToastrLoadingData?window.setTimeout(function(){e.ensureToasts(t,n,o).then(function(e){r(e)})},100):(window.spfxToastrLoadingData=!0,e.getToastsFromList(t,n).then(function(t){s.Toasts=t,s.Loaded=new Date,s=e.processCache(s),e.storeCache(s,o),window.spfxToastrLoadingData=!1,r(e.reduceToasts(s))}).catch(function(e){a(e)}))})},e.getToastsFromList=function(t,n){var r=(new Date).toISOString(),a="(StartDate le datetime'"+r+"') and (EndDate ge datetime'"+r+"')";return t.get(n+"/"+e.apiEndPoint+"?$select="+e.select+"&$filter="+a+"&$orderby="+e.orderby,o.SPHttpClient.configurations.v1).then(function(e){if(!e.ok)throw"Unable to get items: "+e.status+" ("+e.statusText+")";return e.json()}).then(function(e){for(var t=[],n=0,o=e.value;n<o.length;n++){var r=o[n];t.push({Title:r.Title,Id:r.Id,Severity:r.Severity,Frequency:r.Frequency,Enabled:r.Enabled,Message:r.Message,Link:r.Link,Demo:r.Demo})}return t})},e.indexOfToastStatusById=function(e,t){for(var n=0;n<t.length;n++)if(t[n].Id==e)return n;return-1},e.processCache=function(e){for(var t=[],n=0,o=e.Toasts;n<o.length;n++){var r=o[n];t.push(r.Id)}return e.ToastStatuses=e.ToastStatuses.filter(function(e){return t.indexOf(e.Id)>=0}),e},e.reduceToasts=function(t){return t.Toasts.filter(function(n){if(!n.Enabled)return!1;var o=e.indexOfToastStatusById(n.Id,t.ToastStatuses);if(!(o>=0))return!0;var r=new Date(t.ToastStatuses[o].Ack.valueOf());switch(n.Frequency){case"Once":return!1;case"Always":return!0;default:var a=new Date;return a.getFullYear()!==r.getFullYear()||a.getMonth()!==r.getMonth()||a.getDay()!==r.getDay()}})},e.storageKeyBase="spfxToastr",e.getFromListAlways=!1,e.apiEndPoint="_api/web/lists/getbytitle('Toast')/items",e.select="Id,Title,Severity,Frequency,Enabled,Message,Link,Demo",e.orderby="StartDate asc",e}();t.ToastService=r},function(e,t){e.exports=i}])});