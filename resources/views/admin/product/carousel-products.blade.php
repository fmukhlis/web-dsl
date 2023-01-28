@extends('adminlte::page')

@section('title', 'Carousel Products | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-12 text-center text-lg-left">
                <h1 class="m-0">Carousel Products</h1>
            </div><!-- /.col -->
            <div class="col-lg-6 col-12 d-flex mt-2 mt-lg-1 justify-content-center justify-content-lg-end">
                <ol class="breadcrumb justify-content-center">
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
            <hr>
            <form action="asdasd" method="post" id="carousel-form">
                @csrf
                @if (count($carouselProducts))
                    @foreach ($carouselProducts as $cp)
                        <div class="form-row align-items-center mb-3">
                            <div class="col-12 col-md-7 d-flex align-items-center position-relative overflow-hidden">
                                <div class="input-group">
                                    <input type="text" class="form-control text-transparent"
                                        value="{{ $cp->product->slug }}" readonly>
                                    <div class="input-group-append">
                                        <button type="button" class="input-group-text bg-secondary remove-item-button z-1"
                                            data-slug="{{ $cp->product->slug }}">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="w-100 h-100 position-absolute pl-2 mt-2 pt-1 pr-5 text-truncate">
                                    {{ $cp->product->name }}
                                </div>
                            </div>
                            <div class="col-1 d-md-flex d-none">
                                <div class="rounded bg-light py-1 px-2">
                                    <i class="fas fa-less-than mr-auto"></i>
                                    <i class="fas fa-equals ml-auto"></i>
                                </div>
                            </div>
                            <div class="col-12 offset-md-0 col-md-4 mt-1">
                                <div class="position-relative">
                                    <div class="input-group">
                                        <input type="text" class="form-control show-item-triggerer"
                                            placeholder="Enter product's name...">
                                        <div class="input-group-append">
                                            <div class="input-group-text bg-purple">
                                                <i class="fas fa-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="position-absolute w-100 h-100 z-5 pr-3 d-none">
                                        <div class="list-group pr-4 pl-2 pt-1 rounded-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="container border border-2 rounded bg-light">
                        <div class="row">
                            <div class="col-12 text-center py-3">
                                You haven't added any product to the carousel list
                            </div>
                        </div>
                    </div>
                @endif
            </form>
            <hr>
            <div class="d-flex">
                <button id="add-new" class="btn btn-success mr-auto ml-auto ml-md-0">Add Product To List</button>
            </div>
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
