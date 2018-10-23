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
            'description' => $faker->paragraph($nbSentences = 2),
            'time_service' => 1,
            'price' => 100000,
        ]);
        DB::table('services')->insert([
            'service_name' => 'combo nâng cao',
            'description' => $faker->paragraph($nbSentences = 2),
            'time_service' => 2,
            'price' => 200000,
        ]);
    }
}
