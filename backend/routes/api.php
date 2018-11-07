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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//api for stylists
//Route::post('stylists','StylistController@store');
//Route::put('stylists/{id}','StylistController@update');
Route::get('stylists','StylistController@index');
Route::get('stylists/{id}','StylistController@show');
//Route::delete('stylists/{id}','StylistController@destroy');

//create pin
Route::post('bookings/create-pin','BookingController@createPIN');
//verify pin
Route::post('bookings/verify-pin','BookingController@verifyPIN');

//api for booking
Route::get('bookings/{phonenumber}','BookingController@showBookingForm');
//add new booking
Route::post('bookings/add-new-booking','BookingController@addNewBooking');
//edit booking
Route::post('bookings/edit-booking','BookingController@editBooking');
//delete booking
Route::delete('bookings/{phonenumber}','BookingController@deleteBooking');
//delete booking
Route::delete('bookings/delete-booking/{phonenumber}','BookingController@deleteBooking');
//show booking
Route::get('bookings/show/{id}','BookingController@show');
Route::get('bookings','BookingController@index');

//show shift
Route::get('shifts','ShiftController@index');
Route::get('shifts/{id}','ShiftController@show');
//display shift of stylist
Route::get('shifts/stylist/{service_id}/{stylist_id}/{date}','StylistController@getAvailableBookingTimeWithStylist');
//display shift default
Route::get('shifts/default/{service_id}/{date}','StylistController@getAvailableBookingTimeWithoutStylist');

// @@@Admin@@@
Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    Route::post('stylists','StylistController@store');
    Route::put('stylists/{id}','StylistController@update');
    Route::delete('stylists/{id}','StylistController@destroy');
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});

