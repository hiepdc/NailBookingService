<?php

use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 12) as $index) {
            DB::table('galleries')->insert([
                'name' => "BST móng tay mùa xuân". str_random(3),
                'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
            ]);
        }
    }
}
