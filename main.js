/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  font-size: 18px;\\n  --color-header: #da4b3e;\\n  --color-white: #fff;\\n  --color-grey: #fafafa;\\n  --color-footer-grey: #f3f3f3;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.todoApp {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100vh;\\n}\\n\\n.header {\\n    height: 2.5rem;\\n    background-color: var(--color-header);\\n    color: var(--color-white);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.main {\\n    flex: 1;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.footer {\\n    height: 2.5rem;\\n    background-color: var(--color-footer-grey);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://11-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dataJson.js":
/*!*************************!*\
  !*** ./src/dataJson.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsJSON\": () => (/* binding */ projectsJSON),\n/* harmony export */   \"todosJSON\": () => (/* binding */ todosJSON)\n/* harmony export */ });\nconst projectsJSON = '{\"projectsListForExport\":[{\"name\":\"House Bijinesu\",\"id\":2},{\"name\":\"Getting fit and healthy\",\"id\":3}],\"currentProjectId\":4}';\nconst todosJSON = '{\"todosListForExport\":[{\"id\":1,\"project\":null,\"title\":\"1 Buy Milk\",\"desc\":\"1 liter should do it for this week\",\"dateAdded\":\"2023-03-02T11:44:19.042Z\",\"dueDate\":\"2023-03-17T19:44:19.042Z\",\"priority\":2,\"completed\":false},{\"id\":2,\"project\":3,\"title\":\"2 Work out\",\"desc\":\"Haha as if the gym is boring\",\"dateAdded\":\"2023-02-28T21:44:19.042Z\",\"dueDate\":\"2023-03-08T21:44:19.042Z\",\"priority\":3,\"completed\":false},{\"id\":3,\"project\":3,\"title\":\"3 Swim\",\"desc\":\"This I really should be doing more\",\"dateAdded\":\"2023-03-05T21:44:19.042Z\",\"dueDate\":\"2023-03-14T21:44:19.042Z\",\"priority\":1,\"completed\":false},{\"id\":4,\"project\":2,\"title\":\"4 Bake bread\",\"desc\":\"If you bake more you save more money\",\"dateAdded\":\"2023-03-06T21:44:19.042Z\",\"dueDate\":\"2023-03-19T21:44:19.042Z\",\"priority\":2,\"completed\":false},{\"id\":5,\"project\":2,\"title\":\"5 Clean the house\",\"desc\":\"It\\'s really gotten quite dirty\",\"dateAdded\":\"2023-03-07T21:44:19.045Z\",\"dueDate\":\"2023-03-08T21:44:19.042Z\",\"priority\":1,\"completed\":false}],\"currentTodoId\":6}';\n\n\n\n\n//# sourceURL=webpack://11-todo-list/./src/dataJson.js?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction newElement(type, className, value, attrObj, dataObj) {\n  const tempElement = document.createElement('div');\n  if (className) {\n    tempElement.classList.add(className);\n  }\n  if (value) {\n    tempElement.textContent = value;\n  }\n  if (attrObj) {\n    Object.keys(attrObj).forEach((attr) => {\n      tempElement.setAttribute(attr, attrObj[attr]);\n    });\n  }\n  if (dataObj) {\n    Object.keys(dataObj).forEach((data) => {\n      tempElement.dataset[data] = dataObj[data];\n    });\n  }\n  return tempElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newElement);\n\n\n//# sourceURL=webpack://11-todo-list/./src/element.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nfunction getFooter() {\n  const footer = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'footer', 'footy footer');\n  return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFooter);\n\n\n//# sourceURL=webpack://11-todo-list/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nfunction getHeader() {\n  const header = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'header', 'heady header');\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeader);\n\n\n//# sourceURL=webpack://11-todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManager */ \"./src/todoManager.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nlocalStorage.clear();\n(0,_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst todoManagerInst = new _todoManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst proj = todoManagerInst.findProject(2);\nconst todo = todoManagerInst.findTodo(1);\nconsole.log(todo);\ntodoManagerInst.changeTodoProject(todo, proj);\nconsole.log(todo);\n\n// todoManagerInst.removeProject(proj3);\n\nconst log = todoManagerInst.projectList.defaultProject.getTodos();\n// console.log('instance state:');\nconsole.log(todoManagerInst);\n// console.log('end');\n// console.log(`cur: ${Project.getIdPoint()}`);\n// console.log(`cur: ${Todo.getIdPoint()}`);\n\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ \"./src/mainContent.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\nfunction initalize() {\n  const todoApp = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'todoApp');\n  document.body.appendChild(todoApp);\n\n  todoApp.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  todoApp.appendChild((0,_mainContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  todoApp.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initalize);\n\n\n//# sourceURL=webpack://11-todo-list/./src/initialize.js?");

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nfunction getMain() {\n  const main = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main', 'mainy main');\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMain);\n\n\n//# sourceURL=webpack://11-todo-list/./src/mainContent.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  todoList = [];\n\n  constructor(name) {\n    this.id = Project.id;\n    Project.setIdPoint(Project.id + 1);\n    this.name = name;\n  }\n\n  static id = 1;\n\n  static getIdPoint() {\n    return this.id;\n  }\n\n  static setIdPoint(newId) {\n    this.id = newId;\n  }\n\n  static applyData(json) {\n    return Object.assign(new Project(), json);\n  }\n\n  add(todoItem) {\n    this.todoList.push(todoItem);\n  }\n\n  find(itemIdToBeFound) {\n    return this.todoList.find((item) => item.id === itemIdToBeFound);\n  }\n\n  remove(itemToBeRemoved) {\n    const index = this.todoList.indexOf(itemToBeRemoved);\n    if (index === -1) { return; }\n    this.todoList.splice(index, 1);\n  }\n\n  // getName() {\n  //   return this.name;\n  // }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getTodos() {\n    return this.todoList;\n  }\n\n  getTodosMinimized() {\n    return this.todoList.map((todo) => (\n      {\n        title: todo.title,\n        dueDate: todo.dueDate,\n        priority: todo.priority,\n      }\n    ));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://11-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass ProjectList {\n  list = [];\n\n  defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('default');\n\n  findTodo(todoId) {\n    return this.defaultProject.find(todoId);\n  }\n\n  addTodoToProjects(todoItem) {\n    if (todoItem.project) {\n      const projectToAddTo = this.findProject(todoItem.project);\n      projectToAddTo.add(todoItem);\n    }\n    this.defaultProject.add(todoItem);\n  }\n\n  removeTodoFromProjects(todoItem) {\n    if (todoItem.project) {\n      const projectToBeRemovedFrom = this.findProject(todoItem.project);\n      projectToBeRemovedFrom.remove(todoItem);\n    }\n    this.defaultProject.remove(todoItem);\n  }\n\n  changeTodoProject(todoItem, project) {\n    const curTodoProjectId = todoItem.getProject();\n    if (!curTodoProjectId) {\n      if (project !== this.defaultProject) {\n        project.add(todoItem);\n        todoItem.setProject(project.id);\n      }\n    } else if (curTodoProjectId !== project.id) {\n      const curTodoProject = this.findProject(curTodoProjectId);\n      curTodoProject.remove(todoItem);\n      todoItem.setProject(null);\n      if (project !== this.defaultProject) {\n        project.add(todoItem);\n        todoItem.setProject(project.id);\n      }\n    }\n  }\n\n  findProject(projectIdToBeFound) {\n    if (projectIdToBeFound == null || projectIdToBeFound === 1) {\n      return this.defaultProject;\n    }\n    return this.list.find((item) => item.id === projectIdToBeFound);\n  }\n\n  addProject(project) {\n    this.list.push(project);\n  }\n\n  removeProject(projectToBeRemoved) {\n    projectToBeRemoved.getTodos().forEach((todo) => {\n      todo.setProject(null);\n    });\n\n    const index = this.list.indexOf(projectToBeRemoved);\n    if (index === -1) { return; }\n    this.list.splice(index, 1);\n  }\n\n  getProjects() {\n    return [this.defaultProject, ...this.list];\n  }\n\n  exportProjects() {\n    return this.list.map((project) => ({\n      name: project.name,\n      id: project.id,\n    }));\n  }\n\n  exportTodos() {\n    return this.defaultProject.getTodos();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n\n//# sourceURL=webpack://11-todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor(title, desc, dueDate, priority, dateAdded = new Date(), project = null) {\n    this.id = Todo.id;\n    Todo.setIdPoint(Todo.id + 1);\n    this.project = project;\n    this.title = title;\n    this.desc = desc;\n    this.dateAdded = dateAdded;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n  }\n\n  static id = 1;\n\n  static getIdPoint() {\n    return this.id;\n  }\n\n  static setIdPoint(newId) {\n    this.id = newId;\n  }\n\n  static applyData(json) {\n    return Object.assign(new Todo(), json);\n  }\n\n  getJson() {\n    return JSON.stringify(this);\n  }\n\n  update(prop) {\n    Object.assign(this, prop);\n  }\n\n  setCompleted() {\n    this.completed = true;\n  }\n\n  setUncompleted() {\n    this.completed = false;\n  }\n\n  // getTitle() {\n  //   return this.title;\n  // }\n\n  // getDesc() {\n  //   return this.desc;\n  // }\n\n  // getDueDate() {\n  //   return this.dueDue;\n  // }\n\n  // getDateAdded() {\n  //   return this.dateAdded;\n  // }\n\n  // getPriority() {\n  //   return this.priority;\n  // }\n\n  // setTitle(title) {\n  //   this.title = title;\n  // }\n\n  // setDesc(desc) {\n  //   this.desc = desc;\n  // }\n\n  // setDueDate(dueDate) {\n  //   this.dueDate = dueDate;\n  // }\n\n  // setDateAdded(dateAdded) {\n  //   this.dateAdded = dateAdded;\n  // }\n\n  // setPriority(priority) {\n  //   this.priority = priority;\n  // }\n\n  setProject(project) {\n    this.project = project;\n  }\n\n  getProject() {\n    return this.project;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://11-todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoManager.js":
/*!****************************!*\
  !*** ./src/todoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _dataJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataJson */ \"./src/dataJson.js\");\n\n\n\n\n\nclass TodoManager {\n  constructor() {\n    this.projectList = new _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    TodoManager.seedLocalStorage();\n    this.loadFromLocalStorage();\n  }\n\n  static seedLocalStorage() {\n    if (!localStorage.getItem('projectsJSON')) {\n      localStorage.setItem('projectsJSON', _dataJson__WEBPACK_IMPORTED_MODULE_3__.projectsJSON);\n    }\n    if (!localStorage.getItem('todosJSON')) {\n      localStorage.setItem('todosJSON', _dataJson__WEBPACK_IMPORTED_MODULE_3__.todosJSON);\n    }\n  }\n\n  loadFromLocalStorage() {\n    const projectsJSON = localStorage.getItem('projectsJSON');\n    const todosJSON = localStorage.getItem('todosJSON');\n    if (!projectsJSON || !todosJSON) { return; }\n\n    const projectsData = JSON.parse(projectsJSON);\n    projectsData.projectsListForExport.forEach((project) => {\n      this.addProject(\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].applyData(project),\n      );\n    });\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setIdPoint(projectsData.currentProjectId);\n\n    const todosData = JSON.parse(todosJSON);\n    todosData.todosListForExport.forEach((todo) => {\n      this.addTodo(\n        _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].applyData(todo),\n      );\n    });\n    _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setIdPoint(todosData.currentTodoId);\n  }\n\n  updateLocalStorage() {\n    localStorage.setItem('projectsJSON', this.exportProjectsJSON());\n    localStorage.setItem('todosJSON', this.exportTodosJSON());\n  }\n\n  findTodo(todoId) {\n    return this.projectList.findTodo(todoId);\n  }\n\n  addTodo(todoItem) {\n    if (todoItem.project) {\n      const projectToAddTo = this.projectList.findProject(todoItem.project);\n      projectToAddTo.add(todoItem);\n    }\n    this.projectList.defaultProject.add(todoItem);\n    this.updateLocalStorage();\n  }\n\n  removeTodo(todoItem) {\n    if (todoItem.project) {\n      const projectToBeRemovedFrom = this.projectList.findProject(todoItem.project);\n      projectToBeRemovedFrom.remove(todoItem);\n    }\n    this.projectList.defaultProject.remove(todoItem);\n    this.updateLocalStorage();\n  }\n\n  changeTodoProject(todoItem, projectItem) {\n    this.projectList.changeTodoProject(todoItem, projectItem);\n  }\n\n  updateTodo(todoItem, prop) {\n    todoItem.update(prop);\n    this.updateLocalStorage();\n  }\n\n  markTodoAsCompleted(todoItem) {\n    todoItem.setCompleted();\n    this.updateLocalStorage();\n  }\n\n  markTodoAsUncompleted(todoItem) {\n    todoItem.setUncompleted();\n    this.updateLocalStorage();\n  }\n\n  findProject(projectId) {\n    return this.projectList.findProject(projectId);\n  }\n\n  addProject(projectItem) {\n    this.projectList.addProject(projectItem);\n    this.updateLocalStorage();\n  }\n\n  removeProject(projectItem) {\n    this.projectList.removeProject(projectItem);\n    this.updateLocalStorage();\n  }\n\n  setProjectName(projectItem, name) {\n    projectItem.setName(name);\n    this.updateLocalStorage();\n  }\n\n  exportProjectsJSON() {\n    const projectsListForExport = this.projectList.exportProjects();\n    const currentProjectId = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getIdPoint();\n    return JSON.stringify({ projectsListForExport, currentProjectId });\n  }\n\n  exportTodosJSON() {\n    const todosListForExport = this.projectList.exportTodos();\n    const currentTodoId = _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIdPoint();\n    return JSON.stringify({ todosListForExport, currentTodoId });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoManager);\n\n\n//# sourceURL=webpack://11-todo-list/./src/todoManager.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;