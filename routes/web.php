<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function(){
    return Inertia::render('Home');
});
Route::get('/shop', function(){
    return Inertia::render('Shop');
});
Route::get('/detail-product', function(){
    return Inertia::render('DetailProduct');
});
Route::get('/sign-in', function(){
    return Inertia::render('Login');
});
Route::get('/sign-up', function(){
    return Inertia::render('Register');
});
Route::get('/shipping-address', function(){
    return Inertia::render('ShippingAdress');
});
Route::get('/transaction', function(){
    return Inertia::render('Transaction');
});
Route::get('/adress', function(){
    return Inertia::render('Adress');
});
Route::get('/account', function(){
    return Inertia::render('Account');
});
Route::get('/confirm-order', function(){
    return Inertia::render('ConfirmOrder');
});
Route::get('/edit-profile', function(){
    return Inertia::render('EditProfile');
});
Route::get('/virtual-room', function(){
    return Inertia::render('VirtualRoom');
});


// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');app
// });

require __DIR__.'/auth.php';
