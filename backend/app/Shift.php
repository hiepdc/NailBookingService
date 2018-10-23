<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    //
    public function stylist(){
        $this->belongsTo(Stylist::class);
    }

    public $timestamps = false;
}
