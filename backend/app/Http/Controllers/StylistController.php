<?php

namespace App\Http\Controllers;

use App\Http\Resources\StylistResource;
use Illuminate\Http\Request;
use App\Customer;
use App\Service;
use App\Shift;
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
            //$listStylist = Stylist::paginate(3);
            $listStylist = Stylist::all();
            return response()->success($listStylist);
            //return $listStylist;
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
//        $stylist = new Stylist();
//        $stylist->stylist_name = $request->stylist_name;
//        $stylist->phone_number = $request->phone_number;
//        $stylist->information = $request->information;
////        $stylist->stylist_name ="hiepdeptrai";
////        $stylist->phone_number = "0796522236";
////        $stylist->information = "hiepdeptrai";
//        $stylist->save();
        try {
            $stylist = Stylist::create([
                'stylist_name' => $request->stylist_name,
                'phone_number' => $request->phone_number,
                'information' => $request->information,
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
    /*    public function show($id)
        {
            try {
                $showStylistByID = Stylist::find($id)->shifts()->first();
                if (!$showStylistByID) {
                    return response()->error("stylist does not exist");
                }
                return response()->success($showStylistByID);
            } catch (Exception $e) {
                return response()->exception($e->getMessage(), $e->getCode());
            }
        }*/


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
    public function getAvailableBookingTimeWithStylist($serviceID, $stylistID, $date)
    {
        try {
            $service = new Service();
            //sizeoftime bội số của 15'
            $sizeOfTime = $service->getTimeService($serviceID) * 4;
            $shift = new Shift();
            $status = $shift->getStatusByStylistID($stylistID, $date);
            $sts = $status->status;
            $shiftDefaultByStylistID = $this->getAvailableBookingTime($sts, $sizeOfTime);
            return response()->success($shiftDefaultByStylistID);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function getAvailableBookingTimeWithoutStylist($serviceID, $date)
    {
        try {
            $service = new Service();
            $sizeOfTime = $service->getTimeService($serviceID);
            $shift = new Shift();
            $allStatus = $shift->getStatusByDate($date);
            $defaultStatus = array();
            $returnStatus = array();
            foreach ($allStatus as $key => $value) {
                $arr01 = array();
                //$arr01 = $this->getAvailableBookingTime((string)$value, $sizeOfTime);
                $myObject = get_object_vars($value);
                $arr01 = $this->getAvailableBookingTime(implode(",", $myObject), $sizeOfTime * 4);
                foreach ($arr01 as $key2 => $value2) {
                    array_push($defaultStatus, $value2);
                }
            }
            $defaultStatus = array_unique($defaultStatus);
            sort($defaultStatus);
            return response()->success(array_unique($defaultStatus));
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    function getAvailableBookingTime($status, $sizeOfTime)
    {
        $arr = explode(',', $status);
        sort($arr);
        $arr2chieu = array();

        for ($i = 0; $i <= sizeof($arr) - 1; $i++) {
            $arr1chieu = array();
            array_push($arr1chieu, $arr[$i]);
            //@long trường hợp ko có giá trị nào
            //@long xóa dấu ","
            while ($i < sizeof($arr) - 1 && $arr[$i + 1] == $arr[$i] + 1) {
                array_push($arr1chieu, $arr[$i + 1]);
                $i++;
            }
            array_push($arr2chieu, $arr1chieu);
            unset($arr1chieu);
        }


        $statusArr = array();
        foreach ($arr2chieu as $key => $value) {
            if (sizeof($value) >= $sizeOfTime) {
                for ($i = 0; $i <= sizeof($value) - $sizeOfTime; $i++) {
                    array_push($statusArr, $value[$i]);
                }
            }
        }
        return $statusArr;
    }


}