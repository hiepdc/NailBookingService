<?php

namespace App\Http\Controllers;

use App\Shift;
use App\Stylist;
use App\Service;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\BookingController;

class ShiftController extends Controller
{
    //
    public function index()
    {
        try {
            $shifts = Shift::all();
            return response()->success($shifts);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function show($id){
        try {
            $shift = Shift::find($id);
            if (!$shift) {
                return response()->notFound("Shift does not exist");
            }
            return response()->success($shift);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function getAvailableBooking($serviceID, $stylistID, $date)
    {
        try {
            if($stylistID != -1){
                $service = new Service();
                //sizeoftime bội số của 15'
                $sizeOfTime = $service->getTimeService($serviceID) * 4;
                $shift = new Shift();
                $status = $shift->getStatusByStylistID($stylistID, $date);
                if($status === null){
                    return response()->success([], 'hiện stylist này chưa có lịch vào ngày '.$date);
                }
                $sts = $status->status;
                $shiftDefaultByStylistID = $this->getAvailableBookingTime($sts, $sizeOfTime);
                return response()->success($shiftDefaultByStylistID);
            }else{
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
            }
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


    //Shift schedule
    //Crud
    //add
    //edit
    //display (index) - thoi gian lam viec va thuc te (theo ngay)

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        try {
            $numberOfStylist = sizeof(Stylist::all());
            for($i = 0; $i < $numberOfStylist; $i++) {
                $shift = Shift::create([
                    'stylist_id' => $request->stylist_id."$i",
                    'date' => $request->date."$i",
                    'start_time' => $request->start_time."$i",
                    'end_time' => $request->end_time."$i",
                    'status' => $request->status."$i"
                ]);
            }
            return response()->success($shift, 'Bạn đã tạo thành công lịch làm việc');

        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
        try {
            $shift = Shift::find($id);
            if (!$shift) {
                return response()->notFound("shift does not exist");
            }
            $updatedShift = $shift->update($request->only(['start_time', 'end_time']));
            return response()->success($updatedShift, 'Update thành công lịch làm việc');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function destroy($id)
    {
        //
        try {
            $deletebyid = Shift::find($id);
            if (!$deletebyid) {
                return response()->notFound("shift does not exist");
            }
            $deletebyid->delete();
            return response()->success($deletebyid);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    //Thoi gian lam viec va thuc hien order theo ngay
    //Thoi gian da thuc hien order (theo ngay + stylist)
    //Lay tat ca cac order da duoc thuc hien (theo ngay + stylist)
    //BookingController->getBookingTime($startTime, $sizeOfTime)
    public function getBookedStatusByStylist($date, $stylist_id) {
        $orders = DB::table('booking')
                    ->where([
                        ['date','=',$date],
                        ['stylist_id','=',$stylist_id],
                    ])
                    ->get();
        $finishStatus = "";
        foreach ($orders as $key => $value) {
            # code...
            $bookingController = new BookingController();
            $service = new Service();
            $finishStatus = $finishStatus.$bookingController->getBookingTime($value->start_time, $service->getTimeService($value->service_id)*4).",";
            $finishStatus = trim($finishStatus, ",");
            $finishStatus = str_replace(",,", ",", $finishStatus);
            return $finishStatus;
        }
    }
//=====================================================================
    public function getBookedStatusForAllStylist (Request $request) {
        $date = $request->date;
        $stylists = Stylist::all();
        $array = Array();

        foreach ($stylists as $key => $value) {
            $array[$value->id]=$this->getBookedStatusByStylist($date,$value->id);
        }
        return $array;
    }

//=====================================================================
    public function getStatusForStylist (Request $request) {
        $date = $request->date;
        $shifts = Shift::where("date",$date)->get();
        $array = Array();

        foreach ($shifts as $key => $value) {
            $array[$value->stylist_id]=$this->getStatusFromTime($value->start_time, $value->end_time);
        }
        return $array;
    }

    public function getNumberFromTime($time) {
        $arr = explode(':', $time);
        $hour = $arr[0];
        $minute = $arr[1];
        return ($hour-9)*4 + $minute/15;
    }

    public function getStatusFromTime($startTime, $endTime) {
        $startNumber = $this->getNumberFromTime($startTime);
        $endNumber = $this->getNumberFromTime($endTime);

        $status = $startNumber;

        for($i=$startNumber+1;$i < $endNumber; $i++) {
            $status = $status.","."$i";
        }
        $status = trim($status, ",");
        return $status;
    }

    public function updateStatusCurrentTime($status) {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $time = date("H:i");
        $array = explode(':', $time);
        $hour = $array[0];
        $minute = $array[1];
        $startNumberToUpdate = floor(($hour-9)*4 + $minute/15)+1;
        //$startNumberToUpdate = floor(getNumberFromTime(date("H:i")))+1;
        $arr = explode(',', $status);
        $updateStatus = "";
        foreach ($arr as $key => $value) {
            if($value >= $startNumberToUpdate) {
                $updateStatus = $updateStatus."$value".",";
            }
        }
        $updateStatus = trim($updateStatus, ",");
        return $updateStatus;
    }

    public function getAllShiftThisWeek(){
        try {
            $shift = new Shift();
            $shiftThisWeek = $shift->getAllShiftThisWeek();
            return response()->success($shiftThisWeek, 'successfully');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}