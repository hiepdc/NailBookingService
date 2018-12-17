<?php

namespace App\Console;
use DB;
use App\Http\Controllers\ShiftController;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $date = date("Y-m-d");
        //echo "VietNam: ".date("Y-m-d H:i:s"). "<br>";

        $shiftController = new ShiftController();
        $schedule->call(function () use ($shiftController, $date) {
            $results = DB::table('shifts')->select('id','status')->get();
            foreach ($results as $result){
                DB::table('shifts')
                ->where([
                    ['id',$result->id],
                    ['date',$date]
                ])
                ->update([
                    "status" => 
                    $shiftController->updateStatusCurrentTime($result->status)
                ]);
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
