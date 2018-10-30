<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        DB::table('shifts')->insert([
            [
                'stylist_id' => 1,
                'date' => '2018-10-30',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,28,29,30,31,32,33,34,35,36,37,42,43,44,45,46,47"
            ],
            [
                'stylist_id' => 1,
                'date' => '2018-10-31',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 1,
                'date' => '2018-11-01',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ],
            [
                'stylist_id' => 1,
                'date' => '2018-11-02',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 1,
                'date' => '2018-11-03',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ],
            [
                'stylist_id' => 2,
                'date' => '2018-10-30',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6"
            ],
            [
                'stylist_id' => 2,
                'date' => '2018-10-31',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 2,
                'date' => '2018-11-01',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ],
            [
                'stylist_id' => 2,
                'date' => '2018-11-02',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 2,
                'date' => '2018-11-03',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ],
            [
                'stylist_id' => 3,
                'date' => '2018-10-30',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6"
            ],
            [
                'stylist_id' => 3,
                'date' => '2018-10-31',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 3,
                'date' => '2018-11-01',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ],
            [
                'stylist_id' => 3,
                'date' => '2018-11-02',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,20,26"
            ],
            [
                'stylist_id' => 3,
                'date' => '2018-11-03',
                'start_time' => '0',
                'end_time' => '47',
                'status' => "0,1,2,3,4,5,6,7,8,10,11,12,18,20,26"
            ]
        ]);

    }

}
