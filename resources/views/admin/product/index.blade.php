@extends('adminlte::page')

@section('title', 'Products | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-sm-6">
                <h1 class="m-0">Products</h1>
            </div><!-- /.col -->
            <div class="col-sm-6 d-flex align-items-end">
                <ol class=" ml-auto breadcrumb">
                    <li class="breadcrumb-item active">Products</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
@stop

@section('content')
    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-bottom">
                            <h3 class="card-title">Product Management</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.addProduct') }}" class="btn btn-tool btn-sm">
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover table-bordered table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="text-center p-0" style="width: 5%">#</th>
                                        <th style="width: 25%;">Name</th>
                                        <th style="width: 7%;">Stock</th>
                                        <th class="text-nowrap text-center" style="width: 13%;">Cost (IDR)</th>
                                        <th class="text-nowrap text-center" style="width: 7%;">Disc.</th>
                                        <th class="text-nowrap text-center" style="width: 13%;">Price (IDR)</th>
                                        <th class="text-center" style="width: 15%;">Sales</th>
                                        <th class="text-nowrap text-center p-0" style="width: 15%;">Total Income (IDR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php $num = 1; @endphp
                                    @foreach ($products as $product)
                                        <tr>
                                            <td class="text-center p-0">{{ $num++ }}</td>
                                            <td>
                                                <a href="{{ route('admin.editProduct', [$product->slug]) }}"
                                                    class="truncate-1">
                                                    {{ $product->name }}
                                                </a>
                                            </td>
                                            <td class="text-center">{{ $product->stock }}</td>
                                            <td class="text-right">@numericToMoneyFormat($product->cost)</td>
                                            <td class="text-center">{{ $product->discount }}%</td>
                                            <td class="text-right">@numericToMoneyFormat($product->price)</td>
                                            <td class="text-nowrap">
                                                <div class="d-flex justify-content-end">
                                                    0 Sold
                                                    <small class="text-success d-inline-block ml-1">
                                                        <i class="fas fa-arrow-up"></i>
                                                        0%
                                                    </small>
                                                </div>
                                            </td>
                                            <td class="text-right">Rp0</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <ul class="pagination mb-0 align-items-center">
                                <li class="mr-auto">Showing 1 to 10 of 91224 data</li>
                                <li class="page-item"><a href="#" class="page-link">«</a></li>
                                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">»</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
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
@stop
