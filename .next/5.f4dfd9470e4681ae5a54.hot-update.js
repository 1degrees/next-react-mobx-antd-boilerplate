webpackHotUpdate(5,{

/***/ "./stores/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WithStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("./node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__("./stores/home/index.js");
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\\u5206\u4EAB\\wsf-www-ssr\\stores\\index.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var store = null;

function initStore(isServer) {
  var lastUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  if (isServer) {
    return {
      homeStore: new __WEBPACK_IMPORTED_MODULE_2__home__["a" /* default */]()
    };
  } else {
    if (store === null) {
      store = {
        homeStore: new __WEBPACK_IMPORTED_MODULE_2__home__["a" /* default */]()
      };
    }

    return store;
  }
}

console.log("http://dev-user.wanshifu.com/");
function WithStore(_ref) {
  var children = _ref.children,
      isServer = _ref.isServer;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* Provider */], _extends({}, initStore(isServer), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), children || '');
}
/* unused harmony default export */ var _unused_webpack_default_export = (store);

/***/ })

})
//# sourceMappingURL=5.f4dfd9470e4681ae5a54.hot-update.js.map