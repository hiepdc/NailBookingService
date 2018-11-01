<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Service extends Model
{
    protected $fillable = [
        'service_name', 'description', 'time_service', 'price'
    ];
    public $timestamps = false;
    public function bookings(){
        return $this->hasMany(Booking::class);
    }
    public function getTimeService($serviceID){
        $time_services = DB::table('services')
            ->select('time_service')
            ->where('id', $serviceID)
            ->first();
        $time = $time_services->time_service;
//        $time_service =  Service::find($serviceID)
//            ->where('id', $serviceID)
//            ->select('time_service')->get();
        return $time;
    }
}