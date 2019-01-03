<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach (range(1, 20) as $index) {
            DB::table('customers')->insert([
                [
                'customer_name' => $faker->name,
                'phone_number' => "0912".rand(123456,999999),
                'coin' => 10*random_int(1,30),
            ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0387".rand(123456,999999),
                    'coin' => 10*random_int(1,40),
                ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0396".rand(123456,999999),
                    'coin' => 10*random_int(1,20),
                ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0905".rand(123456,999999),
                    'coin' => 10*random_int(1,10),
                ]
            ]);

        }
    }
}
