<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('stylists'))
        {
            Schema::create('stylists', function (Blueprint $table) {
                $table->increments('id');
                $table->string('stylist_name', 50);
                $table->char('phone_number')->unique();
                $table->string('information');
                $table->string('image_link');
                $table->softDeletes();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stylists');
    }
}
