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

/***/ "./src/js/libs.js":
/*!************************!*\
  !*** ./src/js/libs.js ***!
  \************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://gulp-starter/./src/js/libs.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("window.addEventListener('load', function() {\r\n    menuToggle();\r\n    updateTable(serverResponse);\r\n})\r\n/*==========[ Выпадающее Меню Бургер ]==========*/\r\nfunction menuToggle() {\r\n    const meinField = document.querySelector('.main-field');\r\n    const menu = document.querySelector('.navigation__main-menu');\r\n    const mainHamburger = document.querySelector('.navigation__hamburger')\r\n    const smallHamburger = document.querySelector('.main-menu__hamburger')\r\n    const dropdownMenu = document.querySelector('.navigation__main-menu')\r\n    const html = document.querySelector('html')\r\n\r\n    document.addEventListener('click', function(e) {\r\n        console.log(e.target)\r\n        /*==========[ Обработка клика по оверлею ]==========*/\r\n        if(e.target === meinField && mainHamburger.classList.contains('active')) {\r\n            console.log('Клик по оверлею!')\r\n            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')\r\n            menu.classList.remove('open')\r\n            mainHamburger.classList.remove('active')\r\n            html.classList.toggle('locked')\r\n        }\r\n        /*==========[ Обработка клика по гамбургеру ]==========*/\r\n        else if (mainHamburger.contains(e.target)) {\r\n            console.log('Клик по гамбургеру')\r\n            if(mainHamburger.classList.contains('active'))\r\n            {       \r\n                mainHamburger.classList.remove('active')\r\n            }else {\r\n                mainHamburger.classList.add('active')\r\n            }\r\n            dropdownMenu.classList.toggle('open')\r\n            html.classList.toggle('locked')\r\n            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')\r\n        }\r\n        /*==========[ Обработка клика по второму гамбургеру ]==========*/\r\n        else if (smallHamburger.contains(e.target)) {\r\n            console.log('Клик по второму гамбургеру')\r\n            dropdownMenu.classList.remove('open')\r\n            html.classList.remove('locked')\r\n            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')\r\n            mainHamburger.classList.remove('active')\r\n        }\r\n    })\r\n}\r\n/*==========[ Анимация затемнения ]==========*/\r\nfunction overlayFadeOutAnimation(element, fadeIn, fadeOut) {\r\n    if(element.classList.contains(fadeIn)) {\r\n        element.classList.add(fadeOut)\r\n        element.classList.remove(fadeIn)\r\n        setTimeout(()=>{\r\n            element.classList.remove(fadeOut)\r\n        }, 950)\r\n    } else {\r\n        element.classList.add(fadeIn)\r\n    }\r\n}\r\n\r\n/*          //Пример Запроса Данных\r\n  fetch('http://example.com/api/customers')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        updateTable(data);\r\n    })\r\n    .catch(error => console.error('Error getting data:', error));\r\n*/\r\n\r\n/*=====[ Распарсим Ответ Сервера В Таблицу ]=====*/\r\nfunction updateTable(data) {\r\n    const tbody  = document.querySelector('.customers-list__data-wrap');\r\n    for (const dataObject of data) {\r\n        const dataRow = document.createElement(\"tr\");\r\n        dataRow.className = 'customers-list__row customers-list__row_data';\r\n        for (const key of Object.keys(dataObject)) {\r\n            const td = document.createElement('td');\r\n            const span = document.createElement('span');\r\n            td.className = 'customers-list__col';\r\n            span.className = 'customers-list__text';\r\n            span.textContent = dataObject[key];\r\n            if (key === 'Status') {\r\n                const statusSpan = document.createElement('span');\r\n                statusSpan.className = `customers-list__text customers-list__status customers-list__status_${dataObject[key].toLowerCase()}`;\r\n                statusSpan.textContent = dataObject[key];\r\n                td.appendChild(statusSpan);\r\n            }else {\r\n                td.appendChild(span);\r\n            }\r\n            dataRow.appendChild(td);\r\n        }\r\n        tbody.appendChild(dataRow);\r\n      }\r\n}\r\n\r\n/*=====[ Пример Ответа сервера ]=====*/\r\nconst serverResponse = [\r\n    {\r\n      \"CustomerName\": \"Jane Cooper\",\r\n      \"Company\": \"Microsoft\",\r\n      \"PhoneNumber\": \"(225) 555-0118\",\r\n      \"Email\": \"jane@microsoft.com\",\r\n      \"Country\": \"United States\",\r\n      \"Status\": \"Active\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Floyd Miles\",\r\n      \"Company\": \"Yahoo\",\r\n      \"PhoneNumber\": \"(205) 555-0100\",\r\n      \"Email\": \"floyd@yahoo.com\",\r\n      \"Country\": \"Kiribati\",\r\n      \"Status\": \"Inactive\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Ronald Richards\",\r\n      \"Company\": \"Adobe\",\r\n      \"PhoneNumber\": \"(302) 555-0107\",\r\n      \"Email\": \"ronald@adobe.com\",\r\n      \"Country\": \"Israel\",\r\n      \"Status\": \"Inactive\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Marvin McKinney\",\r\n      \"Company\": \"Tesla\",\r\n      \"PhoneNumber\": \"(252) 555-0126\",\r\n      \"Email\": \"marvin@tesla.com\",\r\n      \"Country\": \"Iran\",\r\n      \"Status\": \"Active\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Jerome Bell\",\r\n      \"Company\": \"Google\",\r\n      \"PhoneNumber\": \"(629) 555-0129\",\r\n      \"Email\": \"jerome@google.com\",\r\n      \"Country\": \"Réunion\",\r\n      \"Status\": \"Active\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Kathryn Murphy\",\r\n      \"Company\": \"Microsoft\",\r\n      \"PhoneNumber\": \"(406) 555-0120\",\r\n      \"Email\": \"kathryn@microsoft.com\",\r\n      \"Country\": \"Curaçao\",\r\n      \"Status\": \"Active\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Jacob Jones\",\r\n      \"Company\": \"Yahoo\",\r\n      \"PhoneNumber\": \"(208) 555-0112\",\r\n      \"Email\": \"jacob@yahoo.com\",\r\n      \"Country\": \"Brazil\",\r\n      \"Status\": \"Active\"\r\n    },\r\n    {\r\n      \"CustomerName\": \"Kristin Watson\",\r\n      \"Company\": \"Facebook\",\r\n      \"PhoneNumber\": \"(704) 555-0127\",\r\n      \"Email\": \"kristin@facebook.com\",\r\n      \"Country\": \"Åland Islands\",\r\n      \"Status\": \"Inactive\"\r\n    }\r\n  ]\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/libs.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;