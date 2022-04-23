<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});

//NoAuth
Route::post('register', 'RegisterController@register');
Route::post('login', 'LoginController@login');
Route::post('logout', 'LoginController@logout');
Route::get('shipschedule', 'Api\ShipscheduleController@index');

//Protect routes
Route::middleware('auth:sanctum')->group(function () {
    //Mine - Shipschedule REST --create,update,delete,show
    Route::put("shipschedule/{id}", [ShipscheduleController::class, "update"]);
    Route::delete('shipschedule/{id}', 'Api\ShipscheduleController@destroy');
    Route::post('shipschedule', 'Api\ShipscheduleController@store');

    //Mine - Shipschedule REST
    Route::get('users', 'Api\UserController@index');
});
