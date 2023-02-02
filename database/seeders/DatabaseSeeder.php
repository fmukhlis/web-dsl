<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

// Models
use App\Models\Product;
use App\Models\ProductSpecification;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Storage::deleteDirectory('public/product-images');
        Product::factory(100)
            ->has(ProductSpecification::factory()->count(5), 'productSpecification')
            ->create();
    }
}
