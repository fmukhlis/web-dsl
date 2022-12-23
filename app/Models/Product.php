<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'image_path',
        'name',
        'slug',
        'category',
        'description',
        'price',
        'discount',
        'disc_start',
        'disc_end',
        'cost',
        'stock',
        'product_code',
    ];

    public function productImage()
    {
        return $this->hasMany(ProductImage::class, 'product_image_path', 'image_path');
    }
}
