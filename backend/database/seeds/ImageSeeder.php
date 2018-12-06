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
        foreach (range(1, 50) as $index) {
            DB::table('images')->insert([
                'gallery_id' => rand(1,10),
                'image_link' => str_random(5).".png",
            ]);
        }
    }
}
