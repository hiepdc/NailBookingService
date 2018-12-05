<?php

namespace App;

use function GuzzleHttp\Promise\promise_for;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Image extends Model
{
    protected $fillable = [
        'gallery_id', 'image_link'
    ];

    public $timestamps = false;

    public function gallery(){
        $this->belongsTo(Gallery::class);
    }

    public function getImages($gallery_id){
        $images = DB::table('images')
//            ->select('image_link')
            ->where('gallery_id', $gallery_id)
            ->get();
        $result = [];
        foreach ($images as $image){
            $result [] = $image->image_link;
        }
        return $result;
    }
}
