<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('services'))
        {
            Schema::create('services', function (Blueprint $table) {
                $table->increments('id');
                $table->string('service_name');
                $table->text('description');
                $table->integer('time_service');
                $table->integer('price');
                $table->integer('coin_service');
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
        Schema::dropIfExists('services');
    }
}
