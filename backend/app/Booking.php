<?php

namespace App;

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

    public function getDetailBookingByPhonenumber($phonenumber){
        $detailBooking = DB::table('customers')
            ->join('bookings', 'customers.id', '=', 'bookings.customer_id')
            ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
            ->select('customers.id'
                , 'customers.customer_name'
                , 'bookings.start_time'
                , 'bookings.service_id'
                , 'bookings.shift_id'
                , 'shifts.status')
            ->where([
                ['phone_number', '=', $phonenumber],
                ['bookings.status', '=', 'booked']
            ])->first();
        return $detailBooking;
    }
    public function deleteBookingByPhonenumber($phonenumber)
    {
        $customer = new Customer();
        $customer_id = $customer->getIDByPhonenumber($phonenumber);
        $deteteBooking = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked'],
        ])
            ->delete();
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
        return $booking;
    }
}
