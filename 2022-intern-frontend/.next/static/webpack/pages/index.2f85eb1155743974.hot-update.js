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

/***/ "./components/ToDoItem.tsx":
/*!*********************************!*\
  !*** ./components/ToDoItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar ToDoItem = function(param) {\n    var todoitem = param.todoitem, todo = param.todo, setTodo = param.setTodo;\n    var toggleDone = function() {\n        var newTodoList = todo.map(function(item) {\n            return _objectSpread({}, item, {\n                done: item.idx === todoitem.idx ? !item.done : item.done\n            });\n        });\n        setTodo(newTodoList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleDone,\n                children: [\n                    \" - \",\n                    todoitem.content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jish0\\\\Documents\\\\SCVsoft\\\\2022-intern-frontend\\\\components\\\\ToDoItem.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red hover:bg-red\",\n                type: \"button\",\n                onClick: function() {\n                    setTodo(todo.filter(function(e) {\n                        return e.idx !== todoitem.idx;\n                    }));\n                },\n                children: \"[DELETE]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jish0\\\\Documents\\\\SCVsoft\\\\2022-intern-frontend\\\\components\\\\ToDoItem.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jish0\\\\Documents\\\\SCVsoft\\\\2022-intern-frontend\\\\components\\\\ToDoItem.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = ToDoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoItem);\nvar _c;\n$RefreshReg$(_c, \"ToDoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFFM0QsSUFBTUMsUUFBUSxHQUFHLGdCQUFpQztRQUE5QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDekMsSUFBTUMsVUFBVSxHQUFHLFdBQU07UUFDdkIsSUFBTUMsV0FBVyxHQUFHSCxJQUFJLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO21CQUFNLGtCQUNuQ0EsSUFBSTtnQkFDUEMsSUFBSSxFQUFFRCxJQUFJLENBQUNFLEdBQUcsS0FBS1IsUUFBUSxDQUFDUSxHQUFHLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDQyxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBSTtjQUN6RDtTQUFDLENBQUM7UUFDSEwsT0FBTyxDQUFDRSxXQUFXLENBQUMsQ0FBQztLQUN0QjtJQUVELHFCQUNFLDhEQUFDSyxLQUFHOzswQkFDRiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFUixVQUFVOztvQkFBRSxLQUFHO29CQUFDSCxRQUFRLENBQUNZLE9BQU87b0JBQUMsR0FBQzs7Ozs7O3FCQUFTOzBCQUM1RCw4REFBQ0YsUUFBTTtnQkFDTEcsU0FBUyxFQUFDLDBGQUEwRjtnQkFDcEdDLElBQUksRUFBQyxRQUFRO2dCQUNiSCxPQUFPLEVBQUUsV0FBTTtvQkFDYlQsT0FBTyxDQUFDRCxJQUFJLENBQUNjLE1BQU0sQ0FBQyxTQUFDQyxDQUFDOytCQUFLQSxDQUFDLENBQUNSLEdBQUcsS0FBS1IsUUFBUSxDQUFDUSxHQUFHO3FCQUFBLENBQUMsQ0FBQyxDQUFDO2lCQUNyRDswQkFDRixVQUVEOzs7OztxQkFBUzs7Ozs7O2FBQ0wsQ0FDTjtDQUNIO0FBdkJLVCxLQUFBQSxRQUFRO0FBeUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvSXRlbS50c3g/MzZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUb0RvSXRlbSA9ICh7IHRvZG9pdGVtLCB0b2RvLCBzZXRUb2RvIH0pID0+IHtcclxuICBjb25zdCB0b2dnbGVEb25lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb0xpc3QgPSB0b2RvLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgLi4uaXRlbSxcclxuICAgICAgZG9uZTogaXRlbS5pZHggPT09IHRvZG9pdGVtLmlkeCA/ICFpdGVtLmRvbmUgOiBpdGVtLmRvbmUsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRUb2RvKG5ld1RvZG9MaXN0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEb25lfT4gLSB7dG9kb2l0ZW0uY29udGVudH0gPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LW5vLXNocmluayBwLTIgbWwtMiBib3JkZXItMiByb3VuZGVkIHRleHQtcmVkIGJvcmRlci1yZWQgaG92ZXI6dGV4dC1yZWQgaG92ZXI6YmctcmVkXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUb2RvKHRvZG8uZmlsdGVyKChlKSA9PiBlLmlkeCAhPT0gdG9kb2l0ZW0uaWR4KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFtERUxFVEVdXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb0RvSXRlbSIsInRvZG9pdGVtIiwidG9kbyIsInNldFRvZG8iLCJ0b2dnbGVEb25lIiwibmV3VG9kb0xpc3QiLCJtYXAiLCJpdGVtIiwiZG9uZSIsImlkeCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb250ZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsImZpbHRlciIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDoItem.tsx\n");

/***/ })

});