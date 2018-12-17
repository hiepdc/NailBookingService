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
                    'price'      => 30000,
                ],
                [
                    'name'       => ' Massage, xoa bóp, bấm huyệt chân hoặc tay trong 15’',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Vệ sinh, nhặt da, sửa móng, dưỡng, chăm sóc móng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Sơn đơn giản bằng sơn chính hãng, không hại, hư tổn, dưỡng móng sau sơn',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Nhặt da, sửa móng, chăm sóc móng',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Nhặt da, sửa móng, chăm sóc, dưỡng móng bằng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Massage, bấm huyệt, xoa bóp tay',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn thường',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn thường chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn Gel thường',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn Gel chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Vẽ họa tiết đơn giản',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Tháo móng bột, móng Gel',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                //nâng cao
                [
                    'name'       => 'Ngâm chân hoặc tay trong lá thuốc trong 10 phút',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => ' Massage, xoa bóp, bấm huyệt chân hoặc tay trong 15’',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Vệ sinh, nhặt da, sửa móng, dưỡng, chăm sóc móng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Sơn đơn giản bằng sơn chính hãng, không hại, hư tổn, dưỡng móng sau sơn',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Nhặt da, sửa móng, chăm sóc móng',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Nhặt da, sửa móng, chăm sóc, dưỡng móng bằng sản phẩm chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Massage, bấm huyệt, xoa bóp tay',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn thường',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn thường chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn Gel thường',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Chăm sóc móng và sơn nền sơn Gel chính hãng',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Vẽ họa tiết đơn giản',
                    'service_id' => 1,
                    'price'      => 40000,
                ],
                [
                    'name'       => 'Tháo móng bột, móng Gel',
                    'service_id' => 1,
                    'price'      => 30000,
                ],
                [
                    'name'       => 'Làm form Gel trên móng tự nhiên',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột, vẽ gel',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột, nhũ, xà cừ',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng bột, nhũ, xà cừ, vẽ ',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Chăm sóc và nối móng gel, sơn gel cát, vẽ',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Vẽ cọ bản 3D, vẽ màu nước cao cấp',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Phủ nhũ đẹp trên móng',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Đắp móng gel',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       =>  'Hoa nổi ẩn trong gel',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Vẽ gel nổi, gel vẽ, gel pha lê cao cấp',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Vẽ Silk cao cấp',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Vẽ Flat 3D cao cấp',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Đắp hoa bột nổi 3D trên móng',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Vẽ tả thực trên móng',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       =>  'Vẽ nhân vật hoạt hình ngộ nghĩnh',
                    'service_id' => 2,
                    'price'      => 50000,
                ],
                [
                    'name'       => 'Đính đá kim cương loại to',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Đính đá kim cương loại nhỡ',
                    'service_id' => 2,
                    'price'      => 80000,
                ],
                [
                    'name'       => 'Đính đá chùm trên móng',
                    'service_id' => 2,
                    'price'      => 50000,
                ],


            ]
        );
    }
}
