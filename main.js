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

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  font-size: 18px;\\n  --color-header: #da4b3e;\\n  --color-white: #fff;\\n  --color-grey: #fafafa;\\n  --color-footer-grey: #f3f3f3;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.todoApp {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100vh;\\n}\\n\\n.header {\\n    height: 2.5rem;\\n    background-color: var(--color-header);\\n    color: var(--color-white);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.main {\\n    flex: 1;\\n    display: grid;\\n    grid-template-columns: 400px 1fr;\\n}\\n\\n.footer {\\n    height: 2.5rem;\\n    background-color: var(--color-footer-grey);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ \"./node_modules/date-fns/esm/addDays/index.js\");\n/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ \"./node_modules/date-fns/esm/addMonths/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n/**\n * @name add\n * @category Common Helpers\n * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.\n *\n * @description\n * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n *\n * | Key            | Description                        |\n * |----------------|------------------------------------|\n * | years          | Amount of years to be added        |\n * | months         | Amount of months to be added       |\n * | weeks          | Amount of weeks to be added        |\n * | days           | Amount of days to be added         |\n * | hours          | Amount of hours to be added        |\n * | minutes        | Amount of minutes to be added      |\n * | seconds        | Amount of seconds to be added      |\n *\n * All values default to 0\n *\n * @returns {Date} the new date with the seconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add the following duration to 1 September 2014, 10:19:50\n * const result = add(new Date(2014, 8, 1, 10, 19, 50), {\n *   years: 2,\n *   months: 9,\n *   weeks: 1,\n *   days: 7,\n *   hours: 5,\n *   minutes: 9,\n *   seconds: 30,\n * })\n * //=> Thu Jun 15 2017 15:29:20\n */\nfunction add(dirtyDate, duration) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  if (!duration || _typeof(duration) !== 'object') return new Date(NaN);\n  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.years) : 0;\n  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.months) : 0;\n  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.weeks) : 0;\n  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.days) : 0;\n  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.hours) : 0;\n  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.minutes) : 0;\n  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(duration.seconds) : 0; // Add years and months\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate);\n  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(date, months + years * 12) : date; // Add weeks and days\n\n  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds\n\n  var minutesToAdd = minutes + hours * 60;\n  var secondsToAdd = seconds + minutesToAdd * 60;\n  var msToAdd = secondsToAdd * 1000;\n  var finalDate = new Date(dateWithDays.getTime() + msToAdd);\n  return finalDate;\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/add/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\n\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMonths)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addMonths\n * @category Month Helpers\n * @summary Add the specified number of months to the given date.\n *\n * @description\n * Add the specified number of months to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the months added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 5 months to 1 September 2014:\n * const result = addMonths(new Date(2014, 8, 1), 5)\n * //=> Sun Feb 01 2015 00:00:00\n */\n\nfunction addMonths(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 months, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for\n  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and\n  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we\n  // want except that dates will wrap around the end of a month, meaning that\n  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So\n  // we'll default to the end of the desired month by adding 1 to the desired\n  // month and using a date of 0 to back up one day to the end of the desired\n  // month.\n\n  var endOfDesiredMonth = new Date(date.getTime());\n  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);\n  var daysInMonth = endOfDesiredMonth.getDate();\n\n  if (dayOfMonth >= daysInMonth) {\n    // If we're already at the end of the month, then this is the correct date\n    // and we're done.\n    return endOfDesiredMonth;\n  } else {\n    // Otherwise, we now know that setting the original day-of-month value won't\n    // cause an overflow, so set the desired day-of-month. Note that we can't\n    // just set the date of `endOfDesiredMonth` because that object may have had\n    // its time changed in the unusual case where where a DST transition was on\n    // the last day of the month and its local time was in the hour skipped or\n    // repeated next to a DST transition.  So we use `date` instead which is\n    // guaranteed to still have the original time.\n    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);\n    return date;\n  }\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/addMonths/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * @param {*} value - the value to check\n * @returns {boolean} true if the given value is a date\n * @throws {TypeError} 1 arguments required\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate('2014-02-31')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\n\nfunction isDate(value) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/isDate/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseJSON/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/parseJSON/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseJSON)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name parseJSON\n * @category Common Helpers\n * @summary Parse a JSON date string\n *\n * @description\n * Converts a complete ISO date string in UTC time, the typical format for transmitting\n * a date in JSON, to a JavaScript `Date` instance.\n *\n * This is a minimal implementation for converting dates retrieved from a JSON API to\n * a `Date` instance which can be used with other functions in the `date-fns` library.\n * The following formats are supported:\n *\n * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`\n * - `2000-03-15T05:20:10Z`: Without milliseconds\n * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages\n * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages\n * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon\n * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol\n * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds\n * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting\n *\n * For convenience and ease of use these other input types are also supported\n * via [toDate]{@link https://date-fns.org/docs/toDate}:\n *\n * - A `Date` instance will be cloned\n * - A `number` will be treated as a timestamp\n *\n * Any other input type or invalid date strings will return an `Invalid Date`.\n *\n * @param {String|Number|Date} argument A fully formed ISO8601 date string to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n */\n\nfunction parseJSON(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n\n  if (typeof argument === 'string') {\n    var parts = argument.match(/(\\d{4})-(\\d{2})-(\\d{2})[T ](\\d{2}):(\\d{2}):(\\d{2})(?:\\.(\\d{0,7}))?(?:Z|(.)(\\d{2}):?(\\d{2})?)?/);\n\n    if (parts) {\n      // Group 8 matches the sign\n      return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == '-' ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == '-' ? -1 : 1), +parts[6], +((parts[7] || '0') + '00').substring(0, 3)));\n    }\n\n    return new Date(NaN);\n  }\n\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(argument);\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/parseJSON/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://11-todo-list/./node_modules/date-fns/esm/toDate/index.js?");

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

/***/ "./src/dataSeed.js":
/*!*************************!*\
  !*** ./src/dataSeed.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsData\": () => (/* binding */ projectsData),\n/* harmony export */   \"todoData\": () => (/* binding */ todoData)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/add/index.js\");\n\n\nconst projectsData = {\n  currentProjectId: 4 + 5,\n  projectsListForExport: [\n    {\n      name: 'House Bijinesu',\n      id: 2 + 5,\n    },\n    {\n      name: 'Getting fit and healthy',\n      id: 3 + 5,\n    },\n  ],\n};\nconst todoData = {\n  currentTodoId: 6 + 6,\n  todosListForExport: [\n    {\n      id: 1 + 6,\n      dateAdded: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: -5, hours: -10 }),\n      title: '1 Buy Milk',\n      desc: '1 liter should do it for this week',\n      priority: 2,\n      dueDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: 10, hours: -2 }),\n    },\n    {\n      id: 2 + 6,\n      dateAdded: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: -7 }),\n      title: '2 Work out',\n      desc: 'Haha as if the gym is boring',\n      priority: 3,\n      dueDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: 1 }),\n      project: 3 + 5,\n    },\n    {\n      id: 3 + 6,\n      dateAdded: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: -2 }),\n      title: '3 Swim',\n      desc: 'This I really should be doing more',\n      priority: 1,\n      dueDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: 7 }),\n      project: 3 + 5,\n    },\n    {\n      id: 4 + 6,\n      dateAdded: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: -1 }),\n      title: '4 Bake bread',\n      desc: 'If you bake more you save more money',\n      priority: 2,\n      dueDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: 12 }),\n      project: 2 + 5,\n    },\n    {\n      id: 5 + 6,\n      dateAdded: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: -10 }),\n      title: '5 Clean the house',\n      desc: 'It\\'s really gotten quite dirty',\n      priority: 1,\n      dueDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(), { days: 1 }),\n      project: 2 + 5,\n    },\n  ],\n};\n\n\n\n\n//# sourceURL=webpack://11-todo-list/./src/dataSeed.js?");

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

eval("/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManager */ \"./src/todoManager.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n(0,_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst todoManagerInst = new _todoManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](true);\n// todoManagerInst.addProject(new Project('asd'));\n// todoManagerInst.removeTodo(todoManagerInst.findTodo(7));\n// todoManagerInst.removeProject(todoManagerInst.findProject(17));\n\n// todoManagerInst.addProject(TodoManager.createProject({ name: 'proj' }));\n// todoManagerInst.addTodo(TodoManager.createTodo({ title: '222tasdf', dueDate: add(new Date(), { days: -80 }) }));\n// todoManagerInst.addTodo(TodoManager.createTodo({ title: '55222tasdf' }));\n// todoManagerInst.addTodo(TodoManager.createTodo({ title: '222tasdf', dueDate: add(new Date(), { days: +80 }) }));\n// todoManagerInst.addTodo(TodoManager.createTodo({ title: '8865222tasdf' }));\n// todoManagerInst.removeTodo(todoManagerInst.findTodo(12));\n\nconsole.table(todoManagerInst.projectList.defaultProject.getTodosForScreen());\n// console.table(todoManagerInst.projectList.getProjects());\n\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

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

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nfunction getMain() {\n  const main = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main');\n  const leftMenu = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'left-menu', 'Left Menu');\n  const projectContainer = (0,_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'project-container', 'Project Container');\n\n  main.appendChild(leftMenu);\n  main.appendChild(projectContainer);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMain);\n\n\n//# sourceURL=webpack://11-todo-list/./src/mainContent.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/compareAsc */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var date_fns_parseJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/parseJSON */ \"./node_modules/date-fns/esm/parseJSON/index.js\");\n\n\n\n\nclass Project {\n  todoList = [];\n\n  constructor(name) {\n    this.id = Project.id;\n    Project.setIdPoint(Project.id + 1);\n    this.name = name;\n  }\n\n  static id = 1;\n\n  static getIdPoint() {\n    return this.id;\n  }\n\n  static setIdPoint(newId) {\n    this.id = newId;\n  }\n\n  static applyData(json) {\n    return Object.assign(new Project(), json);\n  }\n\n  add(todoItem) {\n    this.todoList.push(todoItem);\n  }\n\n  find(itemIdToBeFound) {\n    return this.todoList.find((item) => item.id === itemIdToBeFound);\n  }\n\n  remove(itemToBeRemoved) {\n    const index = this.todoList.indexOf(itemToBeRemoved);\n    if (index === -1) { return; }\n    this.todoList.splice(index, 1);\n  }\n\n  // getName() {\n  //   return this.name;\n  // }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getTodos() {\n    return this.todoList;\n  }\n\n  getTodosForScreen() {\n    return this.todoList.map((todo) => (\n      {\n        title: todo.title,\n        id: todo.id,\n        dueDate: todo.dueDate,\n        priority: todo.priority,\n      }\n    ))\n      .sort((a, b) => {\n        if (!a.dueDate) {\n          return -1;\n        } if (!b.dueDate) return 1;\n\n        return (0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n          (0,date_fns_parseJSON__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a.dueDate),\n          (0,date_fns_parseJSON__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b.dueDate),\n        );\n      });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://11-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass ProjectList {\n  list = [];\n\n  defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('default');\n\n  findTodo(todoId) {\n    return this.defaultProject.find(todoId);\n  }\n\n  addTodoToProjects(todoItem) {\n    if (!todoItem) {\n      console.log('addTodoToProjects error');\n      return;\n    }\n    if (todoItem.project && todoItem.project !== 1) {\n      const projectToAddTo = this.findProject(todoItem.project);\n      if (projectToAddTo) {\n        projectToAddTo.add(todoItem);\n      } else {\n        todoItem.setProject(null);\n      }\n    }\n    this.defaultProject.add(todoItem);\n  }\n\n  removeTodoFromProjects(todoItem) {\n    if (!todoItem) {\n      console.log('removeTodoFromProjects error');\n      return;\n    }\n    if (todoItem.project && todoItem.project !== 1) {\n      const projectToBeRemovedFrom = this.findProject(todoItem.project);\n      projectToBeRemovedFrom.remove(todoItem);\n    }\n    this.defaultProject.remove(todoItem);\n  }\n\n  changeTodoProject(todoItem, project) {\n    if (!todoItem) {\n      console.log('changeTodoProject error');\n      return;\n    }\n    const curTodoProjectId = todoItem.getProject();\n    if (!curTodoProjectId) {\n      if (project !== this.defaultProject) {\n        project.add(todoItem);\n        todoItem.setProject(project.id);\n      }\n    } else if (curTodoProjectId !== project.id) {\n      const curTodoProject = this.findProject(curTodoProjectId);\n      curTodoProject.remove(todoItem);\n      todoItem.setProject(null);\n      if (project !== this.defaultProject) {\n        project.add(todoItem);\n        todoItem.setProject(project.id);\n      }\n    }\n  }\n\n  findProject(projectIdToBeFound) {\n    if (projectIdToBeFound == null || projectIdToBeFound === 1) {\n      return this.defaultProject;\n    }\n    return this.list.find((item) => item.id === projectIdToBeFound);\n  }\n\n  addProject(project) {\n    if (!project) {\n      console.log('addProject error');\n      return;\n    }\n    this.list.push(project);\n  }\n\n  removeProject(projectToBeRemoved) {\n    if (!projectToBeRemoved) {\n      console.log('removeProject error');\n      return;\n    }\n    projectToBeRemoved.getTodos().forEach((todo) => {\n      todo.setProject(null);\n    });\n\n    const index = this.list.indexOf(projectToBeRemoved);\n    if (index === -1) { return; }\n    this.list.splice(index, 1);\n  }\n\n  getProjects() {\n    return [this.defaultProject, ...this.list];\n  }\n\n  exportProjects() {\n    return this.list.map((project) => ({\n      name: project.name,\n      id: project.id,\n    }));\n  }\n\n  exportTodos() {\n    return this.defaultProject.getTodos();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n\n//# sourceURL=webpack://11-todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var date_fns_isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isDate */ \"./node_modules/date-fns/esm/isDate/index.js\");\n\n\nclass Todo {\n  constructor(title = null, desc = null, dueDate = null, priority = null, dateAdded = new Date(), project = null) {\n    this.id = Todo.id;\n    Todo.setIdPoint(Todo.id + 1);\n    this.project = project;\n    this.title = title;\n    this.desc = desc;\n    this.dateAdded = dateAdded;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n  }\n\n  static id = 1;\n\n  static getIdPoint() {\n    return this.id;\n  }\n\n  static setIdPoint(newId) {\n    this.id = newId;\n  }\n\n  static applyData(json) {\n    return Object.assign(\n      new Todo(),\n      json,\n      { dueDate: json.dueDate ? this.dateManager(json.dueDate) : null },\n    );\n  }\n\n  static dateManager(date) {\n    if ((0,date_fns_isDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date)) {\n      return JSON.parse(JSON.stringify(date));\n    }\n\n    return date;\n  }\n\n  // static dateParserAndFormatter(date) {\n  //   const tempDate = parseJSON(date);\n  //   if (!isDate(tempDate)) return date;\n  //   return format(tempDate, 'MM/dd/yyyy');\n  // }\n\n  getJson() {\n    return JSON.stringify(this);\n  }\n\n  update(prop) {\n    Object.assign(this, prop);\n  }\n\n  setCompleted() {\n    this.completed = true;\n  }\n\n  setUncompleted() {\n    this.completed = false;\n  }\n\n  // getTitle() {\n  //   return this.title;\n  // }\n\n  // getDesc() {\n  //   return this.desc;\n  // }\n\n  // getDueDate() {\n  //   return this.dueDue;\n  // }\n\n  // getDateAdded() {\n  //   return this.dateAdded;\n  // }\n\n  // getPriority() {\n  //   return this.priority;\n  // }\n\n  // setTitle(title) {\n  //   this.title = title;\n  // }\n\n  // setDesc(desc) {\n  //   this.desc = desc;\n  // }\n\n  // setDueDate(dueDate) {\n  //   this.dueDate = dueDate;\n  // }\n\n  // setDateAdded(dateAdded) {\n  //   this.dateAdded = dateAdded;\n  // }\n\n  // setPriority(priority) {\n  //   this.priority = priority;\n  // }\n\n  setProject(project) {\n    this.project = project;\n  }\n\n  getProject() {\n    return this.project;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://11-todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoManager.js":
/*!****************************!*\
  !*** ./src/todoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _dataSeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSeed */ \"./src/dataSeed.js\");\n\n\n\n\n\nclass TodoManager {\n  constructor(bool) {\n    if (bool) { localStorage.clear(); }\n    this.projectList = new _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    TodoManager.seedLocalStorage();\n    this.loadFromLocalStorage();\n    this.updateLocalStorage();\n  }\n\n  static seedLocalStorage() {\n    if (!localStorage.getItem('projectsJSON')) {\n      localStorage.setItem('projectsJSON', JSON.stringify(_dataSeed__WEBPACK_IMPORTED_MODULE_3__.projectsData));\n    }\n    if (!localStorage.getItem('todosJSON')) {\n      localStorage.setItem('todosJSON', JSON.stringify(_dataSeed__WEBPACK_IMPORTED_MODULE_3__.todoData));\n    }\n  }\n\n  loadFromLocalStorage() {\n    const projectsJSON = localStorage.getItem('projectsJSON');\n    const todosJSON = localStorage.getItem('todosJSON');\n    if (!projectsJSON || !todosJSON) {\n      localStorage.clear();\n      return;\n    }\n    const projectsData = JSON.parse(projectsJSON);\n    projectsData.projectsListForExport.forEach((project) => {\n      this.addProject(\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].applyData(project),\n        false,\n      );\n    });\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setIdPoint(projectsData.currentProjectId);\n\n    const todosData = JSON.parse(todosJSON);\n    todosData.todosListForExport.forEach((todo) => {\n      // todo.dueDate = t\n      this.addTodo(\n        _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].applyData(todo),\n        false,\n      );\n    });\n    _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setIdPoint(todosData.currentTodoId);\n  }\n\n  updateLocalStorage() {\n    localStorage.setItem('projectsJSON', this.exportProjectsJSON());\n    localStorage.setItem('todosJSON', this.exportTodosJSON());\n  }\n\n  static createTodo(object) {\n    return _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].applyData(object);\n  }\n\n  findTodo(todoId) {\n    return this.projectList.findTodo(todoId);\n  }\n\n  addTodo(todoItem, update = true) {\n    this.projectList.addTodoToProjects(todoItem);\n    if (update) {\n      this.updateLocalStorage();\n    }\n  }\n\n  removeTodo(todoItem) {\n    this.projectList.removeTodoFromProjects(todoItem);\n    this.updateLocalStorage();\n  }\n\n  changeTodoProject(todoItem, projectItem) {\n    this.projectList.changeTodoProject(todoItem, projectItem);\n    this.updateLocalStorage();\n  }\n\n  updateTodo(todoItem, prop) {\n    todoItem.update(prop);\n    this.updateLocalStorage();\n  }\n\n  markTodoAsCompleted(todoItem) {\n    todoItem.setCompleted();\n    this.updateLocalStorage();\n  }\n\n  markTodoAsUncompleted(todoItem) {\n    todoItem.setUncompleted();\n    this.updateLocalStorage();\n  }\n\n  static createProject(object) {\n    return _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].applyData(object);\n  }\n\n  findProject(projectId) {\n    return this.projectList.findProject(projectId);\n  }\n\n  addProject(projectItem, update = true) {\n    this.projectList.addProject(projectItem);\n    if (update) {\n      this.updateLocalStorage();\n    }\n  }\n\n  removeProject(projectItem) {\n    this.projectList.removeProject(projectItem);\n    this.updateLocalStorage();\n  }\n\n  setProjectName(projectItem, name) {\n    projectItem.setName(name);\n    this.updateLocalStorage();\n  }\n\n  exportProjectsJSON() {\n    const projectsListForExport = this.projectList.exportProjects();\n    const currentProjectId = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getIdPoint();\n    return JSON.stringify({ projectsListForExport, currentProjectId });\n  }\n\n  exportTodosJSON() {\n    const todosListForExport = this.projectList.exportTodos();\n    const currentTodoId = _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIdPoint();\n    return JSON.stringify({ todosListForExport, currentTodoId });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoManager);\n\n\n//# sourceURL=webpack://11-todo-list/./src/todoManager.js?");

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