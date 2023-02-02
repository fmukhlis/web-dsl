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
                                    @if ($products->count())
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
                                    @else
                                        <tr>
                                            <td class="text-center" colspan="7">
                                                Anda belum menambahkan produk apapun ke dalam daftar.
                                            </td>
                                        </tr>
                                    @endif
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
                                            <div class="modal-header border-2 border-dark">
                                                <h5 class="modal-title font-weight-bold mx-auto"
                                                    id="select-highlight-type-Label">
                                                    Select Type</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <a href="{{ route('admin.carouselProducts') }}"
                                                            class="w-100 btn btn-outline-dark border-2"
                                                            data-toggle="tooltip" title="Carousel Products">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="96"
                                                                height="96" fill="currentColor" class="bi bi-1-circle"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M 0.453125 1.6953125 L 0.546875 10.570312 L 15.513672 10.503906 L 15.570312 1.7773438 L 0.453125 1.6953125 z M 0.68554688 1.9238281 L 15.337891 2 L 15.294922 10.28125 L 0.76757812 10.341797 L 0.68554688 1.9238281 z M 7.8886719 3.34375 L 4.8496094 4.1347656 L 5.1132812 8.1464844 L 7.9765625 8.8984375 L 10.763672 7.7890625 L 10.857422 4.0605469 L 7.8886719 3.34375 z M 7.9472656 3.5332031 L 9.0488281 3.7871094 L 6.5292969 4.5019531 L 5.390625 4.2109375 L 7.9472656 3.5332031 z M 9.2597656 3.8789062 L 10.474609 4.1191406 L 7.9550781 4.8808594 L 6.8144531 4.5898438 L 9.2597656 3.8789062 z M 10.675781 4.3027344 L 10.621094 7.6503906 L 8.0898438 8.6230469 L 8.0996094 5.0820312 L 10.675781 4.3027344 z M 5.0957031 4.3535156 L 7.8535156 5.09375 L 7.8730469 8.6621094 L 5.3144531 7.9667969 L 5.0957031 4.3535156 z M 10.537109 4.5703125 L 9.3496094 4.9433594 L 9.3496094 5.6777344 L 10.537109 5.2265625 L 10.537109 4.5703125 z M 10.419922 4.7578125 L 10.419922 4.9628906 L 10.050781 5.1035156 L 10.050781 4.875 L 10.419922 4.7578125 z M 10.367188 11.044922 L 5.6542969 11.113281 L 5.6542969 14.783203 L 10.367188 14.783203 L 10.367188 11.044922 z M 10.179688 11.236328 L 10.179688 14.591797 L 5.8417969 14.591797 L 5.8417969 11.296875 L 10.179688 11.236328 z M 1.9414062 11.773438 L 0.546875 11.792969 L 0.546875 11.992188 L 1.71875 11.974609 L 1.71875 14 L 0.546875 14 L 0.546875 14.203125 L 1.9414062 14.203125 L 1.9414062 11.773438 z M 5.3300781 11.773438 L 2.2675781 11.816406 L 2.2675781 14.203125 L 5.3300781 14.203125 L 5.3300781 11.773438 z M 13.755859 11.773438 L 10.693359 11.816406 L 10.693359 14.203125 L 13.755859 14.203125 L 13.755859 11.773438 z M 15.294922 11.798828 L 14.082031 11.816406 L 14.082031 14.203125 L 15.294922 14.203125 L 15.294922 14 L 14.304688 14 L 14.304688 12.011719 L 15.294922 11.998047 L 15.294922 11.798828 z M 5.1074219 11.974609 L 5.1074219 14 L 2.4902344 14 L 2.4902344 12.011719 L 5.1074219 11.974609 z M 13.533203 11.974609 L 13.533203 14 L 10.916016 14 L 10.916016 12.011719 L 13.533203 11.974609 z " />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div class="col-6">
                                                        <a href="{{ route('admin.featuredProducts') }}"
                                                            class="w-100 btn btn-outline-dark border-2"
                                                            data-toggle="tooltip" title="Featured Products">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="96"
                                                                height="96" fill="currentColor" class="bi bi-1-circle"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M 8.0683328,0.76695437 0.16210936,2.8281456 0.84840545,13.265374 8.2963304,15.225232 15.5485,12.334959 15.794921,2.63239 Z M 8.0820093,1.0410478 11.246129,1.7980639 4.2832168,3.8620186 0.7098717,2.9614013 Z m 3.5000087,0.8505947 3.621952,0.850477 -6.9629117,2.1837111 -3.580875,-0.913154 z m 3.941609,1.0928245 -0.216304,9.098243 -6.9303516,2.749753 0.02303,-9.6002968 z M 0.44066729,3.2228104 8.1324625,5.2129273 8.0947402,14.884617 1.0141161,13.01656 Z M 14.961233,3.9589221 11.872901,4.9307912 V 6.84459 L 14.961233,5.6700564 Z M 14.654934,4.4494626 V 4.9814573 L 13.69458,5.3476354 V 4.7511566 Z M 5.9725964,7.1186479 3.5521359,10.474129 2.665478,8.5211792 2.0643932,9.6519566 3.5728628,11.584178 6.884587,8.8942664 Z m 8.2654916,3.7671651 -2.977787,1.077807 -0.01155,0.251583 3.026152,-1.163018 z m -3.380814,1.273563 -1.7641032,0.575751 -0.011521,0.253886 1.8124672,-0.663266 z m 1.71574,0.135878 -3.4798432,1.236715 -0.011521,0.253885 3.5282072,-1.32423 z" />
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
                                                @if ($carouselItem->count())
                                                    <tr>
                                                        <th class="text-center p-0" style="width: 50%;">Name</th>
                                                        <th class="text-center" style="width: 15%;">Stock</th>
                                                        <th class="text-center p-0" style="width: 35%;">Sales</th>
                                                    </tr>
                                                @endif
                                            </thead>
                                            <tbody>
                                                @if ($carouselItem->count())
                                                    @foreach ($carouselItem as $item)
                                                        <tr>
                                                            <td class="text-center">
                                                                <div class="truncate-1">{{ $item->product->name }}</div>
                                                            </td>
                                                            <td class="text-center">{{ $item->product->stock }}</td>
                                                            <td class="text-nowrap p-0">
                                                                <div class="d-flex justify-content-center">
                                                                    0 Sold
                                                                    <small class="text-success d-inline-block ml-1">
                                                                        <i class="fas fa-arrow-up"></i>
                                                                        0%
                                                                    </small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                    <tr>
                                                        <td class="text-center" colspan="3">
                                                            <a href="{{ route('admin.featuredProducts') }}">Lihat semua
                                                                produk
                                                                korsel</a>
                                                        </td>
                                                    </tr>
                                                @else
                                                    <tr>
                                                        <td class="text-center" colspan="3">
                                                            Anda belum menambahkan produk apapun ke dalam daftar.
                                                        </td>
                                                    </tr>
                                                @endif
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
                                                @if ($featuredItem->count())
                                                    <tr>
                                                        <th class="text-center p-0" style="width: 50%;">Name</th>
                                                        <th class="text-center" style="width: 15%;">Stock</th>
                                                        <th class="text-center p-0" style="width: 35%;">Sales</th>
                                                    </tr>
                                                @endif
                                            </thead>
                                            <tbody>
                                                @if ($featuredItem->count())
                                                    @foreach ($featuredItem as $item)
                                                        <tr>
                                                            <td class="text-center">
                                                                <div class="truncate-1">{{ $item->product->name }}</div>
                                                            </td>
                                                            <td class="text-center">{{ $item->product->stock }}</td>
                                                            <td class="text-nowrap p-0">
                                                                <div class="d-flex justify-content-center">
                                                                    0 Sold
                                                                    <small class="text-success d-inline-block ml-1">
                                                                        <i class="fas fa-arrow-up"></i>
                                                                        0%
                                                                    </small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                    <tr>
                                                        <td class="text-center" colspan="3">
                                                            <a href="{{ route('admin.featuredProducts') }}">Lihat semua
                                                                produk
                                                                unggulan</a>
                                                        </td>
                                                    </tr>
                                                @else
                                                    <tr>
                                                        <td class="text-center" colspan="3">
                                                            Anda belum menambahkan produk apapun ke dalam daftar.
                                                        </td>
                                                    </tr>
                                                @endif
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
