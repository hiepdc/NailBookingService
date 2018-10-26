<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    protected $fillable = [
        'stylist_id', 'date', 'start_time', 'end_time', 'status'
    ];

    public function stylist(){
        $this->belongsTo(Stylist::class);
    }

    public $timestamps = false;
}
