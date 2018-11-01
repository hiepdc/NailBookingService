<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stylist extends Model
{
    //
    protected $fillable = [
        'stylist_name', 'phone_number', 'information','image_link'
    ];

    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public function shifts(){
        $this->hasMany('App\Shift');
    }
    public $timestamps = false;
}
