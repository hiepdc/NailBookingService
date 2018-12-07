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
            $image = Image::all();
            return response()->success($image);
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
            $image = Image::create([
                'gallery_id' => $request->gallery_id,
                'caption' => $request->caption,
                'thumb_link' => $request->thumb_link,
                'image_link' => $request->image_link
            ]);
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
            $updatedGallery = $image->update($request->only(['gallery_id', 'caption', 'thumb_link', 'image_link']));
            return response()->success($updatedGallery);
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
