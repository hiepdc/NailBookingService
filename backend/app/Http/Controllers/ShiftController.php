<?php

namespace App\Http\Controllers;

use App\Shift;
use App\Service;
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
                return response()->error("Shift does not exist");
            }
            return response()->success($shift);
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
