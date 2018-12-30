<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Shift extends Model
{
    protected $fillable = [
        'stylist_id', 'date', 'start_time', 'end_time', 'status'
    ];

    public function stylist()
    {
        $this->belongsTo(Stylist::class);
    }

    public $timestamps = false;

    public function getStatusByDate($date){
        $status = DB::table('shifts')
            ->select('status')
            ->where([
                ['date' , $date]
            ])
            ->get();
        return $status;
    }

    public function getStatusByStylistID($stylistID, $date)
    {
        $status = DB::table('shifts')
            ->select('status')
            ->where([
                ['stylist_id', $stylistID],
                ['date', $date]
            ])
            ->first();
        return $status;

    }

    public function updateStatusByStylistID($stylistID, $date, $status)
    {
        $shiftAfterUpdate = Shift::where([
            ['stylist_id', $stylistID],
            ['date', $date]
        ])->update(['status' => $status]);
        return $shiftAfterUpdate;

    }

    public function updateStatusByShiftID($shiftID, $status)
    {
        $shiftAfterUpdate = Shift::find($shiftID)
            ->update(['status' => $status]);
        return $shiftAfterUpdate;

    }

    public function getShiftIDByStylistID($stylistID, $date)
    {
        $id = DB::table('shifts')
            ->select('id')
            ->where([
                ['stylist_id', $stylistID],
                ['date', $date]
            ])
            ->first();
        return $id;

    }
    public function getAllShiftThisWeek(){
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $carbon = Carbon::now();
        $from = $carbon->format('Y-m-d');
        $to = $carbon->addDays(7);
        $shifts = DB::table('shifts')
            ->join('stylists', 'shifts.stylist_id', '=', 'stylists.id')
            ->select('shifts.id',
                'stylists.stylist_name',
                'shifts.date',
                'shifts.start_time',
                'shifts.end_time',
                'shifts.status')
            ->whereBetween('shifts.date', [$from, $to])
            ->get();
        foreach ($shifts as $shift){
            if($shift->start_time == 0 && $shift->end_time == 23){
                $shift->status= 'sáng';
            }else if($shift->start_time == 24 && $shift->end_time == 47){
                $shift->status= 'chiều';
            }else{
                $shift->status = 'cả ngày';
            }
        }
        return $shifts;
    }
}
