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
            'customer_name' => "Hiepdeptrai",
            'phone_number' => "0976420019",
            'coin' => "50"
        ]);
        foreach (range(1, 9) as $index) {
            DB::table('customers')->insert([
                'customer_name' => $faker->name,
                'phone_number' => "0976".rand(123456,999999),
                'coin' => random_int(1,100),
            ]);

        }
    }
}
