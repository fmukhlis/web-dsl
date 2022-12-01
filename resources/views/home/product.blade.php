@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/product.css') }}" rel="stylesheet">
@endsection

@section('custom_js')
    <script src="{{ asset('js/product.js') }}" defer></script>
@endsection

@section('content')
    <div class="container py-2 product-container">
        <div class="grid">

            <div class="item-media">
                <div class="sticky-container">
                    <div class="image-container">
                        <img src="{{ asset('assets/robina-weermeijer-NIuGLCC7q54-unsplash.jpg') }}" alt=""
                            class="product-img">
                    </div>

                    <div class="d-flex image-chosen-btn mt-auto justify-content-between">
                        <button class="btn" value="{{ asset('assets/spencer-davis-s4_g2TCyNHM-unsplash.jpg') }}">
                            <img src="{{ asset('assets/spencer-davis-s4_g2TCyNHM-unsplash.jpg') }}" alt=""
                                class="img-thumbnail">
                        </button>
                        <button class="btn" value="{{ asset('assets/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg') }}">
                            <img src="{{ asset('assets/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg') }}" alt=""
                                class="img-thumbnail">
                        </button>
                        <button class="btn" value="{{ asset('assets/robina-weermeijer-NIuGLCC7q54-unsplash.jpg') }}">
                            <img src="{{ asset('assets/robina-weermeijer-NIuGLCC7q54-unsplash.jpg') }}" alt=""
                                class="img-thumbnail">
                        </button>
                        <button class="btn" value="{{ asset('assets/zhen-hu-Xruf17OrkwM-unsplash.jpg') }}">
                            <img src="{{ asset('assets/zhen-hu-Xruf17OrkwM-unsplash.jpg') }}" alt=""
                                class="img-thumbnail">
                        </button>
                    </div>
                    <div class="slideable-effect d-none d-lg-block"></div>
                    <div class="slideable-effect d-none d-lg-block"></div>
                </div>
            </div>



            <div class="item-title bg-light">
                <h1 class="product-title">Hematology Analyzer 5 Diff Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Porro, voluptatibus.</h1>
                <div class="d-flex align-items-center ">
                    <a href="#rating-star-detail" class="border rounded-pill px-2 text-decoration-none stars-container">
                        <div class="rating-stars" style="--rating: 4.3;"
                            aria-label="Rating of this product is 4.3 out of 5."></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 4 16 16" fill="currentColor"
                            class="logo-svg text-secondary">
                            <path
                                d="m 0.1875,3.5660751 1.1048543,4.1685308 c 0,0 1.9497147,0.1216571 3.2475928,0.9677218 1.3949169,0.909318 3.4913029,4.5450403 3.4913029,4.5450403 0,0 2.020354,-3.6205495 3.38554,-4.5192908 1.324141,-0.8717206 3.552229,-0.9934668 3.552229,-0.9934668 L 15.875,3.5660751 8.03125,7.7474511 Z" />
                        </svg>
                    </a>
                    <small class="mx-2">|</small>
                    <a href="#" class="text-decoration-none">
                        108 rating
                    </a>
                    <small class="mx-2">|</small>
                    <a href="#" class="text-decoration-none">
                        17 diskusi
                    </a>
                </div>

                <hr>

                <div class="price-tag ">Rp. 50.000.000 ,-</div>
                <a href="" class="btn btn-success px-5 py-2 me-3 my-2">
                    <div class="h5 m-0">Buy now</div>
                </a>
                <a href="" class="btn btn-outline-secondary px-5 py-2 my-2">
                    <div class="h5 m-0">Add to wishlist</div>
                </a>

                <hr>

                <div class="spec-highlight">
                    <div class="d-flex w-100 border py-2 my-1">
                        <strong class="col flex-grow-0 border-end px-3">Brand</strong>
                        <span class="col px-3">Alkaline</span>
                    </div>
                    <div class="d-flex w-100 border py-2 my-1">
                        <strong class="col flex-grow-0 border-end px-3">Weight</strong>
                        <span class="col px-3">1000 g</span>
                    </div>
                    <div class="d-flex w-100 border py-2 my-1">
                        <strong class="col flex-grow-0 border-end px-3">Category</strong>
                        <span class="col px-3">Alat Kesehatan</span>
                    </div>
                    <div class="d-flex w-100 border py-2 my-1">
                        <strong class="col flex-grow-0 border-end px-3"> dolor sit Blanditiis,
                            voluptatibus.</strong>
                        <span class="col px-3">Loremasdasdasdasda ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam,
                            amet! Voluptatibus ea, corrupti nobis dolor ut quibusdam non id perferendis.</span>
                    </div>
                    <div class="d-flex w-100 border py-2 my-1">
                        <strong class="col flex-grow-0 border-end px-3">Lorem ipsum dolor sit amet.</strong>
                        <span class="col px-3">Laptop, Personal Computer Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Pariatur, veniam!</span>
                    </div>
                </div>
            </div>



            <div class="item-description rounded bg-light">
                <h2 class="product-title border-bottom pb-2 mb-3">Product Description</h2>
                Xiaomi TV Q1E 55" menggunakan resolusi 4K ultra-tinggi menawarkan gambar yang empat kali lebih jernih
                dibandingkan TV FHD biasanya, yang memberikan Anda gambar dengan detail tajam dan kualitas yang lebih baik*.
                Berkat dukungan Dolby Vision® dan HDR 10+, perangkat ini menghasilkan tingkat kecerahan dan warna yang luar
                biasa untuk gambar apa pun*.<br>
                <br>
                Xiaomi TV Q1E 55" Berkat sistem 6 speaker terbaru yang telah ditingkatkan, daya maksimal dari satu speaker
                dapat mencapai hingga 15W. Speaker ini mendukung Dolby Audio + DTS yang dapat memberikan Anda pengalaman
                sinematik yang menghanyutkan dari rumah Anda.<br>
                <br>
                Spesifikasi :<br>
                <br>
                Layar<br>
                Tipe Layar: QLED, 4K<br>
                Resolusi: 4k, 3840 x 2160<br>
                Gamut warna: DCI-P3 97% (umum)<br>
                Kedalaman warna: 1,07 miliar (8-bit + FRC)<br>
                Refresh rate: 60Hz<br>
                MEMC: 60Hz<br>
                Sudut tampilan: 178°(H)/ 178°(V)<br>
                Mendukung Dolby Vision®, HDR10+, HDR10, HLG<br>
                <br>
                Speaker<br>
                Speaker (Output Suara): 15W + 15W<br>
                Mendukung Dolby Audio™ dan DTS-HD®<br>
                <br>
                Sistem operasi<br>
                Android TV™ 10<br>
                <br>
                Prosesor dan Penyimpanan<br>
                MediaTek 9611<br>
                CPU: Quad-core Cortex-A55<br>
                GPU: ARM Mali G52<br>
                RAM: 2GB<br>
                Penyimpanan: 32GB<br>
                <br>
                Desain<br>
                Tampilan tanpa batas, tanpa bezel<br>
                Warna: Abu-abu<br>
                Kaki penyangga: dua kaki penyangga dari logam<br>
                Lampu notifikasi LED<br>
                Tombol Mematikan Suara Mikrofon<br>
                <br>
                Konektivitas<br>
                Bluetooth 5.0<br>
                Wi-Fi 2,4Ghz/5GHz<br>
                HDMI x 3（1 port dengan eARC)<br>
                USB 2.0 x 2<br>
                Composite In (AV): Ya<br>
                Slot CI: Ya<br>
                Ethernet (Lan): Ya<br>
                Output Audio Digital Optik: Ya<br>
                Jack headphone 3,5 mm x 1<br>
                Sistem siaran: DVB-T2/C, DVB-S2<br>
                <br>
                Multimedia<br>
                Format video yang didukung:<br>
                AV1, H.265, H.264, H.263, VP8/VP9, MPEG1/2, MJPEG<br>
                Format audio yang didukung:<br>
                Dolby, DTS, FLAC, AAC, AC4, OGG, PCM/LPCM/ADPCM, MPEG-I/MPEG-II<br>
                Format gambar yang didukung:<br>
                PNG, Gif, JPG, Bmp<br>
                <br>
                Daya & Lingkungan pengoperasian<br>
                Daya: 180W<br>
                Tegangan: 100-240V, 50/60Hz<br>
                Suhu pengoperasian: 0℃～40℃, Kelembapan 20%～80%<br>
                Suhu penyimpanan: -15℃～45℃, Kelembapan relatif kurang dari 80%
            </div>



            <div id="rating-star-detail" class="item-rating">
                <div class="sticky-container text-center rounded">
                    <div class="bg-light rounded pt-3 pb-2">
                        <h2 class="border-bottom pb-2 mx-3 mb-1">Rating</h2>
                        <div class="rating-stars lg mb-1" style="--rating: 4.3;"
                            aria-label="Rating of this product is 4.3 out of 5.">
                        </div>
                        <div>4.3 out of 5</div>
                    </div>
                    <ul class="nav bg-light p-2 text-dark flex-column rounded mt-2 text-start">
                        <li>
                            <a href="" class="text-decoration-none d-flex align-items-center m-2">
                                <div class="col-1">5</div>
                                <div class="progress col-9">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%;"
                                        aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small class="col-2 text-end">75%</small>
                            </a>
                        </li>
                        <li>
                            <a href="" class="text-decoration-none d-flex align-items-center m-2">
                                <div class="col-1">4</div>
                                <div class="progress col-9">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 15%;"
                                        aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small class="col-2 text-end">15%</small>
                            </a>
                        </li>
                        <li>
                            <a href="" class="text-decoration-none d-flex align-items-center m-2">
                                <div class="col-1">3</div>
                                <div class="progress col-9">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 0%;"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small class="col-2 text-end">0%</small>
                            </a>
                        </li>
                        <li>
                            <a href="" class="text-decoration-none d-flex align-items-center m-2">
                                <div class="col-1">2</div>
                                <div class="progress col-9">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 3%;"
                                        aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small class="col-2 text-end">3%</small>
                            </a>
                        </li>
                        <li>
                            <a href="" class="text-decoration-none d-flex align-items-center m-2">
                                <div class="col-1">1</div>
                                <div class="progress col-9">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 7%;"
                                        aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small class="col-2 text-end">7%</small>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>



            <div class="item-rating-filter rounded bg-light">
                <div class="row gy-2 align-items-center">
                    <div class="col-12 col-lg-2 mb-1 mb-lg-0">
                        <h2 class="m-0 text-center text-lg-start">Rating Filter</h2>
                    </div>
                    <div class="col-12 col-lg-2 text-center text-lg-end">
                        <label for="sort_by">Filter by</label>
                    </div>
                    <div class="d-lg-none col-12">
                        <hr class="m-0">
                    </div>
                    <div class="col-12 col-lg-2 ">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>All stars</option>
                            <option value="1">5 stars</option>
                            <option value="2">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="3">2 stars</option>
                            <option value="3">1 stars</option>
                        </select>
                    </div>
                    <div class="col-12 col-lg-3 pe-lg-2">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Text, image, video reviews</option>
                            <option value="1">Image & video reviews only</option>
                        </select>
                    </div>
                    <div class="col-12 col-lg-1 text-center text-lg-end">
                        <label for="sort_by">Sort by</label>
                    </div>
                    <div class="d-lg-none col-12">
                        <hr class="m-0">
                    </div>
                    <div class="col-12 col-lg-2">
                        <select class="form-select" aria-label="Default select example" id="sort_by">
                            <option selected>Top reviews</option>
                            <option value="1">Latest reviews</option>
                        </select>
                    </div>
                </div>
            </div>



            <div class="item-review rounded">
                <div class="container">
                    <div class="row gy-2">
                        <div class="col-12 border rounded px-2 py-3 bg-light">
                            <h2 class="m-0 text-center">Customer Review</h2>
                        </div>
                        <div class="col-12 border rounded p-2 d-flex flex-column bg-light">
                            {{-- User's Information --}}
                            <div class="d-flex align-items-start">
                                <img src="{{ asset('assets/profile-picture.jpeg') }}" alt=""
                                    class="border border-2 rounded-circle me-2">

                                <div class="d-flex flex-wrap w-100">
                                    <div class="d-flex flex-column pe-3 me-auto">
                                        <div class="user-rating-name">Fajar Mukhlis I.</div>
                                        <small class="text-muted">Reviewed on February 09, 2022</small>
                                    </div>

                                    <div class="text-md-end d-flex flex-column">
                                        <div class="d-flex flex-wrap star-review ms-auto text-warning align-items-center">
                                            <small class="me-2 text-dark">
                                                234234 People found this helpful
                                            </small>
                                            <div class="d-flex pb-star border-start ps-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.9960938 0.10351562 C 7.7908361 0.12106224 7.5809993 0.6902219 7.1210938 1.7578125 L 5.9335938 4.5175781 C 5.6741591 5.3876537 5.440777 5.3661312 4.6386719 5.4980469 L 2.1601562 5.90625 C -0.69424695 6.2757874 -0.41192045 6.2515495 1.9335938 7.6484375 L 3.7441406 8.7265625 C 4.7844236 9.2179401 4.7138104 9.3503664 4.5136719 10.449219 L 3.9003906 13.822266 C 3.3078745 16.508506 3.4434081 16.162574 5.3222656 14.572266 L 7.15625 13.019531 C 7.916354 12.273213 7.9504106 12.288479 8.7128906 12.933594 L 10.896484 14.78125 C 12.689424 16.411943 12.506571 16.210898 12.091797 13.933594 L 11.455078 10.439453 C 11.159993 9.3488918 11.252086 9.3085161 12.130859 8.7851562 L 14.269531 7.5117188 C 16.407671 6.2749305 16.59732 6.3646488 14.142578 5.9609375 L 11.439453 5.515625 C 10.59622 5.458204 10.42254 5.4059191 10.097656 4.6523438 L 8.8476562 1.7558594 C 8.4017393 0.61954273 8.2013514 0.085969012 7.9960938 0.10351562 z M 8 2.4882812 C 8.1430883 2.4760492 8.2848474 2.8484807 8.5957031 3.640625 L 9.4667969 5.6601562 C 9.6932787 6.1854856 9.8145128 6.2216897 10.402344 6.2617188 L 12.285156 6.5703125 C 13.996404 6.8517459 13.863578 6.790159 12.373047 7.6523438 L 10.882812 8.5390625 C 10.270207 8.903905 10.206401 8.9331119 10.412109 9.6933594 L 10.857422 12.128906 C 11.146567 13.71645 11.273324 13.857485 10.023438 12.720703 L 8.5 11.431641 C 7.9684632 10.981926 7.9458959 10.971917 7.4160156 11.492188 L 6.1367188 12.574219 C 4.8269376 13.682848 4.733432 13.9234 5.1464844 12.050781 L 5.5742188 9.7011719 C 5.7137385 8.9351446 5.762307 8.842547 5.0371094 8.5 L 3.7753906 7.7480469 C 2.1402955 6.7742542 1.9437442 6.7908134 3.9335938 6.5332031 L 5.6601562 6.2480469 C 6.2193164 6.1560863 6.381644 6.1709966 6.5625 5.5644531 L 7.390625 3.640625 C 7.7112323 2.8963908 7.8569117 2.5005133 8 2.4882812 z " />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.9960938 0.10351562 C 7.7908361 0.12106224 7.5809993 0.6902219 7.1210938 1.7578125 L 5.9335938 4.5175781 C 5.6741591 5.3876537 5.440777 5.3661312 4.6386719 5.4980469 L 2.1601562 5.90625 C -0.69424695 6.2757874 -0.41192045 6.2515495 1.9335938 7.6484375 L 3.7441406 8.7265625 C 4.7844236 9.2179401 4.7138104 9.3503664 4.5136719 10.449219 L 3.9003906 13.822266 C 3.3078745 16.508506 3.4434081 16.162574 5.3222656 14.572266 L 7.15625 13.019531 C 7.916354 12.273213 7.9504106 12.288479 8.7128906 12.933594 L 10.896484 14.78125 C 12.689424 16.411943 12.506571 16.210898 12.091797 13.933594 L 11.455078 10.439453 C 11.159993 9.3488918 11.252086 9.3085161 12.130859 8.7851562 L 14.269531 7.5117188 C 16.407671 6.2749305 16.59732 6.3646488 14.142578 5.9609375 L 11.439453 5.515625 C 10.59622 5.458204 10.42254 5.4059191 10.097656 4.6523438 L 8.8476562 1.7558594 C 8.4017393 0.61954273 8.2013514 0.085969012 7.9960938 0.10351562 z M 8 2.4882812 C 8.1430883 2.4760492 8.2848474 2.8484807 8.5957031 3.640625 L 9.4667969 5.6601562 C 9.6932787 6.1854856 9.8145128 6.2216897 10.402344 6.2617188 L 12.285156 6.5703125 C 13.996404 6.8517459 13.863578 6.790159 12.373047 7.6523438 L 10.882812 8.5390625 C 10.270207 8.903905 10.206401 8.9331119 10.412109 9.6933594 L 10.857422 12.128906 C 11.146567 13.71645 11.273324 13.857485 10.023438 12.720703 L 8.5 11.431641 C 7.9684632 10.981926 7.9458959 10.971917 7.4160156 11.492188 L 6.1367188 12.574219 C 4.8269376 13.682848 4.733432 13.9234 5.1464844 12.050781 L 5.5742188 9.7011719 C 5.7137385 8.9351446 5.762307 8.842547 5.0371094 8.5 L 3.7753906 7.7480469 C 2.1402955 6.7742542 1.9437442 6.7908134 3.9335938 6.5332031 L 5.6601562 6.2480469 C 6.2193164 6.1560863 6.381644 6.1709966 6.5625 5.5644531 L 7.390625 3.640625 C 7.7112323 2.8963908 7.8569117 2.5005133 8 2.4882812 z " />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.9960938 0.10351562 C 7.7908361 0.12106224 7.5809993 0.6902219 7.1210938 1.7578125 L 5.9335938 4.5175781 C 5.6741591 5.3876537 5.440777 5.3661312 4.6386719 5.4980469 L 2.1601562 5.90625 C -0.69424695 6.2757874 -0.41192045 6.2515495 1.9335938 7.6484375 L 3.7441406 8.7265625 C 4.7844236 9.2179401 4.7138104 9.3503664 4.5136719 10.449219 L 3.9003906 13.822266 C 3.3078745 16.508506 3.4434081 16.162574 5.3222656 14.572266 L 7.15625 13.019531 C 7.916354 12.273213 7.9504106 12.288479 8.7128906 12.933594 L 10.896484 14.78125 C 12.689424 16.411943 12.506571 16.210898 12.091797 13.933594 L 11.455078 10.439453 C 11.159993 9.3488918 11.252086 9.3085161 12.130859 8.7851562 L 14.269531 7.5117188 C 16.407671 6.2749305 16.59732 6.3646488 14.142578 5.9609375 L 11.439453 5.515625 C 10.59622 5.458204 10.42254 5.4059191 10.097656 4.6523438 L 8.8476562 1.7558594 C 8.4017393 0.61954273 8.2013514 0.085969012 7.9960938 0.10351562 z M 8 2.4882812 C 8.1430883 2.4760492 8.2848474 2.8484807 8.5957031 3.640625 L 9.4667969 5.6601562 C 9.6932787 6.1854856 9.8145128 6.2216897 10.402344 6.2617188 L 12.285156 6.5703125 C 13.996404 6.8517459 13.863578 6.790159 12.373047 7.6523438 L 10.882812 8.5390625 C 10.270207 8.903905 10.206401 8.9331119 10.412109 9.6933594 L 10.857422 12.128906 C 11.146567 13.71645 11.273324 13.857485 10.023438 12.720703 L 8.5 11.431641 C 7.9684632 10.981926 7.9458959 10.971917 7.4160156 11.492188 L 6.1367188 12.574219 C 4.8269376 13.682848 4.733432 13.9234 5.1464844 12.050781 L 5.5742188 9.7011719 C 5.7137385 8.9351446 5.762307 8.842547 5.0371094 8.5 L 3.7753906 7.7480469 C 2.1402955 6.7742542 1.9437442 6.7908134 3.9335938 6.5332031 L 5.6601562 6.2480469 C 6.2193164 6.1560863 6.381644 6.1709966 6.5625 5.5644531 L 7.390625 3.640625 C 7.7112323 2.8963908 7.8569117 2.5005133 8 2.4882812 z " />
                                                </svg>
                                            </div>
                                        </div>

                                        <small class="text-muted mt-auto">Style : Type 3 Diff - Orange</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-2">

                            {{-- User's Review --}}
                            <div class="d-flex">
                                <div class="d-flex flex-column pe-2 me-2 border-end">
                                    <button class="btn btn-outline-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="logo-svg-2">
                                            <path
                                                d="M 5.5871166,0.555407 3.8743607,2.983708 2.9338473,3.537029 2.7445427,3.829457 l 0.2884641,11.410436 0.030048,0.0172 H 11.707967 L 15.893702,7.421738 15.145497,4.993436 H 8.558899 L 7.89483,0.69302 Z M 1.7469374,5.383341 1.6928512,5.469349 0.1062981,5.51522 v 9.33477 H 2.224707 Z" />
                                        </svg>
                                    </button>
                                    <button class="btn btn-outline-secondary mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="logo-svg-2">
                                            <path
                                                d="m 10.359252,15.320676 1.712756,-2.428301 0.940514,-0.553321 0.189304,-0.292428 -0.288464,-11.41043637 -0.03005,-0.0172 H 4.2384022 L 0.05266719,8.4543452 0.80087219,10.882647 H 7.3874702 l 0.6640688,4.300416 z m 3.84018,-4.827934 0.05409,-0.08601 1.586553,-0.04587 V 1.0260926 h -2.118409 z" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="d-flex flex-column">
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum rem distinctio
                                        magni
                                        eos veritatis esse fugiat quis atque debitis accusamus corrupti quam, animi vel
                                        iste!
                                        Doloremque laudantium veritatis at placeat sunt, aperiam voluptas culpa, cum eum
                                        quam
                                        quis laboriosam. Beatae voluptates quod dicta temporibus, deleniti eum ratione
                                        nostrum
                                        doloribus.
                                    </div>
                                    <div class="mb-2 mt-1 d-flex flex-wrap">
                                        <a href="#">
                                            <img src="{{ asset('assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg') }}"
                                                alt="" class="img-review rounded">
                                        </a>
                                        <a href="#">
                                            <img src="{{ asset('assets/ousa-chea-gKUC4TMhOiY-unsplash.jpg') }}"
                                                alt="" class="img-review rounded">
                                        </a>
                                        <a href="#">
                                            <img src="{{ asset('assets/julia-zyablova-S1v7hVUiCg0-unsplash.jpg') }}"
                                                alt="" class="img-review rounded">
                                        </a>
                                        <a href="#">
                                            <img src="{{ asset('assets/robina-weermeijer-NIuGLCC7q54-unsplash.jpg') }}"
                                                alt="" class="img-review rounded">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 border rounded p-2 d-flex flex-column bg-light">
                            {{-- User's Information --}}
                            <div class="d-flex align-items-start">
                                <img src="{{ asset('assets/profile-picture.jpeg') }}" alt=""
                                    class="border border-2 rounded-circle me-2">

                                <div class="d-flex flex-wrap w-100">
                                    <div class="d-flex flex-column pe-3 me-auto">
                                        <div class="user-rating-name">Mukhlis Dharmawan R.</div>
                                        <small class="text-muted">Reviewed on February 01, 2021</small>
                                    </div>

                                    <div class="text-md-end d-flex flex-column">
                                        <div class="d-flex flex-wrap star-review ms-auto text-warning align-items-center">
                                            <small class="me-2 text-dark">
                                                1345 People found this helpful
                                            </small>
                                            <div class="d-flex pb-star border-start ps-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                    fill="currentColor" class="logo-svg-star-rating">
                                                    <path
                                                        d="M 7.9960938 0.10351562 C 7.7908361 0.12106224 7.5809993 0.6902219 7.1210938 1.7578125 L 5.9335938 4.5175781 C 5.6741591 5.3876537 5.440777 5.3661312 4.6386719 5.4980469 L 2.1601562 5.90625 C -0.69424695 6.2757874 -0.41192045 6.2515495 1.9335938 7.6484375 L 3.7441406 8.7265625 C 4.7844236 9.2179401 4.7138104 9.3503664 4.5136719 10.449219 L 3.9003906 13.822266 C 3.3078745 16.508506 3.4434081 16.162574 5.3222656 14.572266 L 7.15625 13.019531 C 7.916354 12.273213 7.9504106 12.288479 8.7128906 12.933594 L 10.896484 14.78125 C 12.689424 16.411943 12.506571 16.210898 12.091797 13.933594 L 11.455078 10.439453 C 11.159993 9.3488918 11.252086 9.3085161 12.130859 8.7851562 L 14.269531 7.5117188 C 16.407671 6.2749305 16.59732 6.3646488 14.142578 5.9609375 L 11.439453 5.515625 C 10.59622 5.458204 10.42254 5.4059191 10.097656 4.6523438 L 8.8476562 1.7558594 C 8.4017393 0.61954273 8.2013514 0.085969012 7.9960938 0.10351562 z M 8 2.4882812 C 8.1430883 2.4760492 8.2848474 2.8484807 8.5957031 3.640625 L 9.4667969 5.6601562 C 9.6932787 6.1854856 9.8145128 6.2216897 10.402344 6.2617188 L 12.285156 6.5703125 C 13.996404 6.8517459 13.863578 6.790159 12.373047 7.6523438 L 10.882812 8.5390625 C 10.270207 8.903905 10.206401 8.9331119 10.412109 9.6933594 L 10.857422 12.128906 C 11.146567 13.71645 11.273324 13.857485 10.023438 12.720703 L 8.5 11.431641 C 7.9684632 10.981926 7.9458959 10.971917 7.4160156 11.492188 L 6.1367188 12.574219 C 4.8269376 13.682848 4.733432 13.9234 5.1464844 12.050781 L 5.5742188 9.7011719 C 5.7137385 8.9351446 5.762307 8.842547 5.0371094 8.5 L 3.7753906 7.7480469 C 2.1402955 6.7742542 1.9437442 6.7908134 3.9335938 6.5332031 L 5.6601562 6.2480469 C 6.2193164 6.1560863 6.381644 6.1709966 6.5625 5.5644531 L 7.390625 3.640625 C 7.7112323 2.8963908 7.8569117 2.5005133 8 2.4882812 z " />
                                                </svg>
                                            </div>
                                        </div>

                                        <small class="text-muted mt-auto">Style : Type 3 Diff - Orange</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-2">

                            {{-- User's Review --}}
                            <div class="d-flex">
                                <div class="d-flex flex-column pe-2 me-2 border-end">
                                    <button class="btn btn-outline-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="logo-svg-2">
                                            <path
                                                d="M 5.5871166,0.555407 3.8743607,2.983708 2.9338473,3.537029 2.7445427,3.829457 l 0.2884641,11.410436 0.030048,0.0172 H 11.707967 L 15.893702,7.421738 15.145497,4.993436 H 8.558899 L 7.89483,0.69302 Z M 1.7469374,5.383341 1.6928512,5.469349 0.1062981,5.51522 v 9.33477 H 2.224707 Z" />
                                        </svg>
                                    </button>
                                    <button class="btn btn-outline-secondary mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="logo-svg-2">
                                            <path
                                                d="m 10.359252,15.320676 1.712756,-2.428301 0.940514,-0.553321 0.189304,-0.292428 -0.288464,-11.41043637 -0.03005,-0.0172 H 4.2384022 L 0.05266719,8.4543452 0.80087219,10.882647 H 7.3874702 l 0.6640688,4.300416 z m 3.84018,-4.827934 0.05409,-0.08601 1.586553,-0.04587 V 1.0260926 h -2.118409 z" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="d-flex flex-column">
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum rem distinctio
                                        magni
                                        eos veritatis esseatae voluptates quod dicta temporibus, deleniti eum ratione
                                        nostrum
                                        doloribus.
                                    </div>
                                    <div class="mb-2 mt-1 d-flex flex-wrap">
                                        <a href="#">
                                            <img src="{{ asset('assets/julia-zyablova-S1v7hVUiCg0-unsplash.jpg') }}"
                                                alt="" class="img-review rounded">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- If there's no customer review for this product yet --}}
                        <div class="col-12 border rounded p-2 d-flex flex-column bg-light">
                            <div class="text-center py-2">
                                There is no review for this product yet.
                            </div>
                            <hr class="my-1">

                            <div class="text-center my-2">
                                <div class="h5">
                                    <strong>Review this product</strong>
                                </div>
                                <a href="" class="btn btn-secondary py-1">Write a customer review</a>
                            </div>
                        </div>
                        <div
                            class="col-12 flex-wrap border rounded px-3 py-2 d-flex justify-content-center justify-content-md-between align-items-center bg-light">
                            <div class="h5 m-md-0">
                                <strong>Review this product</strong>
                            </div>
                            <a href="" class="btn btn-secondary py-1">Write a customer review</a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="item-discussion bg-light rounded">
                <div class="container">
                    <div class="row">
                        <div class="col-12 p-0">
                            <h2 class="border-bottom pb-2 mb-1">Product Discussion</h2>
                        </div>

                        <div class="col-12 p-0 border rounded d-flex flex-column my-1">
                            <div class="d-flex flex-column">
                                <div class="d-flex px-2 px-md-3">
                                    <div
                                        class="d-flex align-items-center flex-column pe-2 pe-md-3 me-2 me-md-3 border-end">
                                        <button class="btn btn-secondary mt-2 mt-md-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                fill="currentColor" class="logo-svg-2">
                                                <path
                                                    d="M 2.8340186,13.154049 0.04398484,12.027118 7.5580801,2.8726213 l 7.8058869,7.2027267 0.501951,2.390791 -2.116646,0.67105 -5.9266111,-3.065251 z" />
                                            </svg>
                                        </button>
                                        <div class="my-2">
                                            <strong>92</strong>
                                        </div>
                                        <button class="btn btn-outline-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                fill="currentColor" class="logo-svg-2">
                                                <path
                                                    d="m 13.075884,2.8726213 2.790034,1.126931 -7.5140953,9.1544967 -7.80588686,-7.2027267 -0.501951,-2.390791 2.11664596,-0.67105 5.9266111,3.065251 z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="d-flex flex-column my-1 my-md-2 pt-0 pt-md-1">
                                        <strong>Question</strong>
                                        <a href="#" class="text-decoration-none">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
                                            repellendus
                                            asperiores maxime corrupti facilis nisi. Qui consequatur vero praesentium non
                                            maxime
                                            commodi deleniti ? Thnx
                                        </a>
                                        <small class="text-muted mb-3">Asked on August 17, 2022 by Sikocik123</small>

                                        <strong>Answer</strong>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente
                                            nesciunt
                                            necessitatibus voluptas consectetur. Sequi.
                                        </div>
                                        <small class="text-muted mb-1">By Sikocik123 on August 17, 2022</small>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam quo fuga
                                            suscipit, pariatur ad ex doloribus saepe! Eius ea tempora at quae ducimus, aut
                                            deleniti exercitationem provident esse officiis illum? Eaque, doloribus.
                                        </div>
                                        <small class="text-muted mb-1">By Sigg99 on August 17, 2022</small>
                                        <div>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quidem
                                            doloremque
                                            quas libero necessitatibus error blanditiis soluta consequatur dolorum, et cum
                                            sed
                                            porro ea dicta! Error omnis exercitationem incidunt consequatur nihil, beatae
                                            nostrum adipisci a eum fugit excepturi molestiae sit dolorem veritatis culpa
                                            sapiente dolores, ex aspernatur sed labore doloribus! Odit laboriosam at
                                            excepturi
                                            blanditiis! Maiores molestias aliquid facere ut ratione quaerat esse iure nemo
                                            in
                                            assumenda. Asperiores atque quo molestiae, accusamus deleniti earum voluptatum
                                            esse
                                            ex eum libero, molestias quod. In rerum sed unde voluptatibus quidem!
                                        </div>
                                        <small class="text-muted mb-1">By Sikocik123 on August 17, 2022</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- If there's no discussion for this product yet --}}
                        <div class="col-12 px-3 py-2 border rounded d-flex flex-column my-1">
                            <div class="text-center py-2">
                                There is no discussion for this product yet.
                            </div>
                            <hr class="my-1">

                            <div class="text-center my-2">
                                <div class="h5">
                                    <strong>Have any question for this product ?</strong>
                                </div>
                                <a href="" class="btn btn-secondary py-1">Ask anything about this product</a>
                            </div>
                        </div>


                        <div
                            class="col-12 px-3 py-2 border rounded flex-wrap justify-content-center justify-content-md-between align-items-center d-flex my-1">
                            <div class="h5 m-md-0 text-center">
                                <strong>Have any question for this product ?</strong>
                            </div>
                            <a href="" class="btn btn-secondary py-1">Ask anything about this product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
