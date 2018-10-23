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
        foreach (range(1, 10) as $index) {
            DB::table('customers')->insert([
                'customer_name' => $faker->name,
                'phone_number' => rand(1976420019,999999999),
                'coin' => random_int(1,100),
            ]);
        }
    }
}
