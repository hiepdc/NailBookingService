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
        foreach (range(1, 10) as $index) {
            DB::table('shifts')->insert([
                'stylist_id' => rand(1, 10),
                'date' => \Carbon\Carbon::now(),
                'start_time' => \Carbon\Carbon::now(),
                'end_time' => \Carbon\Carbon::now(),
                'status' => "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48",
            ]);
        }
    }

}
