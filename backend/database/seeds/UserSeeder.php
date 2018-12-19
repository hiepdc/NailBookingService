<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('users')->create([
//            'name' => 'admin',
//            'password' => \Illuminate\Support\Facades\Hash::make(123456)
//        ]);
        \App\User::create(['name' => 'admin', 'password' => Hash::make(123456)]);
    }
}
