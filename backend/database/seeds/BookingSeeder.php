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
        foreach (range(1, 80) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(1, 16),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 80),
                'start_time'=> rand(0,40),
                'status' => $faker->randomElement(['finished']),
            ]);
        }
    }
}
