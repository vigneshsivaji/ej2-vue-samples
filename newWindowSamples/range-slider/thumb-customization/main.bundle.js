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
/******/ 		"range-slider/thumb-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/thumb-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/thumb-customization/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/range-slider/thumb-customization/App.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b2646a38& */ \"./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/thumb-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38&":
/*!*****************************************************************************************!*\
  !*** ./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b2646a38& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b2646a38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/thumb-customization/main.js":
/*!**********************************************************!*\
  !*** ./Samples/range-slider/thumb-customization/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/thumb-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-thumb .slider-content_wrapper {\\n    width: 40%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n.slider-thumb .slider-userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n.slider-thumb .labelText {\\n    text-align: -webkit-left;\\n    font-weight: 500;\\n    font-size: 13px;\\n    padding-bottom: 10px;\\n}\\n.slider-thumb .slider_container {\\n    margin-top: 40px;\\n}\\n.e-bigger .slider-thumb .content_wrapper {\\n    width: 80%;\\n}\\n.slider-thumb #square_slider.e-control.e-slider .e-handle {\\n    border-radius: 0%;\\n    background-color: #f9920b;\\n    border: 0;\\n}\\n.slider-thumb #circle_slider.e-control.e-slider .e-handle {\\n    background-color: #f9920b;\\n    border-radius: 50%;\\n    border: 0;\\n}\\n.material.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,\\n.material .slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {\\n    top: calc(50% - 7px);\\n}\\n.material.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle.e-handle-active,\\n.material .slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle.e-handle-active {\\n    top: calc(50% - 6px);\\n    transform: scale(1.3) !important;\\n}\\n.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,\\n.slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {\\n    top: calc(50% - 9px);\\n}\\n.slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    height: 25px;\\n    width: 24px;\\n    background-size: 24px;\\n}\\n.material .slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    height: 20px;\\n    width: 20px;\\n    background-size: 20px;\\n}\\n.material .slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/thumb-mat.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-repeat: no-repeat;\\n    background-color: transparent;\\n    border: 0;\\n}\\n.slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/thumb.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-repeat: no-repeat;\\n    background-color: transparent;\\n    border: 0;\\n}\\n.slider-thumb #square_slider .e-tab-handle::after,\\n.slider-thumb #circle_slider .e-tab-handle::after {\\n    background-color: #f9920b;\\n}\\n.slider-thumb #image_slider .e-tab-handle::after {\\n    background-color: transparent;\\n}\\n.slider-thumb #oval_slider.e-control.e-slider .e-handle {\\n    height: 25px;\\n    width: 8px;\\n    top: 3px;\\n    border-radius: 15px;\\n    background-color: #f9920b;\\n    border: 1px solid #f9920b;\\n}\\n.tailwind .e-control-wrapper.e-slider-container.e-horizontal #image_slider .e-handle {\\n    margin-left: -12px;\\n    top: calc(50% - 10px);\\n    box-shadow: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-MKUQTU2MSQLMZJCSH67EZGFTFZGIOGXNENDJVZBAAZDNUYUNUP4A/Samples/range-slider/thumb-customization/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;CACxB;AACD;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;CACxB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,WAAW;CACd;AACD;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,UAAU;CACb;AACD;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,UAAU;CACb;AACD;;IAEI,qBAAqB;CACxB;AACD;;IAEI,qBAAqB;IACrB,iCAAiC;CACpC;AACD;;IAEI,qBAAqB;CACxB;AACD;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;CACzB;AACD;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;CACzB;AACD;IACI,gDAAgD;IAChD,6BAA6B;IAC7B,8BAA8B;IAC9B,UAAU;CACb;AACD;IACI,gDAA4C;IAC5C,6BAA6B;IAC7B,8BAA8B;IAC9B,UAAU;CACb;AACD;;IAEI,0BAA0B;CAC7B;AACD;IACI,8BAA8B;CACjC;AACD;IACI,aAAa;IACb,WAAW;IACX,SAAS;IACT,oBAAoB;IACpB,0BAA0B;IAC1B,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.slider-thumb .slider-content_wrapper {\\n    width: 40%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n.slider-thumb .slider-userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n.slider-thumb .labelText {\\n    text-align: -webkit-left;\\n    font-weight: 500;\\n    font-size: 13px;\\n    padding-bottom: 10px;\\n}\\n.slider-thumb .slider_container {\\n    margin-top: 40px;\\n}\\n.e-bigger .slider-thumb .content_wrapper {\\n    width: 80%;\\n}\\n.slider-thumb #square_slider.e-control.e-slider .e-handle {\\n    border-radius: 0%;\\n    background-color: #f9920b;\\n    border: 0;\\n}\\n.slider-thumb #circle_slider.e-control.e-slider .e-handle {\\n    background-color: #f9920b;\\n    border-radius: 50%;\\n    border: 0;\\n}\\n.material.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,\\n.material .slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {\\n    top: calc(50% - 7px);\\n}\\n.material.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle.e-handle-active,\\n.material .slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle.e-handle-active {\\n    top: calc(50% - 6px);\\n    transform: scale(1.3) !important;\\n}\\n.e-bigger .slider-thumb .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,\\n.slider-thumb .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {\\n    top: calc(50% - 9px);\\n}\\n.slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    height: 25px;\\n    width: 24px;\\n    background-size: 24px;\\n}\\n.material .slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    height: 20px;\\n    width: 20px;\\n    background-size: 20px;\\n}\\n.material .slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    background-image: url('./images/thumb-mat.png');\\n    background-repeat: no-repeat;\\n    background-color: transparent;\\n    border: 0;\\n}\\n.slider-thumb #image_slider.e-control.e-slider .e-handle {\\n    background-image: url('./images/thumb.png');\\n    background-repeat: no-repeat;\\n    background-color: transparent;\\n    border: 0;\\n}\\n.slider-thumb #square_slider .e-tab-handle::after,\\n.slider-thumb #circle_slider .e-tab-handle::after {\\n    background-color: #f9920b;\\n}\\n.slider-thumb #image_slider .e-tab-handle::after {\\n    background-color: transparent;\\n}\\n.slider-thumb #oval_slider.e-control.e-slider .e-handle {\\n    height: 25px;\\n    width: 8px;\\n    top: 3px;\\n    border-radius: 15px;\\n    background-color: #f9920b;\\n    border: 1px solid #f9920b;\\n}\\n.tailwind .e-control-wrapper.e-slider-container.e-horizontal #image_slider .e-handle {\\n    margin-left: -12px;\\n    top: calc(50% - 10px);\\n    box-shadow: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/thumb-customization/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value: 30,\n      min: 0,\n      max: 100,\n      ticks: {\n        placement: 'After'\n    }\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/thumb-customization/App.vue?vue&type=template&id=b2646a38& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section slider-thumb\"},[_c('div',{staticClass:\"slider-content_wrapper\"},[_c('div',{staticClass:\"slider_container\"},[_c('div',{staticClass:\"labelText slider-userselect\"},[_vm._v(\"Square\")]),_vm._v(\" \"),_c('ejs-slider',{attrs:{\"id\":\"square_slider\",\"value\":_vm.value,\"min\":_vm.min,\"max\":_vm.max}})],1),_vm._v(\" \"),_c('div',{staticClass:\"slider_container\"},[_c('div',{staticClass:\"labelText slider-userselect\"},[_vm._v(\"Circle\")]),_vm._v(\" \"),_c('ejs-slider',{attrs:{\"id\":\"circle_slider\",\"value\":_vm.value,\"min\":_vm.min,\"max\":_vm.max}})],1),_vm._v(\" \"),_c('div',{staticClass:\"slider_container\"},[_c('div',{staticClass:\"labelText slider-userselect\"},[_vm._v(\"Oval\")]),_vm._v(\" \"),_c('ejs-slider',{attrs:{\"id\":\"oval_slider\",\"value\":_vm.value,\"min\":_vm.min,\"max\":_vm.max}})],1),_vm._v(\" \"),_c('div',{staticClass:\"slider_container\"},[_c('div',{staticClass:\"labelText slider-userselect\"},[_vm._v(\"Custom image\")]),_vm._v(\" \"),_c('ejs-slider',{attrs:{\"id\":\"image_slider\",\"value\":_vm.value,\"min\":_vm.min,\"max\":_vm.max,\"ticks\":_vm.ticks}})],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the customization of Slider's thumb. Drag the thumb over the bar for selecting the values between\\n        min and max.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"In this demo, customization of thumb by changing CSS is demonstrated.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Square - In this sample, thumb has been customized to square shape.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Circle - In this sample, thumb has been customized to circle shape. \")]),_vm._v(\" \"),_c('li',[_vm._v(\"Oval - In this sample, thumb has been customized to oval shape. \")]),_vm._v(\" \"),_c('li',[_vm._v(\"Custom image - In this sample, thumb has been replaced with custom image. \")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-slider/thumb-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });