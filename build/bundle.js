/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var addIframeToElement = function(element) {\n  var iframe = document.createElement(\"iframe\");\n  iframe.setAttribute('src', 'http://www.youtube.com/embed/-zFJI4axcxs?autoplay=1')\n  element.appendChild(iframe);\n};\n\nmodule.exports = addIframeToElement;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWRkSWZyYW1lVG9FbGVtZW50LmpzPzI5YmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFkZElmcmFtZVRvRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLy16RkpJNGF4Y3hzP2F1dG9wbGF5PTEnKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGlmcmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZElmcmFtZVRvRWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FkZElmcmFtZVRvRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var removeIframeFromElement = function(element) {\n  var iframe = element.querySelector(\"iframe\");\n  if (iframe) {\n    element.removeChild(iframe);\n  }\n};\n\nmodule.exports = removeIframeFromElement;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVtb3ZlSWZyYW1lRnJvbUVsZW1lbnQuanM/YzlkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW1vdmVJZnJhbWVGcm9tRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGlmcmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcbiAgaWYgKGlmcmFtZSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVJZnJhbWVGcm9tRWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbW92ZUlmcmFtZUZyb21FbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./app.scss\\\"\"); e.code = 'MODULE_NOT_FOUND';; throw e; }()));\nvar removeIframeFromElement = __webpack_require__(1);\nvar addIframeToElement = __webpack_require__(0);\n\nvar body = document.getElementsByTagName(\"body\")[0];\nremoveIframeFromElement(body);\naddIframeToElement(body);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYXBwLnNjc3MnKTtcbnZhciByZW1vdmVJZnJhbWVGcm9tRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVtb3ZlSWZyYW1lRnJvbUVsZW1lbnQnKTtcbnZhciBhZGRJZnJhbWVUb0VsZW1lbnQgPSByZXF1aXJlKCcuL2FkZElmcmFtZVRvRWxlbWVudCcpO1xuXG52YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbnJlbW92ZUlmcmFtZUZyb21FbGVtZW50KGJvZHkpO1xuYWRkSWZyYW1lVG9FbGVtZW50KGJvZHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);