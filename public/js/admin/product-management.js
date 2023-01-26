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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/products","css/product-management","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/admin/product-management.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/css/product-management.css"), __webpack_exec__("./resources/css/products.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdvRyxJQUFJO01BQzNFNUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNzQyxPQUFPLENBQUM7UUFBQ0MsT0FBTyxFQUFFO01BQU8sQ0FBQyxDQUFDO0lBQzVEO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0UsSUFBTWtGLHFCQUFxQjtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUM5Qix5QkFBc0M7TUFBQSxJQUF4Qk8sS0FBSyx1RUFBRyxDQUFDO01BQUEsSUFBRUUsUUFBUSx1RUFBRyxDQUFDO01BQ2pDRixLQUFLLEdBQUcsSUFBSSxDQUFDQyxVQUFVLENBQUNELEtBQUssQ0FBQztNQUM5QixPQUFPQSxLQUFLLEdBQUlBLEtBQUssR0FBR0UsUUFBUSxHQUFHLEdBQUk7SUFDM0M7RUFBQztJQUFBO0lBQUEsT0FFRCxvQkFBVzlDLEtBQUssRUFBQztNQUNiLE9BQU9BLEtBQUssR0FBR0EsS0FBSyxDQUFDMEQsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25EO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNSTDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vaW5wdXRtYXNrLmJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L2Ryb3B6b25lLWN1c3RvbWl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvcHJvZHVjdC1zcGVjaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvdG90YWwtcHJpY2UtY2FsY3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Nzcy9wcm9kdWN0LW1hbmFnZW1lbnQuY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jc3MvcHJvZHVjdHMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBJbnB1dCBNYXNrIHBsdWdpbiBiaW5kaW5nXHJcbiBodHRwOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvanF1ZXJ5LmlucHV0bWFza1xyXG4gQ29weXJpZ2h0IChjKSBSb2JpbiBIZXJib3RzXHJcbiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG5cdGZhY3RvcnkoalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrLCB3aW5kb3cpO1xyXG59XHJcbihmdW5jdGlvbiAoJCwgSW5wdXRtYXNrLCB3aW5kb3cpIHtcclxuXHQkKHdpbmRvdy5kb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uIChldmVudCwgeG1sSHR0cFJlcXVlc3QsIGFqYXhPcHRpb25zKSB7XHJcblx0XHRpZiAoJC5pbkFycmF5KFwiaHRtbFwiLCBhamF4T3B0aW9ucy5kYXRhVHlwZXMpICE9PSAtMSkge1xyXG5cdFx0XHQkKFwiLmlucHV0bWFzaywgW2RhdGEtaW5wdXRtYXNrXSwgW2RhdGEtaW5wdXRtYXNrLW1hc2tdLCBbZGF0YS1pbnB1dG1hc2stYWxpYXNdLCBbZGF0YS1pbnB1dG1hc2stcmVnZXhdXCIpLmVhY2goZnVuY3Rpb24gKG5keCwgbG1udCkge1xyXG5cdFx0XHRcdGlmIChsbW50LmlucHV0bWFzayA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRJbnB1dG1hc2soKS5tYXNrKGxtbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdFx0JChcIi5pbnB1dG1hc2ssIFtkYXRhLWlucHV0bWFza10sIFtkYXRhLWlucHV0bWFzay1tYXNrXSwgW2RhdGEtaW5wdXRtYXNrLWFsaWFzXSxbZGF0YS1pbnB1dG1hc2stcmVnZXhdXCIpLmVhY2goZnVuY3Rpb24gKG5keCwgbG1udCkge1xyXG5cdFx0XHRpZiAobG1udC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdElucHV0bWFzaygpLm1hc2sobG1udCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KSk7XHJcbiIsIi8vIFZlbmRvciBMaWJyYXJpZXNcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ2Ryb3B6b25lJyk7XHJcbnJlcXVpcmUoJ2lucHV0bWFzaycpO1xyXG5cclxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xyXG4gICAgY3VycmVuY3k6IHtcclxuICAgICAgICBwcmVmaXg6IFwiUnBcIixcclxuICAgICAgICBncm91cFNlcGFyYXRvcjogXCIuXCIsXHJcbiAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIGRpZ2l0czogMCxcclxuICAgICAgICBkaWdpdHNPcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2UsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gRXhhbXBsZSBzdGFydGVyIEphdmFTY3JpcHQgZm9yIGRpc2FibGluZyBmb3JtIHN1Ym1pc3Npb25zIGlmIHRoZXJlIGFyZSBpbnZhbGlkIGZpZWxkc1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEZldGNoIGFsbCB0aGUgZm9ybXMgd2Ugd2FudCB0byBhcHBseSBjdXN0b20gQm9vdHN0cmFwIHZhbGlkYXRpb24gc3R5bGVzIHRvXHJcbiAgICAgICAgdmFyIGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZHMtdmFsaWRhdGlvbicpO1xyXG4gICAgICAgIC8vIExvb3Agb3ZlciB0aGVtIGFuZCBwcmV2ZW50IHN1Ym1pc3Npb25cclxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChmb3JtcywgZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbn0pKCk7XHJcblxyXG4vLyBFbmFibGUgdG9vbHRpcHMgZXZlcnl3aGVyZVxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHt0cmlnZ2VyOiBcImhvdmVyXCJ9KTtcclxufSk7XHJcbiAgXHJcblxyXG4vLyBBcHAgSmF2YXNjcmlwdFxyXG5yZXF1aXJlKCcuL2lucHV0bWFzay5iaW5kaW5nJyk7XHJcbnJlcXVpcmUoJy4vcHJvZHVjdC1tYW5hZ2VtZW50L21haW4nKTsiLCJleHBvcnQgY29uc3QgRE9NU2VsZWN0b3IgPSB7XHJcbiAgICBUT1RBTF9QUklDRV9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKSxcclxuICAgIFBSSUNFX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLFxyXG4gICAgQ09TVF9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29zdCcpLFxyXG4gICAgRElTQ09VTlRfRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc2NvdW50JyksXHJcbiAgICBDSEFOR0VfUEhPVE9fRUxFTUVOVDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5nZS1wcm9kdWN0LXBob3RvJyksXHJcbiAgICBDQU5DRUxfQ0hBTkdFX1BIT1RPX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtY2hhbmdlLXByb2R1Y3QtcGhvdG8nKSxcclxuICAgIEFERF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtc3BlYy1idG4nKSxcclxuICAgIFBST0RVQ1RfU1BFQ0lGSUNBVElPTl9FTEVNRU5UOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1zcGVjaWZpY2F0aW9uLWNvbnRhaW5lcicpLFxyXG59IiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XHJcblxyXG5Ecm9wem9uZS5wcm90b3R5cGUuaXNGaWxlRXhpc3Q9IGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgIHZhciBpO1xyXG4gICAgaWYodGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihpID0gMDsgaSA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0aGlzLmZpbGVzW2ldLm5hbWUgPT09IGZpbGUubmFtZSAmJiB0aGlzLmZpbGVzW2ldLnNpemUgPT09IGZpbGUuc2l6ZSAmJiB0aGlzLmZpbGVzW2ldLmxhc3RNb2RpZmllZC50b1N0cmluZygpID09PSBmaWxlLmxhc3RNb2RpZmllZC50b1N0cmluZygpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0sXHJcblxyXG5Ecm9wem9uZS5wcm90b3R5cGUuYWRkRmlsZSA9IGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgIGZpbGUudXBsb2FkID0ge1xyXG4gICAgICBwcm9ncmVzczogMCxcclxuICAgICAgdG90YWw6IGZpbGUuc2l6ZSxcclxuICAgICAgYnl0ZXNTZW50OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5pc0ZpbGVFeGlzdChmaWxlKSkge1xyXG4gICAgICBhbGVydCh0aGlzLm9wdGlvbnMuZGljdER1cGxpY2F0ZUZpbGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGUpO1xyXG5cclxuICAgIGZpbGUuc3RhdHVzID0gRHJvcHpvbmUuQURERUQ7XHJcblxyXG4gICAgdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsIGZpbGUpO1xyXG5cclxuICAgIHRoaXMuX2VucXVldWVUaHVtYm5haWwoZmlsZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYWNjZXB0KGZpbGUsIChmdW5jdGlvbihfdGhpcykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuYWNjZXB0ZWQgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZXJyb3JQcm9jZXNzaW5nKFtmaWxlXSwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5hY2NlcHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5hdXRvUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbnF1ZXVlRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKHRoaXMpKTtcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUnKSl7XHJcbiAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJfdG9rZW5cIl0nKS52YWx1ZTtcclxuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNkei10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuICAgIGxldCBkcm9wem9uZU9iaiA9IG5ldyBEcm9wem9uZShcImRpdiNwcm9kdWN0LXByZXZpZXdzXCIsIHsgXHJcbiAgICAgICAgZGljdER1cGxpY2F0ZUZpbGU6IFwiRHVwbGljYXRlIEZpbGVzIENhbm5vdCBCZSBVcGxvYWRlZFwiLFxyXG4gICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlLFxyXG4gICAgICAgIHBhcmFtTmFtZTogXCJwcm9kdWN0X2ltZ1wiLFxyXG4gICAgICAgIHVybDpcIi9hZG1pbi9wcm9kdWN0LXRlbXAtaW1nXCIsXHJcbiAgICAgICAgcHJldmlld1RlbXBsYXRlOiB0ZW1wbGF0ZUVsZW1lbnQsXHJcbiAgICAgICAgbWF4RmlsZXNpemU6IDQsIC8vIE1CXHJcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS9wbmcsIGltYWdlL2pwZywgaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgIHVwbG9hZE11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgIHBhcmFsbGVsVXBsb2FkczogMSxcclxuICAgICAgICBtYXhGaWxlczogMTAsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2R6LXRlbXBsYXRlJykucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjZHotdGVtcGxhdGUnKSk7XHJcbiAgICBcclxuICAgIGRyb3B6b25lT2JqLm9uKFwic2VuZGluZ1wiLCBmdW5jdGlvbihmaWxlLCB4aHIsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgLy8gV2lsbCBzZW5kIHRoZSBmaWxlc2l6ZSBhbG9uZyB3aXRoIHRoZSBmaWxlIGFzIFBPU1QgZGF0YS5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJkaXJlY3RvcnlfcGF0aFwiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPWRpcmVjdG9yeV9wYXRoXScpLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZHJvcHpvbmVPYmoub24oXCJyZW1vdmVkZmlsZVwiLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgY29uc3QgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIFxyXG4gICAgICAgIHhodHRwLm9wZW4oXCJERUxFVEVcIiwgJy9hZG1pbi9wcm9kdWN0LXRlbXAtaW1nLycrZmlsZS5uYW1lLCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNlbmQgdGhlIHByb3BlciBoZWFkZXIgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxyXG4gICAgICAgIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcclxuICAgICAgICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcignWC1DU1JGLVRPS0VOJywgdG9rZW4pO1xyXG4gICAgXHJcbiAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gVHlwaWNhbCBhY3Rpb24gdG8gYmUgcGVyZm9ybWVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MgRGVsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhodHRwLnNlbmQoXCJkaXJlY3RvcnlfcGF0aD1cIitkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPWRpcmVjdG9yeV9wYXRoXScpLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGVhckFsbEZpbGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtZHJvcHpvbmUtYnV0dG9uPVwiY2xlYXJBbGxcIl0nKTtcclxuICAgIGlmKGNsZWFyQWxsRmlsZXNCdXR0b24pe1xyXG4gICAgICAgIGNsZWFyQWxsRmlsZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkcm9wem9uZU9iai5yZW1vdmVBbGxGaWxlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRHpNT0RFKGVsLCBzdGF0ZSl7XHJcbiAgICBjb25zdCBzZWN0aW9uQ29udGFpbmVyID0gZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgc2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIGlmIChzdGF0ZSA9PSAndmlld19tb2RlJyl7XHJcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09ICdjaGFuZ2VfbW9kZScpe1xyXG4gICAgICAgIHNlY3Rpb25Db250YWluZXIucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRvdGFsUHJpY2VDYWxjdWxhdGlvbiB9IGZyb20gJy4vdG90YWwtcHJpY2UtY2FsY3VsYXRpb24uanMnO1xyXG5pbXBvcnQgeyBET01TZWxlY3RvciB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0ICcuL2Ryb3B6b25lLWN1c3RvbWl6YXRpb24uanMnO1xyXG5pbXBvcnQgeyBjaGFuZ2VEek1PREUgfSBmcm9tICcuL2Ryb3B6b25lLWN1c3RvbWl6YXRpb24uanMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0U3BlY2lmaWNhdGlvbiB9IGZyb20gJy4vcHJvZHVjdC1zcGVjaWZpY2F0aW9uLmpzJztcclxuXHJcbmNvbnN0IHRvdGFsUHJpY2VDYWxjdWxhdGlvbiA9IG5ldyBUb3RhbFByaWNlQ2FsY3VsYXRpb24oKTtcclxuY29uc3QgcHJvZHVjdFNwZWNpZmljYXRpb24gPSBuZXcgUHJvZHVjdFNwZWNpZmljYXRpb24oKTtcclxuXHJcbmNvbnN0IHJ1biA9IChEUywgVFBDKSA9PiB7XHJcbiAgICBsZXQgcHJpY2UgPSBUUEMuY2xlYW5WYWx1ZShEUy5QUklDRV9FTEVNRU5ULnZhbHVlKTtcclxuICAgIGxldCBkaXNjb3VudCA9IFRQQy5jbGVhblZhbHVlKERTLkRJU0NPVU5UX0VMRU1FTlQudmFsdWUpO1xyXG4gICAgRFMuUFJJQ0VfRUxFTUVOVC52YWx1ZSA9IHByaWNlO1xyXG4gICAgRFMuQ09TVF9FTEVNRU5ULnZhbHVlID0gVFBDLmNsZWFuVmFsdWUoRFMuQ09TVF9FTEVNRU5ULnZhbHVlKTtcclxuICAgIERTLlRPVEFMX1BSSUNFX0VMRU1FTlQudmFsdWUgPSBUUEMuZ2V0VG90YWxQcmljZShwcmljZSwgZGlzY291bnQpO1xyXG5cclxuICAgIERTLlBSSUNFX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHByaWNlID0gVFBDLmNsZWFuVmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgRFMuVE9UQUxfUFJJQ0VfRUxFTUVOVC52YWx1ZSA9IFRQQy5nZXRUb3RhbFByaWNlKHByaWNlLCBkaXNjb3VudCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgRFMuRElTQ09VTlRfRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGlzY291bnQgPSBUUEMuY2xlYW5WYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBEUy5UT1RBTF9QUklDRV9FTEVNRU5ULnZhbHVlID0gVFBDLmdldFRvdGFsUHJpY2UocHJpY2UsIGRpc2NvdW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIERTLkFERF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHByb2R1Y3RTcGVjaWZpY2F0aW9uLmFwcGVuZFNwZWNpZmljYXRpb25JbnB1dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgRFMuUFJPRFVDVF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5jb250cm9sbCA9PSAncmVtb3ZlLXNwZWMnKXtcclxuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRyb2xsID09ICdyZW1vdmUtc3BlYycpe1xyXG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTsgICAgXHJcblxyXG4gICAgaWYgKERTLkNIQU5HRV9QSE9UT19FTEVNRU5UICYmIERTLkNBTkNFTF9DSEFOR0VfUEhPVE9fRUxFTUVOVCl7XHJcbiAgICAgICAgRFMuQ0hBTkdFX1BIT1RPX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjaGFuZ2VEek1PREUodGhpcywgJ2NoYW5nZV9tb2RlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgRFMuQ0FOQ0VMX0NIQU5HRV9QSE9UT19FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2hhbmdlRHpNT0RFKHRoaXMsICd2aWV3X21vZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxucnVuKERPTVNlbGVjdG9yLCB0b3RhbFByaWNlQ2FsY3VsYXRpb24pOyIsImltcG9ydCB7IERPTVNlbGVjdG9yIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNwZWNpZmljYXRpb24ge1xyXG4gICAgYXBwZW5kU3BlY2lmaWNhdGlvbklucHV0KCl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdmb3JtLXJvdyc7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgbXktMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXB1cnBsZVwiPjxpIGNsYXNzPVwiZmEgZmEta2V5XCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzcGVjXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY19rZXlbXVwiIHBsYWNlaG9sZGVyPVwiS2F0YSBLdW5jaVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbXktMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXB1cnBsZVwiPjxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc3BlY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNfdmFsW11cIiBwbGFjZWhvbGRlcj1cIk5pbGFpXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xIG15LTIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBkYXRhLWNvbnRyb2xsPVwicmVtb3ZlLXNwZWNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1sLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJsZWZ0XCIgdGl0bGU9XCJSZW1vdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBET01TZWxlY3Rvci5QUk9EVUNUX1NQRUNJRklDQVRJT05fRUxFTUVOVC5hcHBlbmQoZGl2KTtcclxuICAgICAgICBET01TZWxlY3Rvci5QUk9EVUNUX1NQRUNJRklDQVRJT05fRUxFTUVOVC5sYXN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe3RyaWdnZXI6IFwiaG92ZXJcIn0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFRvdGFsUHJpY2VDYWxjdWxhdGlvbiB7XHJcbiAgICBnZXRUb3RhbFByaWNlKHByaWNlID0gMCwgZGlzY291bnQgPSAwKXtcclxuICAgICAgICBwcmljZSA9IHRoaXMuY2xlYW5WYWx1ZShwcmljZSk7XHJcbiAgICAgICAgcmV0dXJuIHByaWNlIC0gKHByaWNlICogZGlzY291bnQgLyAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGVhblZhbHVlKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpIDogMDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImZhY3RvcnkiLCJqUXVlcnkiLCJ3aW5kb3ciLCJJbnB1dG1hc2siLCIkIiwiZG9jdW1lbnQiLCJhamF4Q29tcGxldGUiLCJldmVudCIsInhtbEh0dHBSZXF1ZXN0IiwiYWpheE9wdGlvbnMiLCJpbkFycmF5IiwiZGF0YVR5cGVzIiwiZWFjaCIsIm5keCIsImxtbnQiLCJpbnB1dG1hc2siLCJ1bmRlZmluZWQiLCJtYXNrIiwicmVhZHkiLCJyZXF1aXJlIiwiZXh0ZW5kQWxpYXNlcyIsImN1cnJlbmN5IiwicHJlZml4IiwiZ3JvdXBTZXBhcmF0b3IiLCJhbGlhcyIsImRpZ2l0cyIsImRpZ2l0c09wdGlvbmFsIiwiYWxsb3dNaW51cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ2YWxpZGF0aW9uIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwiZm9ybSIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXAiLCJ0cmlnZ2VyIiwiRE9NU2VsZWN0b3IiLCJUT1RBTF9QUklDRV9FTEVNRU5UIiwicXVlcnlTZWxlY3RvciIsIlBSSUNFX0VMRU1FTlQiLCJDT1NUX0VMRU1FTlQiLCJESVNDT1VOVF9FTEVNRU5UIiwiQ0hBTkdFX1BIT1RPX0VMRU1FTlQiLCJDQU5DRUxfQ0hBTkdFX1BIT1RPX0VMRU1FTlQiLCJBRERfU1BFQ0lGSUNBVElPTl9FTEVNRU5UIiwiUFJPRFVDVF9TUEVDSUZJQ0FUSU9OX0VMRU1FTlQiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImlzRmlsZUV4aXN0IiwiZmlsZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJzaXplIiwibGFzdE1vZGlmaWVkIiwidG9TdHJpbmciLCJhZGRGaWxlIiwidXBsb2FkIiwicHJvZ3Jlc3MiLCJ0b3RhbCIsImJ5dGVzU2VudCIsIm9wdGlvbnMiLCJwcmV2ZW50RHVwbGljYXRlcyIsImFsZXJ0IiwiZGljdER1cGxpY2F0ZUZpbGUiLCJwdXNoIiwic3RhdHVzIiwiQURERUQiLCJlbWl0IiwiX2VucXVldWVUaHVtYm5haWwiLCJhY2NlcHQiLCJfdGhpcyIsImVycm9yIiwiYWNjZXB0ZWQiLCJfZXJyb3JQcm9jZXNzaW5nIiwiYXV0b1F1ZXVlIiwiZW5xdWV1ZUZpbGUiLCJfdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MiLCJ0b2tlbiIsInZhbHVlIiwidGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZHJvcHpvbmVPYmoiLCJwYXJhbU5hbWUiLCJ1cmwiLCJwcmV2aWV3VGVtcGxhdGUiLCJtYXhGaWxlc2l6ZSIsImFjY2VwdGVkRmlsZXMiLCJ1cGxvYWRNdWx0aXBsZSIsInBhcmFsbGVsVXBsb2FkcyIsIm1heEZpbGVzIiwiaGVhZGVycyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIm9uIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJ4aHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJjbGVhckFsbEZpbGVzQnV0dG9uIiwicmVtb3ZlQWxsRmlsZXMiLCJjaGFuZ2VEek1PREUiLCJlbCIsInN0YXRlIiwic2VjdGlvbkNvbnRhaW5lciIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJUb3RhbFByaWNlQ2FsY3VsYXRpb24iLCJQcm9kdWN0U3BlY2lmaWNhdGlvbiIsInRvdGFsUHJpY2VDYWxjdWxhdGlvbiIsInByb2R1Y3RTcGVjaWZpY2F0aW9uIiwicnVuIiwiRFMiLCJUUEMiLCJwcmljZSIsImNsZWFuVmFsdWUiLCJkaXNjb3VudCIsImdldFRvdGFsUHJpY2UiLCJhcHBlbmRTcGVjaWZpY2F0aW9uSW5wdXQiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnRyb2xsIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWwiLCJsYXN0RWxlbWVudENoaWxkIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=