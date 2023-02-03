<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\File;

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
    'featuredMed' => HighlightedProduct::where('featured', true)->whereHas('product', function (Builder $query) {
        $query->where('category', 'Alat Kesehatan');
    })->inRandomOrder()->get(),
    'featuredLab' => HighlightedProduct::where('featured', true)->whereHas('product', function (Builder $query) {
        $query->where('category', 'Alat Laboratorium');
    })->inRandomOrder()->get(),
    'featuredChem' => HighlightedProduct::where('featured', true)->whereHas('product', function (Builder $query) {
        $query->where('category', 'Alat Kimia');
    })->inRandomOrder()->get(),
    'featuredOther' => HighlightedProduct::where('featured', true)->whereHas('product', function (Builder $query) {
        $query->where('category', 'Lainnya');
    })->inRandomOrder()->get(),
    'medDevices' => Product::where('category', 'Alat Kesehatan')->take(8)->inRandomOrder()->get(),
    'labDevices' => Product::where('category', 'Alat Laboratorium')->take(8)->inRandomOrder()->get(),
    'chemDevices' => Product::where('category', 'Alat Kimia')->take(8)->inRandomOrder()->get(),
    'otherDevices' => Product::where('category', 'Lainnya')->take(8)->inRandomOrder()->get(),
])->name('home');

Route::view('/products', 'home.products')->name('products');

Route::get('/products/{product:slug}', fn (Product $product) => view('home.product', [
    'product' => $product,
    'productImg' => File::allFiles(public_path($product->image_path)),
]))->name('product');

Route::prefix('admin')
    ->name('admin.')
    ->middleware('auth', 'verified')
    ->group(function () {

        // Admin
        Route::get('/', fn () => redirect()->route('admin.dashboard'));

        // Dashboard
        Route::view('/dashboard', 'admin.dashboard.index', [
            'products' => Product::paginate(7),
        ])->name('dashboard');

        // Product
        Route::view('/product', 'admin.product.index', [
            'products' => Product::paginate(10),
            'carouselItem' => HighlightedProduct::inRandomOrder()->where('carousel', 1)->get(),
            'featuredItem' => HighlightedProduct::inRandomOrder()->where('featured', 1)->take(6)->get(),
        ])->name('product');
        Route::view('/product/new', 'admin.product.add-product')->name('addProduct');
        Route::view('/product/carousel', 'admin.product.carousel-products', [
            'carouselProducts' => HighlightedProduct::where('carousel', '1')->inRandomOrder()->get(),
        ])->name('carouselProducts');
        Route::view('/product/featured', 'admin.product.featured-products', [
            'medDevices' => HighlightedProduct::with('product')
                ->where('featured', '1')
                ->inRandomOrder()
                ->whereHas('product', function (Illuminate\Database\Eloquent\Builder $query) {
                    $query->where('category', 'Alat Kesehatan');
                })
                ->get(),
            'labDevices' => HighlightedProduct::with('product')
                ->where('featured', '1')
                ->inRandomOrder()
                ->whereHas('product', function (Illuminate\Database\Eloquent\Builder $query) {
                    $query->where('category', 'Alat Laboratorium');
                })
                ->get(),
            'chemDevices' => HighlightedProduct::with('product')
                ->where('featured', '1')
                ->inRandomOrder()
                ->whereHas('product', function (Illuminate\Database\Eloquent\Builder $query) {
                    $query->where('category', 'Alat Kimia');
                })
                ->get(),
            'otherDevices' => HighlightedProduct::with('product')
                ->where('featured', '1')
                ->inRandomOrder()
                ->whereHas('product', function (Illuminate\Database\Eloquent\Builder $query) {
                    $query->where('category', 'Lainnya');
                })
                ->get(),
        ])->name('featuredProducts');
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
            Route::delete('/product/{product:slug}', 'destroy')->name('deleteProduct');
        });

        Route::controller(DzC::class)->group(function () {
            Route::post('/product-temp-img', 'storeTempImg');
            Route::delete('/product-temp-img/{fileName}', 'deleteTempImg');
        });

        Route::controller(HPC::class)->group(function () {
            Route::get('/product/carousel/async', 'getCarousel');
            Route::post('/product/carousel/async/{product:slug}', 'storeCarousel');
            Route::delete('/product/carousel/async/{product:slug?}', 'destroyCarousel');

            Route::get('/product/featured/async', 'getFeatured');
            Route::post('/product/featured/async', 'storeFeatured')->name('featuredProductsAsync');
        });

        // Miscellaneous
        Route::get(
            'notifications/get',
            [App\Http\Controllers\NotificationsController::class, 'getNotificationsData']
        )->name('notifications.get');
    });


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
