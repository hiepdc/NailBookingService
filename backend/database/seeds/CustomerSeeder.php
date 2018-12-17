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
        DB::table('customers')->insert([
            'customer_name' => "Công Hiệp",
            'phone_number' => "0976420018",
            'coin' => "50"
        ]);
        foreach (range(1, 50) as $index) {
            DB::table('customers')->insert([
                [
                'customer_name' => $faker->name,
                'phone_number' => "0976".rand(123456,999999),
                'coin' => 10*random_int(0,10),
            ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0126".rand(123456,999999),
                    'coin' => 10*random_int(0,10),
                ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0369".rand(123456,999999),
                    'coin' => 10*random_int(0,10),
                ],
                [
                    'customer_name' => $faker->name,
                    'phone_number' => "0905".rand(123456,999999),
                    'coin' => 10*random_int(0,10),
                ]
            ]);

        }
    }
}
