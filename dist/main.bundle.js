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

/***/ "./src/js/modules/ScrollAnimation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/ScrollAnimation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollAnimation: () => (/* binding */ ScrollAnimation)\n/* harmony export */ });\nclass ScrollAnimation {\r\n  constructor() {\r\n    this.sections = {\r\n      hero: document.querySelector('#hero'),\r\n      about: {\r\n        title: document.querySelector('.about-title'),\r\n        cv: document.querySelector('.about-cv'),\r\n        text: document.querySelector('.about-description-text'),\r\n        ilustration: document.querySelector('.about-description-ilustration'),\r\n        cta: document.querySelector('#about-cta'),\r\n        ctaButton: document.querySelector('#services-cta')\r\n      },\r\n      services: {\r\n        title: document.querySelector('.services-title'),\r\n        subtitle: document.querySelector('.service-content h3'),\r\n        description: document.querySelector('.service-content p'),\r\n        carrossel: document.querySelector('.carrossel-wrapper'),\r\n        dots: document.querySelector('.dots'),\r\n        cta: document.querySelector('.services-cta')\r\n      },\r\n      benefits: {\r\n        title: document.querySelector('.benefits-title'),\r\n        description: document.querySelector('.benefits-description'),\r\n        benefits: document.querySelector('.therapy-types'),\r\n        cta: document.querySelector('.cta-section')\r\n      },\r\n      contact: {\r\n        title: document.querySelector('.contact-title'),\r\n        text: document.querySelector('.contact-text'),\r\n        cta: document.querySelector('.contact-actions'),\r\n        ilustration: document.querySelector('.contact-ilustration')\r\n      }\r\n    }\r\n    this.defaultConfig = {\r\n      distance: '20%',\r\n      duration: 1000,\r\n      delay: 200,\r\n      reset: false\r\n    }\r\n  }\r\n\r\n  animateHero() {\r\n    window.ScrollReveal().reveal(this.sections.hero, {\r\n      ...this.defaultConfig,\r\n      duration: 3000,\r\n    })\r\n  }\r\n\r\n  animateAbout() {\r\n    window.ScrollReveal().reveal(this.sections.about.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.cv, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.text, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.ilustration, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000,\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 2000\r\n    })\r\n  }\r\n\r\n  animateServices() {\r\n    window.ScrollReveal().reveal(this.sections.services.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.subtitle, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.description, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.carrossel, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.dots, {\r\n      ...this.defaultConfig,\r\n      duration: 2000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.services.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.about.ctaButton, {\r\n      ...this.defaultConfig,\r\n      origin: 'right',\r\n      duration: 2000\r\n    })\t\r\n  }\r\n\r\n  animateBenefits() {\r\n    window.ScrollReveal().reveal(this.sections.benefits.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 3000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.description, {\r\n      ...this.defaultConfig,\r\n      origin: 'left',\r\n      duration: 3000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.benefits, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 500\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.benefits.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 600\r\n    })\r\n  }\r\n\r\n  animateContact() {\r\n    window.ScrollReveal().reveal(this.sections.contact.title, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.text, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 300\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.cta, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 400\r\n    }),\r\n    window.ScrollReveal().reveal(this.sections.contact.ilustration, {\r\n      ...this.defaultConfig,\r\n      origin: 'bottom',\r\n      duration: 3000,\r\n      delay: 400\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (window.ScrollReveal) {\r\n      this.animateHero()\r\n      this.animateAbout()\r\n      this.animateServices()\r\n      this.animateBenefits()\r\n      this.animateContact()\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://landing_page/./src/js/modules/ScrollAnimation.js?");

/***/ }),

/***/ "./src/js/modules/debounce.js":
/*!************************************!*\
  !*** ./src/js/modules/debounce.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer)\r\n    timer = setTimeout(() => {\r\n      callback(...args)\r\n      timer = null\r\n      }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://landing_page/./src/js/modules/debounce.js?");

/***/ }),

/***/ "./src/js/modules/menuMobile.js":
/*!**************************************!*\
  !*** ./src/js/modules/menuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuMobile: () => (/* binding */ MenuMobile)\n/* harmony export */ });\nclass MenuMobile {\r\n  constructor(menu, navbar) {\r\n    this.menu = menu\r\n    this.navbar = navbar\r\n    this.navList = navbar.querySelector('#nav-list')\r\n    this.navLinks = navbar.querySelectorAll('#nav-list a')\r\n    this.headerContainer = document.querySelector('.header-container')\r\n\r\n    this.handleClick = this.handleClick.bind(this)\r\n    this.closeMenu = this.closeMenu.bind(this)\r\n    this.fixNavbar = this.fixNavbar.bind(this)\r\n  }\r\n\r\n  handleClick() {\r\n    this.navbar.classList.toggle('active')\r\n  }\r\n\r\n  closeMenu() {\r\n    this.navbar.classList.remove('active')\r\n  }\r\n\r\n  fixNavbar() {\r\n    if (window.pageYOffset > 80) {\r\n      this.headerContainer.classList.add('fixed-nav')\r\n    } else {\r\n      this.headerContainer.classList.remove('fixed-nav')\r\n    }\r\n  }\r\n\r\n  addScrollListener() {\r\n    window.addEventListener('scroll', this.fixNavbar)\r\n  }\r\n\r\n  addLinkListeners() {\r\n    this.navLinks.forEach(link => {\r\n      link.addEventListener('click', this.closeMenu)\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.menu) {\r\n      this.menu.addEventListener('click', this.handleClick)\r\n      this.addLinkListeners()\r\n      this.addScrollListener()\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://landing_page/./src/js/modules/menuMobile.js?");

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./src/js/modules/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\r\n    this.activeClass = \"active\";\r\n    this.slideIndexByData = {};\r\n    this.slidesPerView = 3;\r\n    this.changeEvent = new Event('changeEvent');\r\n  }\r\n\r\n  transition(active) {\r\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  slidePosition(slide){\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 12;\r\n    const slideCenter = -(slide.offsetLeft - margin);\r\n    return slideCenter;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = this.dist.startX - clientX;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  onStart(e) {\r\n    let movetype;\r\n    if (e.type === \"mousedown\") {\r\n      e.preventDefault();\r\n      this.dist.startX = e.clientX;\r\n      movetype = \"mousemove\";\r\n    } else {\r\n      this.dist.startX = e.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(e) {\r\n    const pointerPosition =\r\n      e.type === \"mousemove\" ? e.clientX : e.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(e) {\r\n    const movetype = e.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  initSlidesByData() {\r\n    this.slideArray.forEach((item, index) => {\r\n      const dataSlide = parseInt(item.element.dataset.slide);\r\n      this.slideIndexByData[dataSlide] = index;\r\n    });\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n\r\n    changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener('mousedown', this.onStart);\r\n    this.wrapper.addEventListener('touchstart', this.onStart);\r\n    this.wrapper.addEventListener('mouseup', this.onEnd);\r\n    this.wrapper.addEventListener('touchend', this.onEnd);\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index === 0 ? last : index - 1,\r\n      active: index,\r\n      next: index === last ? 0 : index + 1,\r\n    };\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) =>\r\n      item.element.classList.remove(this.activeClass)\r\n    );\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    const prev = this.index.prev;\r\n    this.changeSlide(prev);\r\n  }\r\n\r\n  activeNextSlide() {\r\n    const next = this.index.next;\r\n    this.changeSlide(next);\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 1000);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener(\"resize\", this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.addResizeEvent();\r\n    this.changeSlide(0)\r\n\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener('click', this.activePrevSlide);\r\n    this.nextElement.addEventListener('click', this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"slide\";\r\n\r\n    const orderedSlides = [...this.slideArray].sort((a, b) => {\r\n      const aData = parseInt(a.element.dataset.slide);\r\n      const bData = parseInt(b.element.dataset.slide);\r\n      return aData - bData;\r\n    });\r\n\r\n    orderedSlides.forEach((item) => {\r\n      const dataSlide = item.element.dataset.slide;\r\n      control.innerHTML += `<li><a href=\"#slide${dataSlide}\">${dataSlide}</a></li>`;\r\n    });\r\n\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const dataSlide = index + 1;\r\n      this.changeSlide(this.slideIndexByData[dataSlide]);\r\n    });\r\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) =>\r\n      item.classList.remove(this.activeClass)\r\n    );\r\n    const currentSlide = parseInt(\r\n      this.slideArray[this.index.active].element.dataset.slide\r\n    );\r\n    const controlIndex = currentSlide - 1;\r\n    this.controlArray[controlIndex].classList.add(this.activeClass);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://landing_page/./src/js/modules/slide.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./src/js/modules/menuMobile.js\");\n/* harmony import */ var _modules_ScrollAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScrollAnimation.js */ \"./src/js/modules/ScrollAnimation.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide.js */ \"./src/js/modules/slide.js\");\n\r\n\r\n\r\n\r\nconst menuMobile = document.querySelector('.mobile-menu')\r\nconst navbar = document.querySelector('.nav')\r\n\r\nconst menu = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__.MenuMobile(menuMobile, navbar)\r\nmenu.init()\r\n\r\nconst scroll = new _modules_ScrollAnimation_js__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimation()\r\nscroll.init()\r\n\r\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.slide', '.wrapper')\r\nslide.init()\r\nslide.addArrow('.prev', '.next')\r\nslide.addControl('.custom-controls')\n\n//# sourceURL=webpack://landing_page/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;