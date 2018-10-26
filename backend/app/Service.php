<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'service_name', 'description', 'time_service', 'price'
    ];

    public $timestamps = false;

    public function bookings(){
        return $this->hasMany(Booking::class);
    }
}
