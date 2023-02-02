<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

// Models
use App\Models\Product;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $productDirectoryName = 'product-images/' . $this->faker->unique()->randomNumber(9, true);
        Storage::makeDirectory('public/' . $productDirectoryName);
        $this->faker->image('public/storage/' . $productDirectoryName, 640, 480, null, false);

        $itemName = Str::title($this->faker->unique()->words(rand(3, 7), true));
        $itemSlug = Str::slug($itemName);
        $category = ['Alat Kesehatan', 'Alat Laboratorium', 'Alat Kimia', 'Lainnya'];
        $price = rand(10000, 200000000);
        $discount = rand(5, 70);
        $discPeriod = ['year', 'month', 'day'];
        $discStart = $this->faker->date();
        $discEnd = date('Y-m-d', strtotime($discStart . ' +1 ' . $discPeriod[array_rand($discPeriod)]));

        return [
            'image_path' => 'storage/' . $productDirectoryName,
            'name' => $itemName,
            'slug' => $itemSlug,
            'category' => $category[array_rand($category)],
            'description' => $this->faker->paragraphs(3, true),
            'price' => $price,
            'discount' => $discount,
            'disc_start' => $discStart,
            'disc_end' => $discEnd,
            'cost' => $price - ($price * $discount / 100) - ($price * rand(10, 20) / 100),
            'stock' => rand(1, 999),
            'product_code' => $this->faker->unique()->numerify('DSL-#######'),
            'is_available' => rand(0, 1),
            'is_new' => rand(0, 1),
        ];
    }
}
