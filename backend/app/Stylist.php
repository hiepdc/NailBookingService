<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Stylist extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'stylist_name', 'phone_number', 'information','image_link'
    ];

    public function bookings(){
        return $this->hasManyThrough('App\Booking', 'App\Shift');
    }

    public function shifts(){
        $this->hasMany('App\Shift');
    }
    public $timestamps = false;

    protected $dates = ['deleted_at'];
}
