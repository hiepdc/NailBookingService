ơ<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('bookings'))
        {
            Schema::create('bookings', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('shift_id')->unsigned();
                $table->foreign('shift_id')->references('id')->on('shifts');
                $table->integer('service_id')->unsigned();
                $table->foreign('service_id')->references('id')->on('services');
                $table->integer('customer_id')->unsigned();
                $table->foreign('customer_id')->references('id')->on('customers');
                $table->integer('start_time');
                $table->string('status');
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
        Schema::dropIfExists('bookings');
    }
}
