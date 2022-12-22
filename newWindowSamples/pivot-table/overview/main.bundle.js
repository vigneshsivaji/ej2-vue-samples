/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pivot-table/overview/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/pivot-table/overview/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/overview/App.vue":
/*!**********************************************!*\
  !*** ./Samples/pivot-table/overview/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=40f7bceb&scoped=true& */ \"./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css& */ \"./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"40f7bceb\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/overview/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts&":
/*!***********************************************************************!*\
  !*** ./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40f7bceb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=40f7bceb&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40f7bceb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/overview/data-source.ts":
/*!*****************************************************!*\
  !*** ./Samples/pivot-table/overview/data-source.ts ***!
  \*****************************************************/
/*! exports provided: Pivot_Data, defaultData, gData, rData, Universitydata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./Samples/pivot-table/overview/main.js":
/*!**********************************************!*\
  !*** ./Samples/pivot-table/overview/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/overview/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-40f7bceb] #PivotView_PivotFieldList {\\r\\n  width: auto !important;\\n}\\n[data-v-40f7bceb] #pivotview {\\r\\n  width: 100%;\\n}\\n@media only screen and (max-width: 400px) {\\n#pivot-grid-section[data-v-40f7bceb] {\\r\\n    overflow: auto;\\n}\\n}\\n[data-v-40f7bceb] .sb-sample-content-area {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-40f7bceb] .control-section {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-40f7bceb] #pivotviewcontainerwrapper {\\r\\n  height: auto !important;\\n}\\n[data-v-40f7bceb] .e-hyperlinkcell {\\r\\n  text-decoration: auto;\\n}\\n[data-v-40f7bceb] .e-hyperlinkcell:hover {\\r\\n  text-decoration: underline;\\n}\\n[data-v-40f7bceb] .university-logo {\\r\\n  border-radius: 50%;\\r\\n  margin-right: 5px;\\n}\\n[data-v-40f7bceb] .urllink {\\r\\n  float: right;\\r\\n  margin-right: 10px;\\r\\n  margin-top: 10px;\\n}\\r\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ivotview-vue-samples_development/Samples/pivot-table/overview/App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;AACA;IACI,eAAe;CAClB;CACA;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=40f7bceb&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-40f7bceb] #PivotView_PivotFieldList {\\r\\n  width: auto !important;\\n}\\n[data-v-40f7bceb] #pivotview {\\r\\n  width: 100%;\\n}\\n@media only screen and (max-width: 400px) {\\n#pivot-grid-section[data-v-40f7bceb] {\\r\\n    overflow: auto;\\n}\\n}\\n[data-v-40f7bceb] .sb-sample-content-area {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-40f7bceb] .control-section {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-40f7bceb] #pivotviewcontainerwrapper {\\r\\n  height: auto !important;\\n}\\n[data-v-40f7bceb] .e-hyperlinkcell {\\r\\n  text-decoration: auto;\\n}\\n[data-v-40f7bceb] .e-hyperlinkcell:hover {\\r\\n  text-decoration: underline;\\n}\\n[data-v-40f7bceb] .university-logo {\\r\\n  border-radius: 50%;\\r\\n  margin-right: 5px;\\n}\\n[data-v-40f7bceb] .urllink {\\r\\n  float: right;\\r\\n  margin-right: 10px;\\r\\n  margin-top: 10px;\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/overview/App.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source */ \"./Samples/pivot-table/overview/data-source.ts\");\n\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvar selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nvar theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            dataSourceSettings: {\n                enableSorting: true,\n                columns: [{ name: 'region', caption: 'Region' }, { name: 'country', caption: 'Country' }],\n                rows: [{ name: 'rank_display', caption: 'Rank', expandAll: true, allowDragAndDrop: false },\n                    { name: 'university', caption: 'University', expandAll: true, allowDragAndDrop: false }],\n                formatSettings: [{ name: 'international_students', format: 'N0' },\n                    { name: 'faculty_count', format: 'N0' }],\n                dataSource: _data_source__WEBPACK_IMPORTED_MODULE_3__[\"Universitydata\"],\n                expandAll: false,\n                values: [{ name: 'international_students', caption: 'Students' },\n                    { name: 'faculty_count', caption: 'Faculty' }],\n                filters: [{ name: 'type', caption: 'University Type' }],\n                filterSettings: [{ name: 'region', type: 'Exclude', items: ['Africa', 'Latin America'] }],\n                fieldMapping: [{ name: 'rank_display', dataType: 'number' },\n                    { name: 'country', caption: 'Country' },\n                    { name: 'city', caption: 'City' },\n                    { name: 'region', caption: 'Region' },\n                    { name: 'research_output', caption: 'Research Output' },\n                    { name: 'student_faculty_ratio', caption: 'Student faculty ratio' }],\n                groupSettings: [{ name: 'rank_display', type: 'Number', rangeInterval: 100 }],\n                conditionalFormatSettings: [\n                    {\n                        measure: 'international_students',\n                        value1: 1,\n                        value2: 5000,\n                        conditions: 'Between',\n                        style: {\n                            backgroundColor: '#E10000',\n                            color: 'white',\n                            fontFamily: 'Tahoma',\n                            fontSize: '12px'\n                        },\n                        applyGrandTotals: false\n                    },\n                    {\n                        measure: 'international_students',\n                        value1: 50000,\n                        conditions: 'GreaterThan',\n                        style: {\n                            backgroundColor: '#0C860C',\n                            color: 'white',\n                            fontFamily: 'Tahoma',\n                            fontSize: '12px'\n                        },\n                        applyGrandTotals: false\n                    },\n                    {\n                        measure: 'faculty_count',\n                        value1: 1,\n                        value2: 1000,\n                        conditions: 'Between',\n                        style: {\n                            backgroundColor: '#E10000',\n                            color: 'white',\n                            fontFamily: 'Tahoma',\n                            fontSize: '12px'\n                        },\n                        applyGrandTotals: false\n                    },\n                    {\n                        measure: 'faculty_count',\n                        value1: 10000,\n                        conditions: 'GreaterThan',\n                        style: {\n                            backgroundColor: '#0C860C',\n                            color: 'white',\n                            fontFamily: 'Tahoma',\n                            fontSize: '12px'\n                        },\n                        applyGrandTotals: false\n                    }\n                ],\n                showHeaderWhenEmpty: false,\n                emptyCellsTextContent: '-',\n                excludeFields: ['link', 'logo']\n            },\n            width: \"100%\",\n            height: 600,\n            allowExcelExport: true,\n            allowConditionalFormatting: true,\n            allowNumberFormatting: true,\n            allowPdfExport: true,\n            displayOption: { view: 'Both' },\n            chartSettings: {\n                theme: theme,\n                title: 'Top Universities Analysis',\n                load: function (args) {\n                    var selectedTheme = location.hash.split(\"/\")[1];\n                    selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n                }\n            },\n            showToolbar: true,\n            allowCalculatedField: true,\n            showFieldList: true,\n            toolbar: [\n                \"New\",\n                \"Save\",\n                \"SaveAs\",\n                \"Rename\",\n                \"Remove\",\n                \"Load\",\n                \"Grid\",\n                \"Chart\",\n                \"Export\",\n                \"SubTotal\",\n                \"GrandTotal\",\n                \"Formatting\",\n                \"FieldList\"\n            ],\n            enableVirtualization: true,\n            allowDeferLayoutUpdate: true,\n            allowDrillThrough: true,\n            showGroupingBar: true,\n            allowGrouping: true,\n            enableValueSorting: true,\n            exportAllPages: false,\n            maxNodeLimitInMemberEditor: 50,\n            gridSettings: {\n                columnWidth: 120, allowSelection: true, rowHeight: 36,\n                selectionSettings: { mode: 'Cell', type: 'Single', cellSelectionMode: 'Box' }\n            },\n        };\n    },\n    methods: {\n        chartSeriesCreated: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            pivotObj.chartSettings.chartSeries.legendShape = pivotObj.chartSettings.chartSeries.type === 'Polar' ? 'Rectangle' : 'SeriesType';\n        },\n        getCellContent: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            if (args.cellInfo && args.cellInfo.axis === 'value' && pivotObj.pivotValues[args.cellInfo.rowIndex] && pivotObj.pivotValues[args.cellInfo.rowIndex][0].hasChild) {\n                if (args.targetCell.classList.contains(args.cellInfo.cssClass)) {\n                    args.targetCell.classList.remove(args.cellInfo.cssClass);\n                    args.cellInfo.style = undefined;\n                }\n            }\n            if (args.cellInfo && args.targetCell.querySelectorAll('.university-logo').length === 0 && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'university') {\n                var imgElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('img', {\n                    className: 'university-logo',\n                    attrs: {\n                        'src': pivotObj.dataSourceSettings.dataSource[args.cellInfo.index[0]].logo,\n                        'alt': args.cellInfo.formattedText,\n                        'width': '30',\n                        'height': '30'\n                    },\n                });\n                var cellValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"select\"])('.e-cellvalue', args.targetCell);\n                cellValue.classList.add('e-hyperlinkcell');\n                cellValue.addEventListener('click', this.hyperlinkCellClick.bind(pivotObj));\n                args.targetCell.insertBefore(imgElement, cellValue);\n            }\n            return '';\n        },\n        hyperlinkCellClick: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            var cell = (args.target).parentElement;\n            var pivotValue = pivotObj.pivotValues[Number(cell.getAttribute('index'))][Number(cell.getAttribute('data-colindex'))];\n            var link = pivotValue.index ? pivotObj.dataSourceSettings.dataSource[pivotValue.index[0]].link : \"\";\n            window.open(link, '_blank');\n        },\n        saveReport: function (args) {\n            var reports = [];\n            var isSaved = false;\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reports = JSON.parse(localStorage.pivotviewReports);\n            }\n            if (args.report && args.reportName && args.reportName !== \"\") {\n                reports.map(function (item) {\n                    if (args.reportName === item.reportName) {\n                        item.report = args.report;\n                        isSaved = true;\n                    }\n                });\n                if (!isSaved) {\n                    reports.push(args);\n                }\n                localStorage.pivotviewReports = JSON.stringify(reports);\n            }\n        },\n        fetchReport: function (args) {\n            var reportCollection = [];\n            var reeportList = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            reportCollection.map(function (item) {\n                reeportList.push(item.reportName);\n            });\n            args.reportName = reeportList;\n        },\n        loadReport: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            var reportCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            reportCollection.map(function (item) {\n                if (args.reportName === item.reportName) {\n                    args.report = item.report;\n                }\n            });\n            if (args.report) {\n                pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;\n            }\n        },\n        removeReport: function (args) {\n            var reportCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            for (var i = 0; i < reportCollection.length; i++) {\n                if (reportCollection[i].reportName === args.reportName) {\n                    reportCollection.splice(i, 1);\n                }\n            }\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                localStorage.pivotviewReports = JSON.stringify(reportCollection);\n            }\n        },\n        renameReport: function (args) {\n            var reportsCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportsCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            if (args.isReportExists) {\n                for (var i = 0; i < reportsCollection.length; i++) {\n                    if (reportsCollection[i].reportName === args.rename) {\n                        reportsCollection.splice(i, 1);\n                    }\n                }\n            }\n            reportsCollection.map(function (item) {\n                if (args.reportName === item.reportName) {\n                    item.reportName = args.rename;\n                }\n            });\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                localStorage.pivotviewReports = JSON.stringify(reportsCollection);\n            }\n        },\n        newReport: function () {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            pivotObj.setProperties({\n                dataSourceSettings: {\n                    columns: [],\n                    rows: [],\n                    values: [],\n                    filters: []\n                }\n            }, false);\n        },\n        beforeToolbarRender: function (args) {\n            args.customToolbar.splice(6, 0, {\n                type: 'Separator'\n            });\n            args.customToolbar.splice(9, 0, {\n                type: 'Separator'\n            });\n        }\n    },\n    provide: {\n        pivotview: [\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"FieldList\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"CalculatedField\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PDFExport\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"ExcelExport\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"ConditionalFormatting\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"NumberFormatting\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"VirtualScroll\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"GroupingBar\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"Grouping\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"DrillThrough\"]\n        ]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/overview/App.vue?vue&type=template&id=40f7bceb&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"meta\", { attrs: { name: \"referrer\", content: \"never\" } }),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"control-section\", attrs: { id: \"pivot-table-section\" } },\n      [\n        _c(\n          \"div\",\n          { staticClass: \"content-wrapper\" },\n          [\n            _c(\"ejs-pivotview\", {\n              ref: \"pivotview\",\n              attrs: {\n                id: \"pivotview\",\n                dataSourceSettings: _vm.dataSourceSettings,\n                gridSettings: _vm.gridSettings,\n                width: _vm.width,\n                height: _vm.height,\n                allowExcelExport: _vm.allowExcelExport,\n                allowConditionalFormatting: _vm.allowConditionalFormatting,\n                allowNumberFormatting: _vm.allowNumberFormatting,\n                allowPdfExport: _vm.allowPdfExport,\n                showToolbar: _vm.showToolbar,\n                allowCalculatedField: _vm.allowCalculatedField,\n                showFieldList: _vm.showFieldList,\n                enableVirtualization: _vm.enableVirtualization,\n                exportAllPages: _vm.exportAllPages,\n                allowDeferLayoutUpdate: _vm.allowDeferLayoutUpdate,\n                allowDrillThrough: _vm.allowDrillThrough,\n                maxNodeLimitInMemberEditor: _vm.maxNodeLimitInMemberEditor,\n                showGroupingBar: _vm.showGroupingBar,\n                allowGrouping: _vm.allowGrouping,\n                enableValueSorting: _vm.enableValueSorting,\n                toolbar: _vm.toolbar,\n                saveReport: _vm.saveReport,\n                loadReport: _vm.loadReport,\n                fetchReport: _vm.fetchReport,\n                renameReport: _vm.renameReport,\n                removeReport: _vm.removeReport,\n                newReport: _vm.newReport,\n                toolbarRender: _vm.beforeToolbarRender,\n                chartSeriesCreated: _vm.chartSeriesCreated,\n                displayOption: _vm.displayOption,\n                chartSettings: _vm.chartSettings,\n                cellTemplate: \"myTemplate\",\n              },\n              scopedSlots: _vm._u([\n                {\n                  key: \"myTemplate\",\n                  fn: function (ref) {\n                    var data = ref.data\n                    return [\n                      _c(\"span\", {\n                        staticClass: \"template-wrap\",\n                        domProps: {\n                          innerHTML: _vm._s(_vm.getCellContent(data)),\n                        },\n                      }),\n                    ]\n                  },\n                },\n              ]),\n            }),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"urllink\" }, [\n      _vm._v(\"\\n      Source:\\n      \"),\n      _c(\n        \"a\",\n        {\n          attrs: {\n            href: \"https://www.topuniversities.com/university-rankings?utm_source=topnav\",\n            target: \"_blank\",\n          },\n        },\n        [_vm._v(\"QS World\\n        University Rankings\")]\n      ),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample provides an overview of \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://www.syncfusion.com/vue-components/vue-pivot-table\",\n            },\n          },\n          [_vm._v(\"\\n        Vue Pivot Table\")]\n        ),\n        _vm._v(\n          \", which allows you to organize and summarize pivot data\\n      in\\n      a detailed or abstract view and display it as a grid and chart.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      The Vue Pivot Table is a powerful control for organizing and summarizing business data and displaying the\\n      results in a table and chart format. It includes major features such as built-in \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/aggregation/#aggregation\",\n            },\n          },\n          [_vm._v(\"\\n        aggregations\")]\n        ),\n        _vm._v(\", \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/field-list/#field-list\",\n            },\n          },\n          [_vm._v(\"\\n        pivot table field list\")]\n        ),\n        _vm._v(\" for report manipulation, Excel-like \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/filtering/#filtering\",\n            },\n          },\n          [_vm._v(\"\\n        filtering\")]\n        ),\n        _vm._v(\" and \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/sorting/#sorting\",\n            },\n          },\n          [_vm._v(\"\\n        sorting\")]\n        ),\n        _vm._v(\", \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/editing/#editing\",\n            },\n          },\n          [_vm._v(\"\\n        editing\")]\n        ),\n        _vm._v(\", \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/excel-export/#excel-export\",\n            },\n          },\n          [_vm._v(\"\\n        Excel\")]\n        ),\n        _vm._v(\" and \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/pdf-export/#pdf-export\",\n            },\n          },\n          [_vm._v(\"\\n        PDF\")]\n        ),\n        _vm._v(\n          \" exporting, and so on, which are used in this demo, as well as a large data source loaded without any\\n      performance degradation by using \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/virtual-scrolling/#virtual-scrolling\",\n            },\n          },\n          [_vm._v(\"\\n        virtualization\")]\n        ),\n        _vm._v(\" support.\\n    \"),\n      ]),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information on the Essential JS2 Pivot Table can be found in this \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/pivotview/getting-started/#getting-started\",\n            },\n          },\n          [_vm._v(\"\\n        documentation section\")]\n        ),\n        _vm._v(\".\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/overview/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });