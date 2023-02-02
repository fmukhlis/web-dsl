<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;

// Models
use App\Models\Product;
use App\Models\HighlightedProduct;

class HighlightedProductController extends Controller
{
    public function getCarousel()
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

    public function storeCarousel(Product $product)
    {
        $carouselList = HighlightedProduct::where('carousel', 1)->get()->count();
        if ($carouselList >= 6) {
            return response()->json(['errMsg' => 'Maximal product reached'], 412);
        }
        $alreadyOnCarouselList = $product->highlightedProduct()->where('carousel', 1)->get()->count();
        if ($alreadyOnCarouselList) {
            return response()->json(['errMsg' => 'Product already selected'], 412);
        }
        $dispType = ['a', 'b'];
        $product->highlightedProduct()->create(
            [
                'carousel' => 1,
                'featured' => 0,
                'display_type' => $dispType[array_rand($dispType)],
            ]
        );
        return response()->json($product);
    }

    public function destroyCarousel(Product $product = null)
    {
        if ($product) {
            $product->highlightedProduct()->delete();
        }
        return response()->json($product);
    }

    public function getFeatured()
    {

        $html = '';

        if (request('keyword')) {
            $products = Product::where('name', 'like', '%' . request('keyword') . '%');

            if (request('category')) {
                $products = $products->where('category', request('category'));
            }

            $products = $products->take(10)->get();

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

        return response()->json(['htmlResult' => $html]);
    }

    public function storeFeatured(Request $request)
    {
        $msg = ['successMsg' => 'Featured products lists added successfully!'];

        $rule = [
            'type' => 'array|size:4',
            'type.*' => 'required|in:a,b,c',
            'product-slug' => 'array|size:4',
            'product-slug.*' => 'array|size:6',
            'product-slug.*.*' => 'required|string'
        ];
        $validated = $request->validate($rule);

        $featuredProductsOnDB = HighlightedProduct::where('featured', 1)->get();

        if ($featuredProductsOnDB->count()) {
            $featuredProductsOnDB->each->delete();
            $msg = ['successMsg' => 'Featured products list updated successfully!'];
        }

        foreach ($validated['product-slug'] as $category => $arrayData) {
            $featuredProductsRequest = Product::where('slug', $validated['product-slug'][$category][0]);
            for ($i = 1; $i < 6; $i++) {
                $featuredProductsRequest = $featuredProductsRequest->orWhere('slug', $validated['product-slug'][$category][$i]);
            }
            $featuredProductsRequest = $featuredProductsRequest->get();

            foreach ($featuredProductsRequest as $item) {
                $item->highlightedProduct()->create([
                    'carousel' => 0,
                    'featured' => 1,
                    'display_type' => $validated['type'][$category],
                ]);
            }
        }

        return redirect()->route('admin.featuredProducts')->with($msg);
    }
}
