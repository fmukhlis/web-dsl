@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('custom_js')
@endsection

@section('content')
    {{-- Carousel --}}
    <div class="container p-md-0 mb-0 mb-lg-4 mt-0 mt-lg-2">
        <div id="carousel" class="carousel carousel-light slide modified mb-3" data-bs-ride="carousel">
            @if ($carouselItem->count())
                {{-- Carousel Indicator --}}
                <div class="carousel-indicators">
                    @foreach ($carouselItem as $key => $item)
                        @if ($key == 0)
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="{{ $key }}"
                                class="active" aria-current="true" aria-label="Slide {{ $key }}"></button>
                        @else
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="{{ $key }}"
                                aria-label="Slide {{ $key }}"></button>
                        @endif
                    @endforeach
                </div>
            @endif
            {{-- Carousel Content --}}
            <div class="carousel-inner">
                @if ($carouselItem->count())
                    @foreach ($carouselItem as $key => $item)
                        <div class="carousel-item @if ($key == 0) active @endif" data-bs-interval="5000">
                            <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                class="d-block carousel-image @if ($item->display_type == 'a') modified @endif"
                                alt="...">
                            <div class="carousel-caption @if ($item->display_type == 'a') light @else dark @endif">
                                <h1 class="title">{{ $item->product->name }}</h1>
                                <div class="description">{{ Str::limit($item->product->description, 200) }}
                                </div>
                                @if ($item->product->disc_start && $item->product->disc_start)
                                    @php
                                        $discStart = strtotime($item->product->disc_start);
                                        $discEnd = strtotime($item->product->disc_end);
                                        $discStartFormat = 'd M Y';
                                        $discEndFormat = 'd M Y';
                                        
                                        if (date('M', $discStart) == date('M', $discEnd) && date('Y', $discStart) == date('Y', $discEnd)) {
                                            $discStartFormat = 'd';
                                        } elseif (date('Y', $discStart) == date('Y', $discEnd)) {
                                            $discStartFormat = 'd M';
                                        }
                                    @endphp
                                    <div class="description-small">Discount Period :
                                        {{ date($discStartFormat, strtotime($item->product->disc_start)) }} -
                                        {{ date($discEndFormat, strtotime($item->product->disc_end)) }}</div>
                                @endif
                                <div class="action">
                                    <a href="{{ route('product', [$item->product->slug]) }}"
                                        class="@if ($item->display_type == 'a') text-light @else text-dark @endif">
                                        Learn
                                        more</a>
                                    <a href="{{ route('product', [$item->product->slug]) }}"
                                        class="btn @if ($item->display_type == 'a') btn-light @else btn-dark @endif offset-md-1">Buy
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    {{-- Currently Unused Template --}}
                    <div class="carousel-item active" data-bs-interval="50000">
                        <img src="{{ asset('assets/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg') }}"
                            class="d-block carousel-image" alt="...">
                        <div class="carousel-caption light bg-transparent">
                            <h1 class="title">Lorem ipsum dolor sit amet.</h1>
                            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus,
                                consectetur. Quod veritatis optio asperiores voluptatem alias quam provident quas
                                similique
                                ea.</div>
                            <div class="description-small">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                            <div class="action">
                                <a href="" class="text-light">Lorem, ipsum dolor.</a>
                                <a href="" class="btn btn-light offset-md-1">Lorem, ipsum.</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="{{ asset('assets/zhen-hu-Xruf17OrkwM-unsplash.jpg') }}" class="d-block carousel-image"
                            alt="...">
                        <div class="carousel-caption dark bg-transparent">
                            <h1 class="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
                                blanditiis.</h1>
                            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus,
                                consectetuea.</div>
                            <div class="description-small">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Omnis.
                            </div>
                            <div class="action">
                                <a href="" class="text-dark">Lorem, ipsum.</a>
                                <a href="" class="btn btn-dark offset-md-1">Lorem, ipsum dolor.</a>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
            {{-- Button Prev & Next  --}}
            <button class="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {{-- End Carousel --}}





    {{-- Category Tabs --}}
    <div class="container-fluid category bg-light">
        <div class="p-3"></div>
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title">
                    <h2>Produk Unggulan</h2>
                    <small>Dapatkan info terbaru untuk produk unggulan kami disini</small>
                </div>
                <div class="col-12 my-2">
                    <ul class="nav nav-tabs flex-nowrap" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="tab-alat-kesehatan" data-bs-toggle="tab"
                                data-bs-target="#alat-kesehatan" type="button" role="tab"
                                aria-controls="alat-kesehatan" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tab-alat-laboratorium" data-bs-toggle="tab"
                                data-bs-target="#alat-laboratorium" type="button" role="tab"
                                aria-controls="alat-laboratorium" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tab-alat-kimia" data-bs-toggle="tab"
                                data-bs-target="#alat-kimia" type="button" role="tab" aria-controls="alat-kimia"
                                aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tab-lainnya" data-bs-toggle="tab" data-bs-target="#lainnya"
                                type="button" role="tab" aria-controls="lainnya"
                                aria-selected="false">Lainnya</button>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="alat-kesehatan" role="tabpanel"
                            aria-labelledby="tab-alat-kesehatan">
                            @if ($featuredMed->count())
                                @include('layouts.featured-product-section', ['items' => $featuredMed])
                            @endif
                        </div>

                        <div class="tab-pane fade" id="alat-laboratorium" role="tabpanel"
                            aria-labelledby="tab-alat-laboratorium">
                            @if ($featuredLab->count())
                                @include('layouts.featured-product-section', ['items' => $featuredLab])
                            @endif
                        </div>

                        <div class="tab-pane fade" id="alat-kimia" role="tabpanel" aria-labelledby="tab-alat-kimia">
                            @if ($featuredChem->count())
                                @include('layouts.featured-product-section', ['items' => $featuredChem])
                            @endif
                        </div>

                        <div class="tab-pane fade" id="lainnya" role="tabpanel" aria-labelledby="tab-lainnya">
                            @if ($featuredOther->count())
                                @include('layouts.featured-product-section', ['items' => $featuredOther])
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 160">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,139.50827 1440,256 V 0 H 0 Z"></path>
    </svg>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <div class="container-fluid">
        <div class="container category">
            <div class="row pb-3 border-bottom border-3">
                <div class="col-12 category-title text-light">
                    <h2>Alat Kesehatan</h2>
                    <small>Temukan produk terbaru dalam etalase alat kesehatan disini</small>
                </div>
            </div>

            <div class="container product">
                <div class="row g-2 mb-2 mt-1 flex-nowrap flex-md-wrap">
                    @if ($medDevices->count())
                        @foreach ($medDevices as $product)
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card card-home bg-outline-light">
                                    <span
                                        class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $product->discount }}%
                                        Off
                                    </span>
                                    <div class="overflow-hidden">
                                        <a href="{{ route('product', [$product->slug]) }}">
                                            <img src="{{ asset('/') . $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}"
                                                class="card-img-top" alt="...">
                                        </a>
                                    </div>
                                    <div class="card-body p-2 text-center d-flex flex-column">
                                        <div class="fs-5 mb-0 product-title">
                                            <a href="{{ route('product', [$product->slug]) }}">
                                                {{ $product->name }}
                                            </a>
                                        </div>
                                        <div class="overflow-hidden product-price">
                                            <div class="slide-top">
                                                <small><span class="d-none d-lg-inline">Harga
                                                        Jual :</span><span class="text-decoration-line-through ms-1">
                                                        @numericToMoneyFormat($product->price)</span></small>
                                                <div class="d-flex align-items-end justify-content-center">
                                                    <div class="pb-2 fs-6 fw-bold">Rp</div>
                                                    <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($product->price - ($product->price * $product->discount) / 100)</div>
                                                </div>
                                            </div>
                                            <a href="{{ route('product', [$product->slug]) }}"
                                                class="btn px-3 px-sm-5 px-md-3 btn-dark mt-5">Lihat
                                                Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>

            <div class="row">
                <div class="col-12 d-flex">
                    <a href="{{ route('products', ['medical' => 1]) }}"
                        class="btn btn-outline-light w-100 py-2 py-md-3 fw-bold fs-5">Lihat
                        semua
                        produk</a>
                </div>
            </div>
        </div>
    </div>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 180">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,58.899128 1440,171.18039 V 320 H 0 Z"></path>
    </svg>
    <div class="container-fluid bg-light">
        <div class="container category">
            <div class="row pb-3 border-bottom border-3 border-secondary">
                <div class="col-12 category-title">
                    <h2>Alat Laboratorium</h2>
                    <small>Temukan produk terbaru dalam etalase alat laboratorium disini</small>
                </div>
            </div>

            <div class="container product">
                <div class="row g-2 mb-2 mt-1 flex-nowrap flex-md-wrap">
                    @if ($labDevices->count())
                        @foreach ($labDevices as $product)
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card card-home bg-outline-dark">
                                    <span
                                        class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $product->discount }}%
                                        Off</span>
                                    <div class="overflow-hidden">
                                        <a href="{{ route('product', [$product->slug]) }}">
                                            <img src="{{ asset('/') . $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}"
                                                class="card-img-top" alt="...">
                                        </a>
                                    </div>
                                    <div class="card-body p-2 text-center d-flex flex-column">
                                        <div class="fs-5 mb-0 product-title">
                                            <a href="{{ route('product', [$product->slug]) }}">{{ $product->name }}
                                            </a>
                                        </div>
                                        <div class="overflow-hidden product-price">
                                            <div class="slide-top">
                                                <small><span class="d-none d-lg-inline">Harga
                                                        Jual :</span><span
                                                        class="text-decoration-line-through ms-1">@numericToMoneyFormat($product->price)</span></small>
                                                <div class="d-flex align-items-end justify-content-center">
                                                    <div class="pb-2 fs-6 fw-bold">Rp</div>
                                                    <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($product->price - ($product->price * $product->discount) / 100)</div>
                                                </div>
                                            </div>
                                            <a href="{{ route('product', [$product->slug]) }}"
                                                class="btn px-3 px-sm-5 px-md-3 btn-light mt-5">Lihat
                                                Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex">
                    <a href="{{ route('products', ['laboratory' => 1]) }}"
                        class="btn btn-outline-dark w-100 py-2 py-md-3 fw-bold fs-5">Lihat
                        semua
                        produk</a>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 160">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,139.50827 1440,256 V 0 H 0 Z"></path>
    </svg>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <div class="container-fluid">
        <div class="container category">
            <div class="row pb-3 border-bottom border-3">
                <div class="col-12 category-title text-light">
                    <h2>Alat Kimia</h2>
                    <small>Temukan produk terbaru dalam etalase alat kimia disini</small>
                </div>
            </div>

            <div class="container product">
                <div class="row g-2 mb-2 mt-1 flex-nowrap flex-md-wrap">
                    @if ($chemDevices->count())
                        @foreach ($chemDevices as $product)
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card card-home bg-outline-light">
                                    <span
                                        class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $product->discount }}%
                                        Off
                                    </span>
                                    <div class="overflow-hidden">
                                        <a href="{{ route('product', [$product->slug]) }}">
                                            <img src="{{ asset('/') . $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}"
                                                class="card-img-top" alt="...">
                                        </a>
                                    </div>
                                    <div class="card-body p-2 text-center d-flex flex-column">
                                        <div class="fs-5 mb-0 product-title">
                                            <a href="{{ route('product', [$product->slug]) }}">
                                                {{ $product->name }}
                                            </a>
                                        </div>
                                        <div class="overflow-hidden product-price">
                                            <div class="slide-top">
                                                <small><span class="d-none d-lg-inline">Harga
                                                        Jual :</span><span class="text-decoration-line-through ms-1">
                                                        @numericToMoneyFormat($product->price)</span></small>
                                                <div class="d-flex align-items-end justify-content-center">
                                                    <div class="pb-2 fs-6 fw-bold">Rp</div>
                                                    <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($product->price - ($product->price * $product->discount) / 100)</div>
                                                </div>
                                            </div>
                                            <a href="{{ route('product', [$product->slug]) }}"
                                                class="btn px-3 px-sm-5 px-md-3 btn-dark mt-5">Lihat
                                                Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>

            <div class="row">
                <div class="col-12 d-flex">
                    <a href="{{ route('products', ['chemical' => 1]) }}"
                        class="btn btn-outline-light w-100 py-2 py-md-3 fw-bold fs-5">Lihat semua
                        produk</a>
                </div>
            </div>
        </div>
    </div>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 180">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,58.899128 1440,171.18039 V 320 H 0 Z"></path>
    </svg>
    <div class="container-fluid bg-light">
        <div class="container category">
            <div class="row pb-3  border-bottom border-3 border-secondary">
                <div class="col-12 category-title">
                    <h2>Lainnya</h2>
                    <small>Temukan produk terbaru dalam etalase lainnya disini</small>
                </div>
            </div>

            <div class="container product">
                <div class="row g-2 mb-2 mt-1 flex-nowrap flex-md-wrap">
                    @if ($otherDevices->count())
                        @foreach ($otherDevices as $product)
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card card-home bg-outline-dark">
                                    <span
                                        class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $product->discount }}%
                                        Off</span>
                                    <div class="overflow-hidden">
                                        <a href="{{ route('product', [$product->slug]) }}">
                                            <img src="{{ asset('/') . $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}"
                                                class="card-img-top" alt="...">
                                        </a>
                                    </div>
                                    <div class="card-body p-2 text-center d-flex flex-column">
                                        <div class="fs-5 mb-0 product-title">
                                            <a href="{{ route('product', [$product->slug]) }}">{{ $product->name }}
                                            </a>
                                        </div>
                                        <div class="overflow-hidden product-price">
                                            <div class="slide-top">
                                                <small><span class="d-none d-lg-inline">Harga
                                                        Jual :</span><span
                                                        class="text-decoration-line-through ms-1">@numericToMoneyFormat($product->price)</span></small>
                                                <div class="d-flex align-items-end justify-content-center">
                                                    <div class="pb-2 fs-6 fw-bold">Rp</div>
                                                    <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($product->price - ($product->price * $product->discount) / 100)</div>
                                                </div>
                                            </div>
                                            <a href="{{ route('product', [$product->slug]) }}"
                                                class="btn px-3 px-sm-5 px-md-3 btn-light mt-5">Lihat
                                                Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>

            <div class="row">
                <div class="col-12 d-flex">
                    <a href="{{ route('products', ['others' => 1]) }}"
                        class="btn btn-outline-dark w-100 py-2 py-md-3 fw-bold fs-5">Lihat semua
                        produk</a>
                </div>
            </div>
        </div>
    </div>
    {{-- End Category Tabs --}}




    <div class="container mt-5 pt-3">
        <div class="row justify-content-center">
            <div class="col-12 category-title text-light">
                <h2>Ingin cari produk lainnya?</h2>
            </div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 mt-2">
                <form action="{{ route('products') }}">
                    <div class="d-flex bg-light rounded-pill px-3 py-2">
                        <button class="btn btn-light bg-light rounded-0 border-0 d-flex align-items-center"
                            type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                        <input type="text" class="form-control border-0 rounded-0" placeholder="Search"
                            name="search">
                    </div>
                </form>
            </div>
            <div class="col-12 mt-2"></div>
            <div class="col-12 col-sm-11 col-md-9 col-lg-7 text-center">
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem, ipsum dolor</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem ipsum dolor sit amet</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem, ipsum</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem ipsum dolor sit amet
                    consectetur</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem, ipsum</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem ipsum dolor sit amet</button>
                <button class="btn btn-outline-light m-1 mb-2 rounded-pill">Lorem ipsum dolor sit amet</button>
            </div>
        </div>
    </div>



    {{-- <div class="container"> --}}
    {{-- <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
            <a class="navbar-brand" href="#">Navbar</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link" href="#item-1">Item 1</a>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                    <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                </nav>
                <a class="nav-link" href="#item-2">Item 2</a>
                <a class="nav-link" href="#item-3">Item 3</a>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                    <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                </nav>
            </nav>
        </nav>

        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0"
            class="text-light">
            <h4 id="item-1">Item 1</h4>
            <p>asdasdasdasdasdas</p>
            <h5 id="item-1-1">Item 1-1</h5>
            <p>asdasdasdasd</p>
            <h5 id="item-1-2">Item 1-2</h5>
            <p>asdasdasdasdasd</p>
            <h4 id="item-2">Item 2</h4>
            <p>bcvxxvbcxvbcvb</p>
            <h4 id="item-3">Item 3</h4>
            <p>cvbcvbkljkxpo;lb</p>
            <h5 id="item-3-1">Item 3-1</h5>
            <p>podjfoiglejkg</p>
            <h5 id="item-3-2">Item 3-2</h5>
            <p>wyeuiwrpoln</p>
        </div> --}}

    {{-- <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        {{ __('You are logged in!') }}
                    </div>
                </div>
            </div>
        </div> --}}
    {{-- <br><br><br> --}}
    {{-- </div> --}}
@endsection
