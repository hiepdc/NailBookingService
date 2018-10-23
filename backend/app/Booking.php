<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //
    public function customer(){
        return $this->belongsTo(Customer::class);
    }

    public function service(){
        return $this->belongsTo(Service::class);
    }

    public function stylist(){
        return $this->belongsTo(Stylist::class);
    }
    public $timestamps = false;
}
