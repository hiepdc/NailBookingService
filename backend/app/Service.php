<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    //
    public $timestamps = false;
    public function bookings(){
        return $this->hasMany(Booking::class);
    }
}
