<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ShipschedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipschedules', function (Blueprint $table) {
            $table->id();
            $table->string('vessel_name');
            $table->string('voyage_no');
            $table->string('vessel_type');
            $table->string('rotation_no')->nullable();
            $table->string('arrival_status')->nullable();
            $table->string('arrival_date')->nullable();
            $table->string('departure_status')->nullable();
            $table->string('departure_date')->nullable();
            $table->string('eta')->nullable();
            $table->string('liner')->nullable();
            $table->string('invoice_status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('shipschedule');
    }
}
