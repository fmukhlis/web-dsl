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
// require('bootstrap');
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

/***/ "./resources/css/home.css":
/*!********************************!*\
  !*** ./resources/css/home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./resources/sass/adminlte.min.scss":
/*!******************************************!*\
  !*** ./resources/sass/adminlte.min.scss ***!
  \******************************************/
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/product","css/products","css/product-management","css/home","css/app","vendor/adminlte/dist/css/adminlte.min","/js/vendor"], () => (__webpack_exec__("./resources/js/admin/product-management.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/sass/adminlte.min.scss"), __webpack_exec__("./resources/css/product-management.css"), __webpack_exec__("./resources/css/products.css"), __webpack_exec__("./resources/css/product.css"), __webpack_exec__("./resources/css/home.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLHlCQUF5QixDQUFDLENBQUNzQyxPQUFPLENBQUM7UUFBQ0MsT0FBTyxFQUFFO01BQU8sQ0FBQyxDQUFDO0lBQzVEO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0UsSUFBTWtGLHFCQUFxQjtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUM5Qix5QkFBc0M7TUFBQSxJQUF4Qk8sS0FBSyx1RUFBRyxDQUFDO01BQUEsSUFBRUUsUUFBUSx1RUFBRyxDQUFDO01BQ2pDRixLQUFLLEdBQUcsSUFBSSxDQUFDQyxVQUFVLENBQUNELEtBQUssQ0FBQztNQUM5QixPQUFPQSxLQUFLLEdBQUlBLEtBQUssR0FBR0UsUUFBUSxHQUFHLEdBQUk7SUFDM0M7RUFBQztJQUFBO0lBQUEsT0FFRCxvQkFBVzlDLEtBQUssRUFBQztNQUNiLE9BQU9BLEtBQUssR0FBR0EsS0FBSyxDQUFDMEQsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25EO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNSTDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vaW5wdXRtYXNrLmJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L2Ryb3B6b25lLWN1c3RvbWl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvcHJvZHVjdC1zcGVjaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvdG90YWwtcHJpY2UtY2FsY3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hZG1pbmx0ZS5taW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY3NzL3Byb2R1Y3QtbWFuYWdlbWVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Nzcy9wcm9kdWN0cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Nzcy9wcm9kdWN0LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gSW5wdXQgTWFzayBwbHVnaW4gYmluZGluZ1xyXG4gaHR0cDovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL2pxdWVyeS5pbnB1dG1hc2tcclxuIENvcHlyaWdodCAoYykgUm9iaW4gSGVyYm90c1xyXG4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuXHRmYWN0b3J5KGpRdWVyeSwgd2luZG93LklucHV0bWFzaywgd2luZG93KTtcclxufVxyXG4oZnVuY3Rpb24gKCQsIElucHV0bWFzaywgd2luZG93KSB7XHJcblx0JCh3aW5kb3cuZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoZXZlbnQsIHhtbEh0dHBSZXF1ZXN0LCBhamF4T3B0aW9ucykge1xyXG5cdFx0aWYgKCQuaW5BcnJheShcImh0bWxcIiwgYWpheE9wdGlvbnMuZGF0YVR5cGVzKSAhPT0gLTEpIHtcclxuXHRcdFx0JChcIi5pbnB1dG1hc2ssIFtkYXRhLWlucHV0bWFza10sIFtkYXRhLWlucHV0bWFzay1tYXNrXSwgW2RhdGEtaW5wdXRtYXNrLWFsaWFzXSwgW2RhdGEtaW5wdXRtYXNrLXJlZ2V4XVwiKS5lYWNoKGZ1bmN0aW9uIChuZHgsIGxtbnQpIHtcclxuXHRcdFx0XHRpZiAobG1udC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0SW5wdXRtYXNrKCkubWFzayhsbW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIuaW5wdXRtYXNrLCBbZGF0YS1pbnB1dG1hc2tdLCBbZGF0YS1pbnB1dG1hc2stbWFza10sIFtkYXRhLWlucHV0bWFzay1hbGlhc10sW2RhdGEtaW5wdXRtYXNrLXJlZ2V4XVwiKS5lYWNoKGZ1bmN0aW9uIChuZHgsIGxtbnQpIHtcclxuXHRcdFx0aWYgKGxtbnQuaW5wdXRtYXNrID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRJbnB1dG1hc2soKS5tYXNrKGxtbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSkpO1xyXG4iLCIvLyBWZW5kb3IgTGlicmFyaWVzXHJcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCdkcm9wem9uZScpO1xyXG5yZXF1aXJlKCdpbnB1dG1hc2snKTtcclxuXHJcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcclxuICAgIGN1cnJlbmN5OiB7XHJcbiAgICAgICAgcHJlZml4OiBcIlJwXCIsXHJcbiAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiLlwiLFxyXG4gICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcclxuICAgICAgICBkaWdpdHM6IDAsXHJcbiAgICAgICAgZGlnaXRzT3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEV4YW1wbGUgc3RhcnRlciBKYXZhU2NyaXB0IGZvciBkaXNhYmxpbmcgZm9ybSBzdWJtaXNzaW9ucyBpZiB0aGVyZSBhcmUgaW52YWxpZCBmaWVsZHNcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xyXG4gICAgICAgIHZhciBmb3JtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWRzLXZhbGlkYXRpb24nKTtcclxuICAgICAgICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXHJcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgZmFsc2UpO1xyXG59KSgpO1xyXG5cclxuLy8gRW5hYmxlIHRvb2x0aXBzIGV2ZXJ5d2hlcmVcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7dHJpZ2dlcjogXCJob3ZlclwifSk7XHJcbn0pO1xyXG4gIFxyXG5cclxuLy8gQXBwIEphdmFzY3JpcHRcclxucmVxdWlyZSgnLi9pbnB1dG1hc2suYmluZGluZycpO1xyXG5yZXF1aXJlKCcuL3Byb2R1Y3QtbWFuYWdlbWVudC9tYWluJyk7IiwiZXhwb3J0IGNvbnN0IERPTVNlbGVjdG9yID0ge1xyXG4gICAgVE9UQUxfUFJJQ0VfRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJyksXHJcbiAgICBQUklDRV9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKSxcclxuICAgIENPU1RfRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nvc3QnKSxcclxuICAgIERJU0NPVU5UX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNjb3VudCcpLFxyXG4gICAgQ0hBTkdFX1BIT1RPX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2UtcHJvZHVjdC1waG90bycpLFxyXG4gICAgQ0FOQ0VMX0NIQU5HRV9QSE9UT19FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWNoYW5nZS1wcm9kdWN0LXBob3RvJyksXHJcbiAgICBBRERfU1BFQ0lGSUNBVElPTl9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXNwZWMtYnRuJyksXHJcbiAgICBQUk9EVUNUX1NQRUNJRklDQVRJT05fRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3Qtc3BlY2lmaWNhdGlvbi1jb250YWluZXInKSxcclxufSIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuRHJvcHpvbmUucHJvdG90eXBlLmlzRmlsZUV4aXN0PSBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IoaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGhpcy5maWxlc1tpXS5uYW1lID09PSBmaWxlLm5hbWUgJiYgdGhpcy5maWxlc1tpXS5zaXplID09PSBmaWxlLnNpemUgJiYgdGhpcy5maWxlc1tpXS5sYXN0TW9kaWZpZWQudG9TdHJpbmcoKSA9PT0gZmlsZS5sYXN0TW9kaWZpZWQudG9TdHJpbmcoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59LFxyXG5cclxuRHJvcHpvbmUucHJvdG90eXBlLmFkZEZpbGUgPSBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICBmaWxlLnVwbG9hZCA9IHtcclxuICAgICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICAgIHRvdGFsOiBmaWxlLnNpemUsXHJcbiAgICAgIGJ5dGVzU2VudDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnREdXBsaWNhdGVzICYmIHRoaXMuaXNGaWxlRXhpc3QoZmlsZSkpIHtcclxuICAgICAgYWxlcnQodGhpcy5vcHRpb25zLmRpY3REdXBsaWNhdGVGaWxlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsZXMucHVzaChmaWxlKTtcclxuXHJcbiAgICBmaWxlLnN0YXR1cyA9IERyb3B6b25lLkFEREVEO1xyXG5cclxuICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBmaWxlKTtcclxuXHJcbiAgICB0aGlzLl9lbnF1ZXVlVGh1bWJuYWlsKGZpbGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmFjY2VwdChmaWxlLCAoZnVuY3Rpb24oX3RoaXMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmFjY2VwdGVkID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Vycm9yUHJvY2Vzc2luZyhbZmlsZV0sIGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuYWNjZXB0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuYXV0b1F1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5xdWV1ZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl91cGRhdGVNYXhGaWxlc1JlYWNoZWRDbGFzcygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSh0aGlzKSk7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3B6b25lJykpe1xyXG4gICAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiX3Rva2VuXCJdJykudmFsdWU7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjZHotdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcbiAgICBsZXQgZHJvcHpvbmVPYmogPSBuZXcgRHJvcHpvbmUoXCJkaXYjcHJvZHVjdC1wcmV2aWV3c1wiLCB7IFxyXG4gICAgICAgIGRpY3REdXBsaWNhdGVGaWxlOiBcIkR1cGxpY2F0ZSBGaWxlcyBDYW5ub3QgQmUgVXBsb2FkZWRcIixcclxuICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcclxuICAgICAgICBwYXJhbU5hbWU6IFwicHJvZHVjdF9pbWdcIixcclxuICAgICAgICB1cmw6XCIvYWRtaW4vcHJvZHVjdC10ZW1wLWltZ1wiLFxyXG4gICAgICAgIHByZXZpZXdUZW1wbGF0ZTogdGVtcGxhdGVFbGVtZW50LFxyXG4gICAgICAgIG1heEZpbGVzaXplOiA0LCAvLyBNQlxyXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvcG5nLCBpbWFnZS9qcGcsIGltYWdlL2pwZWdcIixcclxuICAgICAgICB1cGxvYWRNdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDEsXHJcbiAgICAgICAgbWF4RmlsZXM6IDEwLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNkei10ZW1wbGF0ZScpLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2R6LXRlbXBsYXRlJykpO1xyXG4gICAgXHJcbiAgICBkcm9wem9uZU9iai5vbihcInNlbmRpbmdcIiwgZnVuY3Rpb24oZmlsZSwgeGhyLCBmb3JtRGF0YSkge1xyXG4gICAgICAgIC8vIFdpbGwgc2VuZCB0aGUgZmlsZXNpemUgYWxvbmcgd2l0aCB0aGUgZmlsZSBhcyBQT1NUIGRhdGEuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZGlyZWN0b3J5X3BhdGhcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1kaXJlY3RvcnlfcGF0aF0nKS52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGRyb3B6b25lT2JqLm9uKFwicmVtb3ZlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgIGNvbnN0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBcclxuICAgICAgICB4aHR0cC5vcGVuKFwiREVMRVRFXCIsICcvYWRtaW4vcHJvZHVjdC10ZW1wLWltZy8nK2ZpbGUubmFtZSwgdHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBTZW5kIHRoZSBwcm9wZXIgaGVhZGVyIGluZm9ybWF0aW9uIGFsb25nIHdpdGggdGhlIHJlcXVlc3RcclxuICAgICAgICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoJ1gtQ1NSRi1UT0tFTicsIHRva2VuKTtcclxuICAgIFxyXG4gICAgICAgIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIFR5cGljYWwgYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIERlbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHR0cC5zZW5kKFwiZGlyZWN0b3J5X3BhdGg9XCIrZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1kaXJlY3RvcnlfcGF0aF0nKS52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgY2xlYXJBbGxGaWxlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWRyb3B6b25lLWJ1dHRvbj1cImNsZWFyQWxsXCJdJyk7XHJcbiAgICBpZihjbGVhckFsbEZpbGVzQnV0dG9uKXtcclxuICAgICAgICBjbGVhckFsbEZpbGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZHJvcHpvbmVPYmoucmVtb3ZlQWxsRmlsZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUR6TU9ERShlbCwgc3RhdGUpe1xyXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICBpZiAoc3RhdGUgPT0gJ3ZpZXdfbW9kZScpe1xyXG4gICAgICAgIHNlY3Rpb25Db250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnY2hhbmdlX21vZGUnKXtcclxuICAgICAgICBzZWN0aW9uQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUb3RhbFByaWNlQ2FsY3VsYXRpb24gfSBmcm9tICcuL3RvdGFsLXByaWNlLWNhbGN1bGF0aW9uLmpzJztcclxuaW1wb3J0IHsgRE9NU2VsZWN0b3IgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCAnLi9kcm9wem9uZS1jdXN0b21pemF0aW9uLmpzJztcclxuaW1wb3J0IHsgY2hhbmdlRHpNT0RFIH0gZnJvbSAnLi9kcm9wem9uZS1jdXN0b21pemF0aW9uLmpzJztcclxuaW1wb3J0IHsgUHJvZHVjdFNwZWNpZmljYXRpb24gfSBmcm9tICcuL3Byb2R1Y3Qtc3BlY2lmaWNhdGlvbi5qcyc7XHJcblxyXG5jb25zdCB0b3RhbFByaWNlQ2FsY3VsYXRpb24gPSBuZXcgVG90YWxQcmljZUNhbGN1bGF0aW9uKCk7XHJcbmNvbnN0IHByb2R1Y3RTcGVjaWZpY2F0aW9uID0gbmV3IFByb2R1Y3RTcGVjaWZpY2F0aW9uKCk7XHJcblxyXG5jb25zdCBydW4gPSAoRFMsIFRQQykgPT4ge1xyXG4gICAgbGV0IHByaWNlID0gVFBDLmNsZWFuVmFsdWUoRFMuUFJJQ0VfRUxFTUVOVC52YWx1ZSk7XHJcbiAgICBsZXQgZGlzY291bnQgPSBUUEMuY2xlYW5WYWx1ZShEUy5ESVNDT1VOVF9FTEVNRU5ULnZhbHVlKTtcclxuICAgIERTLlBSSUNFX0VMRU1FTlQudmFsdWUgPSBwcmljZTtcclxuICAgIERTLkNPU1RfRUxFTUVOVC52YWx1ZSA9IFRQQy5jbGVhblZhbHVlKERTLkNPU1RfRUxFTUVOVC52YWx1ZSk7XHJcbiAgICBEUy5UT1RBTF9QUklDRV9FTEVNRU5ULnZhbHVlID0gVFBDLmdldFRvdGFsUHJpY2UocHJpY2UsIGRpc2NvdW50KTtcclxuXHJcbiAgICBEUy5QUklDRV9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwcmljZSA9IFRQQy5jbGVhblZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIERTLlRPVEFMX1BSSUNFX0VMRU1FTlQudmFsdWUgPSBUUEMuZ2V0VG90YWxQcmljZShwcmljZSwgZGlzY291bnQpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIERTLkRJU0NPVU5UX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGRpc2NvdW50ID0gVFBDLmNsZWFuVmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgRFMuVE9UQUxfUFJJQ0VfRUxFTUVOVC52YWx1ZSA9IFRQQy5nZXRUb3RhbFByaWNlKHByaWNlLCBkaXNjb3VudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBEUy5BRERfU1BFQ0lGSUNBVElPTl9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwcm9kdWN0U3BlY2lmaWNhdGlvbi5hcHBlbmRTcGVjaWZpY2F0aW9uSW5wdXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIERTLlBST0RVQ1RfU1BFQ0lGSUNBVElPTl9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuY29udHJvbGwgPT0gJ3JlbW92ZS1zcGVjJyl7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250cm9sbCA9PSAncmVtb3ZlLXNwZWMnKXtcclxuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7ICAgIFxyXG5cclxuICAgIGlmIChEUy5DSEFOR0VfUEhPVE9fRUxFTUVOVCAmJiBEUy5DQU5DRUxfQ0hBTkdFX1BIT1RPX0VMRU1FTlQpe1xyXG4gICAgICAgIERTLkNIQU5HRV9QSE9UT19FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2hhbmdlRHpNT0RFKHRoaXMsICdjaGFuZ2VfbW9kZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIERTLkNBTkNFTF9DSEFOR0VfUEhPVE9fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNoYW5nZUR6TU9ERSh0aGlzLCAndmlld19tb2RlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnJ1bihET01TZWxlY3RvciwgdG90YWxQcmljZUNhbGN1bGF0aW9uKTsiLCJpbXBvcnQgeyBET01TZWxlY3RvciB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTcGVjaWZpY2F0aW9uIHtcclxuICAgIGFwcGVuZFNwZWNpZmljYXRpb25JbnB1dCgpe1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSAnZm9ybS1yb3cnO1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIG15LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1wdXJwbGVcIj48aSBjbGFzcz1cImZhIGZhLWtleVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc3BlY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNfa2V5W11cIiBwbGFjZWhvbGRlcj1cIkthdGEgS3VuY2lcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG15LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1wdXJwbGVcIj48aSBjbGFzcz1cImZhIGZhLWZpbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNwZWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjX3ZhbFtdXCIgcGxhY2Vob2xkZXI9XCJOaWxhaVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBteS0yIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgZGF0YS1jb250cm9sbD1cInJlbW92ZS1zcGVjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiIHRpdGxlPVwiUmVtb3ZlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgRE9NU2VsZWN0b3IuUFJPRFVDVF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgRE9NU2VsZWN0b3IuUFJPRFVDVF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHt0cmlnZ2VyOiBcImhvdmVyXCJ9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUb3RhbFByaWNlQ2FsY3VsYXRpb24ge1xyXG4gICAgZ2V0VG90YWxQcmljZShwcmljZSA9IDAsIGRpc2NvdW50ID0gMCl7XHJcbiAgICAgICAgcHJpY2UgPSB0aGlzLmNsZWFuVmFsdWUocHJpY2UpO1xyXG4gICAgICAgIHJldHVybiBwcmljZSAtIChwcmljZSAqIGRpc2NvdW50IC8gMTAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYW5WYWx1ZSh2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKSA6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwialF1ZXJ5Iiwid2luZG93IiwiSW5wdXRtYXNrIiwiJCIsImRvY3VtZW50IiwiYWpheENvbXBsZXRlIiwiZXZlbnQiLCJ4bWxIdHRwUmVxdWVzdCIsImFqYXhPcHRpb25zIiwiaW5BcnJheSIsImRhdGFUeXBlcyIsImVhY2giLCJuZHgiLCJsbW50IiwiaW5wdXRtYXNrIiwidW5kZWZpbmVkIiwibWFzayIsInJlYWR5IiwicmVxdWlyZSIsImV4dGVuZEFsaWFzZXMiLCJjdXJyZW5jeSIsInByZWZpeCIsImdyb3VwU2VwYXJhdG9yIiwiYWxpYXMiLCJkaWdpdHMiLCJkaWdpdHNPcHRpb25hbCIsImFsbG93TWludXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidmFsaWRhdGlvbiIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsImZvcm0iLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b29sdGlwIiwidHJpZ2dlciIsIkRPTVNlbGVjdG9yIiwiVE9UQUxfUFJJQ0VfRUxFTUVOVCIsInF1ZXJ5U2VsZWN0b3IiLCJQUklDRV9FTEVNRU5UIiwiQ09TVF9FTEVNRU5UIiwiRElTQ09VTlRfRUxFTUVOVCIsIkNIQU5HRV9QSE9UT19FTEVNRU5UIiwiQ0FOQ0VMX0NIQU5HRV9QSE9UT19FTEVNRU5UIiwiQUREX1NQRUNJRklDQVRJT05fRUxFTUVOVCIsIlBST0RVQ1RfU1BFQ0lGSUNBVElPTl9FTEVNRU5UIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJpc0ZpbGVFeGlzdCIsImZpbGUiLCJpIiwiZmlsZXMiLCJsZW5ndGgiLCJuYW1lIiwic2l6ZSIsImxhc3RNb2RpZmllZCIsInRvU3RyaW5nIiwiYWRkRmlsZSIsInVwbG9hZCIsInByb2dyZXNzIiwidG90YWwiLCJieXRlc1NlbnQiLCJvcHRpb25zIiwicHJldmVudER1cGxpY2F0ZXMiLCJhbGVydCIsImRpY3REdXBsaWNhdGVGaWxlIiwicHVzaCIsInN0YXR1cyIsIkFEREVEIiwiZW1pdCIsIl9lbnF1ZXVlVGh1bWJuYWlsIiwiYWNjZXB0IiwiX3RoaXMiLCJlcnJvciIsImFjY2VwdGVkIiwiX2Vycm9yUHJvY2Vzc2luZyIsImF1dG9RdWV1ZSIsImVucXVldWVGaWxlIiwiX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzIiwidG9rZW4iLCJ2YWx1ZSIsInRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRyb3B6b25lT2JqIiwicGFyYW1OYW1lIiwidXJsIiwicHJldmlld1RlbXBsYXRlIiwibWF4RmlsZXNpemUiLCJhY2NlcHRlZEZpbGVzIiwidXBsb2FkTXVsdGlwbGUiLCJwYXJhbGxlbFVwbG9hZHMiLCJtYXhGaWxlcyIsImhlYWRlcnMiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJvbiIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwieGh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiY2xlYXJBbGxGaWxlc0J1dHRvbiIsInJlbW92ZUFsbEZpbGVzIiwiY2hhbmdlRHpNT0RFIiwiZWwiLCJzdGF0ZSIsInNlY3Rpb25Db250YWluZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZW1vdmUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiVG90YWxQcmljZUNhbGN1bGF0aW9uIiwiUHJvZHVjdFNwZWNpZmljYXRpb24iLCJ0b3RhbFByaWNlQ2FsY3VsYXRpb24iLCJwcm9kdWN0U3BlY2lmaWNhdGlvbiIsInJ1biIsIkRTIiwiVFBDIiwicHJpY2UiLCJjbGVhblZhbHVlIiwiZGlzY291bnQiLCJnZXRUb3RhbFByaWNlIiwiYXBwZW5kU3BlY2lmaWNhdGlvbklucHV0IiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJjb250cm9sbCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9