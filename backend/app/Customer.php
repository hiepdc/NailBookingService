<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'customer_name', 'phone_number', 'coin'
    ];

    public function feedbacks(){
        return $this->hasMany(Feedback::class);
    }
    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public $timestamps = false;
}
