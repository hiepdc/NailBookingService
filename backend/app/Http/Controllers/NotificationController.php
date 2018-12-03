<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;
use Pusher\Pusher;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function numberUnread(){
//        try {
//            $notification = new Notification();
//            $count = $notification->countUnread();
//            return response()->success($count);
//        } catch (Exception $e) {
//            return response()->exception($e->getMessage(), $e->getCode());
//        }
//    }

    public function markAllRead(){
        try {
            $notification = new Notification();
            $notification->markAllRead();
            $this->sendMessageToAdmin();
            return response()->success(true, 'Mark all read successfully');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    function sendMessageToAdmin(){
        $options = array(
            'cluster' => 'ap1',
            'useTLS' => true
        );
        $pusher = new Pusher(
            'b3a0673fc31ffb66e50a',
            '81df77c6c01ad381c45c',
            '657001',
            $options
        );
        $notification = new Notification();
        //number unread
        $count = $notification->countUnread();
        $data['countUnread'] = $count;
        //list notification
        $listLastNotitification = $notification->getAllNotification();
        $data['notifications'] = $listLastNotitification;
        $pusher->trigger('Notify', 'send-message', $data);
        return $data;
    }

    public function index()
    {
        try {
            $notification = new Notification();
            $listLastNoti = $notification->getAllNotification();
            $count = $notification->countUnread();
            $result = [];
            $result['countUnread'] = $count;
            $result['notifications'] = $listLastNoti;
            return response()->json($result);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
