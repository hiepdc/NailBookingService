<?php

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
//Route::resource('stylists', 'StylistController');
Route::post('stylists','StylistController@store');
Route::put('stylists/{id}','StylistController@update');
Route::get('stylists','StylistController@index');
Route::get('stylists/{id}','StylistController@show');
Route::delete('stylists/{id}','StylistController@destroy');