<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

// Models
use App\Models\TempProductImage;

class HomeController extends Controller
{
    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application Home.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home.index');
    }

    public function products()
    {
        return view('home.products');
    }

    public function product()
    {
        return view('home.product');
    }

    public function storeTempImg(Request $request)
    {
        $validated = $request->validate([
            'directory_path' => ['required', 'string'],
            'product_img.*' => ['required', 'image', 'max:4096'],
        ]);

        for ($x = 0; $x < count($validated['product_img']); $x++) {
            $fileName = $request->file('product_img')[$x]->getClientOriginalName();

            // Store Image to the Server
            $request->file('product_img')[$x]->storeAs(
                'temp-product-images/' . $validated['directory_path'],
                $fileName,
            );

            TempProductImage::create(
                [
                    'directory_path' => $validated['directory_path'],
                    'file_name' => $fileName,
                ]
            );
        }
    }

    public function deleteTempImg(Request $request, $fileName)
    {
        $fileRecordOnDB = TempProductImage::where('directory_path', $request->get('directory_path'))->get();

        TempProductImage::where('directory_path', $request->get('directory_path'))->where('file_name', $fileName)->delete();

        if (count($fileRecordOnDB) === 1) {
            Storage::deleteDirectory('temp-product-images/' . $request->get('directory_path'));
        } else {
            Storage::delete([
                'temp-product-images/' . $request->get('directory_path') . '/' . $fileName,
            ]);
        }
        return;
    }
}
