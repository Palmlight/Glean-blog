webpackHotUpdate_N_E("pages/article/[slug]",{

/***/ "./pages/article/[slug].jsx":
/*!**********************************!*\
  !*** ./pages/article/[slug].jsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GlobalLayout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GlobalLayout/layout */ \"./components/GlobalLayout/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! disqus-react */ \"./node_modules/disqus-react/lib/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ndonna/Documents/Next JS/glean/pages/article/[slug].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  _s();\n\n  var _article$category;\n\n  var article = _ref.article,\n      categories = _ref.categories;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      location = _useState[0],\n      setLocation = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setLocation(window.location.href);\n  }, []);\n  var disqusConfig = {\n    url: location,\n    identifier: article.id,\n    title: article.title\n  };\n  var seo = {\n    metaTitle: article.title,\n    metaDescription: article.description,\n    shareImage: article === null || article === void 0 ? void 0 : article.image,\n    article: true\n  };\n  return __jsx(_components_GlobalLayout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    categories: categories,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    seo: seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"w-full mt-5 lg:mt-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inner-container flex gap-9\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    className: \"lg:w-8/12 leading-relaxed text-2xl font-semibold font-WorkSans\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, article === null || article === void 0 ? void 0 : article.title), __jsx(\"div\", {\n    className: \"my-3 flex items-center justify-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-gl-green uppercase font-semibold font-WorkSans\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, (_article$category = article.category) === null || _article$category === void 0 ? void 0 : _article$category.name), __jsx(\"p\", {\n    className: \"text-gray-400 flex items-center ml-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__[\"GoPrimitiveDot\"], {\n    className: \"mr-1 h-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }), __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    format: \"MMM Do YYYY\",\n    className: \"ml-0 font-WorkSans\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, article.published_at))), __jsx(\"div\", {\n    className: \"flex items-center space-x-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \"SHARE\"), __jsx(\"a\", {\n    href: \"https://twitter.com/share?text=\".concat(location),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiOutlineTwitter\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 19\n    }\n  })), __jsx(\"a\", {\n    href: \"https://www.facebook.com/sharer.php?u=\".concat(location, \"&quote=\").concat(article.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiFillFacebook\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  })), __jsx(\"a\", {\n    href: \"https://wa.me/?text=\".concat(location),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiOutlineWhatsApp\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  })))), __jsx(\"div\", {\n    className: \"w-full font-Rale\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: article.image,\n    className: \"w-full h-auto object-cover my-3\",\n    style: {\n      maxHeight: 300\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: \"w-80 h-20vh rounded-lg border-4 mx-auto border-dashed  border-gray-300 px-5 items-center justify-center flex lg:hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"Contact for advert bookings and placement\")), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: article.content,\n    escapeHtml: false,\n    className: \"mb-10 space-y-2 leading-snug text-black font-Rale rale-font \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_7__[\"DiscussionEmbed\"], {\n    config: disqusConfig,\n    shortname: \"glean-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    className: \"w-80 h-40vh rounded-lg border-4 border-dashed  border-gray-300 px-5 items-center justify-center hidden lg:flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Contact for advert bookings and placement\")))));\n};\n\n_s(Article, \"uYjSqoyfw2FApiWGOS7tBpGU5mQ=\");\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanN4P2YyZTIiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaHJlZiIsImRpc3F1c0NvbmZpZyIsInVybCIsImlkZW50aWZpZXIiLCJpZCIsInRpdGxlIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiaW1hZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJwdWJsaXNoZWRfYXQiLCJtYXhIZWlnaHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNwQ0MsUUFEb0M7QUFBQSxNQUMxQkMsV0FEMEI7O0FBRTNDQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZUFBVyxDQUFDRSxNQUFNLENBQUNILFFBQVAsQ0FBZ0JJLElBQWpCLENBQVg7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFHLEVBQUVOLFFBRGM7QUFFbkJPLGNBQVUsRUFBRVYsT0FBTyxDQUFDVyxFQUZEO0FBR25CQyxTQUFLLEVBQUVaLE9BQU8sQ0FBQ1k7QUFISSxHQUFyQjtBQU1BLE1BQU1DLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ1ksS0FEVDtBQUVWRyxtQkFBZSxFQUFFZixP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LEVBQUU7QUFBYixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUssYUFBUyxFQUFDLHdIQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREYsQ0FQRixFQWFFLE1BQUMscURBQUQ7QUFDRSxVQUFNLEVBQUV0QixPQUFPLENBQUN1QixPQURsQjtBQUVFLGNBQVUsRUFBRSxLQUZkO0FBR0UsYUFBUyxFQUFDLDhEQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQW1CRSxNQUFDLDREQUFEO0FBQWlCLFVBQU0sRUFBRWYsWUFBekI7QUFBdUMsYUFBUyxFQUFDLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FuQ0YsQ0FERixFQTBERTtBQUFLLGFBQVMsRUFBQyxnSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBMURGLENBREYsQ0FGRixDQURGO0FBdUVELENBMUZEOztHQUFNVCxPOztLQUFBQSxPOztBQW1IU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tzbHVnXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IEdvUHJpbWl0aXZlRG90IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCJcbmltcG9ydCB7XG4gIEFpT3V0bGluZVdoYXRzQXBwLFxuICBBaUZpbGxGYWNlYm9vayxcbiAgQWlPdXRsaW5lVHdpdHRlclxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxuaW1wb3J0IHsgRGlzY3Vzc2lvbkVtYmVkIH0gZnJvbSBcImRpc3F1cy1yZWFjdFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9jYXRpb24od2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRpc3F1c0NvbmZpZyA9IHtcbiAgICB1cmw6IGxvY2F0aW9uLFxuICAgIGlkZW50aWZpZXI6IGFydGljbGUuaWQsXG4gICAgdGl0bGU6IGFydGljbGUudGl0bGVcbiAgfVxuXG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IGFydGljbGUudGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxuICAgIHNoYXJlSW1hZ2U6IGFydGljbGU/LmltYWdlLFxuICAgIGFydGljbGU6IHRydWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC01IGxnOm10LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyIGZsZXggZ2FwLTlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnctOC8xMiBsZWFkaW5nLXJlbGF4ZWQgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBmb250LVdvcmtTYW5zXCI+XG4gICAgICAgICAgICAgIHthcnRpY2xlPy50aXRsZX1cbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdsLWdyZWVuIHVwcGVyY2FzZSBmb250LXNlbWlib2xkIGZvbnQtV29ya1NhbnNcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNhdGVnb3J5Py5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZsZXggaXRlbXMtY2VudGVyIG1sLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxHb1ByaW1pdGl2ZURvdCBjbGFzc05hbWU9XCJtci0xIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCIgY2xhc3NOYW1lPVwibWwtMCBmb250LVdvcmtTYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnB1Ymxpc2hlZF9hdH1cbiAgICAgICAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICA8cD5TSEFSRTwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7bG9jYXRpb259YH0+XG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lVHdpdHRlciBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdsLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PSR7bG9jYXRpb259JnF1b3RlPSR7YXJ0aWNsZS50aXRsZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBaUZpbGxGYWNlYm9vayBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdsLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd2EubWUvP3RleHQ9JHtsb2NhdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVXaGF0c0FwcCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdsLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtUmFsZVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gb2JqZWN0LWNvdmVyIG15LTNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMzAwIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgwIGgtMjB2aCByb3VuZGVkLWxnIGJvcmRlci00IG14LWF1dG8gYm9yZGVyLWRhc2hlZCAgYm9yZGVyLWdyYXktMzAwIHB4LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXggbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgZm9yIGFkdmVydCBib29raW5ncyBhbmQgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17YXJ0aWNsZS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEwIHNwYWNlLXktMiBsZWFkaW5nLXNudWcgdGV4dC1ibGFjayBmb250LVJhbGUgcmFsZS1mb250IFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPERpc2N1c3Npb25FbWJlZCBjb25maWc9e2Rpc3F1c0NvbmZpZ30gc2hvcnRuYW1lPVwiZ2xlYW4tMlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctODAgaC00MHZoIHJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLWRhc2hlZCAgYm9yZGVyLWdyYXktMzAwIHB4LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBDb250YWN0IGZvciBhZHZlcnQgYm9va2luZ3MgYW5kIHBsYWNlbWVudFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzLm1hcChhcnRpY2xlID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogYXJ0aWNsZS5zbHVnXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hBUEkoYC9hcnRpY2xlcz9zbHVnPSR7cGFyYW1zLnNsdWd9YClcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzWzBdLCBjYXRlZ29yaWVzIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[slug].jsx\n");

/***/ })

})