<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stylist extends Model
{
    //
    protected $fillable = [
        'stylist_name', 'phone_number', 'information'
    ];

    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public function shifts(){
        $this->hasMany(Stylist::class);
    }
    public $timestamps = false;
}
