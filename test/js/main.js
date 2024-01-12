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

eval("\r\n// ========================================================\r\nconst apiUrl = 'https://api-afiliates.salesdoubler.pro/offers/offer_categories';\r\nconst apiKey = 'biI-DBtX9GU8RlFyhfeenDsUPNWiAB4i'; // Замените на ваш реальный API ключ\r\n\r\nfetch(apiUrl, {\r\n  method: 'GET',\r\n  headers: {\r\n    'X-API-Key': apiKey,\r\n    'Content-Type': 'application/json',\r\n    // Другие необходимые заголовки, если есть\r\n\r\n    // Разрешаем только эти методы\r\n    'Access-Control-Allow-Methods': 'GET, POST',\r\n\r\n    // Разрешаем отправку указанных заголовков\r\n    'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',\r\n    \r\n    // Разрешаем запросы с любого источника\r\n    'Access-Control-Allow-Origin': 'http://localhost:3000',\r\n  },\r\n})\r\n  .then(response => {\r\n    if (!response.ok) {\r\n      throw new Error(`Ошибка сети: ${response.status}`);\r\n    }\r\n    return response.json();\r\n  })\r\n  .then(data => {\r\n    // Обработка полученных данных\r\n    console.log(data);\r\n  })\r\n  .catch(error => {\r\n    // Обработка ошибок\r\n    console.error('Ошибка при выполнении fetch запроса:', error);\r\n  });\r\n\r\n\r\n\r\n//   ================================================\r\n\r\nconst app = express();\r\nconst port = 3000; // Порт вашего локального сервера\r\n\r\n// Замените на адрес вашего API и API ключ\r\nconst apiTarget = 'https://api-afiliates.salesdoubler.pro/offers/offer_categories';\r\n// Прокси-мидлвар для перенаправления запросов к API\r\nconst apiProxy = createProxyMiddleware({\r\n  target: apiTarget,\r\n  changeOrigin: true,\r\n  headers: {\r\n    'X-API-Key': apiKey,\r\n  },\r\n  pathRewrite: {\r\n    '^/api': '', // Убираем /api из URL, если необходимо\r\n  },\r\n});\r\n\r\n// Привязываем прокси к пути /api\r\napp.use('/api', apiProxy);\r\n\r\n// Запускаем локальный сервер\r\napp.listen(port, () => {\r\n  console.log(`Прокси-сервер слушает на порту ${port}`);\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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