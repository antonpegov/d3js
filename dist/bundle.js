/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sample2_js__ = __webpack_require__(2);
// Sample#1 - simple SVG Circle

let svg = d3.select('.sample1').append('svg').style('overflow', 'visible')
svg.attr('width', __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__["a" /* _SETUP1 */].width).attr('height', __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__["a" /* _SETUP1 */].height);
svg.append('circle')
    .attr('r', __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__["a" /* _SETUP1 */].scales.r(1380000000))
    .attr('cx', __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__["a" /* _SETUP1 */].scales.x(13300))
    .attr('cy', __WEBPACK_IMPORTED_MODULE_0__modules_sample1_js__["a" /* _SETUP1 */].scales.y(90))
    .attr('fill','red');


// Sample#2 - Simple Histogram



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
const setup = {
    width: 800,
    height: 600,
    scales: {
        x: undefined,   // масштаб по x
        y: undefined,   // масштаб по y
        r: undefined    // масштаб радиуса
    }
}
setup.scales.x = d3.scaleLog()
    .domain([250, 100000])
    .range([0,setup.width])
setup.scales.y = d3.scaleLinear()
    .domain([15, 90])
    .range([setup.height, 0])
setup.scales.r = d3.scaleLinear()
    .domain([52070, 1380000000])
    .range([10,50])



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SETUP2 */
const setup ={}


/***/ })
/******/ ]);