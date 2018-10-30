<?php

namespace App;

use http\Env\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Booking extends Model
{
    protected $fillable = [
        'shift_id', 'service_id', 'customer_id', 'start_time', 'status'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function stylist()
    {
        return $this->belongsTo(Stylist::class);
    }

    public $timestamps = false;

    public function getStatusBookedByPhonenumber($phonenumber)
    {
        $statusBooking = DB::table('customers')
            ->join('bookings', 'customers.id', '=', 'bookings.customer_id')
            ->select(['bookings.id'])
            ->where([
                ['phone_number', '=', $phonenumber],
                ['status', '=', 'booked']
            ])
            ->count();
        return $statusBooking;
    }

   /* public function deleteBookingByPhonenumber($phonenumber)
    {
        $customer = new Customer();
        $customer_id = $customer->getIDByPhonenumber($phonenumber);
        $testdele = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked']
        ])->get();
        $deteteBooking = Booking::where([
                ['customer_id', $customer_id],
                ['status', 'booked']
            ])
            ->delete();
        return $testdele;
    }*/
    public function deleteBookingByPhonenumber($phonenumber)
    {
        $customer = new Customer();
        $customer_id = $customer->getIDByPhonenumber($phonenumber);
        $deteteBooking = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked'],
        ])->select('id')
        ->get();
            //->delete();
        return $deteteBooking;
    }

    public function addNewBooking($shift_id, $service_id, $customer_id, $start_time, $status = "booked")
    {
        $booking = new Booking();
        $booking->shift_id = $shift_id;
        $booking->service_id = $service_id;
        $booking->customer_id = $customer_id;
        $booking->start_time = $start_time;
        $booking->status = $status;
        $booking->save();

        return $booking;

    }
    public function updateBooking($shift_id, $service_id, $customer_id, $start_time){
        $booking = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked']
        ])->update([
            'shift_id' => $shift_id,
            'service_id' => $service_id,
            'start_time' => $start_time
        ]);
//        $booking->shift_id = $shift_id;
//        $booking->service_id = $service_id;
//        $booking->start_time = $start_time;
//        $booking->save();
        return $booking;
    }
}
