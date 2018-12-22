<?php

namespace App\Http\Controllers;

use App\Http\Resources\StylistResource;
use Illuminate\Http\Request;
use App\Stylist;
use TomLingham\Searchy\Facades\Searchy;

class StylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index1(){
        return view('DemoUpload');
    }

    public function doUpload(Request $request){
        //xử lý upload ở đây
    }
    public function index()
    {
        try {
            $listStylist = Stylist::all();
            return response()->success($listStylist);
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
//            if($request->hasFile('image_link')){
//                $file = $request->image_link;
//                $file->move('upload', $file->getClientOriginalName());
//                return($file);
//            }
            $checkStylist = Stylist::where('phone_number', $request->phone_number)
                                     ->count();
            if($checkStylist >0){
                return response()->success(null, 'Số điện thoại đã tồn tại trong hệ thống.');
            }
            $stylist = Stylist::create([
                'stylist_name' => $request->stylist_name,
                'phone_number' => $request->phone_number,
                'information' => $request->information,
                'image_link' => $request->image_link,
            ]);
            return response()->success($stylist);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
        //  return response()->json(['cc'],204);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $showStylistByID = Stylist::find($id);
            if(!$showStylistByID){
                return response()->notFound("stylist does not exist");
            }
            return response()->success($showStylistByID);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $stylist = Stylist::find($id);
            if (!$stylist) {
                return response()->notFound("stylist does not exist");
            }
            $updatedStylist = $stylist->update($request->only(['stylist_name', 'phone_number', 'information']));
            return response()->success($updatedStylist);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
           $deletebyid = Stylist::find($id);
            if (!$deletebyid) {
                return response()->notFound("stylist does not exist");
            }
            $deletebyid->delete();
            return response()->success($deletebyid);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function search(Request $request){
        try {
            $key = $request->key;
            if(empty($key)){
                $stylist = Stylist::paginate(10);
            }else{
                $stylist = Searchy::stylists('stylist_name', 'phone_number')->query($key)
                    ->get();
            }
//            $stylist = Stylist::where('stylist_name','like','%'.$key.'%')
//                ->orwhere('phone_number', 'like', '%'.$key.'%')
//                ->paginate(10);
            return response()->success($stylist);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }


}