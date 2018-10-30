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

Route::get('bookings/{phonenumber}','BookingController@showBookingForm');
//delete booking
Route::delete('bookings/{phonenumber}','BookingController@deleteBooking');

//display shift of stylist
Route::post('bookings/shift-of-stylist','BookingController@getShiftDefaultByStylistID');

//add new booking
Route::post('bookings/add-new-booking','BookingController@addNewBooking');

//edit booking
Route::post('bookings/edit-booking','BookingController@editBooking');

//delete booking
Route::delete('bookings/delete-booking/{phonenumber}','BookingController@deleteBooking');

Route::post('bookings/show-default-status','BookingController@showDefaultStatus');

