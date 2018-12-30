<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();
        foreach (range(1, 10) as $index) {
            DB::table('news')->insert([
                'title' => $faker->paragraph($nbSentences = 1),
                'content' => $faker->paragraph($nbSentences = 3),
                'image_link' => str_random(5).".png",
            ]);
        }
    }
}
