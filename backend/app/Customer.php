<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    //
    public function feedbacks(){
        return $this->hasMany(Feedback::class);
    }
    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public $timestamps = false;
}
