<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Notification extends Model
{
    protected $fillable = [
        'booking_id', 'status', 'type', 'created_at'
    ];

    public $timestamps = true;

    public function booking(){
        return $this->belongsTo(Booking::class);
    }

    public function getAllNotification(){
        $notificaions = DB::table('notifications')
            ->join('bookings', 'notifications.booking_id','=', 'bookings.id')
            ->join('services', 'bookings.service_id', '=', 'services.id')
            ->join('shifts', 'bookings.shift_id', '=', 'shifts.id')
            ->join('stylists', 'shifts.stylist_id', '=', 'stylists.id' )
            ->join('customers', 'bookings.customer_id', '=', 'customers.id')
            ->select('customers.customer_name',
                'customers.phone_number',
                'notifications.type',
                'bookings.start_time',
                'shifts.date',
                'services.service_name',
                'stylists.stylist_name',
                'notifications.created_at'
                )->orderBy('notifications.id', 'desc')
            ->paginate(7);
        $results = [];
        foreach ($notificaions as $notificaion){
            $result = [];
            $result['title'] = $notificaion->customer_name . '(' .$notificaion->phone_number . ')';
            if($notificaion->type == 'new'){
                $typeNotification = 'đã đặt lịch mới';
            }else if( $notificaion->type == 'edit'){
                $typeNotification = 'đã thay đổi lịch đặt';
            }else{
                $typeNotification = 'đã hủy lịch đặt';
            }
            $result['message'] = $typeNotification . ' vào lúc ' . $this->convertTime($notificaion->start_time) .
                                 ' ngày ' . $notificaion->date .
                                 ' dịch vụ ' . $notificaion->service_name .
                                 ' phục vụ bởi stylist ' . $notificaion->stylist_name;
            $results [] = $result;
        }

        return $results;
    }

    public function countUnread(){
        $countUnread = Notification::where('status', '1')
            ->count();
        return $countUnread;
    }

    public function markAllRead(){
        $notification = Notification::where('status', '1')
                    ->update(['status' => 0]);
        return $notification;
    }

    public function addNotificaion($booking_id, $type){
        $notification = new Notification();
        $notification->booking_id = $booking_id;
        $notification->status = 1;
        $notification->type = $type;
        $notification->save();

    }

    function convertTime($index){
        $carbon = new Carbon('8:45:00');
        $allTime = array();
        foreach(range(0, 47) as $value){
            $eachTime = $carbon->addMinutes(15)->format('H:i:s');
            $allTime[] =$eachTime;
        }
        $realTime = $allTime[$index];
        return $realTime;
    }
}
