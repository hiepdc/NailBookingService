<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//api for stylists
Route::post('stylists','StylistController@store');
Route::put('stylists/{id}','StylistController@update');
Route::get('stylists','StylistController@index');
Route::get('stylists/{id}','StylistController@show');
Route::delete('stylists/{id}','StylistController@destroy');