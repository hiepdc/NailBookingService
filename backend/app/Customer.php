<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Customer extends Model
{
    protected $fillable = [
        'customer_name', 'phone_number', 'coin'
    ];

    public function feedbacks(){
        return $this->hasMany(Feedback::class);
    }
    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public $timestamps = false;

    //add new customer
    public function addNewCustomer($customer_name, $phone_number, $coin = 0){
        $customer = new Customer();
        $customer->customer_name = $customer_name;
        $customer->phone_number = $phone_number;
        $customer->coin = $coin;
        $customer->save();
        return $customer;
    }

    //update coin old customer
    public function updateCoinCustomer($phone_number, $coin){
        $oldCoin = DB::table('customers')
            ->select('coin')
            ->where('phone_number', $phone_number)
            ->get();
        $coinvalue = $oldCoin[0]->coin + $coin;
        return DB::table('customers')
            ->where('phone_number', $phone_number)
            ->update(['coin' => $coinvalue]);
    }

    public function getCustomerByPhonenumber($phone_number){
        $customer = Customer::where('phone_number', $phone_number)
            ->count();
        return $customer;

    }

    public function getIDByPhonenumber($phone_number){
        $customer = Customer::where('phone_number', $phone_number)
            ->first();
        return $customer->id;
    }

    public function getCustomer($phone_number){
        $customer = Customer::where('phone_number', $phone_number)
            ->first();
        return $customer;
    }


}
