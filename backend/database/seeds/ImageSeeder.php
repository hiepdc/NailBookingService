<?php

use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //^_^
        $faker = Faker\Factory::create();
        foreach (range(1, 12) as $index) {
            DB::table('images')->insert([
                'gallery_id' => 1,
//                'caption' => $faker->paragraph($nbSentences = 1),
                'thumb_link' => 'http://api.chamtramnail.com/public/upload/collection/thumbs_nail-đẹp-halloween-'. $index. ".jpeg",
                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/nail-đẹp-halloween-'. $index. ".jpeg",
            ]);
        }
        foreach (range(1, 9) as $index) {
            DB::table('images')->insert([
                'gallery_id' => 2,
//                'caption' => $faker->paragraph($nbSentences = 1),
                'thumb_link' => 'http://api.chamtramnail.com/public/upload/collection/thumbs_'. $index. ".jpg",
                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/'. $index. ".jpg",
            ]);
        }
    }
}
