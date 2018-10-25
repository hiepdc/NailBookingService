<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('feedbacks'))
        {
            Schema::create('feedbacks', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('customer_id')->unsigned();
                $table->foreign('customer_id')->references('id')->on('customers');
                $table->text('content');
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
        Schema::dropIfExists('feedbacks');
    }
}
