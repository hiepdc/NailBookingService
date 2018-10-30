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
                'start_time' => '10',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '2',
                'start_time' => '22',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '1',
                'customer_id' => '3',
                'start_time'=>'25',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '4',
                'start_time'=>'15',
                'status' => 'booked',
            ],
            [
                'shift_id' => '1',
                'service_id' => '2',
                'customer_id' => '5',
                'start_time'=>'12',
                'status' => 'booked',
            ],
        ]);
        foreach (range(1, 30) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(2, 15),
                'service_id' => rand(1, 2),
                'customer_id' => rand(1, 3),
                'start_time'=>'25',
                'status' => $faker->randomElement(['booked']),
            ]);
        }
    }
}
