<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Pagination\Paginator;

use DateTime;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::directive('dateToCustomDate', function ($dateTime) {
            return "<?php echo DateTime::createFromFormat('Y-m-d', $dateTime)->format('d/m/Y'); ?>";
        });
        Blade::directive('moneyFormatToNumeric', function ($moneyFormat) {
            return "<?php echo preg_replace('/[^0-9]/', '', $moneyFormat); ?>";
        });
        Blade::directive('numericToMoneyFormat', function ($numeric) {
            return "<?php echo 'Rp' . number_format($numeric, 0); ?>";
        });

        Paginator::defaultView('vendor/pagination/custom-bs');
    }
}
