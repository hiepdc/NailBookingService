<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Booking extends Model
{
    use SoftDeletes;
    protected $date = ['deleted_at'];

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

    public function shift()
    {
        return $this->belongsTo(Shift::class);
    }

    public function notification(){
        return $this->hasOne(Notification::class);
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
            ])->whereNull('bookings.deleted_at')
            ->count();
        return $statusBooking;
    }

    public function getDetailBookingByPhonenumber($phonenumber)
    {
        $detailBooking = DB::table('customers')
            ->join('bookings', 'customers.id', '=', 'bookings.customer_id')
            ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
            ->select('bookings.id'
                , 'customers.customer_name'
                , 'bookings.start_time'
                , 'bookings.service_id'
                , 'bookings.shift_id'
                , 'shifts.status')
            ->where([
                ['phone_number', '=', $phonenumber],
                ['bookings.status', '=', 'booked'],
            ])->whereNull('bookings.deleted_at')
              ->first();
        return $detailBooking;
    }

    public function deleteBookingByPhonenumber($phonenumber)
    {
        $customer = new Customer();
        $customer_id = $customer->getIDByPhonenumber($phonenumber);
        $deteteBooking = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked'],
        ])->delete();
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

    public function updateBooking($shift_id, $service_id, $customer_id, $start_time)
    {
        $booking = Booking::where([
            ['customer_id', $customer_id],
            ['status', 'booked']
        ])->first();
        $booking->update([
            'shift_id' => $shift_id,
            'service_id' => $service_id,
            'start_time' => $start_time
        ]);
        return $booking;
    }

    public function searchBooking($date, $stylist_name, $status)
    {
        $bookings = DB::table('bookings')
            ->join('services', 'services.id', '=', 'bookings.service_id')
            ->join('customers', 'customers.id', '=', 'bookings.customer_id')
            ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
            ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
            ->select('bookings.id',
                'customers.customer_name'
                , 'customers.phone_number'
                , 'customers.coin'
                , 'services.service_name'
                , 'stylists.stylist_name'
                , 'shifts.date'
                , 'bookings.start_time'
                , 'bookings.status')
            ->where([
                ['shifts.date', '=', $date],
                ['bookings.status', '=', $status]
            ])->whereNull('bookings.deleted_at')
//            ->where('bookings.status', '=', $status)
            ->Where('stylists.stylist_name', 'like', '%' . $stylist_name . '%')
            ->orderBy('bookings.start_time')
            ->orderBy('bookings.status')
            ->paginate(10);
        return $bookings;
    }

    public function listBooking($date)
    {
        $bookings = DB::table('bookings')
            ->join('services', 'services.id', '=', 'bookings.service_id')
            ->join('customers', 'customers.id', '=', 'bookings.customer_id')
            ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
            ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
            ->select('bookings.id'
                ,'customers.customer_name'
                , 'customers.phone_number'
                , 'services.service_name'
                , 'stylists.stylist_name'
                , 'shifts.date'
                , 'bookings.start_time'
                , 'bookings.status'
                , 'customers.coin')
            ->whereNull('bookings.deleted_at')
            ->orderBy('bookings.id', 'desc')
//            ->orderBy('bookings.status')
            ->paginate(100);
        return $bookings;
    }

    public function checkIn($id)
    {
        $booking = Booking::find($id);
        $booking->update(['status' => 'pending']);
        return $booking;
    }

    public function checkOut($id)
    {
        $booking = Booking::find($id);
        $booking->update(['status' => 'finished']);
        return $booking;
    }

    public function getExistBooking($phone_number){
        $bookings = DB::table('bookings')
                      ->join('services', 'services.id', '=', 'bookings.service_id')
                      ->join('customers', 'customers.id', '=', 'bookings.customer_id')
                      ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
                      ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
                      ->select('bookings.id'
                          ,'customers.customer_name'
                          , 'customers.phone_number'
                          , 'services.service_name'
                          , 'stylists.stylist_name'
                          , 'shifts.date'
                          , 'bookings.start_time'
                          , 'bookings.status')
                      ->whereNull('bookings.deleted_at')
                      ->where([
                          ['customers.phone_number', $phone_number],
                          ['bookings.status', 'booked']
                      ])
                      ->first();
        return $bookings;
    }
}
