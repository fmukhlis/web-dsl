@extends('adminlte::page')

@section('title', 'Edit Product | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-sm-6">
                <h1 class="m-0">Product's Details</h1>
            </div><!-- /.col -->
            <div class="col-sm-6 d-flex align-items-end">
                <ol class=" ml-auto breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.product') }}">Products</a></li>
                    <li class="breadcrumb-item active">Product's Details</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
@stop

@section('content')
    <!-- Main content -->
    <div class="content">

        <form action="{{ route('admin.editProduct', [$product->slug]) }}" method="post">
            @csrf
            @method('patch')
            <input type="hidden" name="directory_path" readonly
                value="{{ str_replace('public/product-images/', '', $product->image_path) }}">
            <div class="container-fluid">
                <div class="row">
                    {{-- Alert --}}
                    <div class="col-12">
                        @if ($errors->any())
                            {!! implode('', $errors->all('<div>:message</div>')) !!}
                        @endif

                        @if ($errors->has('no_product_image'))
                            <div class="alert alert-danger alert-dismissible fade show d-flex p-3" role="alert">
                                {{ $errors->first('no_product_image') }}
                                <button type="button" class="close position-relative p-0 ml-auto" data-dismiss="alert"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif

                        @if ($errors->has('slug_conflict'))
                            <div class="alert alert-danger alert-dismissible fade show d-flex p-3" role="alert">
                                {{ $errors->first('slug_conflict') }}
                                <button type="button" class="close position-relative p-0 ml-auto" data-dismiss="alert"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif

                        @if (session()->has('add_product_success'))
                            <div class="alert alert-success alert-dismissible fade show d-flex p-3" role="alert">
                                {{ session('add_product_success') }}
                                <button type="button" class="close position-relative p-0 ml-auto" data-dismiss="alert"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif
                    </div>

                    {{-- Product's Gallery --}}
                    <div class="col-lg-12">
                        <div class="card card-outline card-purple" id="gallery">
                            <div class="card-header border-bottom">
                                <h3 class="card-title">Product's Gallery</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body table-responsive p-0">
                                <div class="container-fluid">
                                    <div class="row flex-nowrap overflow-auto py-3 px-2">
                                        <div class="col-12 d-none">

                                            {{-- Dropzone Template --}}
                                            <div id="product-previews" class="dropzone p-0 rounded mh-0 overflow-hidden">
                                                <div class="dz-default dz-message d-flex my-3">
                                                    <button
                                                        class="dz-button mx-auto d-flex flex-column align-items-center justify-content-center"
                                                        type="button">
                                                        <strong class="mb-2">
                                                            Drop files here to upload.
                                                        </strong>
                                                        <div class="text-muted">
                                                            Accepted file's extensions are png, jpg, and jpeg.
                                                        </div>
                                                        <div class="text-muted">
                                                            The first image would be the product's main photo.
                                                        </div>
                                                    </button>
                                                </div>

                                                <div id="dz-template">
                                                    <div class="dz-preview m-3 mt-0">
                                                        <div class="dz-image border border-3">
                                                            <img data-dz-thumbnail>
                                                        </div>

                                                        <div
                                                            class="dz-details d-flex flex-column h-100 py-3 align-items-center">
                                                            <div class="dz-size mb-2">
                                                                <span data-dz-size></span>
                                                            </div>
                                                            <div class="dz-filename">
                                                                <span data-dz-name></span>
                                                            </div>
                                                            <a class="dz-remove btn btn-danger py-1 rounded mx-auto mt-auto"
                                                                href="javascript:undefined;" data-dz-remove="">
                                                                <i class="fa fa-times"></i>
                                                            </a>
                                                        </div>

                                                        <div class="dz-progress">
                                                            <span class="dz-upload" data-dz-uploadprogress
                                                                style="width: 0%;"></span>
                                                        </div>

                                                        <div class="dz-error-message">
                                                            <span data-dz-errormessage></span>
                                                        </div>

                                                        <div class="dz-success-mark">
                                                            <svg width="54px" height="54px" viewBox="0 0 54 54"
                                                                version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>Check</title>
                                                                <g stroke="none" stroke-width="1" fill="none"
                                                                    fill-rule="evenodd">
                                                                    <path
                                                                        d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                                                                        stroke-opacity="0.75" stroke="#747474"
                                                                        fill-opacity="0.816519475" fill="#FFFFFF"></path>
                                                                </g>
                                                            </svg>
                                                        </div>

                                                        <div class="dz-error-mark">
                                                            <svg width="54px" height="54px" viewBox="0 0 54 54"
                                                                version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>Error</title>
                                                                <g stroke="none" stroke-width="1" fill="none"
                                                                    fill-rule="evenodd">
                                                                    <g stroke="#747474" stroke-opacity="0.75"
                                                                        fill="#FFFFFF" fill-opacity="0.816519475">
                                                                        <path
                                                                            d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {{-- End Dropzone Template --}}

                                            <div class="d-flex mt-3">
                                                <button id="cancel-change-product-photo" class="btn bg-purple mx-auto"
                                                    type="button" data-dropzone-button="clearAll">
                                                    <strong>Cancel</strong>
                                                </button>
                                            </div>

                                        </div>

                                        <div class="col-12">
                                            <div class="dropzone p-0 rounded mh-0 overflow-x-o-auto d-flex">
                                                @foreach ($productImages as $productImage)
                                                    <div class="dz-preview my-3 mr-0 ml-3 dz-image-preview">
                                                        <div class="dz-image border border-3">
                                                            <img data-dz-thumbnail alt="Gambar {{ $product->name }} 1"
                                                                class="w-100 h-100 obj-fit-cover"
                                                                src="{{ asset($product->image_path) . '/' . $productImage->getFileName() }}">
                                                        </div>
                                                        <div
                                                            class="dz-details d-flex flex-column h-100 py-3 align-items-center justify-content-center">
                                                            <div class="dz-filename">
                                                                <span
                                                                    data-dz-name="">{{ $productImage->getFileName() }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                                <div class="mr-3"></div>
                                            </div>

                                            <div class="d-flex mt-3">
                                                <button id="change-product-photo" class="btn bg-purple mx-auto"
                                                    type="button">
                                                    <strong>Change Product's Photo</strong>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{-- End Product's Gallery --}}

                    {{-- Product's Information --}}
                    <div class="col-lg-12">
                        <div class="card card-outline card-purple">
                            <div class="card-header border-bottom">
                                <h3 class="card-title">Product's Information</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body table-responsive">
                                <div class="form-row">
                                    <div class="col-md-8 mb-3">
                                        <label for="name">Product's Name</label>
                                        <input type="text" class="@error('name') is-invalid @enderror form-control"
                                            id="name" name="name" value="{{ old('name', $product->name) }}"
                                            required>
                                        @error('name')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="category">Category</label>
                                        <select class="@error('category') is-invalid @enderror form-control custom-select"
                                            id="category" name="category" required>
                                            <option disabled value="">Choose...</option>
                                            <option
                                                {{ old('category', $product->category) === 'Alat Kesehatan' ? 'selected' : '' }}>
                                                Alat
                                                Kesehatan</option>
                                            <option
                                                {{ old('category', $product->category) === 'Alat Laboratorium' ? 'selected' : '' }}>
                                                Alat
                                                Laboratorium</option>
                                            <option
                                                {{ old('category', $product->category) === 'Alat Kimia' ? 'selected' : '' }}>
                                                Alat Kimia
                                            </option>
                                            <option
                                                {{ old('category', $product->category) === 'Lainnya' ? 'selected' : '' }}>
                                                Lainnya</option>
                                        </select>
                                        @error('category')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="description">Product's Description</label>
                                        <textarea class="@error('description') is-invalid @enderror form-control mh-medium" id="description"
                                            name="description" placeholder="Write description..." required>{{ old('description', $product->description) }}</textarea>
                                        @error('description')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-3 mb-3">
                                        <label for="price">Price</label>
                                        <div class="input-group has-validation">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple"><i
                                                        class="fas fa-money-bill-wave"></i></span>
                                            </div>
                                            <input type="text"
                                                class="@error('price') is-invalid @enderror form-control"
                                                data-inputmask-alias="currency" id="price" name="price"
                                                value="{{ old('price', $product->price) }}" required>
                                            @error('price')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Min : Rp1.000</small>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label for="cost">Cost</label>
                                        <div class="input-group has-validation">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple">
                                                    <i class="fas fa-money-bill-wave-alt"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="@error('cost') is-invalid @enderror form-control"
                                                data-inputmask-alias="currency" id="cost" name="cost"
                                                value="{{ old('cost', $product->cost) }}" required>
                                            @error('cost')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Must be less than price amount</small>
                                    </div>

                                    <div class="col-md-2 offset-1 mb-3">
                                        <label for="discount">Discounts</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple"><i class="fa fa-tag"></i></span>
                                            </div>
                                            <input type="text"
                                                class="@error('discount') is-invalid @enderror form-control"
                                                data-inputmask-mask="9[9]%" inputmode="numeric" id="discount"
                                                name="discount" value="{{ old('discount', $product->discount) }}">
                                            @error('discount')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Max. Disc. : 99%</small>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label for="total">Total Price</label>
                                        <div class="input-group has-validation">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple">
                                                    <i class="fas fa-money-bill"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" data-inputmask-alias="currency"
                                                id="total" name="total" value="@moneyFormatToNumeric(old('total'))" readonly>
                                            @error('cost')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Price after discount</small>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-2 mb-3">
                                        <label for="stock">Stock</label>
                                        <div class="input-group has-validation">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple"><i class="fas fa-box"></i></span>
                                            </div>
                                            <input type="text"
                                                class="@error('stock') is-invalid @enderror form-control"
                                                data-inputmask-alias="numeric" maxlength="5" id="stock"
                                                name="stock" value="{{ old('stock', $product->stock) }}" required>
                                            @error('stock')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label for="product_code">Product's Code</label>
                                        <div class="input-group has-validation">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple">ID</span>
                                            </div>
                                            <input type="text"
                                                class="@error('product_code') is-invalid @enderror form-control"
                                                id="product_code" name="product_code"
                                                value="{{ old('product_code', $product->product_code) }}" required>
                                            @error('product_code')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Example : DSL0001, DSL0099, ...</small>
                                    </div>

                                    <div class="col-md-3 offset-1 mb-3">
                                        <label for="disc_start">Start Date</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple"><i
                                                        class="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text"
                                                class="@error('disc_start') is-invalid @enderror form-control"
                                                data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy"
                                                data-mask="" inputmode="numeric" id="disc_start" name="disc_start"
                                                value="@dateToCustomDate($product->disc_start)">
                                            @error('disc_start')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Example : 27/12/2022</small>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label for="disc_end">End Date</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-purple"><i
                                                        class="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text"
                                                class="@error('disc_end') is-invalid @enderror form-control"
                                                data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy"
                                                data-mask="" inputmode="numeric" id="disc_end" name="disc_end"
                                                value="@dateToCustomDate($product->disc_end)">
                                            @error('disc_end')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <small class="text-muted">*Example : 31/12/2022</small>
                                    </div>

                                    <div class="col-md-6">
                                        <label>Product's Availability</label>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Product's Used Condition</label>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="border p-2 rounded d-flex">
                                            <div class="form-check form-check-inline mr-5">
                                                <input class="form-check-input" type="radio" name="is_available"
                                                    id="availability_ready" value="1"
                                                    @if (old('is_available', $product->is_available) == 1) checked @endif>
                                                <label class="form-check-label" for="availability_ready">Ready
                                                    Stock</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="is_available"
                                                    id="availability_preorder" value="0"
                                                    @if (old('is_available', $product->is_available) == 0) checked @endif>
                                                <label class="form-check-label"
                                                    for="availability_preorder">Pre-Order</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="border p-2 rounded d-flex">
                                            <div class="form-check form-check-inline mr-5">
                                                <input class="form-check-input" type="radio" name="is_new"
                                                    id="used_condition_new" value="1"
                                                    @if (old('is_new', $product->is_new) == 1) checked @endif>
                                                <label class="form-check-label" for="used_condition_new">New</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="is_new"
                                                    id="used_condition_second" value="0"
                                                    @if (old('is_new', $product->is_new) == 0) checked @endif>
                                                <label class="form-check-label"
                                                    for="used_condition_second">Second-Hand</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="col-12">
                                        <label>Product's Specification(s)</label>
                                        <a href="javascript:void(0)" id="add-spec-btn" class="btn btn-tool text-purple"
                                            data-toggle="tooltip" data-placement="right" title="Add">
                                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>

                                <div id="product-specification-container" class="border rounded m-0 p-2 mb-2">
                                    @if (old('spec_key') || old('spec_val'))
                                        @foreach (old('spec_key') as $spec_keyKey => $spec_keyVal)
                                            <div class="form-row">
                                                <div class="col-md-3 my-2">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-purple"><i
                                                                    class="fa fa-key"></i></span>
                                                        </div>
                                                        <input type="text"
                                                            class="form-control @error('spec_key.' . $spec_keyKey) is-invalid @enderror spec"
                                                            name="spec_key[]" placeholder="Kata Kunci"
                                                            value="{{ old('spec_key')[$spec_keyKey] }}">
                                                        @error('spec_key.' . $spec_keyKey)
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-8 my-2">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-purple"><i
                                                                    class="fa fa-file"></i></span>
                                                        </div>
                                                        <input type="text"
                                                            class="form-control @error('spec_val.' . $spec_keyKey) is-invalid @enderror spec"
                                                            name="spec_val[]" placeholder="Nilai"
                                                            value="{{ old('spec_val')[$spec_keyKey] }}">
                                                        @error('spec_val.' . $spec_keyKey)
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-1 my-2 d-flex">
                                                    <a href="javascript:void(0)" data-controll="remove-spec"
                                                        class="btn btn-danger ml-auto mb-auto" data-toggle="tooltip"
                                                        data-placement="left" title="Remove">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        @endforeach
                                    @elseif(count($product->productSpecification))
                                        @foreach ($product->productSpecification as $ps)
                                            <div class="form-row">
                                                <div class="col-md-3 my-2">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-purple"><i
                                                                    class="fa fa-key"></i></span>
                                                        </div>
                                                        <input type="text"
                                                            class="form-control @error('spec_key') is-invalid @enderror spec"
                                                            name="spec_key[]" placeholder="Kata Kunci"
                                                            value="{{ $ps->spec_key }}">
                                                        @error('spec_key')
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-8 my-2">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-purple"><i
                                                                    class="fa fa-file"></i></span>
                                                        </div>
                                                        <input type="text"
                                                            class="form-control @error('spec_val') is-invalid @enderror spec"
                                                            name="spec_val[]" placeholder="Nilai"
                                                            value="{{ $ps->spec_val }}">
                                                        @error('spec_val')
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-1 my-2 d-flex">
                                                    <a href="javascript:void(0)" data-controll="remove-spec"
                                                        class="btn btn-danger ml-auto mb-auto" data-toggle="tooltip"
                                                        data-placement="left" title="Remove">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>

                            </div>
                        </div>
                    </div>
                    {{-- Product's Information --}}


                    <div class="col-lg-12 mb-3">
                        <div class="d-flex">
                            <button class="btn btn-danger mr-auto" type="button">
                                <i class="fa fa-trash"></i>
                            </button>
                            <button class="btn btn-secondary mr-3" type="reset">
                                <i class="fa fa-sync"></i>
                            </button>
                            <button class="btn btn-success" type="submit">
                                <i class="fa fa-save"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </form>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
@stop

@section('footer')
    <div class="text-right">
        Copyright &#169 2022 <strong class="">PT Dharma Sejahtera Lestari</strong>. All rights reserved.
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css') }}/app.css" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css') }}/product-management.css" type="text/css" />
@stop

@section('js')
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/admin/product-management.js') }}" defer></script>
@stop
