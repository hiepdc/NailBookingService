<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $carbon = Carbon::yesterday();
        foreach (range(1, 50) as $index) {
            $date = $carbon->addDays(1)->format('Y-m-d');
            DB::table('shifts')->insert([
                [
                    'stylist_id' => 1,
                    'date' => $date,
                    'start_time' => '0',
                    'end_time' => '23',
                    'status' => "0,1,2,3,4,5,18,19,20,21,22,23"
                ],
                [
                    'stylist_id' => 2,
                    'date' => $date,
                    'start_time' => '0',
                    'end_time' => '23',
                    'status' => "0,1,2,3,4,5,6,7,8,9,10,11,12,13,20,21,22,23"
                ],
                [
                    'stylist_id' => 3,
                    'date' => $date,
                    'start_time' => '0',
                    'end_time' => '23',
                    'status' => "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16"
                ],
                [
                    'stylist_id' => 4,
                    'date' => $date,
                    'start_time' => '0',
                    'end_time' => '23',
                    'status' => "13,14,15,16,17,18,19,20,21,22,23"
                ],
                [
                    'stylist_id' => 5,
                    'date' => $date,
                    'start_time' => '0',
                    'end_time' => '23',
                    'status' => "6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23"
                ],
                [
                    'stylist_id' => 6,
                    'date' => $date,
                    'start_time' => '24',
                    'end_time' => '47',
                    'status' => "24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47"
                ],
                [
                    'stylist_id' => 7,
                    'date' => $date,
                    'start_time' => '24',
                    'end_time' => '47',
                    'status' => "24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,47"
                ],
                [
                    'stylist_id' => 8,
                    'date' => $date,
                    'start_time' => '24',
                    'end_time' => '47',
                    'status' => "24,25,26,27,28,29,30,31,32,33,34,45,46,47"
                ],
                [
                    'stylist_id' => 9,
                    'date' => $date,
                    'start_time' => '24',
                    'end_time' => '47',
                    'status' => "24,25,26,27,28,29,30,41,42,43,44,45,46,47"
                ],
                [
                    'stylist_id' => 10,
                    'date' => $date,
                    'start_time' => '24',
                    'end_time' => '47',
                    'status' => "24,25,26,27,28,29,30"
                ],

            ]);
        }

    }

}
