<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    //
    public function customer(){
        return $this->belongsTo(Customer::class);
    }
    public $timestamps = false;
}
