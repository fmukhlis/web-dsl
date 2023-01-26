@extends('adminlte::page')

@section('title', 'Featured Product | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-sm-6">
                <h1 class="m-0">Featured Products</h1>
            </div><!-- /.col -->
            <div class="col-sm-6 d-flex align-items-end">
                <ol class=" ml-auto breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.product') }}">Products</a></li>
                    <li class="breadcrumb-item active">Featured Products</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
@stop

@section('content')
    <!-- Main content -->
    <div class="content">

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
    {{-- <script src="{{ mix('js/product-management.js') }}" defer></script> --}}
@stop
