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
        'is_available',
        'is_new',
    ];

    public function scopeSearch($query, $searchedProduct)
    {
        return $query->where('name', 'like', '%' . $searchedProduct . '%');
    }

    public function scopeAvailability($query, $availability = null)
    {
        if ($availability) {
            if (count($availability) > 1) {
                $query = $query->whereIn('is_available', $availability);
            } else {
                $query = $query->where('is_available', $availability[0]);
            }
        }
        return $query;
    }

    public function scopeRating($query, $rating = null)
    {
        return $query;
    }

    public function scopeCondition($query, $condition = null)
    {
        if ($condition) {
            if (count($condition) > 1) {
                $query = $query->whereIn('is_new', $condition);
            } else {
                $query = $query->where('is_new', $condition[0]);
            }
        }
        return $query;
    }

    public function scopePrice($query, $min = null, $max = null)
    {
        if ($min) {
            $query = $query->where('price', '>=', $min);
            if ($max) $query = $query->where('price', '<=', $max);
        } else if ($max) {
            $query = $query->where('price', '<=', $max);
        }

        return $query;
    }

    public function productImage()
    {
        return $this->hasMany(ProductImage::class, 'product_image_path', 'image_path');
    }

    public function productSpecification()
    {
        return $this->hasMany(ProductSpecification::class, 'product_id', 'id');
    }
}
