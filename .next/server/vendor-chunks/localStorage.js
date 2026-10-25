/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/localStorage";
exports.ids = ["vendor-chunks/localStorage"];
exports.modules = {

/***/ "(ssr)/./node_modules/localStorage/lib/localStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/localStorage/lib/localStorage.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("// http://www.rajdeepd.com/articles/chrome/localstrg/LocalStorageSample.htm\n\n// NOTE:\n// this varies from actual localStorage in some subtle ways\n\n// also, there is no persistence\n// TODO persist\n(function () {\n  \"use strict\";\n\n  var db;\n\n  function LocalStorage() {\n  }\n  db = LocalStorage;\n\n  db.prototype.getItem = function (key) {\n    if (this.hasOwnProperty(key)) {\n      return String(this[key]);\n    }\n    return null;\n  };\n\n  db.prototype.setItem = function (key, val) {\n    this[key] = String(val);\n  };\n\n  db.prototype.removeItem = function (key) {\n    delete this[key];\n  };\n\n  db.prototype.clear = function () {\n    var self = this;\n    Object.keys(self).forEach(function (key) {\n      self[key] = undefined;\n      delete self[key];\n    });\n  };\n\n  db.prototype.key = function (i) {\n    i = i || 0;\n    return Object.keys(this)[i];\n  };\n\n  db.prototype.__defineGetter__('length', function () {\n    return Object.keys(this).length;\n  });\n\n  if (global.localStorage) {\n    module.exports = localStorage;\n  } else {\n    module.exports = new LocalStorage();\n  }\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG9jYWxTdG9yYWdlL2xpYi9sb2NhbFN0b3JhZ2UuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY2FsU3RvcmFnZS9saWIvbG9jYWxTdG9yYWdlLmpzPzEzNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL3d3dy5yYWpkZWVwZC5jb20vYXJ0aWNsZXMvY2hyb21lL2xvY2Fsc3RyZy9Mb2NhbFN0b3JhZ2VTYW1wbGUuaHRtXG5cbi8vIE5PVEU6XG4vLyB0aGlzIHZhcmllcyBmcm9tIGFjdHVhbCBsb2NhbFN0b3JhZ2UgaW4gc29tZSBzdWJ0bGUgd2F5c1xuXG4vLyBhbHNvLCB0aGVyZSBpcyBubyBwZXJzaXN0ZW5jZVxuLy8gVE9ETyBwZXJzaXN0XG4oZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgZGI7XG5cbiAgZnVuY3Rpb24gTG9jYWxTdG9yYWdlKCkge1xuICB9XG4gIGRiID0gTG9jYWxTdG9yYWdlO1xuXG4gIGRiLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodGhpc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZGIucHJvdG90eXBlLnNldEl0ZW0gPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgICB0aGlzW2tleV0gPSBTdHJpbmcodmFsKTtcbiAgfTtcblxuICBkYi5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWxldGUgdGhpc1trZXldO1xuICB9O1xuXG4gIGRiLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXMoc2VsZikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzZWxmW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgc2VsZltrZXldO1xuICAgIH0pO1xuICB9O1xuXG4gIGRiLnByb3RvdHlwZS5rZXkgPSBmdW5jdGlvbiAoaSkge1xuICAgIGkgPSBpIHx8IDA7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpW2ldO1xuICB9O1xuXG4gIGRiLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGxvY2FsU3RvcmFnZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgfVxufSgpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/localStorage/lib/localStorage.js\n");

/***/ })

};
;