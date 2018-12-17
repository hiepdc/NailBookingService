<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
class Service extends Model
{
//    use SoftDeletes;
//    protected $dates = ['deleted_at'];

    protected $fillable = [
        'service_name', 'description', 'time_service', 'coin_service'
    ];
    public $timestamps = false;

    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public function serviceItems(){
        return $this->hasMany(ServiceItem::class);
    }

    public function getTimeService($serviceID){
        $time_services = Service::find($serviceID);
        $time = $time_services->time_service;
        return $time;
    }

}