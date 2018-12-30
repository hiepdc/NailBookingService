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
        foreach (range(1, 100) as $index) {
            $image = random_int(1,8);
            DB::table('images')->insert([
                'gallery_id' => rand(1,6),
//                'caption' => $faker->paragraph($nbSentences = 1),
                'thumb_link' => 'http://api.chamtramnail.com/public/upload/collection/nail'. $image. "_tn.jpg",
                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/nail'. $image. ".jpg",
            ]);
        }
    }
}
