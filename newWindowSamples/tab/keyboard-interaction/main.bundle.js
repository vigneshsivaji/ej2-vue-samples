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
/******/ 		"tab/keyboard-interaction/main": 0
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
/******/ 	deferredModules.push(["./Samples/tab/keyboard-interaction/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/tab/keyboard-interaction/App.vue":
/*!**************************************************!*\
  !*** ./Samples/tab/keyboard-interaction/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=237a31cc& */ \"./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/tab/keyboard-interaction/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?");

/***/ }),

/***/ "./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?");

/***/ }),

/***/ "./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?");

/***/ }),

/***/ "./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc&":
/*!*********************************************************************************!*\
  !*** ./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=237a31cc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_237a31cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?");

/***/ }),

/***/ "./Samples/tab/keyboard-interaction/main.js":
/*!**************************************************!*\
  !*** ./Samples/tab/keyboard-interaction/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/keyboard-interaction/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.key-class {\\n     display: inline-block;\\n     width: 130px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/tab/keyboard-interaction/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,sBAAsB;KACtB,aAAa;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.key-class {\\n     display: inline-block;\\n     width: 130px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/keyboard-interaction/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TabPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {\n      headerText0: { text: \"HTML\" },\n      headerText1: { text: \"C-Sharp(C#)\" },\n      headerText2: { text: \"Java\" },\n      headerText3: { text: \"VB.NET\" },\n      headerText4: { text: \"Xamarin\" },\n      headerText5: { text: \"ASP.NET\" },\n      headerText6: { text: \"ASP.NET MVC\" },\n      headerText7: { text: \"JavaScript\" },\n      content0:\n        \"HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to \" +\n        \"create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually \" +\n        \"engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications. Web \" +\n        \"browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a \" +\n        \"website semantically along with cues for presentation, making it a markup language, rather than a programming language.\",\n\n      content1:\n        \"C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its \" +\n        \"development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.\",\n\n      content2:\n        \"Java is a set of computer software and specifications developed by Sun Microsystems, later acquired \" +\n        \"by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform \" +\n        \"computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to \" +\n        \"enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to \" +\n        \"provide many features of native applications and can be embedded in HTML pages.\",\n\n      content3:\n        \"The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also \" +\n        \"includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.\",\n\n      content4:\n        \"Xamarin is a San Francisco, California based software company created in May 2011 by the engineers \" +\n        \"that created Mono, Mono for Android and MonoTouch that are cross-platform implementations of the Common Language \" +\n        \"Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase, \" +\n        \"developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share \" +\n        \"code across multiple platforms. Xamarin has over 1 million developers in more than 120 countries around the World \" +\n        \"as of May 2015.\",\n\n      content5:\n        \"ASP.NET is an open-source server-side web application framework designed for web development to produce \" +\n        \"dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications \" +\n        \"and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor \" +\n        \"to Microsoft's Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing \" +\n        \"programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows \" +\n        \"ASP.NET components to process SOAP messages.\",\n\n      content6:\n        \"The ASP.NET MVC is a web application framework developed by Microsoft, which implements the \" +\n        \"model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is \" +\n        \"proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using \" +\n        \"only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.\",\n\n      content7:\n        \"JavaScript (JS) is an interpreted computer programming language. It was originally implemented as \" +\n        \"part of web browsers so that client-side scripts could interact with the user, control the browser, communicate \" +\n        \"asynchronously, and alter the document content that was displayed. More recently, however, it has become common in \" +\n        \"both game development and the creation of desktop applications.\",\n    };\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/keyboard-interaction/App.vue?vue&type=template&id=237a31cc& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"e-tab-section\"},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"e-sample-resize-container\"},[_c('ejs-tab',{ref:\"tabObj\",attrs:{\"id\":\"tab_keyboard_interaction\",\"overflowMode\":\"Popup\"}},[_c('e-tabitems',[_c('e-tabitem',{attrs:{\"header\":_vm.headerText0,\"content\":_vm.content0}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText1,\"content\":_vm.content1}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText2,\"content\":_vm.content2}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText3,\"content\":_vm.content3}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText4,\"content\":_vm.content4}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText5,\"content\":_vm.content5}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText6,\"content\":_vm.content6}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText7,\"content\":_vm.content7}})],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_vm._v(\"\\n        This demo showcases the keyboard shortcuts applicable on\\n        \"),_c('code',[_vm._v(\"Tab\")]),_vm._v(\".\\n      \")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('div',{attrs:{\"id\":\"description\"}},[_c('i',[_vm._v(\"Below key combinations can be used in Tabs to initiate various\\n            actions.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Alt\")]),_vm._v(\" + \"),_c('kbd',[_vm._v(\"J\")])]),_vm._v(\" \"),_c('span',[_vm._v(\" - Focuses on the first component of the demo.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Home\")])]),_vm._v(\" \"),_c('span',[_vm._v(\" - Moves focus to the first Tab.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"End\")])]),_vm._v(\" \"),_c('span',[_vm._v(\" - Moves focus to the last Tab.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Down arrow\")]),_vm._v(\" or \"),_c('kbd',[_vm._v(\"Up arrow\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - When the popup is open and focused, it will move to\\n                previous/next Tab items of the popup in the vertical\\n                direction.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Left arrow\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - Moves focus to the previous Tab. If focus is on the first\\n                Tab, the focus will not move to any Tab.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Right arrow\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - Moves focus to the next Tab. If focus is on the last Tab\\n                element, the focus will not move to any Tab.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Enter\")]),_vm._v(\" or \"),_c('kbd',[_vm._v(\"Space\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - Selects the Tab if it is not selected. Opens the popup\\n                dropdown icon if it is focussed. Select the Tab item as active\\n                when popup item is focussed.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Esc\")])]),_vm._v(\" \"),_c('span',[_vm._v(\" - Closes the popup if popup is in opened state.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Delete\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - Deletes the Tab, if close button is enabled in Tab\\n                header.\")])]),_vm._v(\" \"),_c('li',[_c('span',{staticClass:\"key-class\"},[_c('kbd',[_vm._v(\"Shift + F10\")])]),_vm._v(\" \"),_c('span',[_vm._v(\"\\n                - If popup mode is enabled, it opens the popup when the Tab is\\n                focused.\")])])])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/tab/keyboard-interaction/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });