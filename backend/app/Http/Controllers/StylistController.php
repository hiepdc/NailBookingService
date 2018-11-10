<?php

namespace App\Http\Controllers;

use App\Http\Resources\StylistResource;
use Illuminate\Http\Request;
use App\Stylist;

class StylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $listStylist = Stylist::paginate(5);
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
            $showStylistByID = Stylist::where('phone_number', $id)->paginate(5);
            //$dm = $showStylistByID[phone_number];
            if(!$showStylistByID){
                return response()->error("stylist does not exist");
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
                return response()->error("stylist does not exist");
            }
            $stylist->update($request->only(['stylist_name', 'phone_number', 'information']));
            return response()->success($stylist);
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
            // $deletebyid = Stylist::find($id);
            $deletebyid = Stylist::where(['stylist_name', '1vợ2con3nha'])->get();
            if (!$deletebyid) {
                return response()->error("stylist does not exist");
            }
            $deletebyid->delete();
            return response()->success($deletebyid);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }


}