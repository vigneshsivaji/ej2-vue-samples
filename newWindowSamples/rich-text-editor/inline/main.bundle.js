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
/******/ 		"rich-text-editor/inline/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/inline/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/inline/App.vue":
/*!*************************************************!*\
  !*** ./Samples/rich-text-editor/inline/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=329c179a&scoped=true& */ \"./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css& */ \"./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"329c179a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/inline/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_329c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=329c179a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_329c179a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/inline/main.js":
/*!*************************************************!*\
  !*** ./Samples/rich-text-editor/inline/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/inline/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-richtexteditor.e-rte-inline  .e-rte-content[data-v-329c179a], .e-richtexteditor.e-rte-inline .e-source-content[data-v-329c179a] {\\n    background: #fff;\\n    color: #333;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-NRYKUOM7NHKJM376GVKLR3KK33Y66MQVQKZQHRDE2GOQNLXZ2DUQ/Samples/rich-text-editor/inline/App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,YAAY;CACf\",\"file\":\"App.vue?vue&type=style&index=0&id=329c179a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-richtexteditor.e-rte-inline  .e-rte-content[data-v-329c179a], .e-richtexteditor.e-rte-inline .e-source-content[data-v-329c179a] {\\n    background: #fff;\\n    color: #333;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/inline/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            toolbarSettings: {\n            items: ['Bold', 'Italic', 'Underline',\n                'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',\n                'CreateLink']\n        },\n        format: {\n            width: 'auto'\n        },\n        fontFamily: {\n            width: 'auto'\n        },\n            inlineMode: {enable: true, onSelection: true}\n        };\n    },\n    methods: {\n    changeCheck: function(args) {\n      this.$refs.rteInstance.ej2Instances.inlineMode.onSelection = args.checked;\n    }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/inline/App.vue?vue&type=template&id=329c179a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"default-section\" },\n          [\n            _c(\n              \"ejs-richtexteditor\",\n              {\n                ref: \"rteInstance\",\n                attrs: {\n                  toolbarSettings: _vm.toolbarSettings,\n                  fontFamily: _vm.fontFamily,\n                  format: _vm.format,\n                  inlineMode: _vm.inlineMode\n                }\n              },\n              [\n                _c(\"p\", [\n                  _vm._v(\n                    \"The sample is configured with the inline mode of the editor. Initially, the editor is rendered without a \"\n                  ),\n                  _c(\n                    \"a\",\n                    {\n                      attrs: {\n                        href: \"https://ej2.syncfusion.com/home/\",\n                        target: \"_blank\"\n                      }\n                    },\n                    [_vm._v(\"toolbar\")]\n                  ),\n                  _vm._v(\n                    \". The toolbar becomes visible only when the content is selected.\"\n                  )\n                ])\n              ]\n            )\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n        _c(\"table\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"checkInstance\",\n                      attrs: {\n                        checked: \"false\",\n                        label: \"Show on Selection\",\n                        change: _vm.changeCheck,\n                        id: \"select\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the toolbar show on inline mode. Toolbar show while click on the below editable content and it hide on focus out from edit area.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Rich Text Editor provides an option to display toolbar on demand using mode property. Set mode as inline to enable\\n        inline editor. The toolbar becomes visible only when the content is selected\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Module\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Toolbar, Link, Image, HtmlEditor, QuickToolbar\")]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/inline/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });