@extends('adminlte::page')

@section('title', 'Carousel Products | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-sm-6">
                <h1 class="m-0">Carousel Products</h1>
            </div><!-- /.col -->
            <div class="col-sm-6 d-flex align-items-end">
                <ol class=" ml-auto breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.product') }}">Products</a></li>
                    <li class="breadcrumb-item active">Carousel Products</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
@stop

@section('content')
    <!-- Main content -->
    <div class="content">
        <div class="container">
            <form action="asdasd" method="post">
                @csrf
                <div class="form-row align-items-center mb-2">
                    <div class="col-7 d-flex align-items-center position-relative">
                        <div class="input-group">
                            <input type="text" class="form-control" value="" readonly>
                            <div class="input-group-append">
                                <button type="button" class="input-group-text bg-secondary">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                            --Selected Product--</div>
                    </div>
                    <div class="col-1 d-flex">
                        <div class="rounded bg-light py-1 px-2 mx-auto">
                            <i class="fas fa-less-than mr-auto"></i>
                            <i class="fas fa-equals ml-auto"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Enter product's name...">
                            <div class="position-absolute w-100 h-100 mt-1 z-5">
                                <div class="list-group">
                                    <a href="javascript:void(0)" data-slug="hematology-analyzer-5-diff"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-secondary search-res">
                                        <div class="px-1">Hematology Analyzer 3 Diff</div>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-secondary search-res">
                                        <div class="px-1">Hematology Analyzer 5 Diff</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row align-items-center mb-2">
                    <div class="col-7 d-flex align-items-center position-relative">
                        <div class="input-group">
                            <input type="text" class="form-control" value="" readonly>
                            <div class="input-group-append">
                                <button type="button" class="input-group-text bg-secondary">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                            --Selected Product--</div>
                    </div>
                    <div class="col-1 d-flex">
                        <div class="rounded bg-light py-1 px-2 mx-auto">
                            <i class="fas fa-less-than mr-auto"></i>
                            <i class="fas fa-equals ml-auto"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Enter product's name...">
                            <div class="position-absolute w-100 h-100 mt-1 d-none">
                                <div class="list-group">
                                    {{-- <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 3 Diff</div>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 5 Diff</div>
                                    </a> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row align-items-center mb-2">
                    <div class="col-7 d-flex align-items-center position-relative">
                        <div class="input-group">
                            <input type="text" class="form-control" value="" readonly>
                            <div class="input-group-append">
                                <button type="button" class="input-group-text bg-secondary">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                            --Selected Product--</div>
                    </div>
                    <div class="col-1 d-flex">
                        <div class="rounded bg-light py-1 px-2 mx-auto">
                            <i class="fas fa-less-than mr-auto"></i>
                            <i class="fas fa-equals ml-auto"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Enter product's name...">
                            <div class="position-absolute w-100 h-100 mt-1 d-none">
                                <div class="list-group">
                                    {{-- <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 3 Diff</div>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 5 Diff</div>
                                    </a> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row align-items-center mb-2">
                    <div class="col-7 d-flex align-items-center position-relative">
                        <div class="input-group">
                            <input type="text" class="form-control" value="" readonly>
                            <div class="input-group-append">
                                <button type="button" class="input-group-text bg-secondary">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                            --Selected Product--</div>
                    </div>
                    <div class="col-1 d-flex">
                        <div class="rounded bg-light py-1 px-2 mx-auto">
                            <i class="fas fa-less-than mr-auto"></i>
                            <i class="fas fa-equals ml-auto"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Enter product's name...">
                            <div class="position-absolute w-100 h-100 mt-1 d-none">
                                <div class="list-group">
                                    {{-- <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 3 Diff</div>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 5 Diff</div>
                                    </a> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row align-items-center mb-2">
                    <div class="col-7 d-flex align-items-center position-relative">
                        <div class="input-group">
                            <input type="text" class="form-control" value="" readonly>
                            <div class="input-group-append">
                                <button type="button" class="input-group-text bg-secondary">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                            --Selected Product--</div>
                    </div>
                    <div class="col-1 d-flex">
                        <div class="rounded bg-light py-1 px-2 mx-auto">
                            <i class="fas fa-less-than mr-auto"></i>
                            <i class="fas fa-equals ml-auto"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Enter product's name...">
                            <div class="position-absolute w-100 h-100 mt-1 d-none">
                                <div class="list-group">
                                    {{-- <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 3 Diff</div>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="py-1 px-2 list-group-item list-group-item-action list-group-item-light search-res">
                                        <div class="px-1">Hematology Analyzer 5 Diff</div>
                                    </a> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
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
    <script src="{{ mix('js/admin/product-carousel.js') }}" defer></script>
@stop
