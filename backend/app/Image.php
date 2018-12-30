<?php

namespace App;

use function GuzzleHttp\Promise\promise_for;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Image extends Model
{
    protected $fillable = [
        'gallery_id', 'caption', 'thumb_link', 'image_link'
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
            $result [] = $image;
        }
        return $result;
    }

    public function getAllImages(){
        $images = DB::table('images')
                          ->join('galleries', 'galleries.id', '=', 'images.gallery_id')
                          ->select('images.id',
                              'images.gallery_id',
                              'galleries.name',
                              'images.caption',
                              'images.thumb_link',
                              'images.image_link')
                          ->get();
        return $images;
    }
}
