<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

// Controllers
use App\Http\Controllers\Admin\ProductController as PC;
use App\Http\Controllers\Admin\DropzoneController as DzC;
use App\Http\Controllers\Admin\HighlightedProductController as HPC;

// Models
use App\Models\Product;
use App\Models\HighlightedProduct;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'home.index', [
    'carouselItem' => HighlightedProduct::where('carousel', true)->inRandomOrder()->get(),
    'medDevices' => Product::where('category', 'Alat Kesehatan')->get(),
    'labDevices' => Product::where('category', 'Alat Laboratorium')->get(),
    'chemDevices' => Product::where('category', 'Alat Kimia')->get(),
    'otherDevices' => Product::where('category', 'Lainnya')->get(),
])->name('home');
Route::view('/products', 'home.products')->name('products');

Route::get('/products/test-prod', [App\Http\Controllers\HomeController::class, 'product'])->name('product');

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {

        // Admin
        // Dashboard
        Route::view('/dashboard', 'admin.dashboard.index', [
            'products' => Product::paginate(7),
        ])->name('dashboardView');

        // Product
        Route::view('/product', 'admin.product.index', [
            'products' => Product::paginate(10),
        ])->name('product');
        Route::view('/product/new', 'admin.product.add-product')->name('addProduct');
        Route::view('/product/carousel', 'admin.product.carousel-products', [
            'carouselProducts' => HighlightedProduct::where('carousel', '1')->inRandomOrder()->get(),
        ])->name('carouselProducts');
        Route::view('/product/featured', 'admin.product.featured-products')->name('featuredProducts');
        Route::get(
            '/product/{product:slug}',
            fn (Product $product) =>
            view('admin.product.edit-product', [
                'product' => $product,
                'productImages' => \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path)),
            ])
        )->name('editProduct');

        Route::controller(PC::class)->group(function () {
            Route::post('/product/new', 'store');
            Route::patch('/product/{product:slug}', 'update');
        });

        Route::controller(DzC::class)->group(function () {
            Route::post('/product-temp-img', 'storeTempImg');
            Route::delete('/product-temp-img/{fileName}', 'deleteTempImg');
        });

        Route::controller(HPC::class)->group(function () {
            Route::get('/product/carousel/AJAX', 'get');
            Route::post('/product/carousel/AJAX/{product:slug}', 'store');
            Route::delete('/product/carousel/AJAX/{product:slug?}', 'destroy');
        });
    });

// Route::get('/admin/dashboard', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.index');
// Route::get('/admin/products', [App\Http\Controllers\Admin\AdminController::class, 'products'])->name('admin.products');
// Route::get('/admin/products/slug-product', [App\Http\Controllers\Admin\AdminController::class, 'product'])->name('admin.product');
// Route::get('/admin/dashboard-content', [App\Http\Controllers\Admin\AdminController::class, 'dashboardView'])->name('admin.dashboardView');



$options = [
    'login' => true,
    'logout' => true,
    'register' => true,
    'reset' => true,
    'confirm' => true,
    'verify' => true
];
// Auth Route
if ($options['login'] ?? true) {
    Route::get('login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');
}
if ($options['logout'] ?? true) {
    Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');
}
if ($options['register'] ?? true) {
    Route::get('register', 'App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@register');
}
if ($options['reset'] ?? true) {
    Route::get('password/reset', 'App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'App\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@reset')->name('password.update');

    Route::get('password/resetsuccess', fn () => view('auth.passwords.resetsuccess'))->middleware('auth');
}
if ($options['confirm'] ?? true) {
    Route::get('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
    Route::post('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@confirm');
}
if ($options['verify'] ?? true) {
    Route::get('email/verify', 'App\Http\Controllers\Auth\VerificationController@show')->name('verification.notice');
    Route::get('email/verify/{id}/{hash}', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');

    Route::get('email/verified', fn () => view('auth.verified'))->middleware('verified');
}
