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
        foreach (range(1, 50) as $index) {
            DB::table('images')->insert([
                'gallery_id' => rand(1,10),
                'caption' => $faker->paragraph($nbSentences = 1),
                'thumb_link' => str_random(5).".png",
                'image_link' => str_random(5).".png"
            ]);
        }
    }
}
