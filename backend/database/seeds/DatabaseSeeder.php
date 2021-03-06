<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(StylistSeeder::class);
        $this->call(ShiftSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(BookingSeeder::class);
        $this->call(GallerySeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(NotificationSeeder::class);
        $this->call(ImageSeeder::class);
        $this->call(ServiceItemSeeder::class);

    }
}
