<?php

use App\Http\Controllers;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::controller(UserController::class)->group(function () {
    Route::post('user/register', 'store');
    Route::post('/login', 'login');
    Route::group(['middleware' => ['auth:sanctum']], function (){
        Route::resource('user', UserController::class);
        Route::post('user/logout','logout');
    });
});

