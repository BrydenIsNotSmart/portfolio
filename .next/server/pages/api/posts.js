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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "@softwareer/node":
/*!***********************************!*\
  !*** external "@softwareer/node" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@softwareer/node");

/***/ }),

/***/ "(api)/./clqu.config.js":
/*!************************!*\
  !*** ./clqu.config.js ***!
  \************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    name: \"Bryden Calaway\",\n    version: \"1.0.0\",\n    githubName: \"BrydenIsNotSmart\",\n    githubKey: process.env.GITHUB_KEY,\n    softwareerKey: process.env.SOFTWAREER_KEY,\n    email: \"bryden@viality.software\",\n    errors: {\n        404: \"This page could not be found.\",\n        500: \"An error occurred while processing your request.\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jbHF1LmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFDQUE7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7SUFDYkMsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLE9BQU87SUFDaEJDLFVBQVUsRUFBRSxrQkFBa0I7SUFDOUJDLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVU7SUFDakNDLGFBQWEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGNBQWM7SUFDekNDLEtBQUssRUFBRSx5QkFBeUI7SUFDaENDLE1BQU0sRUFBRTtBQUNKLFdBQUcsRUFBRSwrQkFBK0I7QUFDcEMsV0FBRyxFQUFFLGtEQUFrRDtLQUMxRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtdjYvLi9jbHF1LmNvbmZpZy5qcz9mNGNiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIG5hbWU6ICdCcnlkZW4gQ2FsYXdheScsXHJcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLFxyXG4gICAgZ2l0aHViTmFtZTogJ0JyeWRlbklzTm90U21hcnQnLFxyXG4gICAgZ2l0aHViS2V5OiBwcm9jZXNzLmVudi5HSVRIVUJfS0VZLFxyXG4gICAgc29mdHdhcmVlcktleTogcHJvY2Vzcy5lbnYuU09GVFdBUkVFUl9LRVksXHJcbiAgICBlbWFpbDogJ2JyeWRlbkB2aWFsaXR5LnNvZnR3YXJlJyxcclxuICAgIGVycm9yczoge1xyXG4gICAgICAgIDQwNDogXCJUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLlwiLFxyXG4gICAgICAgIDUwMDogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC5cIlxyXG4gICAgfVxyXG59IFxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJ2ZXJzaW9uIiwiZ2l0aHViTmFtZSIsImdpdGh1YktleSIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfS0VZIiwic29mdHdhcmVlcktleSIsIlNPRlRXQVJFRVJfS0VZIiwiZW1haWwiLCJlcnJvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./clqu.config.js\n");

/***/ }),

/***/ "(api)/./src/libraries/softwareer.node.js":
/*!******************************************!*\
  !*** ./src/libraries/softwareer.node.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst clquConfig = __webpack_require__(/*! ../../clqu.config */ \"(api)/./clqu.config.js\");\nconst { Softwareer  } = __webpack_require__(/*! @softwareer/node */ \"@softwareer/node\");\nconst softwareer = new Softwareer(clquConfig.softwareerKey);\nmodule.exports = softwareer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGlicmFyaWVzL3NvZnR3YXJlZXIubm9kZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxpREFBbUIsQ0FBQztBQUMvQyxNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHRCxtQkFBTyxDQUFDLDBDQUFrQixDQUFDO0FBQ2xELE1BQU1FLFVBQVUsR0FBRyxJQUFJRCxVQUFVLENBQUNGLFVBQVUsQ0FBQ0ksYUFBYSxDQUFDO0FBRTNEQyxNQUFNLENBQUNDLE9BQU8sR0FBR0gsVUFBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtdjYvLi9zcmMvbGlicmFyaWVzL3NvZnR3YXJlZXIubm9kZS5qcz8wNGU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNscXVDb25maWcgPSByZXF1aXJlKCcuLi8uLi9jbHF1LmNvbmZpZycpO1xyXG5jb25zdCB7IFNvZnR3YXJlZXIgfSA9IHJlcXVpcmUoJ0Bzb2Z0d2FyZWVyL25vZGUnKTtcclxuY29uc3Qgc29mdHdhcmVlciA9IG5ldyBTb2Z0d2FyZWVyKGNscXVDb25maWcuc29mdHdhcmVlcktleSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNvZnR3YXJlZXI7Il0sIm5hbWVzIjpbImNscXVDb25maWciLCJyZXF1aXJlIiwiU29mdHdhcmVlciIsInNvZnR3YXJlZXIiLCJzb2Z0d2FyZWVyS2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/libraries/softwareer.node.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/posts.js":
/*!********************************!*\
  !*** ./src/pages/api/posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Softwareer = __webpack_require__(/*! libraries/softwareer.node */ \"(api)/./src/libraries/softwareer.node.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    let page = req.query?.page || 1;\n    let limit = req.query?.limit || 10;\n    page = parseInt(page);\n    limit = parseInt(limit);\n    Softwareer.getPosts(page, limit).then((profile)=>{\n        res.status(200).json({\n            success: true,\n            message: null,\n            data: profile\n        });\n    }).catch((error)=>{\n        res.status(500).json({\n            success: false,\n            message: \"Something went wrong\",\n            data: null\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsMkVBQTJCLENBQUM7QUFFdkQsaUVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDekIsSUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLEtBQUssRUFBRUQsSUFBSSxJQUFJLENBQUM7SUFDL0IsSUFBSUUsS0FBSyxHQUFHSixHQUFHLENBQUNHLEtBQUssRUFBRUMsS0FBSyxJQUFJLEVBQUU7SUFFbENGLElBQUksR0FBR0csUUFBUSxDQUFDSCxJQUFJLENBQUMsQ0FBQztJQUN0QkUsS0FBSyxHQUFHQyxRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBRXhCTixVQUFVLENBQUNRLFFBQVEsQ0FBQ0osSUFBSSxFQUFFRSxLQUFLLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUMvQ1AsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNqQkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsSUFBSSxFQUFFTCxPQUFPO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO1FBQ2hCZCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ2pCQyxPQUFPLEVBQUUsS0FBSztZQUNkQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CQyxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtdjYvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzLmpzP2QyNzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU29mdHdhcmVlciA9IHJlcXVpcmUoJ2xpYnJhcmllcy9zb2Z0d2FyZWVyLm5vZGUnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xyXG4gICAgbGV0IHBhZ2UgPSByZXEucXVlcnk/LnBhZ2UgfHwgMTtcclxuICAgIGxldCBsaW1pdCA9IHJlcS5xdWVyeT8ubGltaXQgfHwgMTA7XHJcblxyXG4gICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UpO1xyXG4gICAgbGltaXQgPSBwYXJzZUludChsaW1pdCk7XHJcblxyXG4gICAgU29mdHdhcmVlci5nZXRQb3N0cyhwYWdlLCBsaW1pdCkudGhlbigocHJvZmlsZSkgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgZGF0YTogcHJvZmlsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiXSwibmFtZXMiOlsiU29mdHdhcmVlciIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJwYWdlIiwicXVlcnkiLCJsaW1pdCIsInBhcnNlSW50IiwiZ2V0UG9zdHMiLCJ0aGVuIiwicHJvZmlsZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/posts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/posts.js"));
module.exports = __webpack_exports__;

})();