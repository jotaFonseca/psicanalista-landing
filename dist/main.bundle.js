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

/***/ "./js/modules/Carrossel.js":
/*!*********************************!*\
  !*** ./js/modules/Carrossel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Carrossel: () => (/* binding */ Carrossel)\n/* harmony export */ });\nclass Carrossel {\r\n  constructor() {\r\n    \r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://landing_page/./js/modules/Carrossel.js?");

/***/ }),

/***/ "./js/modules/ScrollAnimation.js":
/*!***************************************!*\
  !*** ./js/modules/ScrollAnimation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollAnimation: () => (/* binding */ ScrollAnimation)\n/* harmony export */ });\nclass ScrollAnimation {\r\n  constructor() {\r\n    this.sections = {\r\n      hero: document.querySelector('#hero'),\r\n      about: {\r\n        title: document.querySelector('.about-title'),\r\n        cv: document.querySelector('.about-cv'),\r\n        text: document.querySelector('.about-description-text'),\r\n        ilustration: document.querySelector('.about-description-ilustration'),\r\n        cta: document.querySelector('#about-cta'),\r\n        ctaButton: document.querySelector('#services-cta')\r\n      },\r\n      services: {\r\n        title: document.querySelector('.services-title'),\r\n        subtitle: document.querySelector('.service-content h3'),\r\n        description: document.querySelector('.service-content p'),\r\n        carrossel: document.querySelector('.carrossel-wrapper'),\r\n        dots: document.querySelector('.dots'),\r\n        cta: document.querySelector('.services-cta')\r\n      },\r\n      benefits: {\r\n        title: document.querySelector('.benefits-title'),\r\n        description: document.querySelector('.benefits-description'),\r\n        benefits: document.querySelector('.therapy-types'),\r\n        cta: document.querySelector('.cta-section')\r\n      },\r\n      contact: {\r\n        title: document.querySelector('.contact-title'),\r\n        text: document.querySelector('.contact-text'),\r\n        cta: document.querySelector('.contact-actions'),\r\n        ilustration: document.querySelector('.contact-ilustration')\r\n      }\r\n    }\r\n    this.defaultConfig = {\r\n      distance: '20%',\r\n      duration: 1000,\r\n      delay: 200,\r\n      reset: false\r\n    }\r\n  }\r\n\r\n  animateHero() {\r\n    window.ScrollReveal().reveal(this.sections.hero, {\r\n      ...this.defaultConfig,\r\n      duration: 3000,\r\n    })\r\n  }\r\n\r\n  animateAbout() {\r\n    window.ScrollReveal().reveal(this.sections.about.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.cv, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.text, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.ilustration, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000,\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000\r\n    })\r\n  }\r\n\r\n  animateServices() {\r\n    window.ScrollReveal().reveal(this.sections.services.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.subtitle, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.description, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.carrossel, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.dots, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.ctaButton, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    })\t\r\n  }\r\n\r\n  animateBenefits() {\r\n    window.ScrollReveal().reveal(this.sections.benefits.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 3000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.description, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 3000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.benefits, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 600\r\n    })\r\n  }\r\n\r\n  animateContact() {\r\n    window.ScrollReveal().reveal(this.sections.contact.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.text, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.ilustration, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 400\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (window.ScrollReveal) {\r\n      this.animateHero()\r\n      this.animateAbout()\r\n      this.animateServices()\r\n      this.animateBenefits()\r\n      this.animateContact()\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://landing_page/./js/modules/ScrollAnimation.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuMobile: () => (/* binding */ MenuMobile)\n/* harmony export */ });\nclass MenuMobile {\r\n  constructor(menu, navbar) {\r\n    this.menu = menu\r\n    this.navbar = navbar\r\n    this.navList = navbar.querySelector('#nav-list')\r\n    this.navLinks = navbar.querySelectorAll('#nav-list a')\r\n    this.headerContainer = document.querySelector('.header-container')\r\n\r\n    this.handleClick = this.handleClick.bind(this)\r\n    this.closeMenu = this.closeMenu.bind(this)\r\n    this.fixNavbar = this.fixNavbar.bind(this)\r\n  }\r\n\r\n  handleClick() {\r\n    this.navbar.classList.toggle('active')\r\n  }\r\n\r\n  closeMenu() {\r\n    this.navbar.classList.remove('active')\r\n  }\r\n\r\n  fixNavbar() {\r\n    if (window.pageYOffset > 80) {\r\n      this.headerContainer.classList.add('fixed-nav')\r\n    } else {\r\n      this.headerContainer.classList.remove('fixed-nav')\r\n    }\r\n  }\r\n\r\n  addScrollListener() {\r\n    window.addEventListener('scroll', this.fixNavbar)\r\n  }\r\n\r\n  addLinkListeners() {\r\n    this.navLinks.forEach(link => {\r\n      link.addEventListener('click', this.closeMenu)\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.menu) {\r\n      this.menu.addEventListener('click', this.handleClick)\r\n      this.addLinkListeners()\r\n      this.addScrollListener()\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://landing_page/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_ScrollAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScrollAnimation.js */ \"./js/modules/ScrollAnimation.js\");\n/* harmony import */ var _modules_Carrossel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Carrossel.js */ \"./js/modules/Carrossel.js\");\n\r\n\r\n\r\n\r\nconst menuMobile = document.querySelector('.mobile-menu')\r\nconst navbar = document.querySelector('.nav')\r\n\r\nconst menu = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__.MenuMobile(menuMobile, navbar)\r\nmenu.init()\r\n\r\nconst scroll = new _modules_ScrollAnimation_js__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimation()\r\nscroll.init()\r\n\r\nconst carrossel = new _modules_Carrossel_js__WEBPACK_IMPORTED_MODULE_2__.Carrossel()\r\ncarrossel.init()\n\n//# sourceURL=webpack://landing_page/./js/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;