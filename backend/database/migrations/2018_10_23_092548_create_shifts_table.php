<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('shifts'))
        {
            Schema::create('shifts', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('stylist_id')->unsigned();
                $table->foreign('stylist_id')->references('id')->on('stylists');
                $table->date('date');
                $table->datetime('start_time');
                $table->datetime('end_time');
                $table->string('status');
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
        Schema::dropIfExists('shifts');
    }
}
