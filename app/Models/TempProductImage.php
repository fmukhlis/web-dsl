<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TempProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'directory_path',
        'file_name',
    ];
}
