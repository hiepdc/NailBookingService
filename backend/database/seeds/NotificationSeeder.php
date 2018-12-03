<?php

use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 10) as $index) {
            DB::table('notifications')->insert([
                [
                    'booking_id' => rand(1,10),
                    'status' => 1,
                    'type' => 'new'
                ]
            ]);
        }

    }
}
