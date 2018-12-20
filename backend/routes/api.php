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
//delete booking
Route::delete('bookings/delete-booking/{phonenumber}','BookingController@deleteBooking');
//show booking
Route::get('bookings/show/{id}','BookingController@show');
//list bookings
Route::get('bookings','BookingController@listBooking');
//list bookings today
Route::get('bookings/today','BookingController@getBookingToday');
//fillter booking
Route::post('bookings/search','BookingController@searchBooking');
//checkin booking
Route::get('bookings/checkin/{id}','BookingController@checkIn');
//checkout booking
Route::get('bookings/checkout/{id}','BookingController@checkOut');
//use coin booking
Route::post('bookings/use-coin','BookingController@usecoin');
//check exist booking
Route::post('bookings/check-exist-booking', 'BookingController@checkExistBooking');

Route::delete('bookings/{id}', 'BookingController@destroy');
//input: year
Route::post('bookings/bookingOnMonthStatistic','BookingController@bookingOnMonthStatistic');
//input: year-month
Route::post('bookings/bookingOnWeekStatistic','BookingController@bookingOnWeekStatistic');
Route::get('bookings/count-total', 'BookingController@getCountTotal');
//show shift
Route::get('shifts','ShiftController@index');
Route::get('shifts/{id}','ShiftController@show');
//display shift of stylist
Route::get('shifts/stylist/{service_id}/{stylist_id}/{date}','ShiftController@getAvailableBooking');
//display shift default
//Route::get('shifts/stylist/{service_id}/{date}','ShiftController@getAvailableBookingTimeWithoutStylist');

//admin customers
Route::get('customers', 'CustomerController@index');
Route::post('customers/{id}', 'CustomerController@update');
Route::delete('customers/{id}', 'CustomerController@destroy');
Route::post('customers/search','CustomerController@search');

// @@@Admin@@@
Route::post('auth/login', 'AuthController@login');
Route::post('auth/register', 'AuthController@register');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('auth/logout', 'AuthController@logout');
});

Route::get('bookings/send-message-to-admin/{title}/{message}', 'BookingController@sendMessageToAdmin');
Route::get('notifications', 'NotificationController@index');
Route::get('notifications/number-unread', 'NotificationController@numberUnread');
Route::get('notifications/mark-all-read', 'NotificationController@markAllRead');

Route::get('galleries', 'GalleryController@index');
Route::get('galleries/{id}', "GalleryController@show");

Route::apiResource('service-items', 'ServiceItemController');
Route::get('services/{id}/service-items', 'ServiceItemController@showServiceItems');