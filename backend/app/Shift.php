<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Shift extends Model
{
    protected $fillable = [
        'stylist_id', 'date', 'start_time', 'end_time', 'status'
    ];

    public function stylist(){
        $this->belongsTo(Stylist::class);
    }

    public $timestamps = false;

    public function getStatusByStylistID($stylistID, $date){
        $status = DB::table('shifts')
            ->select('status')
            ->where([
                ['stylist_id' , $stylistID],
                ['date' , $date]
            ])
            ->first();
        return $status;

    }
    public function getShiftIDByStylistID($stylistID, $date){
        $id = DB::table('shifts')
            ->select('id')
            ->where([
                ['stylist_id' , $stylistID],
                ['date' , $date],
            ])
            ->first();
        return $id;

    }
}
