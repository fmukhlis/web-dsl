<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/adm-area/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



$options = [
    'login' => true,
    'logout' => true,
    'register' => true,
    'reset' => true,
    'confirm' => true,
    'verify' => false
];
// Auth Route
if ($options['login'] ?? true) {
    Route::get('admin/dsl/login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
    Route::post('admin/dsl/login', 'App\Http\Controllers\Auth\LoginController@login');
}
if ($options['logout'] ?? true) {
    Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');
}
if ($options['register'] ?? true) {
    Route::get('admin/dsl/register', 'App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('admin/dsl/register', 'App\Http\Controllers\Auth\RegisterController@register');
}
if ($options['reset'] ?? true) {
    Route::get('password/reset', 'App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'App\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@reset')->name('password.update');
}
if ($options['confirm'] ?? true) {
    Route::get('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
    Route::post('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@confirm');
}
if ($options['verify'] ?? true) {
    Route::get('email/verify', 'App\Http\Controllers\Auth\VerificationController@show')->name('verification.notice');
    Route::get('email/verify/{id}/{hash}', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');
}
