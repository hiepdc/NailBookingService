<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = [
        'name', 'image_link'
    ];

    public $timestamps = false;

    public function images(){
        $this->hasMany('App\Image');
    }
}
