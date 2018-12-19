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
                    'name' => "BST HALLOWEEN",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST hoa-lá-cành",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST biển",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST tết",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST trung thu",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST giáng sinh",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa xuân",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa hạ",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa thu",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
                [
                    'name' => "BST móng tay mùa đông",
                    'image_link' => '../../assets/img/gallery/gallery'. random_int(1,12). ".jpg",
                ],
            ]);
//        }
    }
}
