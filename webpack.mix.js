const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin/product-management.js', 'public/js/admin');
mix.js('resources/js/admin/dashboard.js', 'public/js/admin');
mix.js('resources/js/admin/products.js', 'public/js/admin');
mix.js('resources/js/admin/product-carousel.js', 'public/js/admin');

mix.js('resources/js/products.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css');

mix.css('resources/css/product-management.css', 'public/css');
mix.css('resources/css/products.css', 'public/css');


mix.webpackConfig({ 
        devtool: 'inline-source-map'
    });
    
mix.extract();

// mix.browserSync('127.0.0.1::8000');
