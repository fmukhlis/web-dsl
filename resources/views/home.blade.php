@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('custom_js')
@endsection

@section('content')
    {{-- Carousel --}}
    <div id="carousel-indicator" class="carousel carousel-dark slide modified mb-3" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active type-1" data-bs-interval="5000">
                <img src="{{ asset('assets/product_carousel.jpg') }}" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-flex flex-column modified text-light">
                    <div class="title">Galaxy Z Fold4</div>
                    <div class="description">Get Trade-in cashback up to Rp1,000,000 and Free 1 Year Samsung Care+, Full
                        Protection Screen &
                        Device</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <a href="" class="btn btn-outline-light col-7">Buy Now</a>
                    <a href="" class="text-light">Learn more</a>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <a href="">
                    <img src="{{ asset('assets/product_carousel.jpg') }}" class="d-block w-100 carousel-image"
                        alt="...">
                </a>
                <div class="carousel-caption d-none d-md-block modified">
                    <h5>Second slide label</h5>
                    <div>Some representative placeholder content for the first slide.</div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <a href="">
                    <img src="{{ asset('assets/product_carousel.jpg') }}" class="d-block w-100 carousel-image"
                        alt="...">
                </a>
                <div class="carousel-caption d-none d-md-block modified">
                    <h5>Third slide label</h5>
                    <div>Some representative placeholder content for the first slide.</div>
                </div>
            </div>
        </div>
    </div>
    {{-- End Carousel --}}

    {{-- Category Tabs --}}
    <div class="container-fluid pb-5 bg-category-1 pt-1 pb-4">
        <div class="row mb-1">
            <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Alat Kesehatan</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                        role="tab" aria-controls="profile" aria-selected="false">Alat Laboratorium</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                        role="tab" aria-controls="contact" aria-selected="false">Alat Ajaib</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                        role="tab" aria-controls="contact" aria-selected="false">Lainnya</button>
                </li>
            </ul>
        </div>
        <div class="row g-2">
            <div class="col-12">
                <div class="rounded p-3 bg-primary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>

            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
        </div>
    </div>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
    {{-- End Category Tabs --}}


    {{-- Category Tabs --}}
    <div class="container-fluid mb-5 bg-category-2 pt-1 pb-4">
        <div class="row mb-1">
            <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Alat Kesehatan</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                        Laboratorium</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                        type="button" role="tab" aria-controls="contact" aria-selected="false">Alat Ajaib</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                        type="button" role="tab" aria-controls="contact" aria-selected="false">Lainnya</button>
                </li>
            </ul>
        </div>
        <div class="row g-2">
            <div class="col-12">
                <div class="rounded p-3 bg-primary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>

            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
            <div class="col-6">
                <div class="rounded p-3 bg-secondary">Wokowkwowwkok</div>
            </div>
        </div>
    </div>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
    {{-- End Category Tabs --}}


    <div class="container-fluid">
        <div class="row">
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
        </div>
        <br><br><br>
    </div>
@endsection
