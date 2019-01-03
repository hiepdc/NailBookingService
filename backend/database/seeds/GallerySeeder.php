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
//        foreach (range(1, 12) as $index) {
        DB::table('galleries')->insert([
            [
                'name' => "BST HALLOWEEN 2018",
                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/halloween.jpeg',
            ],
            [
                'name' => "ICON FACEBOOK 2018",
                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/icon_facebook.jpg',
            ],
//            [
//                'name' => "BST biển",
//                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/gallery3.jpg',
//            ],
//            [
//                'name' => "BST tết",
//                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/gallery4.jpg',
//            ],
//            [
//                'name' => "BST trung thu",
//                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/gallery5.jpg',
//            ],
//            [
//                'name' => "BST giáng sinh",
//                'image_link' => 'http://api.chamtramnail.com/public/upload/collection/gallery6.jpg',
//            ]
        ]);
//        }
    }
}
