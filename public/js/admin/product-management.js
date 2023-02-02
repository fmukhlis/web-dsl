(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/admin/product-management"],{

/***/ "./resources/js/admin/inputmask.binding.js":
/*!*************************************************!*\
  !*** ./resources/js/admin/inputmask.binding.js ***!
  \*************************************************/
/***/ (() => {

/*
 Input Mask plugin binding
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */
(function (factory) {
  factory(jQuery, window.Inputmask, window);
})(function ($, Inputmask, window) {
  $(window.document).ajaxComplete(function (event, xmlHttpRequest, ajaxOptions) {
    if ($.inArray("html", ajaxOptions.dataTypes) !== -1) {
      $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias], [data-inputmask-regex]").each(function (ndx, lmnt) {
        if (lmnt.inputmask === undefined) {
          Inputmask().mask(lmnt);
        }
      });
    }
  }).ready(function () {
    $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias],[data-inputmask-regex]").each(function (ndx, lmnt) {
      if (lmnt.inputmask === undefined) {
        Inputmask().mask(lmnt);
      }
    });
  });
});

/***/ }),

/***/ "./resources/js/admin/product-management.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/product-management.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Vendor Libraries
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
__webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
Inputmask.extendAliases({
  currency: {
    prefix: "Rp",
    groupSeparator: ".",
    alias: "numeric",
    digits: 0,
    digitsOptional: false,
    allowMinus: false
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover"
  });
});

// App Javascript
__webpack_require__(/*! ./inputmask.binding */ "./resources/js/admin/inputmask.binding.js");
__webpack_require__(/*! ./product-management/main */ "./resources/js/admin/product-management/main.js");

/***/ }),

/***/ "./resources/js/admin/product-management/constants.js":
/*!************************************************************!*\
  !*** ./resources/js/admin/product-management/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMSelector": () => (/* binding */ DOMSelector)
/* harmony export */ });
var DOMSelector = {
  TOTAL_PRICE_ELEMENT: document.querySelector('#total'),
  PRICE_ELEMENT: document.querySelector('#price'),
  COST_ELEMENT: document.querySelector('#cost'),
  DISCOUNT_ELEMENT: document.querySelector('#discount'),
  CHANGE_PHOTO_ELEMENT: document.querySelector('#change-product-photo'),
  CANCEL_CHANGE_PHOTO_ELEMENT: document.querySelector('#cancel-change-product-photo'),
  ADD_SPECIFICATION_ELEMENT: document.querySelector('#add-spec-btn'),
  PRODUCT_SPECIFICATION_ELEMENT: document.querySelector('#product-specification-container')
};

/***/ }),

/***/ "./resources/js/admin/product-management/dropzone-customization.js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/product-management/dropzone-customization.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDzMODE": () => (/* binding */ changeDzMODE)
/* harmony export */ });
Dropzone.autoDiscover = false;
Dropzone.prototype.isFileExist = function (file) {
  var i;
  if (this.files.length > 0) {
    for (i = 0; i < this.files.length; i++) {
      if (this.files[i].name === file.name && this.files[i].size === file.size && this.files[i].lastModified.toString() === file.lastModified.toString()) {
        return true;
      }
    }
  }
  return false;
}, Dropzone.prototype.addFile = function (file) {
  file.upload = {
    progress: 0,
    total: file.size,
    bytesSent: 0
  };
  if (this.options.preventDuplicates && this.isFileExist(file)) {
    alert(this.options.dictDuplicateFile);
    return;
  }
  this.files.push(file);
  file.status = Dropzone.ADDED;
  this.emit("addedfile", file);
  this._enqueueThumbnail(file);
  return this.accept(file, function (_this) {
    return function (error) {
      if (error) {
        file.accepted = false;
        _this._errorProcessing([file], error);
      } else {
        file.accepted = true;
        if (_this.options.autoQueue) {
          _this.enqueueFile(file);
        }
      }
      return _this._updateMaxFilesReachedClass();
    };
  }(this));
};
if (document.querySelector('.dropzone')) {
  var token = document.querySelector('input[name="_token"]').value;
  var templateElement = document.querySelector('div#dz-template').innerHTML;
  var dropzoneObj = new Dropzone("div#product-previews", {
    dictDuplicateFile: "Duplicate Files Cannot Be Uploaded",
    preventDuplicates: true,
    paramName: "product_img",
    url: "/admin/product-temp-img",
    previewTemplate: templateElement,
    maxFilesize: 4,
    // MB
    acceptedFiles: "image/png, image/jpg, image/jpeg",
    uploadMultiple: true,
    parallelUploads: 1,
    maxFiles: 10,
    headers: {
      'X-CSRF-TOKEN': token
    }
  });
  document.querySelector('div#dz-template').parentElement.removeChild(document.querySelector('div#dz-template'));
  dropzoneObj.on("sending", function (file, xhr, formData) {
    // Will send the filesize along with the file as POST data.
    formData.append("directory_path", document.querySelector('input[name=directory_path]').value);
  });
  dropzoneObj.on("removedfile", function (file) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", '/admin/product-temp-img/' + file.name, true);

    // Send the proper header information along with the request
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.setRequestHeader('X-CSRF-TOKEN', token);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log('Success Delete');
      }
    };
    xhttp.send("directory_path=" + document.querySelector('input[name=directory_path]').value);
  });
  var clearAllFilesButton = document.querySelector('button[data-dropzone-button="clearAll"]');
  if (clearAllFilesButton) {
    clearAllFilesButton.addEventListener('click', function () {
      dropzoneObj.removeAllFiles();
    });
  }
}
function changeDzMODE(el, state) {
  var sectionContainer = el.parentElement.parentElement;
  sectionContainer.classList.add('d-none');
  if (state == 'view_mode') {
    sectionContainer.nextElementSibling.classList.remove('d-none');
  } else if (state == 'change_mode') {
    sectionContainer.previousElementSibling.classList.remove('d-none');
  }
}

/***/ }),

/***/ "./resources/js/admin/product-management/main.js":
/*!*******************************************************!*\
  !*** ./resources/js/admin/product-management/main.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _total_price_calculation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./total-price-calculation.js */ "./resources/js/admin/product-management/total-price-calculation.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./resources/js/admin/product-management/constants.js");
/* harmony import */ var _dropzone_customization_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone-customization.js */ "./resources/js/admin/product-management/dropzone-customization.js");
/* harmony import */ var _product_specification_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-specification.js */ "./resources/js/admin/product-management/product-specification.js");





var totalPriceCalculation = new _total_price_calculation_js__WEBPACK_IMPORTED_MODULE_0__.TotalPriceCalculation();
var productSpecification = new _product_specification_js__WEBPACK_IMPORTED_MODULE_3__.ProductSpecification();
var run = function run(DS, TPC) {
  var price = TPC.cleanValue(DS.PRICE_ELEMENT.value);
  var discount = TPC.cleanValue(DS.DISCOUNT_ELEMENT.value);
  DS.PRICE_ELEMENT.value = price;
  DS.COST_ELEMENT.value = TPC.cleanValue(DS.COST_ELEMENT.value);
  DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);
  DS.PRICE_ELEMENT.addEventListener('keyup', function () {
    price = TPC.cleanValue(this.value);
    DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);
  });
  DS.DISCOUNT_ELEMENT.addEventListener('keyup', function () {
    discount = TPC.cleanValue(this.value);
    DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);
  });
  DS.ADD_SPECIFICATION_ELEMENT.addEventListener('click', function () {
    productSpecification.appendSpecificationInput();
  });
  DS.PRODUCT_SPECIFICATION_ELEMENT.addEventListener('click', function (e) {
    if (e.target.dataset.controll == 'remove-spec') {
      $('[data-toggle="tooltip"]').tooltip('hide');
      e.target.parentElement.parentElement.remove();
    } else if (e.target.parentElement.dataset.controll == 'remove-spec') {
      $('[data-toggle="tooltip"]').tooltip('hide');
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });
  if (DS.CHANGE_PHOTO_ELEMENT && DS.CANCEL_CHANGE_PHOTO_ELEMENT) {
    DS.CHANGE_PHOTO_ELEMENT.addEventListener('click', function () {
      (0,_dropzone_customization_js__WEBPACK_IMPORTED_MODULE_2__.changeDzMODE)(this, 'change_mode');
    });
    DS.CANCEL_CHANGE_PHOTO_ELEMENT.addEventListener('click', function () {
      (0,_dropzone_customization_js__WEBPACK_IMPORTED_MODULE_2__.changeDzMODE)(this, 'view_mode');
    });
  }
};
run(_constants_js__WEBPACK_IMPORTED_MODULE_1__.DOMSelector, totalPriceCalculation);

/***/ }),

/***/ "./resources/js/admin/product-management/product-specification.js":
/*!************************************************************************!*\
  !*** ./resources/js/admin/product-management/product-specification.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSpecification": () => (/* binding */ ProductSpecification)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/admin/product-management/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ProductSpecification = /*#__PURE__*/function () {
  function ProductSpecification() {
    _classCallCheck(this, ProductSpecification);
  }
  _createClass(ProductSpecification, [{
    key: "appendSpecificationInput",
    value: function appendSpecificationInput() {
      var div = document.createElement('div');
      div.className = 'form-row';
      var html = "\n        <div class=\"col-md-3 my-2\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text bg-purple\"><i class=\"fa fa-key\"></i></span>\n                </div>\n                <input type=\"text\"\n                    class=\"form-control spec\"\n                    name=\"spec_key[]\" placeholder=\"Kata Kunci\">\n            </div>\n        </div>\n        <div class=\"col-md-8 my-2\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text bg-purple\"><i class=\"fa fa-file\"></i></span>\n                </div>\n                <input type=\"text\"\n                    class=\"form-control spec\"\n                    name=\"spec_val[]\" placeholder=\"Nilai\">\n            </div>\n        </div>        \n        <div class=\"col-md-1 my-2 d-flex\">\n            <a href=\"javascript:void(0)\" data-controll=\"remove-spec\"\n                class=\"btn btn-danger d-flex align-items-center ml-auto\"\n                data-toggle=\"tooltip\" data-placement=\"left\" title=\"Remove\">\n                <i class=\"fa fa-times\"></i>\n            </a>\n        </div>\n        ";
      _constants__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.PRODUCT_SPECIFICATION_ELEMENT.append(div);
      _constants__WEBPACK_IMPORTED_MODULE_0__.DOMSelector.PRODUCT_SPECIFICATION_ELEMENT.lastElementChild.innerHTML = html;
      $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover"
      });
    }
  }]);
  return ProductSpecification;
}();

/***/ }),

/***/ "./resources/js/admin/product-management/total-price-calculation.js":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/product-management/total-price-calculation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalPriceCalculation": () => (/* binding */ TotalPriceCalculation)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var TotalPriceCalculation = /*#__PURE__*/function () {
  function TotalPriceCalculation() {
    _classCallCheck(this, TotalPriceCalculation);
  }
  _createClass(TotalPriceCalculation, [{
    key: "getTotalPrice",
    value: function getTotalPrice() {
      var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      price = this.cleanValue(price);
      return price - price * discount / 100;
    }
  }, {
    key: "cleanValue",
    value: function cleanValue(value) {
      return value ? value.replace(/[^0-9]/g, '') : 0;
    }
  }]);
  return TotalPriceCalculation;
}();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/product-management.css":
/*!**********************************************!*\
  !*** ./resources/css/product-management.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/products.css":
/*!************************************!*\
  !*** ./resources/css/products.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/product.css":
/*!***********************************!*\
  !*** ./resources/css/product.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/home.css":
/*!********************************!*\
  !*** ./resources/css/home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/home","css/product","css/products","css/product-management","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/admin/product-management.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/css/product-management.css"), __webpack_exec__("./resources/css/products.css"), __webpack_exec__("./resources/css/product.css"), __webpack_exec__("./resources/css/home.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdvRyxJQUFJO01BQzNFNUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNzQyxPQUFPLENBQUM7UUFBQ0MsT0FBTyxFQUFFO01BQU8sQ0FBQyxDQUFDO0lBQzVEO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0UsSUFBTWtGLHFCQUFxQjtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUM5Qix5QkFBc0M7TUFBQSxJQUF4Qk8sS0FBSyx1RUFBRyxDQUFDO01BQUEsSUFBRUUsUUFBUSx1RUFBRyxDQUFDO01BQ2pDRixLQUFLLEdBQUcsSUFBSSxDQUFDQyxVQUFVLENBQUNELEtBQUssQ0FBQztNQUM5QixPQUFPQSxLQUFLLEdBQUlBLEtBQUssR0FBR0UsUUFBUSxHQUFHLEdBQUk7SUFDM0M7RUFBQztJQUFBO0lBQUEsT0FFRCxvQkFBVzlDLEtBQUssRUFBQztNQUNiLE9BQU9BLEtBQUssR0FBR0EsS0FBSyxDQUFDMEQsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25EO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNSTDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL2lucHV0bWFzay5iaW5kaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9kcm9wem9uZS1jdXN0b21pemF0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L3Byb2R1Y3Qtc3BlY2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L3RvdGFsLXByaWNlLWNhbGN1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jc3MvcHJvZHVjdC1tYW5hZ2VtZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY3NzL3Byb2R1Y3RzLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY3NzL3Byb2R1Y3QuY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jc3MvaG9tZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIElucHV0IE1hc2sgcGx1Z2luIGJpbmRpbmdcclxuIGh0dHA6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9qcXVlcnkuaW5wdXRtYXNrXHJcbiBDb3B5cmlnaHQgKGMpIFJvYmluIEhlcmJvdHNcclxuIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKi9cclxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XHJcblx0ZmFjdG9yeShqUXVlcnksIHdpbmRvdy5JbnB1dG1hc2ssIHdpbmRvdyk7XHJcbn1cclxuKGZ1bmN0aW9uICgkLCBJbnB1dG1hc2ssIHdpbmRvdykge1xyXG5cdCQod2luZG93LmRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKGV2ZW50LCB4bWxIdHRwUmVxdWVzdCwgYWpheE9wdGlvbnMpIHtcclxuXHRcdGlmICgkLmluQXJyYXkoXCJodG1sXCIsIGFqYXhPcHRpb25zLmRhdGFUeXBlcykgIT09IC0xKSB7XHJcblx0XHRcdCQoXCIuaW5wdXRtYXNrLCBbZGF0YS1pbnB1dG1hc2tdLCBbZGF0YS1pbnB1dG1hc2stbWFza10sIFtkYXRhLWlucHV0bWFzay1hbGlhc10sIFtkYXRhLWlucHV0bWFzay1yZWdleF1cIikuZWFjaChmdW5jdGlvbiAobmR4LCBsbW50KSB7XHJcblx0XHRcdFx0aWYgKGxtbnQuaW5wdXRtYXNrID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdElucHV0bWFzaygpLm1hc2sobG1udCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLmlucHV0bWFzaywgW2RhdGEtaW5wdXRtYXNrXSwgW2RhdGEtaW5wdXRtYXNrLW1hc2tdLCBbZGF0YS1pbnB1dG1hc2stYWxpYXNdLFtkYXRhLWlucHV0bWFzay1yZWdleF1cIikuZWFjaChmdW5jdGlvbiAobmR4LCBsbW50KSB7XHJcblx0XHRcdGlmIChsbW50LmlucHV0bWFzayA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0SW5wdXRtYXNrKCkubWFzayhsbW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pKTtcclxuIiwiLy8gVmVuZG9yIExpYnJhcmllc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgnZHJvcHpvbmUnKTtcclxucmVxdWlyZSgnaW5wdXRtYXNrJyk7XHJcblxyXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XHJcbiAgICBjdXJyZW5jeToge1xyXG4gICAgICAgIHByZWZpeDogXCJScFwiLFxyXG4gICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIi5cIixcclxuICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXHJcbiAgICAgICAgZGlnaXRzOiAwLFxyXG4gICAgICAgIGRpZ2l0c09wdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZSxcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBFeGFtcGxlIHN0YXJ0ZXIgSmF2YVNjcmlwdCBmb3IgZGlzYWJsaW5nIGZvcm0gc3VibWlzc2lvbnMgaWYgdGhlcmUgYXJlIGludmFsaWQgZmllbGRzXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cclxuICAgICAgICB2YXIgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkcy12YWxpZGF0aW9uJyk7XHJcbiAgICAgICAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxyXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJyk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIGZhbHNlKTtcclxufSkoKTtcclxuXHJcbi8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe3RyaWdnZXI6IFwiaG92ZXJcIn0pO1xyXG59KTtcclxuICBcclxuXHJcbi8vIEFwcCBKYXZhc2NyaXB0XHJcbnJlcXVpcmUoJy4vaW5wdXRtYXNrLmJpbmRpbmcnKTtcclxucmVxdWlyZSgnLi9wcm9kdWN0LW1hbmFnZW1lbnQvbWFpbicpOyIsImV4cG9ydCBjb25zdCBET01TZWxlY3RvciA9IHtcclxuICAgIFRPVEFMX1BSSUNFX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbCcpLFxyXG4gICAgUFJJQ0VfRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlJyksXHJcbiAgICBDT1NUX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3N0JyksXHJcbiAgICBESVNDT1VOVF9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzY291bnQnKSxcclxuICAgIENIQU5HRV9QSE9UT19FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmdlLXByb2R1Y3QtcGhvdG8nKSxcclxuICAgIENBTkNFTF9DSEFOR0VfUEhPVE9fRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1jaGFuZ2UtcHJvZHVjdC1waG90bycpLFxyXG4gICAgQUREX1NQRUNJRklDQVRJT05fRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1zcGVjLWJ0bicpLFxyXG4gICAgUFJPRFVDVF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LXNwZWNpZmljYXRpb24tY29udGFpbmVyJyksXHJcbn0iLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcclxuXHJcbkRyb3B6b25lLnByb3RvdHlwZS5pc0ZpbGVFeGlzdD0gZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgdmFyIGk7XHJcbiAgICBpZih0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuZmlsZXNbaV0ubmFtZSA9PT0gZmlsZS5uYW1lICYmIHRoaXMuZmlsZXNbaV0uc2l6ZSA9PT0gZmlsZS5zaXplICYmIHRoaXMuZmlsZXNbaV0ubGFzdE1vZGlmaWVkLnRvU3RyaW5nKCkgPT09IGZpbGUubGFzdE1vZGlmaWVkLnRvU3RyaW5nKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSxcclxuXHJcbkRyb3B6b25lLnByb3RvdHlwZS5hZGRGaWxlID0gZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgZmlsZS51cGxvYWQgPSB7XHJcbiAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICB0b3RhbDogZmlsZS5zaXplLFxyXG4gICAgICBieXRlc1NlbnQ6IDBcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50RHVwbGljYXRlcyAmJiB0aGlzLmlzRmlsZUV4aXN0KGZpbGUpKSB7XHJcbiAgICAgIGFsZXJ0KHRoaXMub3B0aW9ucy5kaWN0RHVwbGljYXRlRmlsZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XHJcblxyXG4gICAgZmlsZS5zdGF0dXMgPSBEcm9wem9uZS5BRERFRDtcclxuXHJcbiAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgZmlsZSk7XHJcblxyXG4gICAgdGhpcy5fZW5xdWV1ZVRodW1ibmFpbChmaWxlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hY2NlcHQoZmlsZSwgKGZ1bmN0aW9uKF90aGlzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5hY2NlcHRlZCA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvclByb2Nlc3NpbmcoW2ZpbGVdLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmFjY2VwdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmF1dG9RdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVucXVldWVGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkodGhpcykpO1xyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wem9uZScpKXtcclxuICAgIGNvbnN0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIl90b2tlblwiXScpLnZhbHVlO1xyXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2R6LXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG4gICAgbGV0IGRyb3B6b25lT2JqID0gbmV3IERyb3B6b25lKFwiZGl2I3Byb2R1Y3QtcHJldmlld3NcIiwgeyBcclxuICAgICAgICBkaWN0RHVwbGljYXRlRmlsZTogXCJEdXBsaWNhdGUgRmlsZXMgQ2Fubm90IEJlIFVwbG9hZGVkXCIsXHJcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6IHRydWUsXHJcbiAgICAgICAgcGFyYW1OYW1lOiBcInByb2R1Y3RfaW1nXCIsXHJcbiAgICAgICAgdXJsOlwiL2FkbWluL3Byb2R1Y3QtdGVtcC1pbWdcIixcclxuICAgICAgICBwcmV2aWV3VGVtcGxhdGU6IHRlbXBsYXRlRWxlbWVudCxcclxuICAgICAgICBtYXhGaWxlc2l6ZTogNCwgLy8gTUJcclxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlL3BuZywgaW1hZ2UvanBnLCBpbWFnZS9qcGVnXCIsXHJcbiAgICAgICAgdXBsb2FkTXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgcGFyYWxsZWxVcGxvYWRzOiAxLFxyXG4gICAgICAgIG1heEZpbGVzOiAxMCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjZHotdGVtcGxhdGUnKS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNkei10ZW1wbGF0ZScpKTtcclxuICAgIFxyXG4gICAgZHJvcHpvbmVPYmoub24oXCJzZW5kaW5nXCIsIGZ1bmN0aW9uKGZpbGUsIHhociwgZm9ybURhdGEpIHtcclxuICAgICAgICAvLyBXaWxsIHNlbmQgdGhlIGZpbGVzaXplIGFsb25nIHdpdGggdGhlIGZpbGUgYXMgUE9TVCBkYXRhLlxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeV9wYXRoXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9ZGlyZWN0b3J5X3BhdGhdJykudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wem9uZU9iai5vbihcInJlbW92ZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgXHJcbiAgICAgICAgeGh0dHAub3BlbihcIkRFTEVURVwiLCAnL2FkbWluL3Byb2R1Y3QtdGVtcC1pbWcvJytmaWxlLm5hbWUsIHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gU2VuZCB0aGUgcHJvcGVyIGhlYWRlciBpbmZvcm1hdGlvbiBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xyXG4gICAgICAgIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdYLUNTUkYtVE9LRU4nLCB0b2tlbik7XHJcbiAgICBcclxuICAgICAgICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAvLyBUeXBpY2FsIGFjdGlvbiB0byBiZSBwZXJmb3JtZWQgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHk6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcyBEZWxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGh0dHAuc2VuZChcImRpcmVjdG9yeV9wYXRoPVwiK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9ZGlyZWN0b3J5X3BhdGhdJykudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsZWFyQWxsRmlsZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1kcm9wem9uZS1idXR0b249XCJjbGVhckFsbFwiXScpO1xyXG4gICAgaWYoY2xlYXJBbGxGaWxlc0J1dHRvbil7XHJcbiAgICAgICAgY2xlYXJBbGxGaWxlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGRyb3B6b25lT2JqLnJlbW92ZUFsbEZpbGVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEek1PREUoZWwsIHN0YXRlKXtcclxuICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBzZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgaWYgKHN0YXRlID09ICd2aWV3X21vZGUnKXtcclxuICAgICAgICBzZWN0aW9uQ29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2NoYW5nZV9tb2RlJyl7XHJcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVG90YWxQcmljZUNhbGN1bGF0aW9uIH0gZnJvbSAnLi90b3RhbC1wcmljZS1jYWxjdWxhdGlvbi5qcyc7XHJcbmltcG9ydCB7IERPTVNlbGVjdG9yIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgJy4vZHJvcHpvbmUtY3VzdG9taXphdGlvbi5qcyc7XHJcbmltcG9ydCB7IGNoYW5nZUR6TU9ERSB9IGZyb20gJy4vZHJvcHpvbmUtY3VzdG9taXphdGlvbi5qcyc7XHJcbmltcG9ydCB7IFByb2R1Y3RTcGVjaWZpY2F0aW9uIH0gZnJvbSAnLi9wcm9kdWN0LXNwZWNpZmljYXRpb24uanMnO1xyXG5cclxuY29uc3QgdG90YWxQcmljZUNhbGN1bGF0aW9uID0gbmV3IFRvdGFsUHJpY2VDYWxjdWxhdGlvbigpO1xyXG5jb25zdCBwcm9kdWN0U3BlY2lmaWNhdGlvbiA9IG5ldyBQcm9kdWN0U3BlY2lmaWNhdGlvbigpO1xyXG5cclxuY29uc3QgcnVuID0gKERTLCBUUEMpID0+IHtcclxuICAgIGxldCBwcmljZSA9IFRQQy5jbGVhblZhbHVlKERTLlBSSUNFX0VMRU1FTlQudmFsdWUpO1xyXG4gICAgbGV0IGRpc2NvdW50ID0gVFBDLmNsZWFuVmFsdWUoRFMuRElTQ09VTlRfRUxFTUVOVC52YWx1ZSk7XHJcbiAgICBEUy5QUklDRV9FTEVNRU5ULnZhbHVlID0gcHJpY2U7XHJcbiAgICBEUy5DT1NUX0VMRU1FTlQudmFsdWUgPSBUUEMuY2xlYW5WYWx1ZShEUy5DT1NUX0VMRU1FTlQudmFsdWUpO1xyXG4gICAgRFMuVE9UQUxfUFJJQ0VfRUxFTUVOVC52YWx1ZSA9IFRQQy5nZXRUb3RhbFByaWNlKHByaWNlLCBkaXNjb3VudCk7XHJcblxyXG4gICAgRFMuUFJJQ0VfRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHJpY2UgPSBUUEMuY2xlYW5WYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBEUy5UT1RBTF9QUklDRV9FTEVNRU5ULnZhbHVlID0gVFBDLmdldFRvdGFsUHJpY2UocHJpY2UsIGRpc2NvdW50KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBEUy5ESVNDT1VOVF9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBkaXNjb3VudCA9IFRQQy5jbGVhblZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIERTLlRPVEFMX1BSSUNFX0VMRU1FTlQudmFsdWUgPSBUUEMuZ2V0VG90YWxQcmljZShwcmljZSwgZGlzY291bnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgRFMuQUREX1NQRUNJRklDQVRJT05fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHJvZHVjdFNwZWNpZmljYXRpb24uYXBwZW5kU3BlY2lmaWNhdGlvbklucHV0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBEUy5QUk9EVUNUX1NQRUNJRklDQVRJT05fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmNvbnRyb2xsID09ICdyZW1vdmUtc3BlYycpe1xyXG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29udHJvbGwgPT0gJ3JlbW92ZS1zcGVjJyl7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pOyAgICBcclxuXHJcbiAgICBpZiAoRFMuQ0hBTkdFX1BIT1RPX0VMRU1FTlQgJiYgRFMuQ0FOQ0VMX0NIQU5HRV9QSE9UT19FTEVNRU5UKXtcclxuICAgICAgICBEUy5DSEFOR0VfUEhPVE9fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNoYW5nZUR6TU9ERSh0aGlzLCAnY2hhbmdlX21vZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBEUy5DQU5DRUxfQ0hBTkdFX1BIT1RPX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjaGFuZ2VEek1PREUodGhpcywgJ3ZpZXdfbW9kZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ydW4oRE9NU2VsZWN0b3IsIHRvdGFsUHJpY2VDYWxjdWxhdGlvbik7IiwiaW1wb3J0IHsgRE9NU2VsZWN0b3IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3BlY2lmaWNhdGlvbiB7XHJcbiAgICBhcHBlbmRTcGVjaWZpY2F0aW9uSW5wdXQoKXtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2Zvcm0tcm93JztcclxuICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBteS0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgYmctcHVycGxlXCI+PGkgY2xhc3M9XCJmYSBmYS1rZXlcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNwZWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjX2tleVtdXCIgcGxhY2Vob2xkZXI9XCJLYXRhIEt1bmNpXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBteS0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgYmctcHVycGxlXCI+PGkgY2xhc3M9XCJmYSBmYS1maWxlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzcGVjXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY192YWxbXVwiIHBsYWNlaG9sZGVyPVwiTmlsYWlcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEgbXktMiBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGRhdGEtY29udHJvbGw9XCJyZW1vdmUtc3BlY1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImxlZnRcIiB0aXRsZT1cIlJlbW92ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIERPTVNlbGVjdG9yLlBST0RVQ1RfU1BFQ0lGSUNBVElPTl9FTEVNRU5ULmFwcGVuZChkaXYpO1xyXG4gICAgICAgIERPTVNlbGVjdG9yLlBST0RVQ1RfU1BFQ0lGSUNBVElPTl9FTEVNRU5ULmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7dHJpZ2dlcjogXCJob3ZlclwifSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVG90YWxQcmljZUNhbGN1bGF0aW9uIHtcclxuICAgIGdldFRvdGFsUHJpY2UocHJpY2UgPSAwLCBkaXNjb3VudCA9IDApe1xyXG4gICAgICAgIHByaWNlID0gdGhpcy5jbGVhblZhbHVlKHByaWNlKTtcclxuICAgICAgICByZXR1cm4gcHJpY2UgLSAocHJpY2UgKiBkaXNjb3VudCAvIDEwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsZWFuVmFsdWUodmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJykgOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZmFjdG9yeSIsImpRdWVyeSIsIndpbmRvdyIsIklucHV0bWFzayIsIiQiLCJkb2N1bWVudCIsImFqYXhDb21wbGV0ZSIsImV2ZW50IiwieG1sSHR0cFJlcXVlc3QiLCJhamF4T3B0aW9ucyIsImluQXJyYXkiLCJkYXRhVHlwZXMiLCJlYWNoIiwibmR4IiwibG1udCIsImlucHV0bWFzayIsInVuZGVmaW5lZCIsIm1hc2siLCJyZWFkeSIsInJlcXVpcmUiLCJleHRlbmRBbGlhc2VzIiwiY3VycmVuY3kiLCJwcmVmaXgiLCJncm91cFNlcGFyYXRvciIsImFsaWFzIiwiZGlnaXRzIiwiZGlnaXRzT3B0aW9uYWwiLCJhbGxvd01pbnVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInZhbGlkYXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJmb3JtIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9vbHRpcCIsInRyaWdnZXIiLCJET01TZWxlY3RvciIsIlRPVEFMX1BSSUNFX0VMRU1FTlQiLCJxdWVyeVNlbGVjdG9yIiwiUFJJQ0VfRUxFTUVOVCIsIkNPU1RfRUxFTUVOVCIsIkRJU0NPVU5UX0VMRU1FTlQiLCJDSEFOR0VfUEhPVE9fRUxFTUVOVCIsIkNBTkNFTF9DSEFOR0VfUEhPVE9fRUxFTUVOVCIsIkFERF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQiLCJQUk9EVUNUX1NQRUNJRklDQVRJT05fRUxFTUVOVCIsIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiaXNGaWxlRXhpc3QiLCJmaWxlIiwiaSIsImZpbGVzIiwibGVuZ3RoIiwibmFtZSIsInNpemUiLCJsYXN0TW9kaWZpZWQiLCJ0b1N0cmluZyIsImFkZEZpbGUiLCJ1cGxvYWQiLCJwcm9ncmVzcyIsInRvdGFsIiwiYnl0ZXNTZW50Iiwib3B0aW9ucyIsInByZXZlbnREdXBsaWNhdGVzIiwiYWxlcnQiLCJkaWN0RHVwbGljYXRlRmlsZSIsInB1c2giLCJzdGF0dXMiLCJBRERFRCIsImVtaXQiLCJfZW5xdWV1ZVRodW1ibmFpbCIsImFjY2VwdCIsIl90aGlzIiwiZXJyb3IiLCJhY2NlcHRlZCIsIl9lcnJvclByb2Nlc3NpbmciLCJhdXRvUXVldWUiLCJlbnF1ZXVlRmlsZSIsIl91cGRhdGVNYXhGaWxlc1JlYWNoZWRDbGFzcyIsInRva2VuIiwidmFsdWUiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkcm9wem9uZU9iaiIsInBhcmFtTmFtZSIsInVybCIsInByZXZpZXdUZW1wbGF0ZSIsIm1heEZpbGVzaXplIiwiYWNjZXB0ZWRGaWxlcyIsInVwbG9hZE11bHRpcGxlIiwicGFyYWxsZWxVcGxvYWRzIiwibWF4RmlsZXMiLCJoZWFkZXJzIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwib24iLCJ4aHIiLCJmb3JtRGF0YSIsImFwcGVuZCIsInhodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsImNsZWFyQWxsRmlsZXNCdXR0b24iLCJyZW1vdmVBbGxGaWxlcyIsImNoYW5nZUR6TU9ERSIsImVsIiwic3RhdGUiLCJzZWN0aW9uQ29udGFpbmVyIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVtb3ZlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIlRvdGFsUHJpY2VDYWxjdWxhdGlvbiIsIlByb2R1Y3RTcGVjaWZpY2F0aW9uIiwidG90YWxQcmljZUNhbGN1bGF0aW9uIiwicHJvZHVjdFNwZWNpZmljYXRpb24iLCJydW4iLCJEUyIsIlRQQyIsInByaWNlIiwiY2xlYW5WYWx1ZSIsImRpc2NvdW50IiwiZ2V0VG90YWxQcmljZSIsImFwcGVuZFNwZWNpZmljYXRpb25JbnB1dCIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY29udHJvbGwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHRtbCIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==