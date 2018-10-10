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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/next-seo/index.js":
/*!**************************************!*\
  !*** ./components/next-seo/index.js ***!
  \**************************************/
/*! exports provided: default, ArticleJsonLd, BlogJsonLd, CourseJsonLd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_defaultSEO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta/defaultSEO */ "./components/next-seo/meta/defaultSEO.jsx");
/* harmony import */ var _jsonld_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonld/article */ "./components/next-seo/jsonld/article.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleJsonLd", function() { return _jsonld_article__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _jsonld_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonld/blog */ "./components/next-seo/jsonld/blog.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogJsonLd", function() { return _jsonld_blog__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _jsonld_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonld/course */ "./components/next-seo/jsonld/course.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseJsonLd", function() { return _jsonld_course__WEBPACK_IMPORTED_MODULE_3__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_meta_defaultSEO__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./components/next-seo/jsonld/article.jsx":
/*!************************************************!*\
  !*** ./components/next-seo/jsonld/article.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");





var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(url, "\"\n    },\n    \"headline\": \"").concat(title, "\",\n    \"image\": [\n      ").concat(images.map(function (image) {
    return "\"".concat(image, "\"");
  }), "\n     ],\n    \"datePublished\": \"").concat(datePublished, "\",\n    \"dateModified\": \"").concat(dateModified || datePublished, "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(authorName, "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(publisherName, "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(publisherLogo, "\"\n      }\n    },\n    \"description\": \"").concat(description, "\"\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-article"
  }));
};

ArticleJsonLd.defaultProps = {
  dateModified: null
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleJsonLd);

/***/ }),

/***/ "./components/next-seo/jsonld/blog.jsx":
/*!*********************************************!*\
  !*** ./components/next-seo/jsonld/blog.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");





var BlogJsonLd = function BlogJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(url, "\"\n    },\n    \"headline\": \"").concat(title, "\",\n    \"image\": [\n      ").concat(images.map(function (image) {
    return "\"".concat(image, "\"");
  }), "\n     ],\n    \"datePublished\": \"").concat(datePublished, "\",\n    \"dateModified\": \"").concat(dateModified || datePublished, "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(authorName, "\"\n    },\n    \"description\": \"").concat(description, "\"\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-blog"
  }));
};

BlogJsonLd.defaultProps = {
  dateModified: null
};
/* harmony default export */ __webpack_exports__["default"] = (BlogJsonLd);

/***/ }),

/***/ "./components/next-seo/jsonld/course.jsx":
/*!***********************************************!*\
  !*** ./components/next-seo/jsonld/course.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");





var CourseJsonLd = function CourseJsonLd(_ref) {
  var courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"".concat(courseName, "\",\n    \"description\": \"").concat(description, "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(providerName, "\"").concat(providerUrl ? ",\n      \"sameAs\": \"".concat(providerUrl, "\"") : '', "\n    }\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-course"
  }));
};

CourseJsonLd.defaultProps = {
  providerUrl: null
};
/* harmony default export */ __webpack_exports__["default"] = (CourseJsonLd);

/***/ }),

/***/ "./components/next-seo/meta/buildTags.jsx":
/*!************************************************!*\
  !*** ./components/next-seo/meta/buildTags.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var templateTitle = null;

var buildTags = function buildTags(config) {
  var tagsToRender = [];

  if (config.titleTemplate) {
    templateTitle = config.titleTemplate;
  }

  if (config.title) {
    var updatedTitle = config.title;

    if (templateTitle) {
      updatedTitle = templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  for (var key in config) {
    var val = config[key];
    var keys = ['titleTemplate', 'X-UA-Compatible', 'title', 'canonical', 'noindex', 'description', 'openGraph', 'twitter', 'facebook'];

    if (!keys.includes(key)) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: key,
        name: key,
        content: val
      }));
    }
  }

  if (!config.noindex) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow"
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow"
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "noindex,nofollow"
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "noindex,nofollow"
    }));
  }

  if (config['X-UA-Compatible']) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "http-Equiv",
      httpEquiv: "X-UA-Compatible",
      content: config['X-UA-Compatible']
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.hasOwnProperty('twitter')) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.hasOwnProperty('openGraph')) {
    if (config.openGraph.url) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url
      }));
    }

    if (config.openGraph.type) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: config.openGraph.type
      }));
    }

    if (config.openGraph.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title
      }));
    }

    if (config.openGraph.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description
      }));
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          key: "og:image:0".concat(index),
          property: "og:image",
          content: image.url
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:alt0".concat(index),
            property: "og:image:alt",
            content: image.alt
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:width0".concat(index),
            property: "og:image:width",
            content: image.width
          }));
        } else if (config.openGraph.defaultImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:width0".concat(index),
            property: "og:image:width",
            content: config.openGraph.defaultImageWidth
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:height".concat(index),
            property: "og:image:height",
            content: image.height
          }));
        } else if (config.openGraph.defaultImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:height".concat(index),
            property: "og:image:height",
            content: config.openGraph.defaultImageHeight
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  return tagsToRender;
};

/* harmony default export */ __webpack_exports__["default"] = (buildTags);

/***/ }),

/***/ "./components/next-seo/meta/defaultSEO.jsx":
/*!*************************************************!*\
  !*** ./components/next-seo/meta/defaultSEO.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _buildTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildTags */ "./components/next-seo/meta/buildTags.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var DefaultSeo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DefaultSeo, _React$Component);

  function DefaultSeo(props) {
    var _this;

    _classCallCheck(this, DefaultSeo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultSeo).call(this, props));

    if (!props.config) {
      throw new Error('[next-seo] You must supply an SEO configuration');
    }

    return _this;
  }

  _createClass(DefaultSeo, [{
    key: "render",
    value: function render() {
      var config = this.props.config;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, Object(_buildTags__WEBPACK_IMPORTED_MODULE_3__["default"])(config));
    }
  }]);

  return DefaultSeo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DefaultSeo);

/***/ }),

/***/ "./components/next-seo/utils/markup.js":
/*!*********************************************!*\
  !*** ./components/next-seo/utils/markup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

/* harmony default export */ __webpack_exports__["default"] = (markup);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_withStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/withStore */ "./stores/withStore.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "./components/next-seo/index.js");
/* harmony import */ var _seo_base_seo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../seo/base-seo.js */ "./seo/base-seo.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @Author: houzhitao 
 * @Date: 2018-08-29 14:20:01 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-08-30 09:48:01
 * @file: 全局注入store，用作状态保留页面 （经测试react生命周期仅在首次进入调用）
 */







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          mobxStore = _this$props.mobxStore;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: _seo_base_seo_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], mobxStore, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_withStore__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./seo/base-seo.js":
/*!*************************!*\
  !*** ./seo/base-seo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "title": '万师傅-中国领先的家居服务平台|家具、卫浴、灯具等配送安装维修网',
  "Content-Type": 'text/html; charset=utf-8',
  "X-UA-Compatible": 'IE=edge,chrome=1',
  "force-rendering": 'webkit',
  "renderer": 'webkit',
  "viewport": 'width=device-width, initial-scale=1',
  "keywords": '家具拆装,家具配送,家具安装,家具维修',
  "description": '万师傅是全国专业家居售后服务网站,提供【家具】【晾衣架】【灯具】【卫浴】【 墙纸地毯】的拆装,搬运等服务担保交易;师傅覆盖全国600多个城市,快速,便捷,省钱,有保障！',
  "360-site-verification": '5dda074586814ec11ca818e715f3f8d0',
  "google-site-verification": 'uSG4Wt-p0CWw3m75z9xAKV-LH_QEyVTe-W1el-wrjv8',
  "author": "zhangxiao@wshifu.com"
});

/***/ }),

/***/ "./stores/home/index.js":
/*!******************************!*\
  !*** ./stores/home/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
var _class, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var HomeStore = (_class = function HomeStore(lastUpdate) {
  var _this = this;

  _classCallCheck(this, HomeStore);

  _initializerDefineProperty(this, "lastUpdate", _descriptor, this);

  _initializerDefineProperty(this, "light", _descriptor2, this);

  _initializerDefineProperty(this, "start", _descriptor3, this);

  this.stop = function () {
    return clearInterval(_this.timer);
  };

  this.lastUpdate = lastUpdate;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "light", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "start", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.timer = setInterval(function () {
        _this2.lastUpdate = Date.now();
        _this2.light = true;
      }, 1000);
    };
  }
})), _class);


/***/ }),

/***/ "./stores/index.js":
/*!*************************!*\
  !*** ./stores/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./stores/home/index.js");

var store = null;

function initStore(isServer) {
  if (isServer) {
    return {
      homeStore: new _home__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
  } else {
    if (store === null) {
      store = {
        homeStore: new _home__WEBPACK_IMPORTED_MODULE_0__["default"]()
      };
    }

    return store;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./stores/withStore.js":
/*!*****************************!*\
  !*** ./stores/withStore.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./stores/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) {
    return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  }

  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  }

  return window[__NEXT_MOBX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithMobx, _React$Component);

      _createClass(AppWithMobx, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
            var mobxStore, appProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    mobxStore = getOrCreateStore();
                    appContext.ctx.mobxStore = mobxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialMobxState: mobxStore
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function AppWithMobx(props) {
        var _this;

        _classCallCheck(this, AppWithMobx);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithMobx).call(this, props));
        _this.mobxStore = getOrCreateStore(props.initialMobxState);
        return _this;
      }

      _createClass(AppWithMobx, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
            mobxStore: this.mobxStore
          }));
        }
      }]);

      return AppWithMobx;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=_app.js.map