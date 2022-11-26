@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('custom_js')
@endsection

@section('content')
    {{-- Carousel --}}
    <div class="container p-md-0 mb-0 mb-lg-4 mt-0 mt-lg-2">
        <div id="carousel-indicator" class="carousel carousel-light slide modified mb-3" data-bs-ride="carousel">
            {{-- Carousel Indicator --}}
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carousel-indicator" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
            </div>
            {{-- Carousel Content --}}
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                    <img src="{{ asset('assets/hh-e-LwYlLzteMxo-unsplash.jpg') }}" class="d-block carousel-image modified"
                        alt="...">
                    <div class="carousel-caption light">
                        <h1 class="title">Galaxy Z Fold 4</h1>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div class="description-small">Device Period : 1-31 October 2022</div>
                        <div class="action">
                            <a href="" class="text-light">Learn more</a>
                            <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="50000">
                    <img src="{{ asset('assets/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg') }}"
                        class="d-block carousel-image" alt="...">
                    <div class="carousel-caption light bg-transparent">
                        <h1 class="title">Galaxy Z Flip 3</h1>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                            consectetur.
                            Quod veritatis optio asperiores voluptatem alias quam provident quas similique ea.</div>
                        <div class="description-small">Device Period : 1-31 October 2022</div>
                        <div class="action">
                            <a href="" class="text-light">Learn more</a>
                            <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="{{ asset('assets/spencer-davis-s4_g2TCyNHM-unsplash.jpg') }}"
                        class="d-block carousel-image modified" alt="...">
                    <div class="carousel-caption dark">
                        <h1 class="title">Galaxy S22 Ultra</h1>
                        <div class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
                            animi.
                            Porro laboriosam alias eum?</div>
                        <div class="description-small">Device Period : 1-31 October 2022</div>
                        <div class="action">
                            <a href="" class="text-dark">Learn more</a>
                            <a href="" class="btn btn-dark offset-md-1">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="{{ asset('assets/spencer-davis-rxTTNlar62o-unsplash.jpg') }}"
                        class="d-block carousel-image modified" alt="...">
                    <div class="carousel-caption light">
                        <h1 class="title">Galaxy Z Fold 4</h1>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div class="description-small">Device Period : 1-31 October 2022</div>
                        <div class="action">
                            <a href="" class="text-light">Learn more</a>
                            <a href="" class="btn btn-light offset-md-1">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="{{ asset('assets/zhen-hu-Xruf17OrkwM-unsplash.jpg') }}" class="d-block carousel-image"
                        alt="...">
                    <div class="carousel-caption dark bg-transparent">
                        <h1 class="title">Galaxy Z Flip 3</h1>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                            consectetur.
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
    </div>
    {{-- End Carousel --}}





    {{-- Category Tabs --}}
    <div class="container-fluid category bg-light">
        <div class="p-3"></div>
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title">
                    <h2>Produk Unggulan</h2>
                    <small>Dapatkan info terbaru disini</small>
                </div>
                <div class="col-12 my-2">
                    <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Sulap</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact"
                                aria-selected="false">Lainnya</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-12 col-md-6">
                    <div class="card highlight">
                        <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                            alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 160">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,139.50827 1440,256 V 0 H 0 Z"></path>
    </svg>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <div class="container-fluid">
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title text-light">
                    <h2>Alat Kesehatan</h2>
                </div>
                <div class="col-12 my-2">
                    <ul class="nav nav-tabs flex-nowrap text-light" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Sulap</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact"
                                aria-selected="false">Lainnya</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-12 col-md-6">
                    <div class="card highlight">
                        <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                            alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>
    </div>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 180">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,58.899128 1440,171.18039 V 320 H 0 Z"></path>
    </svg>
    <div class="container-fluid bg-light">
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title">
                    <h2>Alat Laboratorium</h2>
                </div>
                <div class="col-12 my-2">
                    <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Sulap</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-12 col-md-6">
                    <div class="card highlight">
                        <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                            alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 160">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,139.50827 1440,256 V 0 H 0 Z"></path>
    </svg>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <div class="container-fluid">
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title text-light">
                    <h2>Alat Kimia</h2>
                </div>
                <div class="col-12 my-2">
                    <ul class="nav nav-tabs flex-nowrap text-light" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Sulap</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact"
                                aria-selected="false">Lainnya</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-12 col-md-6">
                    <div class="card highlight">
                        <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                            alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>
    </div>
    {{-- End Category Tabs --}}





    {{-- Category Tabs --}}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 180">
        <path fill="#f8f9fa" fill-opacity="1" d="M 0,58.899128 1440,171.18039 V 320 H 0 Z"></path>
    </svg>
    <div class="container-fluid bg-light">
        <div class="container category">
            <div class="row mb-1">
                <div class="col-12 category-title">
                    <h2>Alat Sulap</h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Kesehatan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Alat
                                Laboratorium</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Alat
                                Kimia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Alat
                                Sulap</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact"
                                aria-selected="false">Lainnya</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-12 col-md-6">
                    <div class="card highlight">
                        <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                            alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card highlight">
                                <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}" class="card-img"
                                    alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>
    </div>
    {{-- End Category Tabs --}}




    <div class="container mt-5 pt-3">
        <div class="row justify-content-center">
            <div class="col-12 category-title text-light">
                <h2>Ingin cari produk lainnya?</h2>
            </div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 mt-2">
                <div class="d-flex bg-light rounded-pill px-3 py-2">
                    <button class="btn btn-light bg-light rounded-0 border-0 me-1">
                        <i class="bi bi-search"></i>
                    </button>
                    <input type="email" class="form-control border-0 rounded-0" id="exampleFormControlInput1"
                        placeholder="Search">
                </div>
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



    <div class="container">
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
        <br><br><br>
    </div>
@endsection
