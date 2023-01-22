<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();

        // Delete Temporary Product Image
        $schedule->call(function () {
            $now = Carbon::now();
            $validTime = 2; // Hours
            $invalidFile = DB::table('temp_product_images')->whereDate('created_at', '<=', $now->subHours($validTime))->first();
            DB::table('temp_product_images')->whereDate('created_at', '<=', $now)->delete();
            Storage::deleteDirectory('temp-product-images/' . $invalidFile->directory_path);
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
