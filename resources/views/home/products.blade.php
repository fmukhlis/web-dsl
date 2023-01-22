@extends('layouts.app')

@section('custom_css')
    <link href="{{ asset('css/products.css') }}" rel="stylesheet">
@stop

@section('custom_js')
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/products.js') }}" defer></script>
@stop

@section('content')
    <div class="container pt-2 pb-4 product-container">
        <div class="row position-relative">
            {{-- Kolom Filter --}}
            <div id="filter-container" class="d-none d-md-block col-md-4 col-lg-3">
                <div class="filter-modal-backlight"></div>
                <div class="row ps-md-3 filter-bar ps-0">
                    <div class="d-none d-md-block col-12 p-0">
                        <ul class="nav nav-tabs nav-fill px-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active text-start disabled">Filter</button>
                            </li>
                    </div>

                    <div class="col-12 bg-light py-3 border-bottom">
                        <a class="d-flex text-dark text-decoration-none expand-filter " href="">
                            <h5 class="m-0 me-auto">Ketersediaan Barang</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" class="logo-svg">
                                <path
                                    d="m 0.1875,3.5660751 1.1048543,4.1685308 c 0,0 1.9497147,0.1216571 3.2475928,0.9677218 1.3949169,0.909318 3.4913029,4.5450403 3.4913029,4.5450403 0,0 2.020354,-3.6205495 3.38554,-4.5192908 1.324141,-0.8717206 3.552229,-0.9934668 3.552229,-0.9934668 L 15.875,3.5660751 8.03125,7.7474511 Z" />
                            </svg>
                        </a>
                        <div class="filter-dropdown-container collapse">
                            <ul class="nav ms-1 mt-2 flex-column">
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="Peralatan Lab.">
                                        <label class="form-check-label" for="Peralatan Lab.">
                                            Ready Stock
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="Peralatan Lainnya">
                                        <label class="form-check-label" for="Peralatan Lainnya">
                                            Pre-Order
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 bg-light py-3 border-bottom">
                        <a class="d-flex text-dark text-decoration-none expand-filter " href="">
                            <h5 class="m-0 me-auto">Rating</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" class="logo-svg">
                                <path
                                    d="m 0.1875,3.5660751 1.1048543,4.1685308 c 0,0 1.9497147,0.1216571 3.2475928,0.9677218 1.3949169,0.909318 3.4913029,4.5450403 3.4913029,4.5450403 0,0 2.020354,-3.6205495 3.38554,-4.5192908 1.324141,-0.8717206 3.552229,-0.9934668 3.552229,-0.9934668 L 15.875,3.5660751 8.03125,7.7474511 Z" />
                            </svg>
                        </a>
                        <div class="filter-dropdown-container collapse">
                            <ul class="nav ms-1 mt-2 flex-column">
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input my-0 me-2" type="checkbox" value=""
                                            id="Bintang 1">
                                        <label class="form-check-label d-flex align-items-center" for="Bintang 1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input my-0 me-2" type="checkbox" value=""
                                            id="Bintang 2">
                                        <label class="form-check-label d-flex align-items-center" for="Bintang 2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input my-0 me-2" type="checkbox" value=""
                                            id="Bintang 3">
                                        <label class="form-check-label d-flex align-items-center" for="Bintang 3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input my-0 me-2" type="checkbox" value=""
                                            id="Bintang 4">
                                        <label class="form-check-label d-flex align-items-center" for="Bintang 4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input my-0 me-2" type="checkbox" value=""
                                            id="Bintang 5">
                                        <label class="form-check-label d-flex align-items-center" for="Bintang 5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange"
                                                class="logo-svg me-1">
                                                <path
                                                    d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 bg-light py-3 border-bottom">
                        <a class="d-flex text-dark text-decoration-none expand-filter " href="">
                            <h5 class="m-0 me-auto">Kondisi</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" class="logo-svg">
                                <path
                                    d="m 0.1875,3.5660751 1.1048543,4.1685308 c 0,0 1.9497147,0.1216571 3.2475928,0.9677218 1.3949169,0.909318 3.4913029,4.5450403 3.4913029,4.5450403 0,0 2.020354,-3.6205495 3.38554,-4.5192908 1.324141,-0.8717206 3.552229,-0.9934668 3.552229,-0.9934668 L 15.875,3.5660751 8.03125,7.7474511 Z" />
                            </svg>
                        </a>
                        <div class="filter-dropdown-container collapse">
                            <ul class="nav ms-1 mt-2 flex-column">
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="Barang Baru">
                                        <label class="form-check-label" for="Barang Baru">
                                            Baru
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="Barang Bekas">
                                        <label class="form-check-label" for="Barang Bekas">
                                            Bekas
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 bg-light py-3 border-bottom">
                        <a class="d-flex text-dark text-decoration-none expand-filter " href="">
                            <h5 class="m-0 me-auto">Harga</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" class="logo-svg">
                                <path
                                    d="m 0.1875,3.5660751 1.1048543,4.1685308 c 0,0 1.9497147,0.1216571 3.2475928,0.9677218 1.3949169,0.909318 3.4913029,4.5450403 3.4913029,4.5450403 0,0 2.020354,-3.6205495 3.38554,-4.5192908 1.324141,-0.8717206 3.552229,-0.9934668 3.552229,-0.9934668 L 15.875,3.5660751 8.03125,7.7474511 Z" />
                            </svg>
                        </a>
                        <div class="filter-dropdown-container collapse">
                            <ul class="nav mt-3 flex-column">
                                <li>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Minimum"
                                            aria-label="Minimun">
                                    </div>
                                </li>
                                <li>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Maximum"
                                            aria-label="Minimum">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 bg-light pt-2 pb-1">
                        <a class="btn btn-success w-100" href="">Apply</a>
                    </div>

                    <div class="col-12 bg-light pb-2 ">
                        <a id="btn-clear-filter" class="btn btn-secondary w-100" href="">Clear</a>
                    </div>
                </div>
            </div>

            {{-- Kolom Produk --}}
            <div class="col-12 col-md-8 col-lg-9 px-3">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
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
                                    data-bs-target="#alat-kimia" type="button" role="tab"
                                    aria-controls="alat-kimia" aria-selected="false">Alat
                                    Kimia</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="tab-lainnya" data-bs-toggle="tab" data-bs-target="#lainnya"
                                    type="button" role="tab" aria-controls="lainnya"
                                    aria-selected="false">Lainnya</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row g-2">
                    <div class="d-block d-md-none col-12 d-flex justify-content-between border-top border-bottom py-2">
                        <button id="btn-show-filter" type="button" class="btn btn-outline-light col-5">Filter</button>
                        <button type="button" class="btn btn-outline-light col-5 m-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Urutkan
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Relevansi</a></li>
                            <li><a class="dropdown-item" href="#">Terbaru</a></li>
                            <li><a class="dropdown-item" href="#">Terlama</a></li>
                            <li><a class="dropdown-item" href="#">A ... Z</a></li>
                            <li><a class="dropdown-item" href="#">Z ... A</a></li>
                            <li><a class="dropdown-item" href="#">Harga Tertinggi</a></li>
                            <li><a class="dropdown-item" href="#">Harga Terendah</a></li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="alat-kesehatan" role="tabpanel"
                            aria-labelledby="tab-alat-kesehatan">
                            <div class="px-1">
                                <div class="row g-2">
                                    @php
                                        $medDevices = \App\Models\Product::where('category', 'Alat Kesehatan')->paginate(8);
                                    @endphp
                                    @foreach ($medDevices as $product)
                                        <div class="col-12 col-lg-6">
                                            <div class="card">
                                                <div class="row g-0">
                                                    <a href="{{ route('product') }}"
                                                        class="col-4 rounded-start product-thumbnail"
                                                        style="background-image: url('../{{ $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}');">
                                                    </a>
                                                    <div class="col-8">
                                                        <div class="card-body products-info d-flex flex-column py-2">
                                                            <a href="{{ route('product') }}" class="card-link">
                                                                <h5 class="card-title truncate-2 mb-0">{{ $product->name }}
                                                                </h5>
                                                            </a>
                                                            <a href="#"
                                                                class="d-flex m-0 card-link align-items-center">
                                                                <small>Rating : </small>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16" fill="orange"
                                                                    class="logo-svg mx-1">
                                                                    <path
                                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                                </svg>
                                                                <small>--</small>
                                                            </a>
                                                            <div class="d-flex flex-column mt-auto">
                                                                <small class="text-muted"><span
                                                                        class="badge bg-danger p-1 me-1">{{ $product->discount }}%</span><del>@numericToMoneyFormat($product->price)</del></small>
                                                                <span class="total-price">@numericToMoneyFormat($product->price - ($product->price * $product->discount) / 100)</span>
                                                            </div>
                                                            <a class="text-center mt-auto btn btn-outline-primary btn-sm"
                                                                href="{{ route('product') }}">Lihat
                                                                Lebih
                                                                Detail
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    @if ($medDevices->hasPages())
                                        <div class="col-12 mt-5 d-flex overflow-auto justify-content-center">
                                            {{ $otherDevices->onEachSide(2)->links() }}
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="alat-laboratorium" role="tabpanel"
                            aria-labelledby="tab-alat-laboratorium">
                            <div class="px-1">
                                <div class="row g-2">
                                    @php
                                        $labDevices = \App\Models\Product::where('category', 'Alat Laboratorium')->paginate(8);
                                    @endphp
                                    @foreach ($labDevices as $product)
                                        <div class="col-12 col-lg-6">
                                            <div class="card">
                                                <div class="row g-0">
                                                    <a href="{{ route('product') }}"
                                                        class="col-4 rounded-start product-thumbnail"
                                                        style="background-image: url('../{{ $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}');">
                                                    </a>
                                                    <div class="col-8">
                                                        <div class="card-body products-info d-flex flex-column py-2">
                                                            <a href="{{ route('product') }}" class="card-link">
                                                                <h5 class="card-title truncate-2 mb-0">
                                                                    {{ $product->name }}
                                                                </h5>
                                                            </a>
                                                            <a href="#"
                                                                class="d-flex m-0 card-link align-items-center">
                                                                <small>Rating : </small>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16" fill="orange"
                                                                    class="logo-svg mx-1">
                                                                    <path
                                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                                </svg>
                                                                <small>--</small>
                                                            </a>
                                                            <div class="d-flex flex-column mt-auto">
                                                                <small class="text-muted"><span
                                                                        class="badge bg-danger p-1 me-1">{{ $product->discount }}%</span><del>@numericToMoneyFormat($product->price)</del></small>
                                                                <span class="total-price">@numericToMoneyFormat($product->price - ($product->price * $product->discount) / 100)</span>
                                                            </div>
                                                            <a class="text-center mt-auto btn btn-outline-primary btn-sm"
                                                                href="{{ route('product') }}">Lihat
                                                                Lebih
                                                                Detail
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    @if ($labDevices->hasPages())
                                        <div class="col-12 mt-5 d-flex overflow-auto justify-content-center">
                                            {{ $otherDevices->onEachSide(2)->links() }}
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="alat-kimia" role="tabpanel" aria-labelledby="tab-alat-kimia">
                            <div class="px-1">
                                <div class="row g-2">
                                    @php
                                        $chemDevices = \App\Models\Product::where('category', 'Alat Kimia')->paginate(8);
                                    @endphp
                                    @foreach ($chemDevices as $product)
                                        <div class="col-12 col-lg-6">
                                            <div class="card">
                                                <div class="row g-0">
                                                    <a href="{{ route('product') }}"
                                                        class="col-4 rounded-start product-thumbnail"
                                                        style="background-image: url('../{{ $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}');">
                                                    </a>
                                                    <div class="col-8">
                                                        <div class="card-body products-info d-flex flex-column py-2">
                                                            <a href="{{ route('product') }}" class="card-link">
                                                                <h5 class="card-title truncate-2 mb-0">
                                                                    {{ $product->name }}
                                                                </h5>
                                                            </a>
                                                            <a href="#"
                                                                class="d-flex m-0 card-link align-items-center">
                                                                <small>Rating : </small>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16" fill="orange"
                                                                    class="logo-svg mx-1">
                                                                    <path
                                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                                </svg>
                                                                <small>--</small>
                                                            </a>
                                                            <div class="d-flex flex-column mt-auto">
                                                                <small class="text-muted"><span
                                                                        class="badge bg-danger p-1 me-1">{{ $product->discount }}%</span><del>@numericToMoneyFormat($product->price)</del></small>
                                                                <span class="total-price">@numericToMoneyFormat($product->price - ($product->price * $product->discount) / 100)</span>
                                                            </div>
                                                            <a class="text-center mt-auto btn btn-outline-primary btn-sm"
                                                                href="{{ route('product') }}">Lihat
                                                                Lebih
                                                                Detail
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    @if ($chemDevices->hasPages())
                                        <div class="col-12 mt-5 d-flex overflow-auto justify-content-center">
                                            {{ $otherDevices->onEachSide(2)->links() }}
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="lainnya" role="tabpanel" aria-labelledby="tab-lainnya">
                            <div class="px-1">
                                <div class="row g-2">
                                    @php
                                        $otherDevices = \App\Models\Product::where('category', 'Lainnya')->paginate(6);
                                    @endphp
                                    @foreach ($otherDevices as $product)
                                        <div class="col-12 col-lg-6">
                                            <div class="card">
                                                <div class="row g-0">
                                                    <a href="{{ route('product') }}"
                                                        class="col-4 rounded-start product-thumbnail"
                                                        style="background-image: url('../{{ $product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($product->image_path))[0]->getFileName() }}');">
                                                    </a>
                                                    <div class="col-8">
                                                        <div class="card-body products-info d-flex flex-column py-2">
                                                            <a href="{{ route('product') }}" class="card-link">
                                                                <h5 class="card-title truncate-2 mb-0">
                                                                    {{ $product->name }}
                                                                </h5>
                                                            </a>
                                                            <a href="#"
                                                                class="d-flex m-0 card-link align-items-center">
                                                                <small>Rating : </small>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16" fill="orange"
                                                                    class="logo-svg mx-1">
                                                                    <path
                                                                        d="M 7.1215532,1.757177 5.932506,4.5173426 C 5.6730714,5.3874182 5.441377,5.3659218 4.6392719,5.4978375 L 2.1605701,5.9054893 C -0.69383312,6.2750267 -0.41206004,6.251444 1.9334542,7.648332 l 1.811161,1.0786502 c 1.040283,0.4913776 0.9696288,0.623797 0.7694903,1.7226488 l -0.6140786,3.371571 c -0.5925161,2.68624 -0.4577319,2.341694 1.4211256,0.751386 L 7.155927,13.019593 c 0.7601043,-0.746318 0.7933569,-0.731895 1.5558376,-0.08678 l 2.1840724,1.84788 c 1.79294,1.630693 1.611107,1.429848 1.196333,-0.847456 L 11.45575,10.438999 C 11.160665,9.3484382 11.252162,9.3076598 12.130935,8.7842999 L 14.2686,7.5111976 c 2.13814,-1.2367883 2.328547,-1.14753 -0.126195,-1.5512413 L 11.439281,5.5153955 C 10.596048,5.4579746 10.42237,5.4065555 10.097486,4.6529801 L 8.8484063,1.7557166 C 7.9565718,-0.51691667 8.0413644,-0.37800418 7.1215532,1.757177 Z" />
                                                                </svg>
                                                                <small>--</small>
                                                            </a>
                                                            <div class="d-flex flex-column mx-auto">
                                                                <small class="text-muted"><span
                                                                        class="badge bg-danger p-1 me-1">{{ $product->discount }}%</span><del>@numericToMoneyFormat($product->price)</del></small>
                                                                <span class="total-price">@numericToMoneyFormat($product->price - ($product->price * $product->discount) / 100)</span>
                                                            </div>
                                                            <a class="text-center btn btn-outline-primary btn-sm"
                                                                href="{{ route('product') }}">Lihat
                                                                Lebih
                                                                Detail
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    @if ($otherDevices->hasPages())
                                        <div class="col-12 mt-5 d-flex overflow-auto justify-content-center">
                                            {{ $otherDevices->onEachSide(2)->links() }}
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
