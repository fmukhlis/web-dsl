// Vendor Libraries
require('bootstrap');

// Enable tooltips everywhere
$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
    
    $('.toast').toast({autohide:false});    
    $('.toast').toast('show');
    
    // Swal.mixin({
    //     toast: true,
    // }).bindClickHandler('data-swal-toast-template');

    // $(document).on("keydown", ":input:not(textarea)", function(event){
    //     return event.key != "Enter";
    //   });
});


// App Javascript
require('./product-carousel/main');