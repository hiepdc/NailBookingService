<?php

use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
//        factory(App\Service::class, 10)->create();
        $faker = Faker\Factory::create();

        DB::table('services')->insert([
            'service_name' => 'Combo cơ bản',
            'description' => 'Đá bay mệt mỏi mùa hè với 7 bước Everly Combo mới duy nhất tại Everly. Trọn gói chỉ 100K, hoàn toàn thư giãn và sau đó bạn sẽ đẹp hoàn hảo!',
            'time_service' => 1,
            'price' => 100000,
            'coin_service' => 10,
        ]);
        DB::table('services')->insert([
            'service_name' => 'Combo nâng cao',
            'description' => "COMBO LÀM NAILS 7 BƯỚC & NỐI MI - 200K:",
            'time_service' => 2,
            'price' => 200000,
            'coin_service' => 20,

        ]);
    }
}
