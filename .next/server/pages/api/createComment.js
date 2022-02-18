"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    dataset: \"production\",\n    projectId: \"m4s5ei71\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_AUTH_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = req.body;\n    try {\n        //   create a doc in sanity cms\n        await client.create({\n            _type: \"comment\",\n            post: {\n                _type: \"reference\",\n                _ref: _id\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (error) {\n        console.log(\"data of body \", req.body);\n        return res.status(500).json({\n            message: \"comment could not be submitted\",\n            error\n        });\n    }\n    console.log(\"submitted\");\n    res.status(200).json({\n        message: \"comment submitted succesfully\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDeUM7QUFDekMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxPQUFPLEVBQUVDLFlBQXNDO0lBQy9DRyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxVQUFVLEVBQUUsQ0FBWTtJQUN4QkMsTUFBTSxFQU5SLENBQWEsaUJBTXNCLENBQVk7SUFDN0NDLEtBQUssRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGlCQUFpQjtBQUN0QyxDQUFDO0FBQ0QsS0FBSyxDQUFDQyxNQUFNLEdBQUdaLHFEQUFZLENBQUNDLE1BQU07QUFFbkIsZUFBZVksYUFBYSxDQUN6Q0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBR3RCLENBQUM7SUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFFOUMsR0FBRyxDQUFDLENBQUM7UUFDSCxFQUErQjtRQUMvQixLQUFLLENBQUNSLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDLENBQUM7WUFDbkJDLEtBQUssRUFBRSxDQUFTO1lBQ2hCQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEQsS0FBSyxFQUFFLENBQVc7Z0JBQ2xCRSxJQUFJLEVBQUVSLEdBQUc7WUFDWCxDQUFDO1lBQ0RDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVNLEtBQUssRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWUsZ0JBQUViLEdBQUcsQ0FBQ00sSUFBSTtRQUNyQyxNQUFNLENBQUNMLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDM0JDLE9BQU8sRUFBRSxDQUFnQztZQUN6Q0wsS0FBSztRQUNQLENBQUM7SUFDSCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVc7SUFDdkJaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsT0FBTyxFQUFFLENBQStCO0lBQUMsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZUNvbW1lbnQudHM/YThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcclxuICBhcGlWZXJzaW9uOiBcIjIwMjEtMDMtMjVcIixcclxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FVVEhfVE9LRU4sXHJcbn07XHJcbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudChjb25maWcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tbWVudChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikgXHJcblxyXG57XHJcbiAgY29uc3QgeyBfaWQsIG5hbWUsIGVtYWlsLCBjb21tZW50IH0gPSByZXEuYm9keTtcclxuICBcclxuICB0cnkge1xyXG4gICAgLy8gICBjcmVhdGUgYSBkb2MgaW4gc2FuaXR5IGNtc1xyXG4gICAgYXdhaXQgY2xpZW50LmNyZWF0ZSh7XHJcbiAgICAgIF90eXBlOiBcImNvbW1lbnRcIixcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIF90eXBlOiBcInJlZmVyZW5jZVwiLFxyXG4gICAgICAgIF9yZWY6IF9pZCxcclxuICAgICAgfSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIG9mIGJvZHkgXCIsIHJlcS5ib2R5KVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogXCJjb21tZW50IGNvdWxkIG5vdCBiZSBzdWJtaXR0ZWRcIixcclxuICAgICAgZXJyb3IsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJzdWJtaXR0ZWRcIik7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcImNvbW1lbnQgc3VibWl0dGVkIHN1Y2Nlc2Z1bGx5XCIgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsIlNBTklUWV9BVVRIX1RPS0VOIiwiY2xpZW50IiwiY3JlYXRlQ29tbWVudCIsInJlcSIsInJlcyIsIl9pZCIsIm5hbWUiLCJlbWFpbCIsImNvbW1lbnQiLCJib2R5IiwiY3JlYXRlIiwiX3R5cGUiLCJwb3N0IiwiX3JlZiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();