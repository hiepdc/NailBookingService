<?php

namespace App\Http\Controllers;

use App\Shift;
use Illuminate\Http\Request;

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
}
