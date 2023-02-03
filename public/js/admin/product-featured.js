(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/admin/product-featured"],{

/***/ "./resources/js/admin/product-featured.js":
/*!************************************************!*\
  !*** ./resources/js/admin/product-featured.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Vendor Libraries
// require('bootstrap');

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover"
  });

  // $(document).on("keydown", ":input:not(textarea)", function(event){
  //     return event.key != "Enter";
  //   });
});

// App Javascript
__webpack_require__(/*! ./product-featured/main */ "./resources/js/admin/product-featured/main.js");

/***/ }),

/***/ "./resources/js/admin/product-featured/constants.js":
/*!**********************************************************!*\
  !*** ./resources/js/admin/product-featured/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMSelector": () => (/* binding */ DOMSelector)
/* harmony export */ });
var DOMSelector = {
  SET_ITEM_BUTTONS_CLASS: '.set-item-button',
  REMOVE_ITEM_BUTTONS_CLASS: '.remove-item-button',
  SHOW_ITEM_TRIGGERERS_CLASS: '.show-item-triggerer',
  FEATURED_FORM: document.querySelector('#featured-form'),
  TOKEN: document.querySelector('[name="_token"]').value,
  SUCCESS_MESSAGE: document.querySelector('#success-message'),
  ERROR_MESSAGE: document.querySelector('#error-message'),
  TAB: $('button[data-toggle="tab"]')
};

/***/ }),

/***/ "./resources/js/admin/product-featured/dom-manipulator.js":
/*!****************************************************************!*\
  !*** ./resources/js/admin/product-featured/dom-manipulator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomManipulator": () => (/* binding */ DomManipulator)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DomManipulator = /*#__PURE__*/function () {
  function DomManipulator() {
    _classCallCheck(this, DomManipulator);
  }
  _createClass(DomManipulator, [{
    key: "displayResult",
    value: function displayResult(listGroupElement, productList) {
      listGroupElement.innerHTML = productList;
    }
  }, {
    key: "displayResultOnLoading",
    value: function displayResultOnLoading(listGroupElement) {
      listGroupElement.innerHTML = "\n        <div class=\"py-1 px-2 list-group-item list-group-item-action disabled list-group-item-light\">\n            <div class=\"px-1 text-center\">Loading...</div>\n        </div>\n        ";
    }
  }, {
    key: "resultVisibility",
    value: function resultVisibility(listGroupElement, isVisible) {
      isVisible ? listGroupElement.parentElement.classList.remove('d-none') : listGroupElement.parentElement.classList.add('d-none');
    }

    // addNewList(formElement){
    //     const html = document.createElement('div');
    //     html.className = 'form-row align-items-center mb-3';
    //     html.innerHTML = `
    //     <div class="col-7 d-flex align-items-center position-relative">
    //         <div class="input-group">
    //             <input type="text" class="form-control text-transparent" value="" readonly>
    //             <div class="input-group-append">
    //                 <button type="button" class="input-group-text bg-secondary remove-item-button z-1"
    //                     data-slug="">
    //                     <i class="fas fa-times"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
    //             --Selected Product--</div>
    //     </div>
    //     <div class="col-1 d-flex">
    //         <div class="rounded bg-light py-1 px-2 mx-auto">
    //             <i class="fas fa-less-than mr-auto"></i>
    //             <i class="fas fa-equals ml-auto"></i>
    //         </div>
    //     </div>
    //     <div class="col-4">
    //         <div class="position-relative">
    //             <div class="input-group">
    //                 <input type="text" class="form-control show-item-triggerer"
    //                     placeholder="Enter product's name..." value="">
    //                 <div class="input-group-append">
    //                     <div class="input-group-text bg-purple">
    //                         <i class="fas fa-search"></i>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="position-absolute w-100 h-100 z-5 pr-3 d-none">
    //                 <div class="list-group pr-4 pl-2 pt-1 rounded-0">
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `;
    //     formElement.append(html);
    // }
  }, {
    key: "setProduct",
    value: function setProduct(elem) {
      var inputTriggererElement = elem.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
      var inputElement = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild;
      var floatingElement = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild;
      var removeElement = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
      var featuredProductList = [];
      inputTriggererElement.value = null;
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll('[name="' + inputElement.getAttribute('name') + '"]')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          featuredProductList.push(item.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (featuredProductList.includes(elem.dataset.slug)) {
        return this.displayErrMsg('Product already selected.');
      }
      inputElement.value = elem.dataset.slug;
      floatingElement.innerHTML = elem.firstElementChild.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
      removeElement.dataset.slug = elem.dataset.slug;
      removeElement.classList.add('z-1');
      this.displaySuccessMsg('');
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(elem) {
      var inputElement = elem.parentElement.parentElement.firstElementChild;
      var floatingElement = elem.parentElement.parentElement.parentElement.lastElementChild;
      inputElement.value = null;
      floatingElement.innerHTML = '--Selected Item--';
      elem.dataset.slug = null;
    }
  }, {
    key: "displayErrMsg",
    value: function displayErrMsg(message) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        padding: '.5em 1em',
        customClass: {
          title: 'mb-0'
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Failed selecting product!',
        text: message
      });
    }
  }, {
    key: "displaySuccessMsg",
    value: function displaySuccessMsg(message) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        padding: '.5em 1em',
        customClass: {
          title: 'mb-0'
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Success selecting product!',
        text: message
      });
    }
  }, {
    key: "displayErrMsgModal",
    value: function displayErrMsgModal(message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: "Failed",
        html: message
      });
    }
  }, {
    key: "displaySuccessMsgModal",
    value: function displaySuccessMsgModal(message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: "Success",
        text: message
      });
    }
  }]);
  return DomManipulator;
}();

/***/ }),

/***/ "./resources/js/admin/product-featured/fetcher.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/product-featured/fetcher.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fetcher": () => (/* binding */ Fetcher)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Fetcher = /*#__PURE__*/function () {
  function Fetcher() {
    _classCallCheck(this, Fetcher);
  }
  _createClass(Fetcher, [{
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token, additionalUrl, queryString) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(additionalUrl + (queryString ? queryString : ''), {
                  method: 'GET',
                  mode: 'same-origin',
                  headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': token
                  }
                });
              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.json());
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getData(_x, _x2, _x3) {
        return _getData.apply(this, arguments);
      }
      return getData;
    }()
  }]);
  return Fetcher;
}();

/***/ }),

/***/ "./resources/js/admin/product-featured/main.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/product-featured/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./resources/js/admin/product-featured/constants.js");
/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher.js */ "./resources/js/admin/product-featured/fetcher.js");
/* harmony import */ var _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulator.js */ "./resources/js/admin/product-featured/dom-manipulator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var fetcher = new _fetcher_js__WEBPACK_IMPORTED_MODULE_1__.Fetcher();
var domManipulator = new _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_2__.DomManipulator();
var requestTimer;
var run = function run(DS, F, DM) {
  if (DS.SUCCESS_MESSAGE) {
    DM.displaySuccessMsgModal(DS.SUCCESS_MESSAGE.dataset.message);
  } else if (DS.ERROR_MESSAGE) {
    DM.displayErrMsgModal(DS.ERROR_MESSAGE.dataset.message);
  }
  DS.TAB.on('hide.bs.tab', function (event) {
    var radio = document.querySelector('[name="type[' + event.target.dataset.category + ']"]');
    var inputs = document.querySelectorAll('[name="product-slug[' + event.target.dataset.category + '][]"]');
    if (!radio.value) {
      return event.target.firstElementChild.classList.add('d-none');
      ;
    }
    var _iterator = _createForOfIteratorHelper(inputs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        if (!input.value) {
          return event.target.firstElementChild.classList.add('d-none');
          ;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return event.target.firstElementChild.classList.remove('d-none');
  });
  DS.FEATURED_FORM.addEventListener('mousedown', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (e.target.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
                DM.setProduct(e.target);
              } else if (e.target.parentElement.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
                DM.setProduct(e.target.parentElement);
              }
              if (e.target.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
                DM.removeProduct(e.target);
              } else if (e.target.parentElement.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
                DM.removeProduct(e.target.parentElement);
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  DS.FEATURED_FORM.addEventListener('input', function (e) {
    if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)) {
      var elem = e.target;
      var listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
      if (elem.value) {
        DM.resultVisibility(listGroupEl, true);
        DM.displayResultOnLoading(listGroupEl);
      } else {
        DM.resultVisibility(listGroupEl, false);
      }
      clearTimeout(requestTimer);
      requestTimer = setTimeout(function () {
        F.getData(DS.TOKEN, 'featured/async', '?keyword=' + elem.value + '&category=' + elem.dataset.category).then(function (response) {
          DM.displayResult(listGroupEl, response.htmlResult);
        });
      }, 400);
    }
  });
  DS.FEATURED_FORM.addEventListener('focusout', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var elem, listGroupEl;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)) {
                elem = e.target;
                listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
                DM.resultVisibility(listGroupEl, false);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};
run(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector, fetcher, domManipulator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/admin/product-featured.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQSxDQUFDLENBQUNMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDZCxFQUFFLENBQUNsRSwwQkFBMEIsQ0FBQyxFQUFDO2dCQUMxQ21CLElBQUksR0FBRzRELENBQUMsQ0FBQ0wsTUFBTTtnQkFDZlMsV0FBVyxHQUFHaEUsSUFBSSxDQUFDSixhQUFhLENBQUNBLGFBQWEsQ0FBQ1MsZ0JBQWdCLENBQUNILGlCQUFpQjtnQkFDdkYrQyxFQUFFLENBQUNnQixnQkFBZ0IsQ0FBQ0QsV0FBVyxFQUFFLEtBQUssQ0FBQztjQUMzQztZQUFDO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQ0o7SUFBQTtNQUFBO0lBQUE7RUFBQSxJQUFDO0FBQ04sQ0FBQztBQUVEbEIsR0FBRyxDQUFDcEUsc0RBQVcsRUFBRWlFLE9BQU8sRUFBRUMsY0FBYyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtZmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtZmVhdHVyZWQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWZlYXR1cmVkL2RvbS1tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1mZWF0dXJlZC9mZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWZlYXR1cmVkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVmVuZG9yIExpYnJhcmllc1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAnKTtcclxuXHJcbi8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe3RyaWdnZXI6IFwiaG92ZXJcIn0pO1xyXG5cclxuICAgIC8vICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBcIjppbnB1dDpub3QodGV4dGFyZWEpXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIC8vICAgICByZXR1cm4gZXZlbnQua2V5ICE9IFwiRW50ZXJcIjtcclxuICAgIC8vICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEFwcCBKYXZhc2NyaXB0XHJcbnJlcXVpcmUoJy4vcHJvZHVjdC1mZWF0dXJlZC9tYWluJyk7IiwiZXhwb3J0IGNvbnN0IERPTVNlbGVjdG9yID0ge1xyXG4gICAgU0VUX0lURU1fQlVUVE9OU19DTEFTUzogJy5zZXQtaXRlbS1idXR0b24nLFxyXG4gICAgUkVNT1ZFX0lURU1fQlVUVE9OU19DTEFTUzogJy5yZW1vdmUtaXRlbS1idXR0b24nLFxyXG4gICAgU0hPV19JVEVNX1RSSUdHRVJFUlNfQ0xBU1M6ICcuc2hvdy1pdGVtLXRyaWdnZXJlcicsXHJcbiAgICBGRUFUVVJFRF9GT1JNOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZWQtZm9ybScpLFxyXG4gICAgVE9LRU46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiX3Rva2VuXCJdJykudmFsdWUsXHJcbiAgICBTVUNDRVNTX01FU1NBR0U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWNjZXNzLW1lc3NhZ2UnKSxcclxuICAgIEVSUk9SX01FU1NBR0U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1tZXNzYWdlJyksXHJcbiAgICBUQUI6ICQoJ2J1dHRvbltkYXRhLXRvZ2dsZT1cInRhYlwiXScpLFxyXG59IiwiaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbU1hbmlwdWxhdG9yIHtcclxuICAgIGRpc3BsYXlSZXN1bHQobGlzdEdyb3VwRWxlbWVudCwgcHJvZHVjdExpc3Qpe1xyXG4gICAgICAgIGxpc3RHcm91cEVsZW1lbnQuaW5uZXJIVE1MID0gcHJvZHVjdExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVJlc3VsdE9uTG9hZGluZyhsaXN0R3JvdXBFbGVtZW50KXtcclxuICAgICAgICBsaXN0R3JvdXBFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSBweC0yIGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGRpc2FibGVkIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMSB0ZXh0LWNlbnRlclwiPkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWxlbWVudCwgaXNWaXNpYmxlKXtcclxuICAgICAgICBpc1Zpc2libGUgPyBsaXN0R3JvdXBFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJykgOiBsaXN0R3JvdXBFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkTmV3TGlzdChmb3JtRWxlbWVudCl7XHJcbiAgICAvLyAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIGh0bWwuY2xhc3NOYW1lID0gJ2Zvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zJztcclxuICAgIC8vICAgICBodG1sLmlubmVySFRNTCA9IGBcclxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwiY29sLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgIC8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtdHJhbnNwYXJlbnRcIiB2YWx1ZT1cIlwiIHJlYWRvbmx5PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1zZWNvbmRhcnkgcmVtb3ZlLWl0ZW0tYnV0dG9uIHotMVwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2x1Zz1cIlwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGgtMTAwIHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcGwtM1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgLS1TZWxlY3RlZCBQcm9kdWN0LS08L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgZC1mbGV4XCI+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIGJnLWxpZ2h0IHB5LTEgcHgtMiBteC1hdXRvXCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sZXNzLXRoYW4gbXItYXV0b1wiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVxdWFscyBtbC1hdXRvXCI+PC9pPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBzaG93LWl0ZW0tdHJpZ2dlcmVyXCJcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0J3MgbmFtZS4uLlwiIHZhbHVlPVwiXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1wdXJwbGVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMCB6LTUgcHItMyBkLW5vbmVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cCBwci00IHBsLTIgcHQtMSByb3VuZGVkLTBcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgICBgO1xyXG4gICAgLy8gICAgIGZvcm1FbGVtZW50LmFwcGVuZChodG1sKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRQcm9kdWN0KGVsZW0pIHtcclxuICAgICAgICBjb25zdCBpbnB1dFRyaWdnZXJlckVsZW1lbnQgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0aW5nRWxlbWVudCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZWRQcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBpbnB1dFRyaWdnZXJlckVsZW1lbnQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgaW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpICsgJ1wiXScpKSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVkUHJvZHVjdExpc3QucHVzaChpdGVtLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmZWF0dXJlZFByb2R1Y3RMaXN0LmluY2x1ZGVzKGVsZW0uZGF0YXNldC5zbHVnKSkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RXJyTXNnKCdQcm9kdWN0IGFscmVhZHkgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBlbGVtLmRhdGFzZXQuc2x1ZztcclxuICAgICAgICBmbG9hdGluZ0VsZW1lbnQuaW5uZXJIVE1MID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csIFwiXCIpO1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnQuZGF0YXNldC5zbHVnID0gZWxlbS5kYXRhc2V0LnNsdWc7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd6LTEnKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U3VjY2Vzc01zZygnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvZHVjdChlbGVtKSB7IFxyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0aW5nRWxlbWVudCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gbnVsbDtcclxuICAgICAgICBmbG9hdGluZ0VsZW1lbnQuaW5uZXJIVE1MID0gJy0tU2VsZWN0ZWQgSXRlbS0tJztcclxuICAgICAgICBlbGVtLmRhdGFzZXQuc2x1ZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUVyck1zZyhtZXNzYWdlKXsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVyOiA1MDAwLFxyXG4gICAgICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnLjVlbSAxZW0nLFxyXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdtYi0wJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdGYWlsZWQgc2VsZWN0aW5nIHByb2R1Y3QhJyxcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U3VjY2Vzc01zZyhtZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICB0aW1lcjogNTAwMCxcclxuICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFkZGluZzogJy41ZW0gMWVtJyxcclxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnbWItMCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIHNlbGVjdGluZyBwcm9kdWN0IScsXHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUVyck1zZ01vZGFsKG1lc3NhZ2Upe1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkZhaWxlZFwiLFxyXG4gICAgICAgICAgICBodG1sOiBtZXNzYWdlLFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U3VjY2Vzc01zZ01vZGFsKG1lc3NhZ2Upe1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGZXRjaGVyIHtcclxuICAgIGFzeW5jIGdldERhdGEodG9rZW4sIGFkZGl0aW9uYWxVcmwsIHF1ZXJ5U3RyaW5nKXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFkZGl0aW9uYWxVcmwgKyAocXVlcnlTdHJpbmcgPyBxdWVyeVN0cmluZyA6ICcnKSwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBET01TZWxlY3RvciB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IHsgRmV0Y2hlciB9IGZyb20gJy4vZmV0Y2hlci5qcyc7XHJcbmltcG9ydCB7IERvbU1hbmlwdWxhdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0b3IuanMnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IG5ldyBGZXRjaGVyKCk7XHJcbmNvbnN0IGRvbU1hbmlwdWxhdG9yID0gbmV3IERvbU1hbmlwdWxhdG9yKCk7XHJcbmxldCByZXF1ZXN0VGltZXI7XHJcblxyXG5jb25zdCBydW4gPSAoRFMsIEYsIERNKSA9PiB7XHJcbiAgICBpZiAoRFMuU1VDQ0VTU19NRVNTQUdFKSB7XHJcbiAgICAgICAgRE0uZGlzcGxheVN1Y2Nlc3NNc2dNb2RhbChEUy5TVUNDRVNTX01FU1NBR0UuZGF0YXNldC5tZXNzYWdlKTtcclxuICAgIH0gZWxzZSBpZiAoRFMuRVJST1JfTUVTU0FHRSkge1xyXG4gICAgICAgIERNLmRpc3BsYXlFcnJNc2dNb2RhbChEUy5FUlJPUl9NRVNTQUdFLmRhdGFzZXQubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgRFMuVEFCLm9uKCdoaWRlLmJzLnRhYicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidHlwZVsnK2V2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5KyddXCJdJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJwcm9kdWN0LXNsdWdbJytldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeSsnXVtdXCJdJyk7XHJcbiAgICAgICAgaWYgKCFyYWRpby52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRzKXtcclxuICAgICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIERTLkZFQVRVUkVEX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoRFMuU0VUX0lURU1fQlVUVE9OU19DTEFTUykpe1xyXG4gICAgICAgICAgICBETS5zZXRQcm9kdWN0KGUudGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcyhEUy5TRVRfSVRFTV9CVVRUT05TX0NMQVNTKSkge1xyXG4gICAgICAgICAgICBETS5zZXRQcm9kdWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKERTLlJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1MpKXtcclxuICAgICAgICAgICAgRE0ucmVtb3ZlUHJvZHVjdChlLnRhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoRFMuUkVNT1ZFX0lURU1fQlVUVE9OU19DTEFTUykpIHtcclxuICAgICAgICAgICAgRE0ucmVtb3ZlUHJvZHVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBEUy5GRUFUVVJFRF9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoRFMuU0hPV19JVEVNX1RSSUdHRVJFUlNfQ0xBU1MpKXtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0R3JvdXBFbCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBETS5yZXN1bHRWaXNpYmlsaXR5KGxpc3RHcm91cEVsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIERNLmRpc3BsYXlSZXN1bHRPbkxvYWRpbmcobGlzdEdyb3VwRWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRE0ucmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXF1ZXN0VGltZXIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBGLmdldERhdGEoRFMuVE9LRU4sICdmZWF0dXJlZC9hc3luYycsICc/a2V5d29yZD0nICsgZWxlbS52YWx1ZSArICcmY2F0ZWdvcnk9JyArIGVsZW0uZGF0YXNldC5jYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERNLmRpc3BsYXlSZXN1bHQobGlzdEdyb3VwRWwsIHJlc3BvbnNlLmh0bWxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBEUy5GRUFUVVJFRF9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoRFMuU0hPV19JVEVNX1RSSUdHRVJFUlNfQ0xBU1MpKXtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0R3JvdXBFbCA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIERNLnJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWwsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5ydW4oRE9NU2VsZWN0b3IsIGZldGNoZXIsIGRvbU1hbmlwdWxhdG9yKTsiXSwibmFtZXMiOlsiJCIsInRvb2x0aXAiLCJ0cmlnZ2VyIiwicmVxdWlyZSIsIkRPTVNlbGVjdG9yIiwiU0VUX0lURU1fQlVUVE9OU19DTEFTUyIsIlJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1MiLCJTSE9XX0lURU1fVFJJR0dFUkVSU19DTEFTUyIsIkZFQVRVUkVEX0ZPUk0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJUT0tFTiIsInZhbHVlIiwiU1VDQ0VTU19NRVNTQUdFIiwiRVJST1JfTUVTU0FHRSIsIlRBQiIsIlN3YWwiLCJEb21NYW5pcHVsYXRvciIsImxpc3RHcm91cEVsZW1lbnQiLCJwcm9kdWN0TGlzdCIsImlubmVySFRNTCIsImlzVmlzaWJsZSIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlbGVtIiwiaW5wdXRUcmlnZ2VyZXJFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnB1dEVsZW1lbnQiLCJmbG9hdGluZ0VsZW1lbnQiLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlRWxlbWVudCIsImZlYXR1cmVkUHJvZHVjdExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0QXR0cmlidXRlIiwiaXRlbSIsInB1c2giLCJpbmNsdWRlcyIsImRhdGFzZXQiLCJzbHVnIiwiZGlzcGxheUVyck1zZyIsInJlcGxhY2UiLCJkaXNwbGF5U3VjY2Vzc01zZyIsIm1lc3NhZ2UiLCJUb2FzdCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwicGFkZGluZyIsImN1c3RvbUNsYXNzIiwidGl0bGUiLCJmaXJlIiwiaWNvbiIsInRleHQiLCJodG1sIiwiRmV0Y2hlciIsInRva2VuIiwiYWRkaXRpb25hbFVybCIsInF1ZXJ5U3RyaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImZldGNoZXIiLCJkb21NYW5pcHVsYXRvciIsInJlcXVlc3RUaW1lciIsInJ1biIsIkRTIiwiRiIsIkRNIiwiZGlzcGxheVN1Y2Nlc3NNc2dNb2RhbCIsImRpc3BsYXlFcnJNc2dNb2RhbCIsIm9uIiwiZXZlbnQiLCJyYWRpbyIsInRhcmdldCIsImNhdGVnb3J5IiwiaW5wdXRzIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1hdGNoZXMiLCJzZXRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImxpc3RHcm91cEVsIiwicmVzdWx0VmlzaWJpbGl0eSIsImRpc3BsYXlSZXN1bHRPbkxvYWRpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0RGF0YSIsInRoZW4iLCJkaXNwbGF5UmVzdWx0IiwiaHRtbFJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=