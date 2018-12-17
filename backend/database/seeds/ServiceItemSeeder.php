<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('service_items')->insert(
            [
                [
                    'name'       => 'Ngâm chân hoặc tay trong lá thuốc trong 10 phút',
                    'service_id' => 1,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Vệ sinh, nhặt da, sửa móng, dưỡng, chăm sóc móng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Ngâm chân hoặc tay trong lá thuốc trong 10 phút',
                    'service_id' => 1,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Vệ sinh, nhặt da, sửa móng, dưỡng, chăm sóc móng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Ngâm chân hoặc tay trong lá thuốc trong 10 phút',
                    'service_id' => 1,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Vệ sinh, nhặt da, sửa móng, dưỡng, chăm sóc móng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 150000,
                ],
                [
                    'name'       => '- Chăm sóc và nối móng bột, vẽ gel',
                    'service_id' => 2,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Làm form Gel trên móng tự nhiên',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => '- Chăm sóc và nối móng bột, vẽ gel',
                    'service_id' => 2,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Làm form Gel trên móng tự nhiên',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => '- Chăm sóc và nối móng bột, vẽ gel',
                    'service_id' => 2,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Làm form Gel trên móng tự nhiên',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => '- Chăm sóc và nối móng bột, vẽ gel',
                    'service_id' => 2,
                    'price'      => 100000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột',
                    'service_id' => 2,
                    'price'      => 150000,
                ],
                [
                    'name'       => 'Làm form Gel trên móng tự nhiên',
                    'service_id' => 2,
                    'price'      => 150000,
                ],

            ]
        );
    }
}
