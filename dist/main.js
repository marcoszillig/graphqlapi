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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql/schema */ \"./src/graphql/schema.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.express = express__WEBPACK_IMPORTED_MODULE_0__();\n    this.middleware();\n  }\n\n  _createClass(App, [{\n    key: \"middleware\",\n    value: function middleware() {\n      this.express.use('/graphql', express_graphql__WEBPACK_IMPORTED_MODULE_1__({\n        schema: _graphql_schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        graphiql: \"development\" === 'development'\n      }));\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new App().express);\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n\nvar users = [{\n  id: 1,\n  name: 'Jon',\n  email: 'jon@email.com'\n}, {\n  id: 2,\n  name: 'Dany',\n  email: 'dany@email.com'\n}];\nvar typeDefs = \"\\n  type User {\\n    id: ID!\\n    name: String!\\n    email: String!\\n  }\\n\\n  type Query {\\n    allUsers: [User!]!\\n  }\\n\\n  type Mutation {\\n    createUser(name: String!, email: String!): User\\n  }\\n\";\nvar resolvers = {\n  Query: {\n    allUsers: function allUsers() {\n      return users;\n    }\n  },\n  Mutation: {\n    createUser: function createUser(parent, args) {\n      var newUser = Object.assign({\n        id: users.length + 1\n      }, args);\n      users.push(newUser);\n      return newUser;\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n  typeDefs: typeDefs,\n  resolvers: resolvers\n}));\n\n//# sourceURL=webpack:///./src/graphql/schema.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\n\n\nvar server = http__WEBPACK_IMPORTED_MODULE_1__[\"createServer\"](_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar port = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizePort\"])(process.env.port || 3000);\nserver.listen(port);\nserver.on('error', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"onError\"])(server));\nserver.on(\"listening\", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"onListening\"])(server));\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: normalizePort, onError, onListening */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizePort\", function() { return normalizePort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onError\", function() { return onError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onListening\", function() { return onListening; });\nvar normalizePort = function normalizePort(val) {\n  var port = typeof val === 'string' ? parseInt(val) : val;\n  if (isNaN(port)) return val;else if (port >= 0) return port;else return false;\n};\nvar onError = function onError(server) {\n  return function (error) {\n    var port = server.address().port;\n    if (error.syscall !== 'listen') throw error;\n    var bind = typeof port === 'string' ? \"pipe \".concat(port) : \"port \".concat(port);\n\n    switch (error.code) {\n      case 'EACCES':\n        console.error(\"\".concat(bind, \" requires elevated privileges\"));\n        process.exit(1);\n        break;\n\n      case 'EADDRINUSE':\n        console.error(\"\".concat(bind, \" is already in use\"));\n        process.exit(1);\n        break;\n\n      default:\n        throw error;\n    }\n  };\n};\nvar onListening = function onListening(server) {\n  return function () {\n    var addr = server.address();\n    var bind = typeof addr === 'string' ? \"pipe \".concat(addr) : \"port \".concat(addr.port);\n    console.log(\"Listening at \".concat(bind, \"...\"));\n  };\n};\n\n//# sourceURL=webpack:///./src/utils/utils.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ })

/******/ });