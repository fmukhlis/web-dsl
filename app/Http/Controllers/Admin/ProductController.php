<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

// Form Requests
use App\Http\Requests\AdminProductRequest;

// Models
use App\Models\Product;
use App\Models\TempProductImage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminProductRequest $request)
    {
        $validated = $request->validated();

        // Ensure user has uploaded product's image
        if (!Storage::exists('temp-product-images/' . $validated['directory_path'])) {
            return redirect()->back()->withInput()->withErrors([
                'no_product_image' => "[Error] No product's image found. Please upload it first!"
            ]);
        }

        // Insert new key and value pair to store fixed image path
        $validated['image_path'] = 'public/product-images/' . $validated['directory_path'];

        // Insert new key and value pair to store slug name
        $validated['slug'] = preg_replace('/[ ]/', '-', strtolower($validated['name']));

        // Move temporary product image's folder to public folder (product's image_path)
        Storage::move('temp-product-images/' . $validated['directory_path'], $validated['image_path']);

        // Remove temporary file record on db
        TempProductImage::where('directory_path', $validated['directory_path'])->delete();

        // (Optional) 
        unset($validated['directory_path']);

        Product::create($validated);

        return redirect()->back()->with('add_product_success', '[Success] Product added successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
