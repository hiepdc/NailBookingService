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
        $serviceItemsOne = DB::table('service_items')
                             ->where('service_id', 1)
                             ->get();
        $serviceItemFirsts = [] ;
        foreach($serviceItemsOne as $serviceItem){
            $serviceItemFirsts [] = $serviceItem;
        }
        $serviceItemsTwo = DB::table('service_items')
                             ->where('service_id', 2)
                             ->get();
        $serviceItemSeconds = [] ;
        foreach($serviceItemsTwo as $serviceItem){
            $serviceItemSeconds [] = $serviceItem;
        }
        $results = [];
        $results['1'] = $serviceItemFirsts;
        $results['2'] = $serviceItemSeconds;
        return $results;
    }
}
