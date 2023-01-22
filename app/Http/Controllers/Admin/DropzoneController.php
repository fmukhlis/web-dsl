<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use Illuminate\Support\Facades\Response;
// use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

// Models
use App\Models\TempProductImage;

class DropzoneController extends Controller
{
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
