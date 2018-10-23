<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

//$factory->define(App\Customer::class, function (Faker $faker) {
//    return [
//        'customer_name' => $faker->name,
//        'phone_number' => $faker->numberBetween(91000000,99999999),
//        'coin' => $faker->numberBetween(0,1000), // secret
//    ];
//});
//
//$factory->define(App\Stylist::class, function (Faker $faker) {
//    return [
//        'stylist_name' => str_random(10),
//        'phone_number' => $faker->numberBetween(91000000,99999999),
//        'information' => $faker->paragraph($nbSentences = 2), // secret
//    ];
//});
//
//$factory->define(App\Service::class, function (Faker $faker) {
//    return [
//        'service_name' => $faker->name,
//        'description' => $faker->paragraph($nbSentences = 2),
//        'time_service' => $faker->numberBetween(1,2),
//        'price' => $faker->numberBetween(150000,500000),// secret
//    ];
//});
//

//$factory->define(App\Shift::class, function (Faker $faker) {
//    return [
//        'date' => $faker->dateTimeBetween('+0 days', '+3 days'),
//        'start_time' => $faker->numberBetween(9,12),
//        'end_time' => $faker->numberBetween(13,21),
//        'status' => "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48",// secret
//    ];
//});
//
//$factory->define(App\Booking::class, function (Faker $faker) {
//    return [
//        'start_time' => $faker->numberBetween(1,45),
//        'status' => $faker->randomElement(['booked','pending','finished','cancel']),
//   ];
//});