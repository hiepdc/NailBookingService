<?php

namespace App\Http\Controllers;

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
        $listStylist = Stylist::all();
        return $listStylist;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $stylist = new Stylist();
        $stylist->stylist_name = $request->stylistname;
        $stylist->phone_number = $request->phonenumber;
        $stylist->information = $request->information;
//        $stylist->stylist_name ="hiepdeptrai";
//        $stylist->phone_number = "0796522236";
//        $stylist->information = "hiepdeptrai";
        $stylist->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       // $showStylistByID = Stylist::with(['shifts'])->find($id);
        $showStylistByID = Stylist::find($id);
        return $showStylistByID;
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
        if($id!=null){
            Stylist::find($id)->update($request->all());
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
        $deletebyid = Stylist::find($id)->delete();
        return response()->json([], 204);
    }
}
