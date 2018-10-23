<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class StylistSeeder extends Seeder
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
            DB::table('stylists')->insert([
                'stylist_name' => $faker->name,
                'phone_number' => rand(1976420019,999999999),
                'information' => $faker->paragraph($nbSentences = 1),
                ]);
        }
    }

}
