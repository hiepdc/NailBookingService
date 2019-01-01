<?php

namespace App\Http\Controllers;
use App\Booking;
use App\SpeedSMSAPI;
use App\Http\Resources\StylistResource;
use App\Shift;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Stylist;
use Illuminate\Support\Facades\DB;
use TomLingham\Searchy\Facades\Searchy;

class StylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index1(){
        return view('DemoUpload');
    }

    public function doUpload(Request $request){
        //xử lý upload ở đây
    }
    public function index()
    {
        try {
            $listStylist = Stylist::orderBy('id', 'asc')->get();
            return response()->success($listStylist);
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
            $checkStylist = Stylist::where('phone_number', $request->phone_number)
                                   ->count();
            if($checkStylist >0){
                return response()->success(null, 'Số điện thoại đã được sử dụng, vui lòng kiểm tra lại số điện thoại.');
            }
            if($request->hasFile('image_link')){
                $file = $request->image_link;
                $image_name = time(). '-' . $file->getClientOriginalName();
                $file->move('upload/stylists/', $image_name);
                $image_link = 'http://api.chamtramnail.com/public/upload/stylists/'. $image_name;
                $stylist = Stylist::create([
                    'stylist_name' => $request->stylist_name,
                    'phone_number' => $request->phone_number,
                    'information' => $request->information,
                    'image_link' =>  $image_link,
                ]);
            }

//            $checkStylist = Stylist::where('phone_number', $request->phone_number)
//                                     ->count();
//            if($checkStylist >0){
//                return response()->success(null, 'Số điện thoại đã tồn tại trong hệ thống.');
//            }
//            $stylist = Stylist::create([
//                'stylist_name' => $request->stylist_name,
//                'phone_number' => $request->phone_number,
//                'information' => $request->information,
//                'image_link' => $request->image_link,
//            ]);
            return response()->success($stylist);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
        //  return response()->json(['cc'],204);
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
            $showStylistByID = Stylist::find($id);
            if(!$showStylistByID){
                return response()->success(null, "stylist không tồn tại");
            }
            return response()->success($showStylistByID);
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
            $stylist = Stylist::find($id);
            if (!$stylist) {
                return response()->success(null, "stylist không tồn tại");
            }
            $checkStylist = Stylist::where([
                ['phone_number', $request->phone_number],
                ['id', '<>', $id]
                ])->count();
            if($checkStylist >0){
                return response()->success(null, 'Số điện thoại đã được sử dụng, vui lòng kiểm tra lại số điện thoại.');
            }
            $file = $request->image_link;
            if($request->hasFile('image_link')){
                $image_name = time(). '-' . $file->getClientOriginalName();
                $file->move('upload/stylists/', $image_name);
                $image_link = 'http://api.chamtramnail.com/public/upload/stylists/'. $image_name;
                $updatedStylist = $stylist->update([
                    'stylist_name' => $request->stylist_name,
                    'phone_number' => $request->phone_number,
                    'information' => $request->information,
                    'image_link' => $image_link
//                'image_link' => 'http://localhost:8000/upload/'.$request->image_link,
                ]);
            }else{
                $updatedStylist = $stylist->update([
                    'stylist_name' => $request->stylist_name,
                    'phone_number' => $request->phone_number,
                    'information' => $request->information
                ]);
            }

//            $updatedStylist = $stylist->update($request->only(['stylist_name', 'phone_number', 'information', 'image_link']));
            return response()->success($updatedStylist, "Chỉnh sửa stylist thành công");
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
           $deletebyid = Stylist::find($id);
            if (!$deletebyid) {
                return response()->success(null, "stylist không tồn tại");
            }
            // xóa shift of stylist
            $carbon = Carbon::today()->format('Y-m-d');
            $bookings = DB::table('bookings')
                          ->join('services', 'services.id', '=', 'bookings.service_id')
                          ->join('customers', 'customers.id', '=', 'bookings.customer_id')
                          ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
                          ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
                          ->select('bookings.id',
                              'customers.customer_name'
                              , 'customers.phone_number'
                              , 'stylists.stylist_name'
                              , 'shifts.date'
                              , 'bookings.start_time')
                          ->where([
                              ['stylists.id', '=', $id],
                              ['date', '>=', $carbon]
                          ])->whereNull('bookings.deleted_at')
                ->get();
            //Xóa booking và gửi tin nhắn
            $testMessage = array();
            foreach($bookings as $booking){
                $message = 'Xin lỗi anh/chị '.$booking->customer_name.' vì sự bất tiện này ! Vì lý do cá nhân nên stylist: '.
                           $booking->stylist_name. ' đã nghỉ làm . Quý khách vui lòng đặt lại lịch ở trang web
                           : http://chamtramnail.com';
                $this->sendMessageToCustomer($message, $booking->phone_number);
                $testMessage[] = $message;
            }
//            return response()->success($testMessage, "Xóa stylist thành công");
            $bookings = Booking::join('services', 'services.id', '=', 'bookings.service_id')
                          ->join('customers', 'customers.id', '=', 'bookings.customer_id')
                          ->join('shifts', 'shifts.id', '=', 'bookings.shift_id')
                          ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
                          ->select('bookings.id',
                              'customers.customer_name'
                              , 'customers.phone_number'
                              , 'stylists.stylist_name'
                              , 'shifts.date'
                              , 'bookings.start_time')
                          ->where([
                              ['stylists.id', '=', $id],
                              ['date', '>=', $carbon]
                          ])->whereNull('bookings.deleted_at')
                ->delete();
            //xóa stylist
            Shift::where([
                ['stylist_id', $id],
                ['date', '>=', $carbon]
            ])
                ->delete();
            // xóa stylist
            $deletebyid->delete();
            return response()->success($deletebyid, "Xóa stylist thành công");
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
    function sendMessageToCustomer($mes, $phone_number)
    {
        try {
            $smsAPI = new SpeedSMSAPI("ELbKeZ2tcowwByKJDv0Tm0ZBBw51-cSh");
            $phones = array();
            $phones[] = $phone_number;
            // $phones = ["8491xxxxx", "8498xxxxxx"];
            /* tối đa 100 số cho 1 lần gọi API */
            $content = $mes;
            $type = 2;
            $sender = "nailbookingservice";
            $response = $smsAPI->sendSMS($phones, $content, $type, $sender);
            return $response;
        } catch (Exception $e) {
            return response()->error('Chị vui lòng kiểm tra lại số điện thoại');
        }
    }


    public function search(Request $request){
        try {
            $key = $request->key;
            if(empty($key)){
                $stylist = Stylist::paginate(10);
            }else{
                $stylist = Searchy::stylists('stylist_name', 'phone_number')->query($key)
                    ->get();
            }
//            $stylist = Stylist::where('stylist_name','like','%'.$key.'%')
//                ->orwhere('phone_number', 'like', '%'.$key.'%')
//                ->paginate(10);
            return response()->success($stylist);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }


}