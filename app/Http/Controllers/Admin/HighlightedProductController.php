<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

// Models
use App\Models\Product;
use App\Models\HighlightedProduct;

class HighlightedProductController extends Controller
{
    public function get()
    {
        $html = '';

        if (request('keyword')) {
            $products = Product::where('name', 'like', '%' . request('keyword') . '%')->take(10)->get();

            if (!$products->count()) {
                $html = '
                <div class="py-1 px-2 list-group-item list-group-item-action disabled list-group-item-light">
                    <div class="px-1 text-center">Product Not Found</div>
                </div>
                ';
            }

            foreach ($products as $product) {
                $prodName = preg_replace('/' . request('keyword') . '/i', '<b class="text-dark">$0</b>', $product->name);

                $html .= '
                <a href="javascript:void(0)" data-slug="' . $product->slug . '"
                    class="py-1 px-2 list-group-item list-group-item-action list-group-item-light set-item-button">
                    <div class="px-1 text-truncate">' . $prodName . '</div>
                </a>
                ';
            }
        }

        return response()->json($html);
    }

    public function store(Product $product)
    {
        $alreadyOnCarouselList = (bool) $product->highlightedProduct;
        if ($alreadyOnCarouselList) {
            return response()->json(['errMsg' => 'Product already selected'], 412);
        }
        $product->highlightedProduct()->create(
            [
                'carousel' => 1,
                'featured' => 0,
            ]
        );
        return response()->json($product);
    }

    public function destroy(Product $product = null)
    {
        if ($product) {
            $product->highlightedProduct()->delete();
        }
        return response()->json($product);
    }
}
