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
                        <div class="card-header border-bottom py-3">
                            <h3 class="card-title mb-0">Products Management</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.addProduct') }}" class="btn btn-tool btn-sm">
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
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
                                        <th class="text-nowrap text-center" style="width: 15%;">Cost (IDR)</th>
                                        <th class="text-nowrap text-center" style="width: 15%;">Total Price (IDR)</th>
                                        <th class="text-center" style="width: 15%;">Sales</th>
                                        <th class="text-nowrap text-center p-0" style="width: 18%;">Total Income (IDR)</th>
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
                                            <td class="text-right">@numericToMoneyFormat($product->price - ($product->price * $product->discount) / 100)</td>
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
                        @if ($products->hasPages())
                            <div class="card-footer">
                                {{ $products->onEachSide(2)->links() }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
            <!-- /.row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-bottom py-3">
                            <h3 class="card-title mb-0">Highlighted Product</h3>
                            <div class="card-tools">
                                <!-- Button trigger modal -->
                                <a href="javascript:void(0)" class="btn btn-tool btn-sm" data-toggle="modal"
                                    data-target="#select-highlight-type">
                                    <i class="fa fa-pen" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-download"></i>
                                </a>
                                <!-- Modal -->
                                <div class="modal fade" id="select-highlight-type" tabindex="-1"
                                    aria-labelledby="select-highlight-type-Label" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header bg-purple">
                                                <h5 class="modal-title font-weight-bold mx-auto"
                                                    id="select-highlight-type-Label">
                                                    Select Type</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <a href="{{ route('admin.carouselProducts') }}"
                                                            class="w-100 btn btn-outline-dark border-5"
                                                            data-toggle="tooltip" title="Carousel Products">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="96"
                                                                height="96" fill="currentColor" class="bi bi-1-circle"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div class="col-6">
                                                        <a href="{{ route('admin.featuredProducts') }}"
                                                            class="w-100 btn btn-outline-dark border-5"
                                                            data-toggle="tooltip" title="Featured Products">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="96"
                                                                height="96" fill="currentColor" class="bi bi-1-circle"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-6">
                                        <table
                                            class="mt-3 table table-hover table-bordered table-striped table-valign-middle">
                                            <thead>
                                                <tr>
                                                    <th class="text-center bg-purple" colspan="3">Carousel
                                                        Products
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style="width: 45%;">Name</th>
                                                    <th style="width: 15%;">Stock</th>
                                                    <th class="text-center" style="width: 40%;">Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-6">
                                        <table
                                            class="mt-3 table table-hover table-bordered table-striped table-valign-middle">
                                            <thead>
                                                <tr>
                                                    <th class="text-center bg-purple" colspan="3">Featured
                                                        Products
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style="width: 45%;">Name</th>
                                                    <th style="width: 15%;">Stock</th>
                                                    <th class="text-center" style="width: 40%;">Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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

@section('js')
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/admin/products.js') }}" defer></script>
@stop
