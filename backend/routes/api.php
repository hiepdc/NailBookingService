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
//service
Route::resource('services', 'ServiceController');
//api for stylists
Route::post('stylists','StylistController@store');
Route::put('stylists/{id}','StylistController@update');
Route::get('stylists','StylistController@index');
Route::get('stylists/{id}','StylistController@show');
Route::delete('stylists/{id}','StylistController@destroy');
//search stylist by ame
Route::post('stylists/search', 'StylistController@search');
//create pin
Route::post('bookings/create-pin','BookingController@createPIN');
//verify pin
Route::post('bookings/verify-pin','BookingController@verifyPIN');

//api for booking
//Route::get('bookings/{phonenumber}','BookingController@showBookingForm');
//add new booking
Route::post('bookings/add-new-booking','BookingController@addNewBooking');
//edit booking
Route::post('bookings/edit-booking','BookingController@editBooking');
//delete booking  admin
Route::delete('bookings/{phonenumber}','BookingController@deleteBooking');
//delete booking
Route::delete('bookings/delete-booking/{phonenumber}','BookingController@deleteBooking');
//show booking
Route::get('bookings/show/{id}','BookingController@show');
//list bookings
Route::get('bookings','BookingController@listBooking');
//fillter booking
Route::post('bookings/search','BookingController@searchBooking');
//checkin booking
Route::post('bookings/checkin','BookingController@checkIn');
//checkout booking
Route::post('bookings/checkout','BookingController@checkOut');
//use coin booking
Route::post('bookings/use-coin','BookingController@usecoin');

//show shift
Route::get('shifts','ShiftController@index');
Route::get('shifts/{id}','ShiftController@show');
//display shift of stylist
Route::get('shifts/stylist/{service_id}/{stylist_id}/{date}','ShiftController@getAvailableBooking');
//display shift default
//Route::get('shifts/stylist/{service_id}/{date}','ShiftController@getAvailableBookingTimeWithoutStylist');

//@@@Customers
Route::apiResource('customers', 'CustomerController');
//list customers
//Route::get('customers','CustomerController@index');
//search customer name
Route::post('customers/search/','CustomerController@search');
// @@@Admin@@@
Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
});

Route::get('bookings/send-message-to-admin/{title}/{message}', 'BookingController@sendMessageToAdmin');
Route::get('notifications', 'NotificationController@index');
Route::get('notifications/number-unread', 'NotificationController@numberUnread');
Route::get('notifications/mark-all-read', 'NotificationController@markAllRead');

Route::get('galleries', 'GalleryController@index');
Route::get('galleries/{id}', "GalleryController@show");