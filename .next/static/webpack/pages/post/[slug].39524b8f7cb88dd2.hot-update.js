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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// /post/dynamicValue\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                alt: \"\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url()\n            }, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-extralight\",\n                                children: [\n                                    \"Blog post by\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: [\n                                            \" \",\n                                            post.author.name,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" - Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dataset: \"production\",\n                            projectId: \"m4s5ei71\",\n                            content: post.body,\n                            className: \"\",\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"max-w-lg my-5 mx-auto border border-yellow-500 \"\n            }, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col p-5 max-w-2xl mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-sm text-yellow-500\",\n                        children: \"Enjoyed this article ?\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Leave a comment below ! \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"py-3 mt-2\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Name : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"John Doe\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Email : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"JohnDoe@mail.com\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Comment : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: 8\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsQ0FBRTt3QkFBQ25DLFNBQVMsRUFBQyxDQUFXOzs7Ozs7Z0dBQ3hCdUMsQ0FBSzt3QkFBQ3ZDLFNBQVMsRUFBQyxDQUFZOzt3R0FDMUJlLENBQUk7Z0NBQUNmLFNBQVMsRUFBQyxDQUFlOzBDQUFDLENBQU87Ozs7Ozt3R0FDdEN3QyxDQUFLO2dDQUFDQyxXQUFXLEVBQUMsQ0FBVTtnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFMUNILENBQUs7d0JBQUN2QyxTQUFTLEVBQUMsQ0FBWTs7d0dBQzFCZSxDQUFJO2dDQUFDZixTQUFTLEVBQUMsQ0FBZTswQ0FBQyxDQUFROzs7Ozs7d0dBQ3ZDd0MsQ0FBSztnQ0FBQ0MsV0FBVyxFQUFDLENBQWtCO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O2dHQUVsREgsQ0FBSzt3QkFBQ3ZDLFNBQVMsRUFBQyxDQUFZOzt3R0FDMUJlLENBQUk7Z0NBQUNmLFNBQVMsRUFBQyxDQUFlOzBDQUFDLENBQVU7Ozs7Ozt3R0FDekMyQyxDQUFRO2dDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCLENBQUM7S0F2RVEvQyxJQUFJOztBQXlFYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9wb3N0L2R5bmFtaWNWYWx1ZVxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gXCIuLi8uLi9zYW5pdHlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBpbmdcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUG9ydGFibGVUZXh0IGZyb20gXCJyZWFjdC1wb3J0YWJsZS10ZXh0XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcG9zdDogUG9zdDtcclxufVxyXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHAtNVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC0xMCBtYi0zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbWItMlwiPlxyXG4gICAgICAgICAge3Bvc3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtZXh0cmFsaWdodFwiPlxyXG4gICAgICAgICAgICBCbG9nIHBvc3QgYnlcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj4ge3Bvc3QuYXV0aG9yLm5hbWV9IDwvc3Bhbj4gLVxyXG4gICAgICAgICAgICBQdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgICAgICA8UG9ydGFibGVUZXh0XHJcbiAgICAgICAgICAgIGRhdGFzZXQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIX1cclxuICAgICAgICAgICAgcHJvamVjdElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCF9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuYm9keX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgc2VyaWFsaXplcnM9e3tcclxuICAgICAgICAgICAgICBoMTogKHByb3BzOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGgyOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG15LTVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBsaTogKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWwtNCBsaXN0LWRpc2NcIj57Y2hpbGRyZW59PC9saT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGxpbms6ICh7IGhyZWYsIGNoaWxkcmVuIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtYXgtdy1sZyBteS01IG14LWF1dG8gYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIFwiIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01IG1heC13LTJ4bCBteC1hdXRvIG1iLTEwXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC15ZWxsb3ctNTAwXCI+RW5qb3llZCB0aGlzIGFydGljbGUgPzwvaDM+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPkxlYXZlIGEgY29tbWVudCBiZWxvdyAhIDwvaDQ+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInB5LTMgbXQtMlwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTVcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5OYW1lIDogPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPkVtYWlsIDogPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiSm9obkRvZUBtYWlsLmNvbVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi01XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+Q29tbWVudCA6IDwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPXs4fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG5cclxuLy8gZ2V0IHN0YXRpYyBwYXRoLT4gYWxsb3cgbmV4dGpzIHRvIGtub3cgd2hpY2ggcGF0aCBzaG91bGQgYmUgcHJlIGJ1aWxkIGluIGFkdmFuY2VkXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCJde1xyXG4gICAgICAgIF9pZCxzbHVne1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09JHNsdWddWzBde1xyXG4gICAgX2lkLF9jcmVhdGVkQXQsdGl0bGUsYXV0aG9yLT57XHJcbiAgICAgICAgbmFtZSxpbWFnZVxyXG4gICAgfSxcclxuICAgICdjb21tZW50cyc6KltcclxuICAgICAgICBfdHlwZSA9PVwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PXRydWVcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIG1haW5JbWFnZSxcclxuICAgIHNsdWcsXHJcbiAgICBib2R5XHJcbn1gO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcclxuICAgIHNsdWc6IHBhcmFtcz8uc2x1ZyxcclxuICB9KTtcclxuICBpZiAoIXBvc3QpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgLy8gYWZ0ZXIgNjAgc2VjLCBpdCB3aWxsIHVwZGF0ZSB0aGUgb2xkIGNhY2hlZCB2ZXJzaW9uXHJcbiAgICByZXZhbGlkYXRlOiA2MCxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXJsRm9yIiwiUG9ydGFibGVUZXh0IiwiUG9zdCIsInBvc3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwibGkiLCJjaGlsZHJlbiIsImxpbmsiLCJocmVmIiwiYSIsImhyIiwiZm9ybSIsImgzIiwiaDQiLCJsYWJlbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});