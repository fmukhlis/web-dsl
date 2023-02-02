<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductSpecificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'spec_key' => $this->faker->words(rand(1, 4), true),
            'spec_val' => $this->faker->sentence(rand(6, 12)),
        ];
    }
}
