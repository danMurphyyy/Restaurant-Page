/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------- GENERAL ---------------- */\r\nbody {\r\n  margin: 0px;\r\n  font-family: Roboto;\r\n  padding-top: 60px;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 20px;\r\n  box-sizing: border-box;\r\n  background-color: black;\r\n  color: white;\r\n  z-index: 1000;\r\n}\r\n\r\n/* BUTTONS */\r\n.button-container {\r\n  display: flex;\r\n  gap: 20px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.button-container button {\r\n  width: 70px;\r\n  height: 30px;\r\n  background-color: rgb(135, 250, 150);\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* HAMBURGER */\r\n.hamburger {\r\n  display: none; /* hide by default on desktop */\r\n  flex-direction: column;\r\n  cursor: pointer;\r\n  width: 30px;\r\n  height: 25px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.hamburger div {\r\n  height: 4px;\r\n  background-color: white;\r\n  border-radius: 2px;\r\n}\r\n\r\n/* MOBILE STYLES */\r\n@media (max-width: 768px) {\r\n  .button-container {\r\n    display: none; /* hide menu initially */\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 60px; /* below header */\r\n    right: 20px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .button-container.show {\r\n    display: flex; /* show menu when toggled */\r\n  }\r\n\r\n  .hamburger {\r\n    display: flex; /* show hamburger on mobile */\r\n  }\r\n}\r\n\r\n/* ---------------- HERO ---------------- */\r\n.page-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-size: cover;\r\n  background-position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.overlay {\r\n  background-color: rgba(0, 0, 0, 0.8); /* 40% opacity */\r\n  padding: 2rem;\r\n  border-radius: 12px;\r\n  color: white;\r\n  text-align: center;\r\n  max-width: 600px;\r\n}\r\n\r\nh2 {\r\n  font-size: 50px;\r\n}\r\n\r\n/* ---------------- ABOUT SECTION ---------------- */\r\n.about-section {\r\n  padding: 2rem 20px;\r\n  text-align: center;\r\n}\r\n\r\n/* ---------------- CAROUSEL ---------------- */\r\n.carousel-section {\r\n  padding: 2rem 20px;\r\n  text-align: center;\r\n  position: relative;\r\n  height: 350px;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-slide {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity 0.8s ease-in-out;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.carousel-slide.active {\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-slide img {\r\n  width: 100%;\r\n  height: 220px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n.carousel-slide h4 {\r\n  margin: 0.5rem 0 0.2rem 0;\r\n}\r\n\r\n.carousel-slide p {\r\n  margin: 0 0 1rem 0;\r\n}\r\n\r\n.carousel-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background-color: rgba(0,0,0,0.6);\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  z-index: 10;\r\n}\r\n\r\n.carousel-btn.prev {\r\n  left: 10px;\r\n}\r\n\r\n.carousel-btn.next {\r\n  right: 10px;\r\n}\r\n\r\n/* ---------------- CONTACT SECTION ---------------- */\r\n.contact-section {\r\n  background-color: #222;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 2rem 20px;\r\n}\r\n\r\n/* ---------------- RESPONSIVE ---------------- */\r\n@media (max-width: 768px) {\r\n  .overlay {\r\n    max-width: 90%;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .carousel-slide img {\r\n    max-width: 90%;\r\n    height: auto;\r\n  }\r\n\r\n  .carousel-slide p {\r\n    max-width: 80%;\r\n  }\r\n\r\n  .carousel-btn {\r\n    font-size: 1.2rem;\r\n    padding: 0.4rem 0.8rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/streetView.webp":
/*!************************************!*\
  !*** ./src/assets/streetView.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"fdd9a8e51ff44f47ec59.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/streetView.webp?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad */ \"./src/menuLoad.js\");\n/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuToggle */ \"./src/menuToggle.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\n// load home by default\r\nconst home = new _pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"content\");\r\nhome.render();\r\n\r\n// Buttons\r\nconst homeBtn = document.getElementById(\"home-btn\");\r\nconst menuBtn = document.getElementById(\"menu-btn\");\r\n\r\n// Home button click\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  content.innerHTML = \"\"; // clear old content\r\n  const home = new _pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"content\");\r\n  home.render();\r\n});\r\n\r\n// Menu button click\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  content.innerHTML = \"\";\r\n  const menu = new _menuLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"content\");\r\n  menu.render();\r\n});\r\n\r\n(0,_menuToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n // if you have menu-specific styles\r\n\r\nclass MenuLoader {\r\n  constructor(containerId) {\r\n    this.container = document.getElementById(containerId);\r\n  }\r\n\r\n  render() {\r\n    const heading = document.createElement(\"h2\");\r\n    heading.textContent = \"Our Menu\";\r\n\r\n    const menuList = document.createElement(\"ul\");\r\n\r\n    const items = [\r\n      { name: \"Fish & Chips\", desc: \"Classic pub dish\", price: \"£12\" },\r\n      { name: \"Burger\", desc: \"Beef patty with fries\", price: \"£10\" },\r\n      { name: \"Steak\", desc: \"Cooked to perfection\", price: \"£20\" },\r\n    ];\r\n\r\n    items.forEach(item => {\r\n      const li = document.createElement(\"li\");\r\n      li.innerHTML = `<strong>${item.name}</strong> - ${item.desc} (${item.price})`;\r\n      menuList.appendChild(li);\r\n    });\r\n\r\n    this.container.appendChild(heading);\r\n    this.container.appendChild(menuList);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuLoader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuLoad.js?\n}");

/***/ }),

/***/ "./src/menuToggle.js":
/*!***************************!*\
  !*** ./src/menuToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setupMenuToggle)\n/* harmony export */ });\n// menuToggle.js\r\nfunction setupMenuToggle() {\r\n  const hamburger = document.querySelector(\".hamburger\");\r\n  const menu = document.querySelector(\".button-container\");\r\n\r\n  if (!hamburger || !menu) return;\r\n\r\n  hamburger.addEventListener(\"click\", () => {\r\n    menu.classList.toggle(\"show\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuToggle.js?\n}");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_streetView_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/streetView.webp */ \"./src/assets/streetView.webp\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\nclass PageLoader {\r\n  constructor(containerId) {\r\n    this.container = document.getElementById(containerId);\r\n    this.currentSlide = 0;\r\n    this.slides = [];\r\n    this.intervalId = null;\r\n    this.startX = 0;\r\n    this.endX = 0;\r\n  }\r\n\r\n  render() {\r\n    this.container.innerHTML = \"\";\r\n\r\n    // ---------------- HERO ----------------\r\n    const hero = document.createElement(\"div\");\r\n    hero.classList.add(\"page-wrapper\");\r\n    hero.style.backgroundImage = `url(${_assets_streetView_webp__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n    const overlay = document.createElement(\"div\");\r\n    overlay.classList.add(\"overlay\");\r\n\r\n    const heading = document.createElement(\"h2\");\r\n    heading.textContent = \"Welcome to The Royal Oak!\";\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.textContent = \"A community-focused pub in Kings Bromley, providing good pints at good prices.\";\r\n\r\n    overlay.appendChild(heading);\r\n    overlay.appendChild(para);\r\n    hero.appendChild(overlay);\r\n    this.container.appendChild(hero);\r\n\r\n    // ---------------- ABOUT ----------------\r\n    const about = document.createElement(\"section\");\r\n    about.classList.add(\"about-section\");\r\n\r\n    const aboutHeading = document.createElement(\"h3\");\r\n    aboutHeading.textContent = \"About Us\";\r\n\r\n    const aboutText = document.createElement(\"p\");\r\n    aboutText.textContent = \"The Royal Oak has been serving locals and visitors since 1890. Relax, enjoy a pint, and soak in the warm atmosphere.\";\r\n\r\n    about.appendChild(aboutHeading);\r\n    about.appendChild(aboutText);\r\n    this.container.appendChild(about);\r\n\r\n    // ---------------- CAROUSEL ----------------\r\n    const carouselSection = document.createElement(\"section\");\r\n    carouselSection.classList.add(\"carousel-section\");\r\n\r\n    const carouselHeading = document.createElement(\"h3\");\r\n    carouselHeading.textContent = \"Our Specials\";\r\n    carouselSection.appendChild(carouselHeading);\r\n\r\n    const carousel = document.createElement(\"div\");\r\n    carousel.classList.add(\"carousel\");\r\n\r\n    for (let i = 1; i <= 11; i++) {\r\n      const slide = document.createElement(\"div\");\r\n      slide.classList.add(\"carousel-slide\");\r\n\r\n      const img = document.createElement(\"img\");\r\n      img.src = `./assets/pic${i}.webp`;\r\n      img.alt = `Dish ${i}`;\r\n\r\n      const title = document.createElement(\"h4\");\r\n      title.textContent = `Dish ${i}`;\r\n\r\n      const desc = document.createElement(\"p\");\r\n      desc.textContent = `A tasty dish to enjoy. Description for dish ${i}.`;\r\n\r\n      slide.appendChild(img);\r\n      slide.appendChild(title);\r\n      slide.appendChild(desc);\r\n      carousel.appendChild(slide);\r\n      this.slides.push(slide);\r\n    }\r\n\r\n    carouselSection.appendChild(carousel);\r\n\r\n    // Buttons\r\n    const prevBtn = document.createElement(\"button\");\r\n    prevBtn.textContent = \"<\";\r\n    prevBtn.classList.add(\"carousel-btn\", \"prev\");\r\n\r\n    const nextBtn = document.createElement(\"button\");\r\n    nextBtn.textContent = \">\";\r\n    nextBtn.classList.add(\"carousel-btn\", \"next\");\r\n\r\n    carouselSection.appendChild(prevBtn);\r\n    carouselSection.appendChild(nextBtn);\r\n    this.container.appendChild(carouselSection);\r\n\r\n    // Initial display\r\n    this.slides.forEach((slide, index) => {\r\n      slide.style.opacity = index === 0 ? \"1\" : \"0\";\r\n      slide.style.position = \"absolute\";\r\n      slide.style.top = \"0\";\r\n      slide.style.left = \"0\";\r\n      slide.style.width = \"100%\";\r\n      slide.style.transition = \"opacity 0.8s ease-in-out\";\r\n    });\r\n\r\n    prevBtn.addEventListener(\"click\", () => this.showSlide(this.currentSlide - 1));\r\n    nextBtn.addEventListener(\"click\", () => this.showSlide(this.currentSlide + 1));\r\n\r\n    // Swipe events\r\n    carousel.addEventListener(\"touchstart\", (e) => this.onTouchStart(e), false);\r\n    carousel.addEventListener(\"touchend\", (e) => this.onTouchEnd(e), false);\r\n\r\n    this.startAutoSlide();\r\n  }\r\n\r\n  showSlide(index) {\r\n    this.slides[this.currentSlide].style.opacity = \"0\";\r\n    this.currentSlide = (index + this.slides.length) % this.slides.length;\r\n    this.slides[this.currentSlide].style.opacity = \"1\";\r\n  }\r\n\r\n  startAutoSlide() {\r\n    this.intervalId = setInterval(() => {\r\n      this.showSlide(this.currentSlide + 1);\r\n    }, 4000);\r\n  }\r\n\r\n  stopAutoSlide() {\r\n    clearInterval(this.intervalId);\r\n  }\r\n\r\n  onTouchStart(event) {\r\n    this.startX = event.touches[0].clientX;\r\n    this.stopAutoSlide();\r\n  }\r\n\r\n  onTouchEnd(event) {\r\n    this.endX = event.changedTouches[0].clientX;\r\n    const diff = this.startX - this.endX;\r\n\r\n    if (Math.abs(diff) > 50) { // swipe threshold\r\n      if (diff > 0) this.showSlide(this.currentSlide + 1); // swipe left\r\n      else this.showSlide(this.currentSlide - 1); // swipe right\r\n    }\r\n\r\n    this.startAutoSlide();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;