define("4320b0e2-8a6c-4bba-be2e-382dc60a5c12_0.0.1", ["@microsoft/sp-http","@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base","SearchHeaderApplicationCustomizerStrings","@microsoft/sp-loader","jquery","jqueryui"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/decorators"
var decorators_ = __webpack_require__(4);
var decorators__default = /*#__PURE__*/__webpack_require__.n(decorators_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-application-base"
var sp_application_base_ = __webpack_require__(6);
var sp_application_base__default = /*#__PURE__*/__webpack_require__.n(sp_application_base_);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(0);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: ./lib/extensions/searchHeader/AppCustomizer.module.scss.js
/* tslint:disable */
__webpack_require__(7);
var styles = {
    app: 'app_52a91569',
    top: 'top_52a91569',
    bottom: 'bottom_52a91569',
    searchFieldGroup: 'searchFieldGroup_52a91569',
    search__container: 'search__container_52a91569',
    search__input: 'search__input_52a91569',
};
/* harmony default export */ var AppCustomizer_module_scss = (styles);
/* tslint:enable */ 

// EXTERNAL MODULE: external "SearchHeaderApplicationCustomizerStrings"
var external__SearchHeaderApplicationCustomizerStrings_ = __webpack_require__(10);
var external__SearchHeaderApplicationCustomizerStrings__default = /*#__PURE__*/__webpack_require__.n(external__SearchHeaderApplicationCustomizerStrings_);

// EXTERNAL MODULE: external "@microsoft/sp-loader"
var sp_loader_ = __webpack_require__(11);
var sp_loader__default = /*#__PURE__*/__webpack_require__.n(sp_loader_);

// EXTERNAL MODULE: ./lib/extensions/searchHeader/Appcustomizer.css
var Appcustomizer = __webpack_require__(12);
var Appcustomizer_default = /*#__PURE__*/__webpack_require__.n(Appcustomizer);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(14);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: external "jqueryui"
var external__jqueryui_ = __webpack_require__(15);
var external__jqueryui__default = /*#__PURE__*/__webpack_require__.n(external__jqueryui_);

// CONCATENATED MODULE: ./lib/extensions/searchHeader/SearchHeaderApplicationCustomizer.js
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











var spHttpClient;
var currentWebUrl;
var LOG_SOURCE = 'SearchHeaderApplicationCustomizer';
var availableTags = [];
var searchuserinput = "test";
var autocompleteplace;
/** A Custom Action which can be run during execution of a Client Side Application */
var SearchHeaderApplicationCustomizer_SearchHeaderApplicationCustomizer = (function (_super) {
    __extends(SearchHeaderApplicationCustomizer, _super);
    function SearchHeaderApplicationCustomizer() {
        var _this = _super.call(this) || this;
        sp_loader_["SPComponentLoader"].loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
        return _this;
    }
    SearchHeaderApplicationCustomizer.prototype.onInit = function () {
        sp_core_library_["Log"].info(LOG_SOURCE, "Initialized " + external__SearchHeaderApplicationCustomizerStrings_["Title"]);
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
            defaultODataVersion: sp_http_["ODataVersion"].v3
        };
        //Override the default ODataVersion.v4 flag with the ODataVersion.v3
        var clientConfigODataV3 = sp_http_["SPHttpClient"].configurations.v1.overrideWith(spSearchConfig);
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
            .map(function (name) { return sp_application_base_["PlaceholderName"][name]; })
            .join(", "));
        // Handling the top placeholder
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(sp_application_base_["PlaceholderName"].Top, { onDispose: this._onDispose });
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
                    this._topPlaceholder.domElement.innerHTML = "\n \t\t\t\t\t<div class=\"" + AppCustomizer_module_scss.app + "\">\n             <div class=\"" + AppCustomizer_module_scss.top + "\">\n             <form method=\"get\" class=\"" + AppCustomizer_module_scss.searchFieldGroup + "\" name=\"search\" action=\"" + this.context.pageContext.web.absoluteUrl + "/sitepages/search.aspx\">\n             <div class=\"" + AppCustomizer_module_scss.search__container + "\">\n             <input id=\"Autosearch\" class=\"" + AppCustomizer_module_scss.search__input + "\" name=\"q\" type=\"text\" placeholder=\"Search\">\n             <input type=\"hidden\" id=\"project\">\n            <input type=\"hidden\" id=\"project-id\">\n            <p id=\"project-description\"></p>\n             </div>\n            </form>\n             </div>\n           </div>";
                    autocompleteplace = this._topPlaceholder.domElement;
                    external__jquery_('#Autosearch', this._topPlaceholder.domElement).autocomplete({ source: availableTags });
                    document.getElementById("Autosearch").addEventListener("keyup", this.readItems);
                }
            }
        }
    };
    SearchHeaderApplicationCustomizer.prototype.readItems = function () {
        // Here, 'this' refers to my SPFx webpart which inherits from the BaseClientSideWebPart class.
        // Since I am calling this method from inside the class, I have access to 'this'.
        var x = external__jquery_('#Autosearch').val();
        console.log(x);
        searchuserinput = x;
        if (searchuserinput.length >= 2) {
            /*Since the SP Search REST API works with ODataVersion 3,
            we have to create a new ISPHttpClientConfiguration object with defaultODataVersion = ODataVersion.v3*/
            var spSearchConfig = {
                defaultODataVersion: sp_http_["ODataVersion"].v3
            };
            //Override the default ODataVersion.v4 flag with the ODataVersion.v3
            var clientConfigODataV3 = sp_http_["SPHttpClient"].configurations.v1.overrideWith(spSearchConfig);
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
        external__jquery_('#Autosearch', autocompleteplace).autocomplete({ source: availableTags,
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
        decorators_["override"]
    ], SearchHeaderApplicationCustomizer.prototype, "onInit", null);
    return SearchHeaderApplicationCustomizer;
}(sp_application_base_["BaseApplicationCustomizer"]));
/* harmony default export */ var searchHeader_SearchHeaderApplicationCustomizer = __webpack_exports__["default"] = (SearchHeaderApplicationCustomizer_SearchHeaderApplicationCustomizer);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(8);
var loader = __webpack_require__(2);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".app_52a91569 .top_52a91569{height:0;line-height:1}.app_52a91569 .bottom_52a91569,.app_52a91569 .top_52a91569{text-align:center;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\"}.app_52a91569 .bottom_52a91569{height:40px;line-height:2.5}.searchFieldGroup_52a91569{top:20px;right:80px;width:236px;position:absolute;z-index:99999999}.searchFieldGroup_52a91569 .search__input_52a91569{width:100%;padding:12px 24px;-webkit-transition:-webkit-transform .25s ease-in-out;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;font-size:14px;line-height:18px;color:#575756;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:18px 18px;background-position:95%;border-radius:50px;border:1px solid #575756;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.searchFieldGroup_52a91569 .search__input_52a91569::-webkit-input-placeholder{color:color(#575756 a(.8));text-transform:uppercase;letter-spacing:1.5px}.searchFieldGroup_52a91569 .search__input_52a91569::-ms-input-placeholder{color:color(#575756 a(.8));text-transform:uppercase;letter-spacing:1.5px}.searchFieldGroup .search__input::-webkit-input-placeholder{color:color(#575756 a(.8));text-transform:uppercase;letter-spacing:1.5px}.searchFieldGroup .search__input::-ms-input-placeholder{color:color(#575756 a(.8));text-transform:uppercase;letter-spacing:1.5px}.searchFieldGroup_52a91569 .search__input_52a91569::placeholder{color:color(#575756 a(.8));text-transform:uppercase;letter-spacing:1.5px}.searchFieldGroup_52a91569 .search__input_52a91569:focus,.searchFieldGroup_52a91569 .search__input_52a91569:hover{padding:12px 24px;outline:0;border:1px solid transparent;border-bottom:1px solid #575756;border-radius:0;background-position:100%}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(13);
var loader = __webpack_require__(2);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".searchCell-130{visibility:hidden}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])});;
//# sourceMappingURL=search-header-application-customizer.js.map