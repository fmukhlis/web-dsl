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

// Compile All Node Modules Vendor Libraries (Listed in package.json file)
// mix.extract();
mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css');

mix.css('resources/css/product-management.css', 'public/css');

mix.webpackConfig({ 
        devtool: 'inline-source-map'
    });
    
mix.extract();

mix.browserSync('127.0.0.1::8000');
