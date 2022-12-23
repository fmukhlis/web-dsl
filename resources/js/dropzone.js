const { Dropzone } = require("dropzone");

Dropzone.autoDiscover = false;

Dropzone.prototype.isFileExist= function(file) {
    var i;
    if(this.files.length > 0) {
      for(i = 0; i < this.files.length; i++) {
        if(this.files[i].name === file.name && this.files[i].size === file.size && this.files[i].lastModified.toString() === file.lastModified.toString())
        {
            return true;
        }
      }
    }
    return false;
},

Dropzone.prototype.addFile = function(file) {
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

    return this.accept(file, (function(_this) {
        return function(error) {
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
    })(this));
}

const token = document.querySelector('input[name="_token"]').value;
const templateElement = document.querySelector('div#dz-template').innerHTML;
let dropzoneObj = new Dropzone("div#product-previews", { 
    dictDuplicateFile: "Duplicate Files Cannot Be Uploaded",
    preventDuplicates: true,
    paramName: "product_img",
    url:"/product-temp-img",
    previewTemplate: templateElement,
    maxFilesize: 4, // MB
    acceptedFiles: "image/png, image/jpg, image/jpeg",
    uploadMultiple: true,
    parallelUploads: 1,
    maxFiles: 10,
    headers: {
        'X-CSRF-TOKEN': token,
    },
});
document.querySelector('div#dz-template').parentElement.removeChild(document.querySelector('div#dz-template'));

dropzoneObj.on("sending", function(file, xhr, formData) {
    // Will send the filesize along with the file as POST data.
    formData.append("directory_path", document.querySelector('input[name=directory_path]').value);
});
dropzoneObj.on("removedfile", function(file) {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", '/product-temp-img/'+file.name, true);

    // Send the proper header information along with the request
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.setRequestHeader('X-CSRF-TOKEN', token);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            console.log('Success Delete');
        }
    };
    xhttp.send("directory_path="+document.querySelector('input[name=directory_path]').value);
});

const clearAllFilesButton = document.querySelector('button[data-dropzone-button="clearAll"]');
if(clearAllFilesButton) 
    clearAllFilesButton.addEventListener('click', function(){
        dropzoneObj.removeAllFiles();
    });