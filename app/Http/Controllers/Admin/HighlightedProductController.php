<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

// Models
use App\Models\Product;

class HighlightedProductController extends Controller
{
    public function store(Product $product)
    {
        return response()->json(['Product' => $product]);
    }

    public function destroy(Product $product)
    {
        return response()->json(['Product' => $product]);
    }
}
