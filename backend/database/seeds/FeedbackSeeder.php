<?php

use Illuminate\Database\Seeder;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
            DB::table('feedback')->insert([
                [
                    'title' => "Nhận xét về cửa hàng",
                    'content' => "Cửa hàng nhiều dịch vụ hay"
                ],
                [
                    'title' => "Nhận xét về stylist Lệ Thủy",
                    'content' => "Thái độ phục vụ tốt rất thích cửa hàng"
                ],
                [
                    'title' => "Nhận xét về dịch vụ cửa hàng",
                    'content' => "Cần thiêm dịch vụ đính kim cương loại nhỏ"
                ],
            ]);
    }
}
