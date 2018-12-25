<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use TomLingham\Searchy\Facades\Searchy;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $customers = Customer::all();
            return response()->success($customers);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $checkcustomer = Customer::where('phone_number', $request->phone_number)
                ->count();
            if($checkcustomer >0){
                return response()->success(null, 'Số điện thoại đã tồn tại trong hệ thống.');
            }
            $customer = Customer::create([
                'customer_name' => $request->customer_name,
                'phone_number' => $request->phone_number,
                'coin' => 0
            ]);
            return response()->success($customer, 'Tạo khách hàng thành công.');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }//
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
        $customer = Customer::find($id);
        if(!$customer){
            return response()->notFound("customer does not exist");
        }
        return response()->success($customer);
    } catch (Exception $e) {
        return response()->exception($e->getMessage(), $e->getCode());
    }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $customer = Customer::find($id);
            if (!$customer) {
                return response()->notFound("customer does not exist");
            }
            $updatedCustomer = $customer->update($request->only(['customer_name', 'phone_number', 'coin']));
            return response()->success($updatedCustomer);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletebyCustomer = Customer::find($id);
            if (!$deletebyCustomer) {
                return response()->notFound("customer does not exist");
            }
            $deletebyCustomer->delete();
            return response()->success($deletebyCustomer);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function search(Request $request)
    {
        try {
            $key = $request->key;
//            $customer = Customer::where('customer_name','like','%'.$key.'%')
//            ->orwhere('phone_number', 'like', '%'.$key.'%')
//            ->paginate(10);
            if (empty($key)) {
                $customer = Customer::paginate(10);
            } else {
                $customer = Searchy::customers('customer_name', 'phone_number')->query($key)
                    ->get();
            }
            return response()->success($customer);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}
