(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/admin/product-carousel"],{

/***/ "./resources/js/admin/product-carousel.js":
/*!************************************************!*\
  !*** ./resources/js/admin/product-carousel.js ***!
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
__webpack_require__(/*! ./product-carousel/main */ "./resources/js/admin/product-carousel/main.js");

/***/ }),

/***/ "./resources/js/admin/product-carousel/ajax.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/product-carousel/ajax.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJAX": () => (/* binding */ AJAX)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var AJAX = /*#__PURE__*/function () {
  function AJAX() {
    _classCallCheck(this, AJAX);
  }
  _createClass(AJAX, [{
    key: "get",
    value: function get(token, productKeyword) {
      return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              resolve(JSON.parse(httpRequest.responseText));
            } else {
              reject('Rejected');
            }
          }
        };
        httpRequest.open('GET', 'carousel/async?keyword=' + productKeyword, true);

        // Send the proper header information along with the request
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
        httpRequest.send();
      });
    }
  }, {
    key: "store",
    value: function store(token, slug) {
      return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              resolve(JSON.parse(httpRequest.responseText));
            } else {
              reject(JSON.parse(httpRequest.responseText));
            }
          }
        };
        httpRequest.open('POST', 'carousel/async/' + slug, true);

        // Send the proper header information along with the request
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
        httpRequest.send();
      });
    }
  }, {
    key: "destroy",
    value: function destroy(token) {
      var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              resolve(JSON.parse(httpRequest.responseText));
            } else {
              reject(JSON.parse(httpRequest.responseText));
            }
          }
        };
        httpRequest.open('DELETE', 'carousel/async/' + slug, true);

        // Send the proper header information along with the request
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
        httpRequest.send();
      });
    }
  }]);
  return AJAX;
}();

/***/ }),

/***/ "./resources/js/admin/product-carousel/constants.js":
/*!**********************************************************!*\
  !*** ./resources/js/admin/product-carousel/constants.js ***!
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
  ADD_NEW_BUTTON: document.querySelector('#add-new'),
  CAROUSEL_FORM: document.querySelector('#carousel-form'),
  TOKEN: document.querySelector('[name="_token"]').value
};

/***/ }),

/***/ "./resources/js/admin/product-carousel/main.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/product-carousel/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./resources/js/admin/product-carousel/constants.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax.js */ "./resources/js/admin/product-carousel/ajax.js");
/* harmony import */ var _set_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-product.js */ "./resources/js/admin/product-carousel/set-product.js");



var aJAX = new _ajax_js__WEBPACK_IMPORTED_MODULE_1__.AJAX();
var setProduct = new _set_product_js__WEBPACK_IMPORTED_MODULE_2__.SetProduct();
var getReqTimer;
var run = function run(DS, A, SP) {
  DS.CAROUSEL_FORM.addEventListener('click', function (e) {
    if (e.target.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
      trySetItem(e.target);
    } else if (e.target.parentElement.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
      trySetItem(e.target.parentElement);
    }
    if (e.target.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
      tryRemoveItem(e.target);
    } else if (e.target.parentElement.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
      tryRemoveItem(e.target.parentElement);
    }
  });
  DS.CAROUSEL_FORM.addEventListener('input', function (e) {
    if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)) {
      var elem = e.target;
      var listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
      if (elem.value) {
        SP.resultVisibility(listGroupEl, true);
        SP.displayResultOnLoading(listGroupEl);
      } else {
        SP.resultVisibility(listGroupEl, false);
      }
      clearTimeout(getReqTimer);
      getReqTimer = setTimeout(function () {
        A.get(DS.TOKEN, elem.value).then(function (value) {
          value ? SP.resultVisibility(listGroupEl, true) : SP.resultVisibility(listGroupEl, false);
          SP.displayResult(listGroupEl, value);
        }, function (error) {
          alert(error);
        });
      }, 300);
    }
  });
  DS.ADD_NEW_BUTTON.addEventListener('click', function (e) {
    if (DS.CAROUSEL_FORM.children.length == 2) {
      DS.CAROUSEL_FORM.lastElementChild.matches('.container') ? DS.CAROUSEL_FORM.lastElementChild.remove() : null;
    }
    SP.addNewList(DS.CAROUSEL_FORM);
  });
};
run(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector, aJAX, setProduct);
function trySetItem(elem) {
  var inputTriggererEl = elem.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
  var listGroupEl = elem.parentElement;
  var inputEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild;
  var floatingEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild;
  var removeEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
  inputTriggererEl.value = null;
  setProduct.resultVisibility(listGroupEl, false);
  if (inputEl) {
    aJAX.store(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.TOKEN, elem.dataset.slug).then(function (value) {
      setProduct.setSuccessMsg(value.name);
      aJAX.destroy(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.TOKEN, inputEl.value).then(function () {
        // Success
      }, function (error) {
        setProduct.setFailedMsg(error);
      });
      setProduct.set(inputEl, floatingEl, removeEl, value);
    }, function (error) {
      setProduct.setFailedMsg(error.errMsg);
    });
  } else {
    aJAX.store(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.TOKEN, elem.dataset.slug).then(function (value) {
      SP.setSuccessMsg(value.name);
      setProduct.set(inputEl, floatingEl, removeEl, value);
    }, function (error) {
      setProduct.setFailedMsg(error.errMsg);
    });
  }
}
function tryRemoveItem(elem) {
  aJAX.destroy(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.TOKEN, elem.dataset.slug).then(function (value) {
    var formRowEl = elem.parentElement.parentElement.parentElement.parentElement;
    setProduct.remove(formRowEl);
    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.CAROUSEL_FORM.children.length == 1) {
      var html = document.createElement('div');
      html.className = 'container border border-2 rounded bg-light';
      html.innerHTML = "\n                <div class=\"row\">\n                    <div class=\"col-12 text-center py-3\">\n                        You haven't added any product to the carousel list\n                    </div>\n                </div>\n                ";
      _constants_js__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.CAROUSEL_FORM.append(html);
    }
  }, function (error) {
    alert(error);
  });
}

/***/ }),

/***/ "./resources/js/admin/product-carousel/set-product.js":
/*!************************************************************!*\
  !*** ./resources/js/admin/product-carousel/set-product.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetProduct": () => (/* binding */ SetProduct)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/admin/product-carousel/constants.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var SetProduct = /*#__PURE__*/function () {
  function SetProduct() {
    _classCallCheck(this, SetProduct);
  }
  _createClass(SetProduct, [{
    key: "setSuccessMsg",
    value: function setSuccessMsg(name) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        padding: '.5em 1em',
        customClass: {
          title: 'mb-0'
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Product added successfully!'
      });
    }
  }, {
    key: "setFailedMsg",
    value: function setFailedMsg(errorMessage) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        padding: '.5em 1em',
        customClass: {
          title: 'mb-0'
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Failed adding product!',
        text: errorMessage
      });
    }
  }, {
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
  }, {
    key: "addNewList",
    value: function addNewList(formElement) {
      var inputElements = _constants__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.CAROUSEL_FORM.children;
      if (inputElements.length > 6) return;
      var html = document.createElement('div');
      html.className = 'form-row align-items-center mb-3';
      html.innerHTML = "\n        <div class=\"col-7 d-flex align-items-center position-relative\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control text-transparent\" value=\"\" readonly>\n                <div class=\"input-group-append\">\n                    <button type=\"button\" class=\"input-group-text bg-secondary remove-item-button z-1\"\n                        data-slug=\"\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"w-100 h-100 position-absolute d-flex align-items-center pl-3\">\n                --Selected Product--</div>\n        </div>\n        <div class=\"col-1 d-flex\">\n            <div class=\"rounded bg-light py-1 px-2 mx-auto\">\n                <i class=\"fas fa-less-than mr-auto\"></i>\n                <i class=\"fas fa-equals ml-auto\"></i>\n            </div>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"position-relative\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control show-item-triggerer\"\n                        placeholder=\"Enter product's name...\" value=\"\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text bg-purple\">\n                            <i class=\"fas fa-search\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"position-absolute w-100 h-100 z-5 pr-3 d-none\">\n                    <div class=\"list-group pr-4 pl-2 pt-1 rounded-0\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
      formElement.append(html);
    }
  }, {
    key: "set",
    value: function set(inputElement, floatElement, removeElement, productObj) {
      inputElement.value = productObj.slug;
      floatElement.innerHTML = productObj.name;
      removeElement.dataset.slug = productObj.slug;
      removeElement.classList.add('z-1');
    }
  }, {
    key: "remove",
    value: function remove(formRowElement) {
      formRowElement.remove();
    }
  }]);
  return SetProduct;
}();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/admin/product-carousel.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztNQUNuQixJQUFNQyxhQUFhLEdBQUdqRiwwRUFBa0M7TUFDeEQsSUFBSWlGLGFBQWEsQ0FBQzFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFFOUIsSUFBTWdCLElBQUksR0FBR2xELFFBQVEsQ0FBQ21ELGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNELElBQUksQ0FBQ0UsU0FBUyxHQUFHLGtDQUFrQztNQUNuREYsSUFBSSxDQUFDRyxTQUFTLGl1REFxQ2I7TUFDRHNCLFdBQVcsQ0FBQ3JCLE1BQU0sQ0FBQ0osSUFBSSxDQUFDO0lBQzVCO0VBQUM7SUFBQTtJQUFBLE9BRUQsYUFBSTJCLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRTtNQUN2REgsWUFBWSxDQUFDekUsS0FBSyxHQUFHNEUsVUFBVSxDQUFDdEYsSUFBSTtNQUNwQ29GLFlBQVksQ0FBQ3pCLFNBQVMsR0FBRzJCLFVBQVUsQ0FBQ3BDLElBQUk7TUFDeENtQyxhQUFhLENBQUNyQyxPQUFPLENBQUNoRCxJQUFJLEdBQUdzRixVQUFVLENBQUN0RixJQUFJO01BQzVDcUYsYUFBYSxDQUFDTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDdEM7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBT08sY0FBYyxFQUFFO01BQ25CQSxjQUFjLENBQUM5QyxNQUFNLEVBQUU7SUFDM0I7RUFBQztFQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1jYXJvdXNlbC9hamF4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWNhcm91c2VsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1jYXJvdXNlbC9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWNhcm91c2VsL3NldC1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFZlbmRvciBMaWJyYXJpZXNcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcblxyXG4vLyBFbmFibGUgdG9vbHRpcHMgZXZlcnl3aGVyZVxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHt0cmlnZ2VyOiBcImhvdmVyXCJ9KTtcclxuICAgIFxyXG4gICAgLy8gJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIFwiOmlucHV0Om5vdCh0ZXh0YXJlYSlcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgLy8gICAgIHJldHVybiBldmVudC5rZXkgIT0gXCJFbnRlclwiO1xyXG4gICAgLy8gICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gQXBwIEphdmFzY3JpcHRcclxucmVxdWlyZSgnLi9wcm9kdWN0LWNhcm91c2VsL21haW4nKTsiLCJleHBvcnQgY2xhc3MgQUpBWCB7XHJcbiAgICBnZXQodG9rZW4sIHByb2R1Y3RLZXl3b3JkKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgY29uc3QgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdSZWplY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignR0VUJywgJ2Nhcm91c2VsL2FzeW5jP2tleXdvcmQ9JyArIHByb2R1Y3RLZXl3b3JkICwgdHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU2VuZCB0aGUgcHJvcGVyIGhlYWRlciBpbmZvcm1hdGlvbiBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLUNTUkYtVE9LRU4nLCB0b2tlbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlKHRva2VuLCBzbHVnKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgY29uc3QgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vcGVuKCdQT1NUJywgJ2Nhcm91c2VsL2FzeW5jLycgKyBzbHVnLCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBwcm9wZXIgaGVhZGVyIGluZm9ybWF0aW9uIGFsb25nIHdpdGggdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ1gtQ1NSRi1UT0tFTicsIHRva2VuKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KHRva2VuLCBzbHVnID0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0RFTEVURScsICdjYXJvdXNlbC9hc3luYy8nICsgc2x1ZywgdHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU2VuZCB0aGUgcHJvcGVyIGhlYWRlciBpbmZvcm1hdGlvbiBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLUNTUkYtVE9LRU4nLCB0b2tlbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgRE9NU2VsZWN0b3IgPSB7XHJcbiAgICBTRVRfSVRFTV9CVVRUT05TX0NMQVNTOiAnLnNldC1pdGVtLWJ1dHRvbicsXHJcbiAgICBSRU1PVkVfSVRFTV9CVVRUT05TX0NMQVNTOiAnLnJlbW92ZS1pdGVtLWJ1dHRvbicsXHJcbiAgICBTSE9XX0lURU1fVFJJR0dFUkVSU19DTEFTUzogJy5zaG93LWl0ZW0tdHJpZ2dlcmVyJyxcclxuICAgIEFERF9ORVdfQlVUVE9OOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldycpLFxyXG4gICAgQ0FST1VTRUxfRk9STTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nhcm91c2VsLWZvcm0nKSxcclxuICAgIFRPS0VOOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIl90b2tlblwiXScpLnZhbHVlLFxyXG59IiwiaW1wb3J0IHsgRE9NU2VsZWN0b3IgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IEFKQVggfSBmcm9tICcuL2FqYXguanMnO1xyXG5pbXBvcnQgeyBTZXRQcm9kdWN0IH0gZnJvbSAnLi9zZXQtcHJvZHVjdC5qcyc7XHJcblxyXG5jb25zdCBhSkFYID0gbmV3IEFKQVgoKTtcclxuY29uc3Qgc2V0UHJvZHVjdCA9IG5ldyBTZXRQcm9kdWN0KCk7XHJcbmxldCBnZXRSZXFUaW1lcjtcclxuXHJcbmNvbnN0IHJ1biA9IChEUywgQSwgU1ApID0+IHtcclxuICAgIERTLkNBUk9VU0VMX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhEUy5TRVRfSVRFTV9CVVRUT05TX0NMQVNTKSl7XHJcbiAgICAgICAgICAgIHRyeVNldEl0ZW0oZS50YXJnZXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKERTLlNFVF9JVEVNX0JVVFRPTlNfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgIHRyeVNldEl0ZW0oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKERTLlJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1MpKXtcclxuICAgICAgICAgICAgdHJ5UmVtb3ZlSXRlbShlLnRhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoRFMuUkVNT1ZFX0lURU1fQlVUVE9OU19DTEFTUykpIHtcclxuICAgICAgICAgICB0cnlSZW1vdmVJdGVtKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIERTLkNBUk9VU0VMX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhEUy5TSE9XX0lURU1fVFJJR0dFUkVSU19DTEFTUykpe1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RHcm91cEVsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGVsZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIFNQLnJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgU1AuZGlzcGxheVJlc3VsdE9uTG9hZGluZyhsaXN0R3JvdXBFbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBTUC5yZXN1bHRWaXNpYmlsaXR5KGxpc3RHcm91cEVsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdldFJlcVRpbWVyKTtcclxuICAgICAgICAgICAgZ2V0UmVxVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBBLmdldChEUy5UT0tFTiwgZWxlbS52YWx1ZSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA/IFNQLnJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWwsIHRydWUpIDogU1AucmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTUC5kaXNwbGF5UmVzdWx0KGxpc3RHcm91cEVsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgICBcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIERTLkFERF9ORVdfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKERTLkNBUk9VU0VMX0ZPUk0uY2hpbGRyZW4ubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgRFMuQ0FST1VTRUxfRk9STS5sYXN0RWxlbWVudENoaWxkLm1hdGNoZXMoJy5jb250YWluZXInKSA/IERTLkNBUk9VU0VMX0ZPUk0ubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNQLmFkZE5ld0xpc3QoRFMuQ0FST1VTRUxfRk9STSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxucnVuKERPTVNlbGVjdG9yLCBhSkFYLCBzZXRQcm9kdWN0KTtcclxuXHJcbmZ1bmN0aW9uIHRyeVNldEl0ZW0oZWxlbSl7XHJcbiAgICBjb25zdCBpbnB1dFRyaWdnZXJlckVsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGxpc3RHcm91cEVsID0gZWxlbS5wYXJlbnRFbGVtZW50OyAgXHJcbiAgICBjb25zdCBpbnB1dEVsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBmbG9hdGluZ0VsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IHJlbW92ZUVsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIFxyXG4gICAgaW5wdXRUcmlnZ2VyZXJFbC52YWx1ZSA9IG51bGw7XHJcbiAgICBzZXRQcm9kdWN0LnJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWwsIGZhbHNlKTsgXHJcbiAgICBcclxuICAgIGlmIChpbnB1dEVsKSB7XHJcbiAgICAgICAgYUpBWC5zdG9yZShET01TZWxlY3Rvci5UT0tFTiwgZWxlbS5kYXRhc2V0LnNsdWcpLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7c2V0UHJvZHVjdC5zZXRTdWNjZXNzTXNnKHZhbHVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYUpBWC5kZXN0cm95KERPTVNlbGVjdG9yLlRPS0VOLCBpbnB1dEVsLnZhbHVlKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0LnNldEZhaWxlZE1zZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3Quc2V0KGlucHV0RWwsIGZsb2F0aW5nRWwsIHJlbW92ZUVsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdC5zZXRGYWlsZWRNc2coZXJyb3IuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFKQVguc3RvcmUoRE9NU2VsZWN0b3IuVE9LRU4sIGVsZW0uZGF0YXNldC5zbHVnKS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbih2YWx1ZSkge1NQLnNldFN1Y2Nlc3NNc2codmFsdWUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0LnNldChpbnB1dEVsLCBmbG9hdGluZ0VsLCByZW1vdmVFbCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LCAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvcikgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3Quc2V0RmFpbGVkTXNnKGVycm9yLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlSZW1vdmVJdGVtKGVsZW0pe1xyXG4gICAgYUpBWC5kZXN0cm95KERPTVNlbGVjdG9yLlRPS0VOLCBlbGVtLmRhdGFzZXQuc2x1ZykudGhlbiggICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVJvd0VsID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0LnJlbW92ZShmb3JtUm93RWwpO1xyXG4gICAgICAgICAgICBpZiAoRE9NU2VsZWN0b3IuQ0FST1VTRUxfRk9STS5jaGlsZHJlbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgaHRtbC5jbGFzc05hbWUgPSAnY29udGFpbmVyIGJvcmRlciBib3JkZXItMiByb3VuZGVkIGJnLWxpZ2h0JztcclxuICAgICAgICAgICAgICAgIGh0bWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXIgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZW4ndCBhZGRlZCBhbnkgcHJvZHVjdCB0byB0aGUgY2Fyb3VzZWwgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgRE9NU2VsZWN0b3IuQ0FST1VTRUxfRk9STS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgRE9NU2VsZWN0b3IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldFByb2R1Y3Qge1xyXG4gICAgc2V0U3VjY2Vzc01zZyhuYW1lKXtcclxuICAgICAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFkZGluZzogJy41ZW0gMWVtJyxcclxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnbWItMCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9kdWN0IGFkZGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZhaWxlZE1zZyhlcnJvck1lc3NhZ2UpeyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcuNWVtIDFlbScsXHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ21iLTAnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCBhZGRpbmcgcHJvZHVjdCEnLFxyXG4gICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVJlc3VsdChsaXN0R3JvdXBFbGVtZW50LCBwcm9kdWN0TGlzdCl7XHJcbiAgICAgICAgbGlzdEdyb3VwRWxlbWVudC5pbm5lckhUTUwgPSBwcm9kdWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UmVzdWx0T25Mb2FkaW5nKGxpc3RHcm91cEVsZW1lbnQpe1xyXG4gICAgICAgIGxpc3RHcm91cEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweS0xIHB4LTIgbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZGlzYWJsZWQgbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0xIHRleHQtY2VudGVyXCI+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbGVtZW50LCBpc1Zpc2libGUpe1xyXG4gICAgICAgIGlzVmlzaWJsZSA/IGxpc3RHcm91cEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKSA6IGxpc3RHcm91cEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdMaXN0KGZvcm1FbGVtZW50KXtcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gRE9NU2VsZWN0b3IuQ0FST1VTRUxfRk9STS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoaW5wdXRFbGVtZW50cy5sZW5ndGggPiA2KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBodG1sLmNsYXNzTmFtZSA9ICdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMyc7XHJcbiAgICAgICAgaHRtbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC03IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0LXRyYW5zcGFyZW50XCIgdmFsdWU9XCJcIiByZWFkb25seT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgYmctc2Vjb25kYXJ5IHJlbW92ZS1pdGVtLWJ1dHRvbiB6LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNsdWc9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBoLTEwMCBwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBsLTNcIj5cclxuICAgICAgICAgICAgICAgIC0tU2VsZWN0ZWQgUHJvZHVjdC0tPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZCBiZy1saWdodCBweS0xIHB4LTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGVzcy10aGFuIG1yLWF1dG9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lcXVhbHMgbWwtYXV0b1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2hvdy1pdGVtLXRyaWdnZXJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCdzIG5hbWUuLi5cIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgYmctcHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDAgei01IHByLTMgZC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAgcHItNCBwbC0yIHB0LTEgcm91bmRlZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBmb3JtRWxlbWVudC5hcHBlbmQoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGlucHV0RWxlbWVudCwgZmxvYXRFbGVtZW50LCByZW1vdmVFbGVtZW50LCBwcm9kdWN0T2JqKSB7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gcHJvZHVjdE9iai5zbHVnO1xyXG4gICAgICAgIGZsb2F0RWxlbWVudC5pbm5lckhUTUwgPSBwcm9kdWN0T2JqLm5hbWU7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudC5kYXRhc2V0LnNsdWcgPSBwcm9kdWN0T2JqLnNsdWc7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd6LTEnKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShmb3JtUm93RWxlbWVudCkge1xyXG4gICAgICAgIGZvcm1Sb3dFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIiQiLCJ0b29sdGlwIiwidHJpZ2dlciIsInJlcXVpcmUiLCJBSkFYIiwidG9rZW4iLCJwcm9kdWN0S2V5d29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cFJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwic2x1ZyIsIkRPTVNlbGVjdG9yIiwiU0VUX0lURU1fQlVUVE9OU19DTEFTUyIsIlJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1MiLCJTSE9XX0lURU1fVFJJR0dFUkVSU19DTEFTUyIsIkFERF9ORVdfQlVUVE9OIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQ0FST1VTRUxfRk9STSIsIlRPS0VOIiwidmFsdWUiLCJTZXRQcm9kdWN0IiwiYUpBWCIsInNldFByb2R1Y3QiLCJnZXRSZXFUaW1lciIsInJ1biIsIkRTIiwiQSIsIlNQIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwidHJ5U2V0SXRlbSIsInBhcmVudEVsZW1lbnQiLCJ0cnlSZW1vdmVJdGVtIiwiZWxlbSIsImxpc3RHcm91cEVsIiwibGFzdEVsZW1lbnRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVzdWx0VmlzaWJpbGl0eSIsImRpc3BsYXlSZXN1bHRPbkxvYWRpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0IiwidGhlbiIsImRpc3BsYXlSZXN1bHQiLCJlcnJvciIsImFsZXJ0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyZW1vdmUiLCJhZGROZXdMaXN0IiwiaW5wdXRUcmlnZ2VyZXJFbCIsImlucHV0RWwiLCJmbG9hdGluZ0VsIiwicmVtb3ZlRWwiLCJzdG9yZSIsImRhdGFzZXQiLCJzZXRTdWNjZXNzTXNnIiwibmFtZSIsImRlc3Ryb3kiLCJzZXRGYWlsZWRNc2ciLCJzZXQiLCJlcnJNc2ciLCJmb3JtUm93RWwiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZCIsIlN3YWwiLCJUb2FzdCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwicGFkZGluZyIsImN1c3RvbUNsYXNzIiwidGl0bGUiLCJmaXJlIiwiaWNvbiIsImVycm9yTWVzc2FnZSIsInRleHQiLCJsaXN0R3JvdXBFbGVtZW50IiwicHJvZHVjdExpc3QiLCJpc1Zpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJmbG9hdEVsZW1lbnQiLCJyZW1vdmVFbGVtZW50IiwicHJvZHVjdE9iaiIsImZvcm1Sb3dFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==