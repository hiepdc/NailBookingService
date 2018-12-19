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
            'service_name' => 'Nhóm dịch vụ cơ bản',
            'description' => 'Tận hưởng combo 7 bước tỏa sáng thư giản. Trọn gói chỉ 100K, hoàn toàn thư giãn và sau đó bạn sẽ đẹp hoàn hảo!',
            'time_service' => 1,
            'coin_service' => 10,
        ]);
        DB::table('services')->insert([
            'service_name' => 'Nhóm dịch vụ nâng cao',
            'description' => "Tận hưởn combo 7 bước và nhiều dịch vụ nâng cao khác.",
            'time_service' => 2,
            'coin_service' => 20,

        ]);
    }
}
