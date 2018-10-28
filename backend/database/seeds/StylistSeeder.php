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
        DB::table('stylists')->insert([[
            'stylist_name' => 'hiepdc',
            'phone_number' => '0976420019',
            'information' => $faker->paragraph($nbSentences = 1),
        ],
            [
                'stylist_name' => 'longdq',
                'phone_number' => '0126420123',
                'information' => $faker->paragraph($nbSentences = 1),
            ],
            [
                'stylist_name' => 'hungxoi',
                'phone_number' => '0127420456',
                'information' => $faker->paragraph($nbSentences = 1),
            ]
        ]);
        foreach (range(1, 7) as $index) {
            DB::table('stylists')->insert([
                'stylist_name' => $faker->name,
                'phone_number' => "0976" . rand(123456, 999999),
                'information' => $faker->paragraph($nbSentences = 1),
            ]);
        }
    }

}
