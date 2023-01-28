(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/admin/product-carousel"],{

/***/ "./resources/js/admin/product-carousel.js":
/*!************************************************!*\
  !*** ./resources/js/admin/product-carousel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Vendor Libraries
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover"
  });
  $('.toast').toast({
    autohide: false
  });
  $('.toast').toast('show');

  // Swal.mixin({
  //     toast: true,
  // }).bindClickHandler('data-swal-toast-template');

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/admin/product-carousel/constants.js");
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
        httpRequest.open('GET', 'carousel/AJAX?keyword=' + productKeyword, true);

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
        httpRequest.open('POST', 'carousel/AJAX/' + slug, true);

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
        httpRequest.open('DELETE', 'carousel/AJAX/' + slug, true);

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
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./resources/js/admin/product-carousel/constants.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
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
        title: name,
        text: 'Product added successfully!'
      });
    }
  }, {
    key: "setFailedMsg",
    value: function setFailedMsg(errorMessage) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsMEJBQWlCZ0IsZ0JBQWdCLEVBQUVFLFNBQVMsRUFBQztNQUN6Q0EsU0FBUyxHQUFHRixnQkFBZ0IsQ0FBQ25ELGFBQWEsQ0FBQ3NELFNBQVMsQ0FBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBR2tDLGdCQUFnQixDQUFDbkQsYUFBYSxDQUFDc0QsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2xJO0VBQUM7SUFBQTtJQUFBLE9BRUQsb0JBQVdDLFdBQVcsRUFBQztNQUNuQixJQUFNeEIsSUFBSSxHQUFHbEQsUUFBUSxDQUFDbUQsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ0QsSUFBSSxDQUFDRSxTQUFTLEdBQUcsa0NBQWtDO01BQ25ERixJQUFJLENBQUNHLFNBQVMsaXVEQXFDYjtNQUNEcUIsV0FBVyxDQUFDcEIsTUFBTSxDQUFDSixJQUFJLENBQUM7SUFDNUI7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJeUIsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFO01BQ3ZESCxZQUFZLENBQUN2RSxLQUFLLEdBQUcwRSxVQUFVLENBQUNuRixJQUFJO01BQ3BDaUYsWUFBWSxDQUFDdkIsU0FBUyxHQUFHeUIsVUFBVSxDQUFDbEMsSUFBSTtNQUN4Q2lDLGFBQWEsQ0FBQ25DLE9BQU8sQ0FBQy9DLElBQUksR0FBR21GLFVBQVUsQ0FBQ25GLElBQUk7TUFDNUNrRixhQUFhLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUN0QztFQUFDO0lBQUE7SUFBQSxPQUVELGdCQUFPTSxjQUFjLEVBQUU7TUFDbkJBLGNBQWMsQ0FBQzVDLE1BQU0sRUFBRTtJQUMzQjtFQUFDO0VBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWNhcm91c2VsL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtY2Fyb3VzZWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LWNhcm91c2VsL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtY2Fyb3VzZWwvc2V0LXByb2R1Y3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVmVuZG9yIExpYnJhcmllc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxuXHJcbi8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe3RyaWdnZXI6IFwiaG92ZXJcIn0pO1xyXG4gICAgXHJcbiAgICAkKCcudG9hc3QnKS50b2FzdCh7YXV0b2hpZGU6ZmFsc2V9KTsgICAgXHJcbiAgICAkKCcudG9hc3QnKS50b2FzdCgnc2hvdycpO1xyXG4gICAgXHJcbiAgICAvLyBTd2FsLm1peGluKHtcclxuICAgIC8vICAgICB0b2FzdDogdHJ1ZSxcclxuICAgIC8vIH0pLmJpbmRDbGlja0hhbmRsZXIoJ2RhdGEtc3dhbC10b2FzdC10ZW1wbGF0ZScpO1xyXG5cclxuICAgIC8vICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBcIjppbnB1dDpub3QodGV4dGFyZWEpXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIC8vICAgICByZXR1cm4gZXZlbnQua2V5ICE9IFwiRW50ZXJcIjtcclxuICAgIC8vICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEFwcCBKYXZhc2NyaXB0XHJcbnJlcXVpcmUoJy4vcHJvZHVjdC1jYXJvdXNlbC9tYWluJyk7IiwiaW1wb3J0IHsgRE9NU2VsZWN0b3IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBSkFYIHtcclxuICAgIGdldCh0b2tlbiwgcHJvZHVjdEtleXdvcmQpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgICBjb25zdCBodHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShodHRwUmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1JlamVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCAnY2Fyb3VzZWwvQUpBWD9rZXl3b3JkPScgKyBwcm9kdWN0S2V5d29yZCAsIHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFNlbmQgdGhlIHByb3BlciBoZWFkZXIgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1DU1JGLVRPS0VOJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZSh0b2tlbiwgc2x1Zyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsICdjYXJvdXNlbC9BSkFYLycgKyBzbHVnLCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBwcm9wZXIgaGVhZGVyIGluZm9ybWF0aW9uIGFsb25nIHdpdGggdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ1gtQ1NSRi1UT0tFTicsIHRva2VuKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KHRva2VuLCBzbHVnID0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0RFTEVURScsICdjYXJvdXNlbC9BSkFYLycgKyBzbHVnLCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBwcm9wZXIgaGVhZGVyIGluZm9ybWF0aW9uIGFsb25nIHdpdGggdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ1gtQ1NSRi1UT0tFTicsIHRva2VuKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBET01TZWxlY3RvciA9IHtcclxuICAgIFNFVF9JVEVNX0JVVFRPTlNfQ0xBU1M6ICcuc2V0LWl0ZW0tYnV0dG9uJyxcclxuICAgIFJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1M6ICcucmVtb3ZlLWl0ZW0tYnV0dG9uJyxcclxuICAgIFNIT1dfSVRFTV9UUklHR0VSRVJTX0NMQVNTOiAnLnNob3ctaXRlbS10cmlnZ2VyZXInLFxyXG4gICAgQUREX05FV19CVVRUT046IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3JyksXHJcbiAgICBDQVJPVVNFTF9GT1JNOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Fyb3VzZWwtZm9ybScpLFxyXG4gICAgVE9LRU46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiX3Rva2VuXCJdJykudmFsdWUsXHJcbn0iLCJpbXBvcnQgeyBET01TZWxlY3RvciB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IHsgQUpBWCB9IGZyb20gJy4vYWpheC5qcyc7XHJcbmltcG9ydCB7IFNldFByb2R1Y3QgfSBmcm9tICcuL3NldC1wcm9kdWN0LmpzJztcclxuXHJcbmNvbnN0IGFKQVggPSBuZXcgQUpBWCgpO1xyXG5jb25zdCBzZXRQcm9kdWN0ID0gbmV3IFNldFByb2R1Y3QoKTtcclxubGV0IGdldFJlcVRpbWVyO1xyXG5cclxuY29uc3QgcnVuID0gKERTLCBBLCBTUCkgPT4ge1xyXG4gICAgRFMuQ0FST1VTRUxfRk9STS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKERTLlNFVF9JVEVNX0JVVFRPTlNfQ0xBU1MpKXtcclxuICAgICAgICAgICAgdHJ5U2V0SXRlbShlLnRhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoRFMuU0VUX0lURU1fQlVUVE9OU19DTEFTUykpIHtcclxuICAgICAgICAgICAgdHJ5U2V0SXRlbShlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoRFMuUkVNT1ZFX0lURU1fQlVUVE9OU19DTEFTUykpe1xyXG4gICAgICAgICAgICB0cnlSZW1vdmVJdGVtKGUudGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcyhEUy5SRU1PVkVfSVRFTV9CVVRUT05TX0NMQVNTKSkge1xyXG4gICAgICAgICAgIHRyeVJlbW92ZUl0ZW0oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgRFMuQ0FST1VTRUxfRk9STS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKERTLlNIT1dfSVRFTV9UUklHR0VSRVJTX0NMQVNTKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEdyb3VwRWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBpZiAoZWxlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgU1AucmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBTUC5kaXNwbGF5UmVzdWx0T25Mb2FkaW5nKGxpc3RHcm91cEVsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFNQLnJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWwsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZ2V0UmVxVGltZXIpO1xyXG4gICAgICAgICAgICBnZXRSZXFUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIEEuZ2V0KERTLlRPS0VOLCBlbGVtLnZhbHVlKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID8gU1AucmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbCwgdHJ1ZSkgOiBTUC5yZXN1bHRWaXNpYmlsaXR5KGxpc3RHcm91cEVsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNQLmRpc3BsYXlSZXN1bHQobGlzdEdyb3VwRWwsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgRFMuQUREX05FV19CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoRFMuQ0FST1VTRUxfRk9STS5jaGlsZHJlbi5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBEUy5DQVJPVVNFTF9GT1JNLmxhc3RFbGVtZW50Q2hpbGQubWF0Y2hlcygnLmNvbnRhaW5lcicpID8gRFMuQ0FST1VTRUxfRk9STS5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgU1AuYWRkTmV3TGlzdChEUy5DQVJPVVNFTF9GT1JNKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5ydW4oRE9NU2VsZWN0b3IsIGFKQVgsIHNldFByb2R1Y3QpO1xyXG5cclxuZnVuY3Rpb24gdHJ5U2V0SXRlbShlbGVtKXtcclxuICAgIGNvbnN0IGlucHV0VHJpZ2dlcmVyRWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgbGlzdEdyb3VwRWwgPSBlbGVtLnBhcmVudEVsZW1lbnQ7ICBcclxuICAgIGNvbnN0IGlucHV0RWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGZsb2F0aW5nRWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgcmVtb3ZlRWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgXHJcbiAgICBpbnB1dFRyaWdnZXJlckVsLnZhbHVlID0gbnVsbDtcclxuICAgIHNldFByb2R1Y3QucmVzdWx0VmlzaWJpbGl0eShsaXN0R3JvdXBFbCwgZmFsc2UpOyBcclxuICAgIFxyXG4gICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICBhSkFYLnN0b3JlKERPTVNlbGVjdG9yLlRPS0VOLCBlbGVtLmRhdGFzZXQuc2x1ZykudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24odmFsdWUpIHtzZXRQcm9kdWN0LnNldFN1Y2Nlc3NNc2codmFsdWUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBhSkFYLmRlc3Ryb3koRE9NU2VsZWN0b3IuVE9LRU4sIGlucHV0RWwudmFsdWUpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3Quc2V0RmFpbGVkTXNnKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdC5zZXQoaW5wdXRFbCwgZmxvYXRpbmdFbCwgcmVtb3ZlRWwsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSwgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0LnNldEZhaWxlZE1zZyhlcnJvci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYUpBWC5zdG9yZShET01TZWxlY3Rvci5UT0tFTiwgZWxlbS5kYXRhc2V0LnNsdWcpLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7U1Auc2V0U3VjY2Vzc01zZyh2YWx1ZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3Quc2V0KGlucHV0RWwsIGZsb2F0aW5nRWwsIHJlbW92ZUVsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdC5zZXRGYWlsZWRNc2coZXJyb3IuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVJlbW92ZUl0ZW0oZWxlbSl7XHJcbiAgICBhSkFYLmRlc3Ryb3koRE9NU2VsZWN0b3IuVE9LRU4sIGVsZW0uZGF0YXNldC5zbHVnKS50aGVuKCAgICAgICAgICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtUm93RWwgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3QucmVtb3ZlKGZvcm1Sb3dFbCk7XHJcbiAgICAgICAgICAgIGlmIChET01TZWxlY3Rvci5DQVJPVVNFTF9GT1JNLmNoaWxkcmVuLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBodG1sLmNsYXNzTmFtZSA9ICdjb250YWluZXIgYm9yZGVyIGJvcmRlci0yIHJvdW5kZWQgYmctbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgaHRtbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlbid0IGFkZGVkIGFueSBwcm9kdWN0IHRvIHRoZSBjYXJvdXNlbCBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBET01TZWxlY3Rvci5DQVJPVVNFTF9GT1JNLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICAgXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcImRyb3B6b25lXCI7XHJcbmltcG9ydCB7IERPTVNlbGVjdG9yIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRQcm9kdWN0IHtcclxuICAgIHNldFN1Y2Nlc3NNc2cobmFtZSl7XHJcbiAgICAgICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcuNWVtIDFlbScsXHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ21iLTAnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiBuYW1lLFxyXG4gICAgICAgICAgICB0ZXh0OiAnUHJvZHVjdCBhZGRlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGYWlsZWRNc2coZXJyb3JNZXNzYWdlKXsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnLjVlbSAxZW0nLFxyXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdtYi0wJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdGYWlsZWQgYWRkaW5nIHByb2R1Y3QhJyxcclxuICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlSZXN1bHQobGlzdEdyb3VwRWxlbWVudCwgcHJvZHVjdExpc3Qpe1xyXG4gICAgICAgIGxpc3RHcm91cEVsZW1lbnQuaW5uZXJIVE1MID0gcHJvZHVjdExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVJlc3VsdE9uTG9hZGluZyhsaXN0R3JvdXBFbGVtZW50KXtcclxuICAgICAgICBsaXN0R3JvdXBFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSBweC0yIGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGRpc2FibGVkIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMSB0ZXh0LWNlbnRlclwiPkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdFZpc2liaWxpdHkobGlzdEdyb3VwRWxlbWVudCwgaXNWaXNpYmxlKXtcclxuICAgICAgICBpc1Zpc2libGUgPyBsaXN0R3JvdXBFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJykgOiBsaXN0R3JvdXBFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3TGlzdChmb3JtRWxlbWVudCl7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NOYW1lID0gJ2Zvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zJztcclxuICAgICAgICBodG1sLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtdHJhbnNwYXJlbnRcIiB2YWx1ZT1cIlwiIHJlYWRvbmx5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1zZWNvbmRhcnkgcmVtb3ZlLWl0ZW0tYnV0dG9uIHotMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2x1Zz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGgtMTAwIHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgLS1TZWxlY3RlZCBQcm9kdWN0LS08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIGJnLWxpZ2h0IHB5LTEgcHgtMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sZXNzLXRoYW4gbXItYXV0b1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVxdWFscyBtbC1hdXRvXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBzaG93LWl0ZW0tdHJpZ2dlcmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0J3MgbmFtZS4uLlwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1wdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMCB6LTUgcHItMyBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cCBwci00IHBsLTIgcHQtMSByb3VuZGVkLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZChodG1sKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoaW5wdXRFbGVtZW50LCBmbG9hdEVsZW1lbnQsIHJlbW92ZUVsZW1lbnQsIHByb2R1Y3RPYmopIHtcclxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBwcm9kdWN0T2JqLnNsdWc7XHJcbiAgICAgICAgZmxvYXRFbGVtZW50LmlubmVySFRNTCA9IHByb2R1Y3RPYmoubmFtZTtcclxuICAgICAgICByZW1vdmVFbGVtZW50LmRhdGFzZXQuc2x1ZyA9IHByb2R1Y3RPYmouc2x1ZztcclxuICAgICAgICByZW1vdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3otMScpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGZvcm1Sb3dFbGVtZW50KSB7XHJcbiAgICAgICAgZm9ybVJvd0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJ0b29sdGlwIiwidHJpZ2dlciIsInRvYXN0IiwiYXV0b2hpZGUiLCJET01TZWxlY3RvciIsIkFKQVgiLCJ0b2tlbiIsInByb2R1Y3RLZXl3b3JkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJodHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJzbHVnIiwiU0VUX0lURU1fQlVUVE9OU19DTEFTUyIsIlJFTU9WRV9JVEVNX0JVVFRPTlNfQ0xBU1MiLCJTSE9XX0lURU1fVFJJR0dFUkVSU19DTEFTUyIsIkFERF9ORVdfQlVUVE9OIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQ0FST1VTRUxfRk9STSIsIlRPS0VOIiwidmFsdWUiLCJTZXRQcm9kdWN0IiwiYUpBWCIsInNldFByb2R1Y3QiLCJnZXRSZXFUaW1lciIsInJ1biIsIkRTIiwiQSIsIlNQIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwidHJ5U2V0SXRlbSIsInBhcmVudEVsZW1lbnQiLCJ0cnlSZW1vdmVJdGVtIiwiZWxlbSIsImxpc3RHcm91cEVsIiwibGFzdEVsZW1lbnRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVzdWx0VmlzaWJpbGl0eSIsImRpc3BsYXlSZXN1bHRPbkxvYWRpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0IiwidGhlbiIsImRpc3BsYXlSZXN1bHQiLCJlcnJvciIsImFsZXJ0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyZW1vdmUiLCJhZGROZXdMaXN0IiwiaW5wdXRUcmlnZ2VyZXJFbCIsImlucHV0RWwiLCJmbG9hdGluZ0VsIiwicmVtb3ZlRWwiLCJzdG9yZSIsImRhdGFzZXQiLCJzZXRTdWNjZXNzTXNnIiwibmFtZSIsImRlc3Ryb3kiLCJzZXRGYWlsZWRNc2ciLCJzZXQiLCJlcnJNc2ciLCJmb3JtUm93RWwiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZCIsIlN3YWwiLCJUb2FzdCIsIm1peGluIiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsInBhZGRpbmciLCJjdXN0b21DbGFzcyIsInRpdGxlIiwiZmlyZSIsImljb24iLCJ0ZXh0IiwiZXJyb3JNZXNzYWdlIiwibGlzdEdyb3VwRWxlbWVudCIsInByb2R1Y3RMaXN0IiwiaXNWaXNpYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJmbG9hdEVsZW1lbnQiLCJyZW1vdmVFbGVtZW50IiwicHJvZHVjdE9iaiIsImZvcm1Sb3dFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==