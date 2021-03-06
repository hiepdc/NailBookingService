<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class ServiceItem extends Model
{
    protected  $fillable=[
        'name', 'service_id', 'price'
    ];

    public $timestamps = false;

    public function service(){
        return $this->belongsTo(Service::class);
    }

    public function  getAllServiceItems(){
        $services = Service::select('id')
            ->get();
        $results = [];
        foreach ($services as $service){
            $serviceItems = ServiceItem::where('service_id', $service->id)
                                       ->get();
            $results[$service->id] = $serviceItems;
        }
        return $results;
    }
    public function  getServiceItemByService($service_id){
        $serviceItems = ServiceItem::where('service_id', $service_id)
            ->get();
        return $serviceItems;
    }
}
