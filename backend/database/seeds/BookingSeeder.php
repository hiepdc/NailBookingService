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
        foreach (range(1, 300) as $index) {
            DB::table('bookings')->insert([
                [
                    'shift_id' => rand(1,98),
                    'service_id' => rand(1,2),
                    'customer_id' => rand(1, 200),
                    'start_time' => rand(0,47),
                    'status' => 'booked',
                ]
            ]);
        }
        foreach (range(1, 700) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(99, 480),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 200),
                'start_time'=> rand(0,25),
                'status' => $faker->randomElement(['finished']),
            ]);
            DB::table('bookings')->insert([
                'shift_id' => rand(99, 480),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 200),
                'start_time'=> rand(26,47),
                'status' => $faker->randomElement(['finished']),
            ]);
        }
    }
}
