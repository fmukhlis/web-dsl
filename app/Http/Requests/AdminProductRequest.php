<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Input;

use DateTime;

class AdminProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'price' => preg_replace('/[^0-9]/', '', $this->input('price')), // Change Rpx.xxx to Int
            'cost' => preg_replace('/[^0-9]/', '', $this->input('cost')), // Change Rpx.xxx to Int
        ]);
        $this->input('discount')
            ? $this->merge(['discount' => preg_replace('/[^0-9]/', '', $this->input('discount'))]) // Change xx% to Int
            : null;
        $this->input('disc_start')
            ? $this->merge(['disc_start' => DateTime::createFromFormat('d/m/Y', $this->input('disc_start'))->format('Y-m-d')]) // Change dd/mm/yyyy to yyyy-mm-dd
            : null;
        $this->input('disc_end')
            ? $this->merge(['disc_end' => DateTime::createFromFormat('d/m/Y', $this->input('disc_end'))->format('Y-m-d')]) // Change dd/mm/yyyy to yyyy-mm-dd
            : null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'directory_path' => "required|unique:products,image_path",
            'name' => "required|string|max:255",
            'category' => "required|in:Alat Kesehatan,Alat Laboratorium,Alat Kimia,Lainnya",
            'description' => "required|string|max:4000",
            'price' => "required|numeric|min:1000",
            'discount' => "nullable|required_with:disc_start",
            'disc_start' => "nullable|date|required_with:discount",
            'disc_end' => "nullable|date|after:disc_start|required_with:disc_start",
            'cost' => 'required|numeric|min:1000|lt:price',
            'stock' => 'required|numeric|min:1',
            'product_code' => 'required|string',
        ];
    }
}
