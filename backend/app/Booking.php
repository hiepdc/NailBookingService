<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'shift_id', 'service_id', 'customer_id', 'start_time', 'status'
    ];

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
