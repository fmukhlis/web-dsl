@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('custom_js')
@endsection

@section('content')
    {{-- Carousel --}}
    <div id="carousel-indicator" class="carousel carousel-light slide modified mb-3" data-bs-ride="carousel">
        {{-- Carousel Indicator --}}
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        {{-- Carousel Content --}}
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <img src="{{ asset('assets/hh-e-LwYlLzteMxo-unsplash.jpg') }}" class="d-block carousel-image"
                    alt="...">
                <div class="carousel-caption light">
                    <div class="title">Galaxy Z Fold 4</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <div class="action">
                        <a href="" class="text-light">Learn more</a>
                        <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="{{ asset('assets/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg') }}"
                    class="d-block carousel-image height-fit" alt="...">
                <div class="carousel-caption light bg-transparent">
                    <div class="title">Galaxy Z Flip 3</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, consectetur.
                        Quod veritatis optio asperiores voluptatem alias quam provident quas similique ea.</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <div class="action">
                        <a href="" class="text-light">Learn more</a>
                        <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="{{ asset('assets/spencer-davis-s4_g2TCyNHM-unsplash.jpg') }}" class="d-block carousel-image"
                    alt="...">
                <div class="carousel-caption dark">
                    <div class="title">Galaxy S22 Ultra</div>
                    <div class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, animi.
                        Porro laboriosam alias eum?</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <div class="action">
                        <a href="" class="text-dark">Learn more</a>
                        <a href="" class="btn btn-dark offset-md-1">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="{{ asset('assets/spencer-davis-rxTTNlar62o-unsplash.jpg') }}" class="d-block carousel-image"
                    alt="...">
                <div class="carousel-caption light">
                    <div class="title">Galaxy Z Fold 4</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <div class="action">
                        <a href="" class="text-light">Learn more</a>
                        <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="{{ asset('assets/zhen-hu-Xruf17OrkwM-unsplash.jpg') }}" class="d-block carousel-image height-fit"
                    alt="...">
                <div class="carousel-caption dark bg-transparent">
                    <div class="title">Galaxy Z Flip 3</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, consectetur.
                        Quod veritatis optio asperiores voluptatem alias quam provident quas similique ea.</div>
                    <div class="description-small">Device Period : 1-31 October 2022</div>
                    <div class="action">
                        <a href="" class="text-dark">Learn more</a>
                        <a href="" class="btn btn-dark offset-md-1">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        {{-- Button Prev & Next  --}}
        <button class="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#carousel-indicator"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#carousel-indicator"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
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
