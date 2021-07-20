webpackHotUpdate_N_E("pages/article/[slug]",{

/***/ "./components/GlobalLayout/nav.js":
/*!****************************************!*\
  !*** ./components/GlobalLayout/nav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ndonna/Documents/Next JS/glean/components/GlobalLayout/nav.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import Image from \"next/image\"\n\nvar Nav = function Nav(_ref) {\n  _s();\n\n  var categories = _ref.categories;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openMenu = _useState[0],\n      setOpenMenu = _useState[1];\n\n  return __jsx(\"div\", {\n    className: \"w-full fixed top-0 left-0 right-0 font-WorkSans bg-white z-30 shadow-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \" flex inner-container items-center justify-between py-5 relative \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \"h-12 w-auto\",\n    src: \"https://res.cloudinary.com/glean-wellness/image/upload/v1625767635/Article%20Images/WhatsApp_Image_2021-07-08_at_18.55.58_i6ezuq.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  })), __jsx(\"ul\", {\n    className: \"hidden lg:flex gap-10 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, categories.map(function (category) {\n    return __jsx(\"li\", {\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      as: \"/category/\".concat(category.slug),\n      href: \"/category/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: \"font-semibold text-base text-gray-700 hover:no-underline hover:text-gl-green transition-all font-WorkSans\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 19\n      }\n    }, category.name.toUpperCase())));\n  })), openMenu ? __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__[\"AiOutlineClose\"], {\n    className: \"text-3xl lg:hidden font-semibold\",\n    onClick: function onClick() {\n      return setOpenMenu(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }) : __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__[\"GiHamburgerMenu\"], {\n    className: \"text-3xl lg:hidden\",\n    onClick: function onClick() {\n      return setOpenMenu(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  })), openMenu && __jsx(\"div\", {\n    className: \"mobile-nav lg:hidden fixed bg-gray-800 w-full top-20 left-0 bottom-0 right-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"inner-container py-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    className: \"flex-col flex gap-10 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, categories.map(function (category) {\n    return __jsx(\"li\", {\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 19\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      as: \"/category/\".concat(category.slug),\n      href: \"/category/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      className: \"font-semibold text-base text-gl-green hover:no-underline hover:text-gl-green transition-all\",\n      onClick: function onClick() {\n        return setOpenMenu(false);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 23\n      }\n    }, category.name.toUpperCase())));\n  })))));\n};\n\n_s(Nav, \"qV1mtfM2fjcqS+QRhZwG0vvhG2w=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQvbmF2LmpzP2Q5Y2MiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm1hcCIsImNhdGVnb3J5IiwiaWQiLCJzbHVnIiwibmFtZSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsS0FBRCxDQURWO0FBQUEsTUFDdkJDLFFBRHVCO0FBQUEsTUFDYkMsV0FEYTs7QUFFOUIsU0FDRTtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQUMsYUFEWjtBQUVFLE9BQUcsRUFBQyxzSUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVlFO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQUMsUUFBUSxFQUFJO0FBQzFCLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFFLHNCQUFlRCxRQUFRLENBQUNFLElBQXhCLENBQVI7QUFBd0MsVUFBSSxFQUFDLGdCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsMkdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxFQURILENBREYsQ0FERixDQURGO0FBU0QsR0FWQSxDQURILENBWkYsRUEwQkdQLFFBQVEsR0FDUCxNQUFDLDZEQUFEO0FBQ0UsYUFBUyxFQUFDLGtDQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETyxHQU1QLE1BQUMsOERBQUQ7QUFDRSxhQUFTLEVBQUMsb0JBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxXQUFXLENBQUMsSUFBRCxDQUFqQjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDSixDQURGLEVBdUNHRCxRQUFRLElBQ1A7QUFBSyxhQUFTLEVBQUMsOEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUFDLFFBQVEsRUFBSTtBQUMxQixXQUNFO0FBQUksU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBRSxzQkFBZUQsUUFBUSxDQUFDRSxJQUF4QixDQURKO0FBRUUsVUFBSSxFQUFDLGdCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUNFLGVBQVMsRUFBQyw2RkFEWjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1KLFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdFLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLEVBSkgsQ0FKRixDQURGLENBREY7QUFlRCxHQWhCQSxDQURILENBREYsQ0FERixDQXhDSixDQURGO0FBbUVELENBckVEOztHQUFNVixHOztLQUFBQSxHO0FBdUVTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2xvYmFsTGF5b3V0L25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBmb250LVdvcmtTYW5zIGJnLXdoaXRlIHotMzAgc2hhZG93LW1kXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIiBmbGV4IGlubmVyLWNvbnRhaW5lciBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTUgcmVsYXRpdmUgXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cInRleHQtZ2wtZ3JlZW4gZm9udC1ib2xkIHRleHQtMnhsIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdsLWdyZWVuXCI+XG4gICAgICAgICAgICBHTEVBTiBXRUxMTkVTU1xuICAgICAgICAgIDwvYT4gKi99XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctYXV0b1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9nbGVhbi13ZWxsbmVzcy9pbWFnZS91cGxvYWQvdjE2MjU3Njc2MzUvQXJ0aWNsZSUyMEltYWdlcy9XaGF0c0FwcF9JbWFnZV8yMDIxLTA3LTA4X2F0XzE4LjU1LjU4X2k2ZXp1cS5qcGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZ2FwLTEwIFwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9IGhyZWY9XCIvY2F0ZWdvcnkvW2lkXVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCBob3Zlcjpuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1nbC1ncmVlbiB0cmFuc2l0aW9uLWFsbCBmb250LVdvcmtTYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIHtvcGVuTWVudSA/IChcbiAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOmhpZGRlbiBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5NZW51KGZhbHNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHaUhhbWJ1cmdlck1lbnVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOmhpZGRlblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTWVudSh0cnVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYgbGc6aGlkZGVuIGZpeGVkIGJnLWdyYXktODAwIHctZnVsbCB0b3AtMjAgbGVmdC0wIGJvdHRvbS0wIHJpZ2h0LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lciBweS0xMFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgtY29sIGZsZXggZ2FwLTEwIFwiPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jYXRlZ29yeS9baWRdXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdsLWdyZWVuIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdsLWdyZWVuIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5NZW51KGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GlobalLayout/nav.js\n");

/***/ })

})