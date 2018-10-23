<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();
        foreach (range(1, 10) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(1,10),
                'service_id' => rand(1,2),
                'customer_id' => rand(1,10),
                'start_time'=>\Carbon\Carbon::now(),
                'status' => $faker->randomElement(['booked','pending','finished','cancel']),
            ]);
        }
    }
}
