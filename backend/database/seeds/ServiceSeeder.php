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
            'service_name' => 'combo cơ bản',
            'description' => 'TẬN HƯỞNG COMBO 7 BƯỚC THƯ GIÃN TỎA SÁNG. Trọn gói chỉ 100K, hoàn toàn thư giãn và sau đó bạn sẽ đẹp hoàn hảo!',
            'time_service' => 1,
            'coin_service' => 10,
        ]);
        DB::table('services')->insert([
            'service_name' => 'combo nâng cao',
            'description' => "Châm Trâm COMBO LÀM NAILS 7 BƯỚC & NỐI MI - 200K:",
            'time_service' => 2,
            'coin_service' => 20,

        ]);
    }
}
