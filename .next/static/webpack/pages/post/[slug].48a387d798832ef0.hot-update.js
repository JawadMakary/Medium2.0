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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// /post/dynamicValue\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                alt: \"\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url()\n            }, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-extralight\",\n                                children: [\n                                    \"Blog post by\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: [\n                                            \" \",\n                                            post.author.name,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" - Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dataset: \"production\",\n                            projectId: \"m4s5ei71\",\n                            content: post.body,\n                            className: \"\",\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"max-w-lg my-5 mx-auto border border-yellow-500 \"\n            }, void 0, false, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col p-5 max-w-2xl mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-sm text-yellow-500\",\n                        children: \"Enjoyed this article ?\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Leave a comment below ! \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"py-3 mt-2\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Name : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"John Doe\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Email : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"JohnDoe@mail.com\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Comment : \"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: 8\n                            }, void 0, false, {\n                                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\sanitymediumbuild\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsQ0FBRTt3QkFBQ25DLFNBQVMsRUFBQyxDQUFXOzs7Ozs7Z0dBQ3hCdUMsQ0FBSzt3QkFBQ3ZDLFNBQVMsRUFBQyxDQUFZOzt3R0FDMUJlLENBQUk7Z0NBQUNmLFNBQVMsRUFBQyxDQUFlOzBDQUFDLENBQU87Ozs7Ozt3R0FDdEN3QyxDQUFLO2dDQUFDQyxXQUFXLEVBQUMsQ0FBVTtnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFMUNILENBQUs7d0JBQUN2QyxTQUFTLEVBQUMsQ0FBWTs7d0dBQzFCZSxDQUFJOzBDQUFDLENBQVE7Ozs7Ozt3R0FDYnlCLENBQUs7Z0NBQUNDLFdBQVcsRUFBQyxDQUFrQjtnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFbERILENBQUs7d0JBQUN2QyxTQUFTLEVBQUMsQ0FBWTs7d0dBQzFCZSxDQUFJOzBDQUFDLENBQVU7Ozs7Ozt3R0FDZjRCLENBQVE7Z0NBQUNDLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0IsQ0FBQztLQXZFUS9DLElBQUk7O0FBeUViLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzMwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL3Bvc3QvZHluYW1pY1ZhbHVlXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL3R5cGluZ1wiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBQb3J0YWJsZVRleHQgZnJvbSBcInJlYWN0LXBvcnRhYmxlLXRleHRcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0OiBQb3N0O1xyXG59XHJcbmZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX1cclxuICAgICAgLz5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gcC01XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG10LTEwIG1iLTNcIj57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBtYi0yXCI+XHJcbiAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1leHRyYWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIEJsb2cgcG9zdCBieVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMFwiPiB7cG9zdC5hdXRob3IubmFtZX0gPC9zcGFuPiAtXHJcbiAgICAgICAgICAgIFB1Ymxpc2hlZCBhdCB7bmV3IERhdGUocG9zdC5fY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgICAgIDxQb3J0YWJsZVRleHRcclxuICAgICAgICAgICAgZGF0YXNldD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQhfVxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIX1cclxuICAgICAgICAgICAgY29udGVudD17cG9zdC5ib2R5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICBzZXJpYWxpemVycz17e1xyXG4gICAgICAgICAgICAgIGgxOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS01XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgaDI6IChwcm9wczogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGxpOiAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC00IGxpc3QtZGlzY1wiPntjaGlsZHJlbn08L2xpPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgbGluazogKHsgaHJlZiwgY2hpbGRyZW4gfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm1heC13LWxnIG15LTUgbXgtYXV0byBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgXCIgLz5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTUgbWF4LXctMnhsIG14LWF1dG8gbWItMTBcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXllbGxvdy01MDBcIj5FbmpveWVkIHRoaXMgYXJ0aWNsZSA/PC9oMz5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+TGVhdmUgYSBjb21tZW50IGJlbG93ICEgPC9oND5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHktMyBtdC0yXCIgLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPk5hbWUgOiA8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi01XCI+XHJcbiAgICAgICAgICA8c3Bhbj5FbWFpbCA6IDwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkpvaG5Eb2VAbWFpbC5jb21cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNVwiPlxyXG4gICAgICAgICAgPHNwYW4+Q29tbWVudCA6IDwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPXs4fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG5cclxuLy8gZ2V0IHN0YXRpYyBwYXRoLT4gYWxsb3cgbmV4dGpzIHRvIGtub3cgd2hpY2ggcGF0aCBzaG91bGQgYmUgcHJlIGJ1aWxkIGluIGFkdmFuY2VkXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCJde1xyXG4gICAgICAgIF9pZCxzbHVne1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09XCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09JHNsdWddWzBde1xyXG4gICAgX2lkLF9jcmVhdGVkQXQsdGl0bGUsYXV0aG9yLT57XHJcbiAgICAgICAgbmFtZSxpbWFnZVxyXG4gICAgfSxcclxuICAgICdjb21tZW50cyc6KltcclxuICAgICAgICBfdHlwZSA9PVwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PXRydWVcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIG1haW5JbWFnZSxcclxuICAgIHNsdWcsXHJcbiAgICBib2R5XHJcbn1gO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcclxuICAgIHNsdWc6IHBhcmFtcz8uc2x1ZyxcclxuICB9KTtcclxuICBpZiAoIXBvc3QpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgLy8gYWZ0ZXIgNjAgc2VjLCBpdCB3aWxsIHVwZGF0ZSB0aGUgb2xkIGNhY2hlZCB2ZXJzaW9uXHJcbiAgICByZXZhbGlkYXRlOiA2MCxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXJsRm9yIiwiUG9ydGFibGVUZXh0IiwiUG9zdCIsInBvc3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwibGkiLCJjaGlsZHJlbiIsImxpbmsiLCJocmVmIiwiYSIsImhyIiwiZm9ybSIsImgzIiwiaDQiLCJsYWJlbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});