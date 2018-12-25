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
                    'name' => "BST HALLOWEEN". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST hoa-lá-cành". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST biển". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST tết". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST trung thu". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST giáng sinh". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa xuân". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa hạ". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa thu". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa đông". str_random(3),
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
            ]);
//        }
    }
}
