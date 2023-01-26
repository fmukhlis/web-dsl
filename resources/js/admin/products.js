// Vendor Libraries
require('bootstrap');

// Enable tooltips everywhere
$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
});

// App Javascript
require('./products/main');