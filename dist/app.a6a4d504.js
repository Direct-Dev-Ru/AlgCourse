// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/modules/utils.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function measure(f) {
  var _options$memo;

  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = _objectSpread({
    count: 0,
    result: null,
    logging: false
  }, opt);

  console.log("--------start of running ".concat(f.name, "----------"));
  var time = performance.now(); // f function call

  console.log("And the result is ....: ".concat(f(options)));
  console.log((_options$memo = options === null || options === void 0 ? void 0 : options.memo) !== null && _options$memo !== void 0 ? _options$memo : "no memo");
  time = performance.now() - time;
  console.log("Runnung time = ".concat(time));
  console.log("Runnung count = ".concat(options.count));
  console.log("--------end of runing ".concat(f.name, "----------"));
}

function getNumMockData() {
  var itemsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var maxValue = arguments.length > 1 ? arguments[1] : undefined;
  if (!maxValue) maxValue = itemsCount;
  return Array.from({
    length: itemsCount
  }, function () {
    return Math.floor(Math.random() * maxValue);
  });
}

function sortIntegersFn(a, b) {
  if (a < b) {
    return -1; // Или любое число, меньшее нуля
  }

  if (a > b) {
    return 1; // Или любое число, большее нуля
  } // в случае а = b вернуть 0


  return 0;
}

module.exports = {
  measure: measure,
  getNumMockData: getNumMockData,
  sortIntegersFn: sortIntegersFn
};
},{}],"src/modules/search.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function linearSearch(data, element) {
  var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return false;
  };
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    caseSensivity: false
  };
  var index = -1;
  var __element = element;

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      index++;

      if (_typeof(item) === "object") {
        if (compareFn(item, __element)) {
          return index;
        }
      } else if (typeof item === "string") {
        var _options$caseSensivit;

        if ((_options$caseSensivit = options === null || options === void 0 ? void 0 : options.caseSensivity) !== null && _options$caseSensivit !== void 0 ? _options$caseSensivit : false) {
          item = item.toLocaleLowerCase();
          __element = __element.toLocaleLowerCase();
        }

        if (item === __element) {
          return index;
        }
      } else {
        if (item === element) {
          return index;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return -1;
}

function seekBound(arr, startIndex) {
  var _arr$length;

  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (((_arr$length = arr === null || arr === void 0 ? void 0 : arr.length) !== null && _arr$length !== void 0 ? _arr$length : 0) === 0) {
    return -1;
  }

  if (startIndex > arr.length - 1) {
    return -1;
  }

  if (startIndex === 0 && direction < 0) {
    return 0;
  }

  if (startIndex === arr.length - 1 && direction > 0) {
    return arr.length - 1;
  }

  var startElement = arr[startIndex];
  var resultIndex = -1;

  if (direction > 0) {
    // search up to end of array
    var endIndex = arr.length - 1;

    for (var index = startIndex + 1; index <= endIndex; index++) {
      var element = arr[index];

      if (element !== startElement) {
        resultIndex = index - 1;
        break;
      }
    }
  } else {
    // search down to beggining of array
    for (var _index = startIndex - 1; _index >= 0; _index--) {
      var _element = arr[_index];

      if (_element !== startElement) {
        resultIndex = _index + 1;
        break;
      }
    }
  }

  return resultIndex;
}

function binarySearch(sortedArray, target) {
  var startIndex = 0;
  var endIndex = sortedArray.length - 1; // let direction = "middle"; //"left/right/middle"

  var result = {
    targetIndexes: [],
    targetElements: [],
    target: target
  };
  var endTargetIndex = -1;
  var startTargetIndex = -1;
  console.log(target, startIndex, endIndex);
  var count = 0;

  while (startIndex < endIndex && count < 10) {
    // let middleIndex = Math.floor(sortedArray.length / 2);
    var middleIndex = Math.floor((endIndex - startIndex) / 2);
    middleIndex = seekBound(sortedArray, middleIndex, 1);
    var middleElement = sortedArray[middleIndex];
    count++;

    if (middleElement === target) {
      endTargetIndex = middleIndex;
      startTargetIndex = seekBound(sortedArray, endTargetIndex, -1);
      break;
    }

    if (middleElement > target) {
      // target somethere to left (to start)
      endIndex = middleIndex;
    } else {
      // target somethere to right (to end)
      startIndex = middleIndex;
    }

    console.log(target, startIndex, endIndex);
  }

  if (startTargetIndex !== -1 && endTargetIndex !== -1) {
    for (var index = startTargetIndex; index <= endTargetIndex; index++) {
      var element = sortedArray[index];
      result.targetIndexes.push(index);
      result.targetElements.push(element);
    }
  }

  console.log(result.targetIndexes, result.targetElements);
  return result;
}

module.exports = {
  linearSearch: linearSearch,
  binarySearch: binarySearch,
  seekBound: seekBound
};
},{}],"src/app.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var utils = _interopRequireWildcard(require("./modules/utils"));

var search = _interopRequireWildcard(require("./modules/search"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import * as math from "./modules/math";
// import * as reqursion from "./modules/reqursion";
console.clear(); // const fibParam = 45;
// const testFib = (options) => {
//   return math.fib(fibParam, options);
// };
// const testFibReqursion = (options) => {
//   return reqursion.fibReqursion(fibParam, options);
// };
// const testIsPrime = (options) => {
//   return  math.isPrime(22777, options);
// }
// const testIsPOf2 = (options) => {
//   return math.isPof2(2048, options);
// }
// const testFact = (options) => {
//   return math.factorial(160, options);
// }

var data = utils.getNumMockData(21, 99);
var sortedData = utils.getNumMockData(200, 99).sort(utils.sortIntegersFn);
console.log(data);
var el = data[Math.floor(data.length / 2)];
console.log(el);
console.log(sortedData);
var el2 = 88; // const el2 = sortedData[Math.floor(sortedData.length / 4)];

console.log(el2); // const testNumberSearch = () => {
//   return search.linearSearch(data, el);
// };
// const testSeekBound = () => {
//   return search.seekBound(
//     [11, 11, 23, 23, 23, 45, 45, 66, 77, 78, 78, 78, 99, 99, 99],
//     //0  1    2  3   4    5  6   7   8   9   10  11  12  13  14
//     14,
//     -11
//   );
// };

var testBinarySearch = function testBinarySearch() {
  return search.binarySearch(sortedData, el2);
}; // utils.measure(testFib);
// utils.measure(testFibReqursion);
// utils.measure(testIsPrime);
// utils.measure(testIsPOf2);
// utils.measure(testFact);
// utils.measure(testNumberSearch);


utils.measure(testBinarySearch); // utils.measure(testSeekBound);

document.getElementById("app").innerHTML = "\n<h1>Hello People!</h1>\n<div>\n  Go to console - it is alg course training ... \n  <div>\n  <a href=\"http://direct-dev.ru\" target=\"_blank\" rel=\"noopener noreferrer\">my home page</a>\n  </div>\n</div>\n";
},{"./styles.css":"src/styles.css","./modules/utils":"src/modules/utils.js","./modules/search":"src/modules/search.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40619" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.js.map