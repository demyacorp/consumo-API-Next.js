"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Cards.js":
/*!*********************************!*\
  !*** ./src/Components/Cards.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Cards.module.css */ \"./src/styles/Cards.module.css\");\n/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Cards(param) {\n    let { character } = param;\n    console.log(\"aqui en cards\", character);\n    if (!character || character.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3___default().notFound),\n            children: \"No hay personajes para mostrar\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: character.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3___default().cards),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: result.image,\n                        alt: result.name,\n                        width: 200,\n                        height: 200,\n                        className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: result.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            result.species,\n                            \" / \",\n                            result.gender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: result.location.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, result.id, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\Programaci\\xf3n\\\\Buscador\\\\src\\\\Components\\\\Cards.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Cards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cards);\nvar _c;\n$RefreshReg$(_c, \"Cards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ2lCO0FBRWhELFNBQVNLLE1BQU0sS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO0lBQ2JDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO0lBQzdCLElBQUksQ0FBQ0EsYUFBYUEsVUFBVUcsTUFBTSxLQUFLLEdBQUc7UUFDeEMscUJBQU8sOERBQUNDO1lBQUVDLFdBQVdQLDBFQUFlO3NCQUFFOzs7Ozs7SUFDeEM7SUFDQSxxQkFDRSw4REFBQ1M7UUFBSUYsV0FBV1AsMkVBQWdCO2tCQUM3QkUsVUFBVVMsR0FBRyxDQUFDLENBQUNDLHVCQUNkLDhEQUFDSDtnQkFBb0JGLFdBQVdQLHVFQUFZOztrQ0FDMUMsOERBQUNELG1EQUFLQTt3QkFBQ2UsS0FBS0YsT0FBT0csS0FBSzt3QkFBRUMsS0FBS0osT0FBT0ssSUFBSTt3QkFBRUMsT0FBTzt3QkFBS0MsUUFBUTt3QkFBS1osV0FBV1AsdUVBQVk7Ozs7OztrQ0FDNUYsOERBQUNvQjtrQ0FBSVIsT0FBT0ssSUFBSTs7Ozs7O2tDQUNoQiw4REFBQ1g7OzRCQUFHTSxPQUFPUyxPQUFPOzRCQUFDOzRCQUFJVCxPQUFPVSxNQUFNOzs7Ozs7O2tDQUNwQyw4REFBQ0M7a0NBQU1YLE9BQU9ZLFFBQVEsQ0FBQ1AsSUFBSTs7Ozs7OztlQUpuQkwsT0FBT2EsRUFBRTs7Ozs7Ozs7OztBQVMzQjtLQWpCU3hCO0FBbUJULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0NhcmRzLmpzP2I1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FyZHMubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBDYXJkcyh7IGNoYXJhY3RlciB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJhcXVpIGVuIGNhcmRzXCIsIGNoYXJhY3Rlcik7XHJcbiAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5ObyBoYXkgcGVyc29uYWplcyBwYXJhIG1vc3RyYXI8L3A+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7Y2hhcmFjdGVyLm1hcCgocmVzdWx0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Jlc3VsdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17cmVzdWx0LmltYWdlfSBhbHQ9e3Jlc3VsdC5uYW1lfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICA8aDI+e3Jlc3VsdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICA8cD57cmVzdWx0LnNwZWNpZXN9IC8ge3Jlc3VsdC5nZW5kZXJ9PC9wPlxyXG4gICAgICAgICAgPHNwYW4+e3Jlc3VsdC5sb2NhdGlvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwic3R5bGVzIiwiQ2FyZHMiLCJjaGFyYWN0ZXIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicCIsImNsYXNzTmFtZSIsIm5vdEZvdW5kIiwiZGl2IiwiY29udGFpbmVyIiwibWFwIiwicmVzdWx0IiwiY2FyZHMiLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwic3BlY2llcyIsImdlbmRlciIsInNwYW4iLCJsb2NhdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Cards.js\n"));

/***/ })

});