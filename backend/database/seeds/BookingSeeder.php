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
            'start_time'=>'2018-10-30 19:45:00',
            'status' =>'booked',
            ],
            [
            'shift_id' => '1',
            'service_id' => '2',
            'customer_id' => '2',
            'start_time'=>'2018-10-30 11:00:00',
            'status' => 'booked',
            ],
            [
            'shift_id' => '1',
            'service_id' => '1',
            'customer_id' => '3',
            'start_time'=>'2018-10-30 13:00:00',
            'status' =>'booked',
            ],
            [
            'shift_id' => '1',
            'service_id' => '2',
            'customer_id' => '4',
            'start_time'=>'2018-10-30 14:00:00',
            'status' =>'booked',
            ],
            [
            'shift_id' => '1',
            'service_id' => '2',
            'customer_id' => '5',
            'start_time'=>'2018-10-30 16:00:00',
            'status' =>'booked',
            ],
        ]);
        foreach (range(1, 30) as $index) {
            DB::table('bookings')->insert([
                'shift_id' => rand(2,15),
                'service_id' => rand(1,2),
                'customer_id' => rand(1,3),
                'start_time'=>\Carbon\Carbon::now(),
                'status' => $faker->randomElement(['booked','pending','finished','cancel']),
            ]);
        }
    }
}
