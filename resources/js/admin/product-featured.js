// Vendor Libraries
// require('bootstrap');

// Enable tooltips everywhere
$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});

    // $(document).on("keydown", ":input:not(textarea)", function(event){
    //     return event.key != "Enter";
    //   });
});


// App Javascript
require('./product-featured/main');