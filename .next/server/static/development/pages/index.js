module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.jsx":
/*!*******************************!*\
  !*** ./components/footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/camilo/Documentos/eltiempo/et-fashion-front/components/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class AppFooter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "row justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-6 col-lg-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "single_footer_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Category"), __jsx("ul", {
      className: "list-unstyled",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Male")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Female")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Shoes")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Fashion"))))), __jsx("div", {
      className: "col-sm-6 col-lg-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "single_footer_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Company"), __jsx("ul", {
      className: "list-unstyled",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "About")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "News")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "FAQ")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Contact"))))), __jsx("div", {
      className: "col-sm-6 col-lg-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "single_footer_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Address"), __jsx("ul", {
      className: "list-unstyled",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "200, Green block, NewYork")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "+10 456 267 1678")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "contact89@winter.com"))))), __jsx("div", {
      className: "col-sm-6 col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "single_footer_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Newsletter"), __jsx("div", {
      id: "mc_embed_signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("form", {
      target: "_blank",
      action: "https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01",
      method: "get",
      className: "subscribe_form relative mail_part",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("input", {
      type: "email",
      name: "email",
      id: "newsletter-form-email",
      placeholder: "Email Address",
      className: "placeholder hide-on-focus",
      onFocus: "this.placeholder = ''",
      onBlur: "this.placeholder = ' Email Address '",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      name: "submit",
      id: "newsletter-submit",
      className: "email_icon newsletter-submit button-contactForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "subscribe"), __jsx("div", {
      className: "mt-10 info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("i", {
      className: "ti-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("i", {
      className: "ti-twitter-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })))))), __jsx("div", {
      className: "row justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "copyright_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/camilo/Documentos/eltiempo/et-fashion-front/components/header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class AppHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("header", {
      className: "main_menu home_menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), " ", __jsx("img", {
      src: "/static/assets/template/winter/img/logo.png",
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("span", {
      className: "menu_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-bars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }))), __jsx("div", {
      className: "collapse navbar-collapse main-menu-item",
      id: "navbarSupportedContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Home")), __jsx("li", {
      className: "nav-item dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link dropdown-toggle",
      href: "blog.html",
      id: "navbarDropdown_1",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Shop"), __jsx("div", {
      className: "dropdown-menu",
      "aria-labelledby": "navbarDropdown_1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-item",
      href: "category.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, " shop category"), __jsx("a", {
      className: "dropdown-item",
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "product details"))), __jsx("li", {
      className: "nav-item dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link dropdown-toggle",
      href: "blog.html",
      id: "navbarDropdown_3",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "pages"), __jsx("div", {
      className: "dropdown-menu",
      "aria-labelledby": "navbarDropdown_2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-item",
      href: "login.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "login"), __jsx("a", {
      className: "dropdown-item",
      href: "tracking.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "tracking"), __jsx("a", {
      className: "dropdown-item",
      href: "checkout.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "product checkout"), __jsx("a", {
      className: "dropdown-item",
      href: "cart.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "shopping cart"), __jsx("a", {
      className: "dropdown-item",
      href: "confirmation.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "confirmation"), __jsx("a", {
      className: "dropdown-item",
      href: "elements.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "elements"))), __jsx("li", {
      className: "nav-item dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link dropdown-toggle",
      href: "blog.html",
      id: "navbarDropdown_2",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "blog"), __jsx("div", {
      className: "dropdown-menu",
      "aria-labelledby": "navbarDropdown_2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-item",
      href: "blog.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, " blog"), __jsx("a", {
      className: "dropdown-item",
      href: "single-blog.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Single blog"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      href: "contact.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Contact")))), __jsx("div", {
      className: "hearer_icon d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "dropdown cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-toggle",
      href: "#",
      id: "navbarDropdown3",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), __jsx("a", {
      id: "search_1",
      href: "javascript:void(0)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("i", {
      className: "ti-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }))))))));
  }

}

/***/ }),

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.jsx");
var _jsxFileName = "/home/camilo/Documentos/eltiempo/et-fashion-front/components/layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AppLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
var _jsxFileName = "/home/camilo/Documentos/eltiempo/et-fashion-front/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("section", {
      className: "new_arrival section_padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "arrival_tittle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "new arrival"))), __jsx("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "arrival_filter_item filters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("li", {
      className: "active controls",
      "data-filter": "*",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "all"), __jsx("li", {
      className: "controls",
      "data-toggle": ".men",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "men"), __jsx("li", {
      className: "controls",
      "data-toggle": ".women",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "women"), __jsx("li", {
      className: "controls",
      "data-toggle": ".shoes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "shoes")))))), __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "new_arrival_iner filter-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "single_arrivel_item weidth_1 mix shoes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_5.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }))))), __jsx("div", {
      className: "single_arrivel_item weidth_2 mix women",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_2.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }))))), __jsx("div", {
      className: "single_arrivel_item weidth_3 mix shoes women",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_3.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }))))), __jsx("div", {
      className: "single_arrivel_item weidth_3 mix women men",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_4.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))))), __jsx("div", {
      className: "single_arrivel_item weidth_2 mix men women",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_1.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))))), __jsx("div", {
      className: "single_arrivel_item weidth_1 mix shoes men",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/arrivel/arrivel_6.png",
      alt: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx("div", {
      className: "hover_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Canvas"), __jsx("a", {
      href: "single-product.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Lorem Canvas Low-Top Sneaker")), __jsx("div", {
      className: "rate_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), " "), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, " ", __jsx("i", {
      className: "fas fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), " ")), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "$150"), __jsx("div", {
      className: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("i", {
      className: "ti-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("i", {
      className: "ti-bag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })))))))))), __jsx("section", {
      className: "shipping_details section_padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      className: "single_shopping_details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/icon/icon_1.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Free shipping"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Divided face for bearing the divide unto seed winged divided light Forth."))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "single_shopping_details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/icon/icon_2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Free shipping"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Divided face for bearing the divide unto seed winged divided light Forth."))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      className: "single_shopping_details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/icon/icon_3.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Free shipping"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Divided face for bearing the divide unto seed winged divided light Forth."))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "single_shopping_details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/icon/icon_4.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Free shipping"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Divided face for bearing the divide unto seed winged divided light Forth.")))))), __jsx("section", {
      className: "instagram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("div", {
      className: "instagram_photo_iner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("div", {
      className: "single_instgram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/instagram/inst_1.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }))), __jsx("div", {
      className: "single_instgram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/instagram/inst_2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }))), __jsx("div", {
      className: "single_instgram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/instagram/inst_3.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }))), __jsx("div", {
      className: "single_instgram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/instagram/inst_4.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }))), __jsx("div", {
      className: "single_instgram_photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("img", {
      src: "/static/assets/template/winter/img/instagram/inst_5.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("i", {
      className: "ti-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    })))))))));
  }

}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/camilo/Documentos/eltiempo/et-fashion-front/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map