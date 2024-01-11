/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("window.addEventListener('load', function() {\r\n    hamburgerActivator();\r\n})\r\n\r\n\r\nfunction hamburgerActivator() {\r\n    const hamburgers = document.querySelectorAll('.header-hamburger')\r\n    const dropdownMenu = document.querySelector('.navBar-dropdown')\r\n    const body = document.body;\r\n\r\n    hamburgers.forEach((e)=> {\r\n        e.addEventListener('click', ()=> {\r\n            // как это сократить?)))\r\n            if(\r\n                hamburgers[0].classList.contains('active') \r\n                ||\r\n                hamburgers[1].classList.contains('active'))\r\n                {\r\n                    hamburgers[0].classList.remove('active')\r\n                    hamburgers[1].classList.remove('active')\r\n\r\n                }else {\r\n                    hamburgers[0].classList.remove('active')\r\n                    hamburgers[1].classList.remove('active')\r\n                    hamburgers[0].classList.add('active')\r\n                    hamburgers[1].classList.add('active')\r\n            }\r\n            dropdownMenu.classList.toggle('open')\r\n            body.classList.toggle('locked')\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;