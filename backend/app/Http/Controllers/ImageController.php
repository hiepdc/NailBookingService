<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $image = new Image();
            $images = $image->getAllImages();
            return response()->success($images);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            if($request->hasFile('image_link') && $request->hasFile('thumb_link')){
                $file = $request->image_link;
                $image_name = time(). '-' . $file->getClientOriginalName();
                $file->move('upload/collection/', $image_name);
                $image_link = 'http://api.chamtramnail.com/public/upload/collection/'. $image_name;
                $file1 = $request->thumb_link;
                $image_name1 = time(). '-' . $file1->getClientOriginalName();
                $file1->move('upload/collection/', $image_name1);
                $thumb_link = 'http://api.chamtramnail.com/public/upload/collection/'. $image_name1;
                $image = Image::create([
                    'gallery_id' => $request->gallery_id,
                    'caption' => $request->caption,
                    'thumb_link' => $thumb_link,
                    'image_link' => $image_link
                ]);
            }
            return response()->success($image);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $image = Image::find($id);
            if(!$image) {
                return response()->notFound('Image does not exist');
            }
            return response()->success($image);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $image = Image::find($id);
            if (!$image) {
                return response()->notFound("Image does not exist");
            }
            $image_link = $image->image_link;
            $thumb_link = $image->thumb_link;
            if($request->hasFile('image_link')){
                $file = $request->image_link;
                $image_name = time(). '-' . $file->getClientOriginalName();
                $file->move('upload/stylists/', $image_name);
                $image_link = 'http://api.chamtramnail.com/public/upload/collection/'. $image_name;
            }
            if($request->hasFile('thumb_link')){
                $file1 = $request->thumb_link;
                $image_name1 = time(). '-' . $file1->getClientOriginalName();
                $file1->move('upload/stylists/', $image_name1);
                $thumb_link = 'http://api.chamtramnail.com/public/upload/collection/'. $image_name1;
            }
            $updatedImage = $image->update(
                ['gallery_id' => $request->gallery_id,
                 'caption' => $request->caption,
                 'thumb_link' => $thumb_link,
                 'image_link' => $image_link
                ]);
            return response()->success($updatedImage);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletebyid = Image::find($id);
            if (!$deletebyid) {
                return response()->notFound("Image does not exist");
            }
            $deletebyid->delete();
            return response()->success($deletebyid);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}
