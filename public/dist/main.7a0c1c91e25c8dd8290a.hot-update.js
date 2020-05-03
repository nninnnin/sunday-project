webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Loader */ \"./src/components/Loader.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n // import App from './App';\n\n\nvar mainContainer = document.querySelector('main');\nvar slime = document.getElementById('slime-container');\nvar pf = document.getElementById('pf-container');\nvar trigger = document.getElementById('trigger');\ntrigger.addEventListener('click', openReactApp);\n\nfunction openReactApp(e) {\n  e.target.disabled = true;\n  e.target.innerText = '불러오는중..';\n  slime.style.display = \"block\";\n  pf.style.display = \"none\";\n  console.log('펫치');\n  fetch('/diary/fetch').then(function (res) {\n    console.log(res);\n    return res.json();\n  }).then(function (data) {\n    console.log(data);\n    var posts = data;\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {\n      posts: posts\n    }), mainContainer);\n  });\n}\n\nvar App = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./App */ \"./src/App.js\"));\n  },\n  loading: _components_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nvoid function register() {\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"] : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  }\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(mainContainer, \"mainContainer\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  reactHotLoader.register(slime, \"slime\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  reactHotLoader.register(pf, \"pf\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  reactHotLoader.register(trigger, \"trigger\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  reactHotLoader.register(openReactApp, \"openReactApp\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n  reactHotLoader.register(App, \"App\", \"C:\\\\Users\\\\nninn\\\\Desktop\\\\projects\\\\sunday-project\\\\src\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})