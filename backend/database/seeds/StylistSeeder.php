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
            'stylist_name' => 'Lệ Thủy',
            'phone_number' => '0976420019',
            'information' => $faker->paragraph($nbSentences = 1),
            'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team1.jpg",
        ],
            [
                'stylist_name' => 'Thúy Vân',
                'phone_number' => '0966808080',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team2.jpg",
            ],
            [
                'stylist_name' => 'Thị Thắm',
                'phone_number' => '0367488456',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team3.jpg",
            ],
            [
                'stylist_name' => 'Ngọc Huyền',
                'phone_number' => '0976420088',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team4.jpg",
            ],
            [
                'stylist_name' => 'Thúy Kiều',
                'phone_number' => '0966420963',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team5.jpg",
            ],
            [
                'stylist_name' => 'Thúy Na',
                'phone_number' => '0967420456',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team6.jpg",
            ],
            [
                'stylist_name' => 'Thủy Tiên',
                'phone_number' => '0366420496',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team7.jpg",
            ],
            [
                'stylist_name' => 'Chị Trâm',
                'phone_number' => '0366420411',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "http://api.chamtramnail.com/public/upload/stylists/team8.jpg",
            ]
        ]);
    }

}
