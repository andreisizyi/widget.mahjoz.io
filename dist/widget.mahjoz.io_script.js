/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_button: () => (/* binding */ add_button),
/* harmony export */   add_onlick_event: () => (/* binding */ add_onlick_event),
/* harmony export */   get_parameters: () => (/* binding */ get_parameters)
/* harmony export */ });

function get_parameters() {
  var scripts = document.getElementsByTagName('script');
  var myScript;
  for (var i = 0; i < scripts.length; i++) {
    var url = new URL(scripts[i].src);
    var params = new URLSearchParams(url.search);
    if (params.has('button_text')) {
      myScript = scripts[i];
      break;
    }
  }
  if (myScript) {
    var scriptSrc = myScript.src;
    var url = new URL(scriptSrc);
    var params = new URLSearchParams(url.search);
    var urlParam = params.get('url'); // "https://albaher.mahjoz.net"
    var buttonText = params.get('button_text'); // "BookMe"
    var buttonTextColor = params.get('button_text_color'); // "fff"
    var buttonBackgroundColor = params.get('button_backgroud_color'); // "000"

    buttonTextColor = decodeURIComponent(buttonTextColor); // "#ffff"
    buttonBackgroundColor = decodeURIComponent(buttonBackgroundColor); // "#0000"
  }

  return {
    'url': urlParam,
    'button_text': buttonText,
    'button_text_color': buttonTextColor,
    'button_backgroud_color': buttonBackgroundColor
  };
}
function add_button(buttonText, buttonTextColor, buttonBackgroundColor) {
  var newDiv = document.createElement("div");
  newDiv.className = "mahjoz-badge-content";
  newDiv.style.backgroundColor = '#' + buttonBackgroundColor;
  newDiv.style.color = '#' + buttonTextColor;
  newDiv.textContent = buttonText;
  document.body.appendChild(newDiv);
  return newDiv;
}
function add_onlick_event(button, params) {
  button.addEventListener('click', function (event) {
    var _params$embed_type, _params$embeded;
    document.body.style.overflow = 'hidden';
    var overlay = document.createElement('div');
    var closeOverlay = document.createElement('div');
    var popup = document.createElement('div');
    var popupContent = document.createElement('div');
    var spinner = document.createElement('div');
    var bounce1 = document.createElement('div');
    var bounce2 = document.createElement('div');
    var bounce3 = document.createElement('div');
    var iframe = document.createElement('iframe');
    var popupClose = document.createElement('div');
    overlay.className = "mahjoz-overlay";
    closeOverlay.className = "mahjoz-close-overlay";
    popup.className = "mahjoz-popup";
    popupContent.className = "mahjoz-popup-content";
    popupContent.dataset.url = "https://albaher.mahjoz.net/?embeded=1";
    spinner.className = "mahjoz-spinner";
    bounce1.className = "mahjoz-bounce1";
    bounce2.className = "mahjoz-bounce2";
    bounce3.className = "mahjoz-bounce3";
    iframe.src = "https://albaher.mahjoz.net/?embed_domain=".concat(params.url, "&embed_type=").concat((_params$embed_type = params.embed_type) !== null && _params$embed_type !== void 0 ? _params$embed_type : 'PopupWidgetsdf', "PopupWidget&embeded=").concat((_params$embeded = params.embeded) !== null && _params$embeded !== void 0 ? _params$embeded : 1);
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    popupClose.className = "mahjoz-popup-close";
    popupClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>';
    spinner.appendChild(bounce1);
    spinner.appendChild(bounce2);
    spinner.appendChild(bounce3);
    popupContent.appendChild(spinner);
    popupContent.appendChild(iframe);
    popup.appendChild(popupContent);
    overlay.appendChild(closeOverlay);
    overlay.appendChild(popup);
    overlay.appendChild(popupClose);
    document.body.appendChild(overlay);

    // Add close action
    var removeOverlay = function removeOverlay() {
      overlay.remove();
      document.body.style.overflow = '';
    };
    popupClose.addEventListener('click', removeOverlay);
    closeOverlay.addEventListener('click', removeOverlay);
  });
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./src/styles.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./src/styles.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mahjoz-badge-content {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 45px;\n  padding: 0 30px;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;\n  font-family: sans-serif;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n  background: rgb(0, 105, 255);\n  color: rgb(255, 255, 255);\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n.mahjoz-inline-widget,\n.mahjoz-inline-widget *,\n.mahjoz-badge-widget,\n.mahjoz-badge-widget *,\n.mahjoz-overlay,\n.mahjoz-overlay * {\n  font-size: 16px;\n  line-height: 1.2em;\n}\n\n.mahjoz-inline-widget iframe,\n.mahjoz-badge-widget iframe,\n.mahjoz-overlay iframe {\n  display: inline;\n  width: 100%;\n  height: 100%;\n}\n\n.mahjoz-popup-content {\n  position: relative;\n}\n\n.mahjoz-popup-content.mahjoz-mobile {\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n\n.mahjoz-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 999999;\n  background-color: #a5a5a5;\n  background-color: rgba(31, 31, 31, 0.4);\n}\n\n.mahjoz-overlay .mahjoz-popup .mahjoz-popup-content iframe {\n  border-radius: 5px;\n}\n\n.mahjoz-overlay .mahjoz-close-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.mahjoz-overlay .mahjoz-popup {\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  width: 80%;\n  min-width: 900px;\n  max-width: 1000px;\n  height: 90%;\n  max-height: 680px;\n}\n\n@media (max-width: 975px) {\n  .mahjoz-overlay .mahjoz-popup {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform: none;\n    width: 100%;\n    height: auto;\n    min-width: 0;\n    max-height: none;\n  }\n}\n.mahjoz-overlay .mahjoz-popup .mahjoz-popup-content {\n  height: 100%;\n}\n\n.mahjoz-overlay .mahjoz-popup-close {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  color: #fff;\n  width: 19px;\n  height: 19px;\n  cursor: pointer;\n}\n.mahjoz-overlay .mahjoz-popup-close svg {\n  fill: white;\n}\n\n@media (max-width: 975px) {\n  .mahjoz-overlay .mahjoz-popup-close {\n    top: 15px;\n    right: 15px;\n  }\n}\n.mahjoz-badge-widget {\n  position: fixed;\n  right: 20px;\n  bottom: 15px;\n  z-index: 9998;\n}\n\n.mahjoz-badge-widget .mahjoz-badge-content {\n  display: table-cell;\n  width: auto;\n  height: 45px;\n  padding: 0 30px;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;\n  font-family: sans-serif;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.mahjoz-badge-widget .mahjoz-badge-content.mahjoz-white {\n  color: #666a73;\n}\n\n.mahjoz-badge-widget .mahjoz-badge-content span {\n  display: block;\n  font-size: 12px;\n}\n\n.mahjoz-spinner {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  text-align: center;\n  z-index: -1;\n}\n\n.mahjoz-spinner > div {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: #e1e1e1;\n  border-radius: 50%;\n  vertical-align: middle;\n  animation: mahjoz-bouncedelay 1.4s infinite ease-in-out;\n  animation-fill-mode: both;\n}\n\n.mahjoz-spinner .mahjoz-bounce1 {\n  animation-delay: -0.32s;\n}\n\n.mahjoz-spinner .mahjoz-bounce2 {\n  animation-delay: -0.16s;\n}\n\n@keyframes mahjoz-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./styles.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./src/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/widget.mahjoz.io_script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

window.onload = function () {
  var parameters = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.get_parameters)();
  var button = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.add_button)(parameters.button_text, parameters.button_text_color, parameters.button_backgroud_color);
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.add_onlick_event)(button, parameters);
};
})();

/******/ })()
;