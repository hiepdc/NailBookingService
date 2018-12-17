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
        DB::table('bookings')->insert([
            [
                'shift_id' => '1',
                'service_id' => '1',
                'customer_id' => '1',
                'start_time' => '24',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '2',
                'start_time' => '24',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '1',
                'customer_id' => '3',
                'start_time' => '24',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '4',
                'start_time' => '24',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '5',
                'start_time' => '24',
                'status' => 'booked',
            ],
        ]);
        foreach (range(1, 6000) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(5, 2400),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 200),
                'start_time'=> rand(0,25),
                'status' => $faker->randomElement(['booked']),
            ]);
            DB::table('bookings')->insert([
                'shift_id' => rand(5, 2400),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 200),
                'start_time'=> rand(26,47),
                'status' => $faker->randomElement(['booked']),
            ]);
        }
    }
}
