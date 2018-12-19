<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Customer extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

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
    public function updateCoinCustomer($id, $coin){
        $customer = Customer::find($id);
        $coinvalue = $customer->coin + $coin;
        return Customer::find($id)
            ->update(['coin' => $coinvalue]);
    }

  //use coin old customer
    public function useCoinCustomer($id, $coin){
        $customer = Customer::find($id);
        $coinvalue = $customer->coin - $coin;
        $customer->update(['coin' => $coinvalue]);
        return $customer;
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

    public function updateCustomerName($phone_number, $customer_name){
        $customer = Customer::where('phone_number', $phone_number)
            ->update(['customer_name' => $customer_name]);
        return $customer;
    }

}
