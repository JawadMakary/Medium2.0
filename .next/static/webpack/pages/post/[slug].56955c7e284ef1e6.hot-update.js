"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// /post/dynamicValue\n\n\nfunction Post(param) {\n    var post = param.post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                alt: \"\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url()\n            }, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-10 w-10 rounded-full\",\n                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQXFCO0FBQ3VCO0FBQ087U0FNMUNFLElBQUksQ0FBQyxLQUFZLEVBQUUsQ0FBQztRQUFkQyxJQUFJLEdBQUwsS0FBWSxDQUFYQSxJQUFJO0lBQ2pCLE1BQU0sNkVBQ0hDLENBQUk7UUFBQ0MsU0FBUyxFQUFDLENBQUU7O3dGQUNmTCwwREFBTTs7Ozs7d0ZBQ05NLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUEwQjtnQkFBQ0UsR0FBRyxFQUFDLENBQUU7Z0JBQUNDLEdBQUcsRUFBRVAsK0NBQU0sQ0FBQ0UsSUFBSSxDQUFDTSxTQUFTLEVBQUVDLEdBQUc7Ozs7Ozt3RkFDL0VDLENBQU87Z0JBQUNOLFNBQVMsRUFBQyxDQUF1Qjs7Z0dBQ3ZDTyxDQUFFO3dCQUFDUCxTQUFTLEVBQUMsQ0FBcUI7a0NBQUVGLElBQUksQ0FBQ1UsS0FBSzs7Ozs7O2dHQUM5Q0MsQ0FBRTt3QkFBQ1QsU0FBUyxFQUFDLENBQXVDO2tDQUFFRixJQUFJLENBQUNZLFdBQVc7Ozs7OztnR0FDdEVDLENBQUc7OEdBQ0RWLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUF3Qjs0QkFBQ0csR0FBRyxFQUFFUCwrQ0FBTSxDQUFDRSxJQUFJLENBQUNjLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFUixHQUFHOzRCQUFLSCxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0YsQ0FBQztLQWRRTCxJQUFJOztBQWdCYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9wb3N0L2R5bmFtaWNWYWx1ZVxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gXCIuLi8uLi9zYW5pdHlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBpbmdcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgICBwb3N0OlBvc3RcclxufVxyXG5mdW5jdGlvbiBQb3N0KHtwb3N0fTpQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiIGFsdD1cIlwiIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9IC8+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHAtNVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC0xMCBtYi0zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbWItMlwiPntwb3N0LmRlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9yLmltYWdlKS51cmwoKSF9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG5cclxuLy8gZ2V0IHN0YXRpYyBwYXRoLT4gYWxsb3cgbmV4dGpzIHRvIGtub3cgd2hpY2ggcGF0aCBzaG91bGQgYmUgcHJlIGJ1aWxkIGluIGFkdmFuY2VkXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCJde1xyXG4gICAgICAgIF9pZCxzbHVne1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09JHNsdWddWzBde1xyXG4gICAgX2lkLF9jcmVhdGVkQXQsdGl0bGUsYXV0aG9yLT57XHJcbiAgICAgICAgbmFtZSxpbWFnZVxyXG4gICAgfSxcclxuICAgICdjb21tZW50cyc6KltcclxuICAgICAgICBfdHlwZSA9PVwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PXRydWVcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIG1haW5JbWFnZSxcclxuICAgIHNsdWcsXHJcbiAgICBib2R5XHJcbn1gO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcclxuICAgIHNsdWc6IHBhcmFtcz8uc2x1ZyxcclxuICB9KTtcclxuICBpZiAoIXBvc3QpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgLy8gYWZ0ZXIgNjAgc2VjLCBpdCB3aWxsIHVwZGF0ZSB0aGUgb2xkIGNhY2hlZCB2ZXJzaW9uXHJcbiAgICByZXZhbGlkYXRlOjYwLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1cmxGb3IiLCJQb3N0IiwicG9zdCIsIm1haW4iLCJjbGFzc05hbWUiLCJpbWciLCJhbHQiLCJzcmMiLCJtYWluSW1hZ2UiLCJ1cmwiLCJhcnRpY2xlIiwiaDEiLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJhdXRob3IiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});