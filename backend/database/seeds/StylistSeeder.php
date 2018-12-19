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
            'image_link' => "../../assets/img/team/team1.jpg",
        ],
            [
                'stylist_name' => 'Thúy Vân',
                'phone_number' => '0126808080',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team2.jpg",
            ],
            [
                'stylist_name' => 'Thị Thắm',
                'phone_number' => '0127488456',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team3.jpg",
            ],
            [
                'stylist_name' => 'Ngọc Huyền',
                'phone_number' => '0976420088',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team4.jpg",
            ],
            [
                'stylist_name' => 'Thúy Kiều',
                'phone_number' => '0126420123',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team5.jpg",
            ],
            [
                'stylist_name' => 'Thúy Na',
                'phone_number' => '0127420456',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team6.jpg",
            ],
            [
                'stylist_name' => 'Thủy Tiên',
                'phone_number' => '0126420496',
                'information' => $faker->paragraph($nbSentences = 1),
                'image_link' => "../../assets/img/team/team7.jpg",
            ]
        ]);
    }

}
