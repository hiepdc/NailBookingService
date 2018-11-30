<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Notification extends Model
{
    protected $fillable = [
        'booking_id', 'status', 'created_at'
    ];

    public $timestamps = false;

    public function bookings(){
        $this->belongsTo(Booking::class);
    }

    public function getAllNotification(){
//        $notificaions = DB::table('notifications')
        $notificaions = Notification::orderBy('created_at', 'desc')
            ->paginate(7);
        return $notificaions;
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
}
