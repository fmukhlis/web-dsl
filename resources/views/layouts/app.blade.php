<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/navbar.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/navbar.css') }}" rel="stylesheet">

    @yield('custom_css')

</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid px-4">
                <button class="btn btn-outline-light sign-up-nav-btn" type="button">Shop</button>
                <a class="navbar-brand" href="#">DSL.</a>
                <button class="navbar-toggler" type="button" aria-controls="navbar-menu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div class="bg-modal collapse"></div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" role="button" aria-expanded="false">
                                Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M 0.00294574,6.6362347 1.3445605,4.1207915 8.2017033,11.568477 14.462573,3.5289225 16.002945,7.5240383 8.1023243,13.837308 Z"
                                        id="path1117" />
                                </svg>
                            </a>
                            <div class="dropdown-menu-container type-2 d-none">
                                <ul class="dropdown-menu border-end border-2" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                                <path
                                                    d="M 2.9984948,0.03309117 V 2.3931627 l 1.8109364,-0.023751 1.1870945,-0.738467 h 6.7276163 v -0.00648 h 0.0023 V 1.1213555 h -0.0023 V 1.0371471 H 5.9404248 L 5.563427,0.03309117 Z M 3.4832064,1.3243287 H 12.234944 V 1.5920772 H 5.9965257 L 4.8094312,2.3283847 3.4832064,2.3434997 Z M 5.9965257,1.7497031 4.8094312,2.48817 2.4913429,2.51408 3.0635719,8.2922605 h 4.7708184 v 2.2693845 h -5.062543 v 0.0022 H 2.1098571 c -0.14667,0 -0.2647962,0.113664 -0.2647962,0.254793 v 0.360597 h -0.00223 v 1.919583 H 0.53903233 c -0.27511351,0 -0.49817563,0.212471 -0.49817563,0.477197 v 1.910944 c 0,0.26472 0.22306212,0.477196 0.49817563,0.477196 H 3.6358009 c 0.2751134,0 0.4959318,-0.212476 0.4959318,-0.477196 v -1.91094 c 0,-0.264722 -0.2208184,-0.477197 -0.4959318,-0.477197 H 2.2018624 v -2.191654 h 5.6325279 v 2.191649 H 6.4543089 c -0.2751136,0 -0.4981757,0.212475 -0.4981757,0.477198 v 1.910944 c 0,0.264719 0.2230621,0.477196 0.4981757,0.477196 h 3.0967683 c 0.2751137,0 0.4959318,-0.212477 0.4959318,-0.477196 v -1.910944 c 0,-0.264723 -0.2208181,-0.477198 -0.4959318,-0.477198 H 8.1934361 V 10.907149 H 13.758643 V 13.0988 h -1.389056 c -0.275114,0 -0.498177,0.212474 -0.498177,0.477197 v 1.910944 c 0,0.264719 0.223063,0.477196 0.498177,0.477196 h 3.096766 c 0.275115,0 0.498177,-0.212477 0.498177,-0.477196 v -1.910944 c 0,-0.264723 -0.223062,-0.477197 -0.498177,-0.477197 H 14.11769 v -2.306092 c -0.01351,-0.128774 -0.12505,-0.228882 -0.262553,-0.228882 h -0.661992 v -0.0022 H 8.1934361 V 8.2922618 H 12.724142 L 13.374914,1.7497031 Z M 7.933128,2.9567296 C 9.1239834,2.9565839 10.090417,3.8856849 10.089645,5.0317787 10.08956,6.1772902 9.1233775,7.1048133 7.933128,7.1046686 6.743484,7.1039887 5.7789392,6.1767076 5.7788543,5.0317787 5.7780828,3.8862677 6.7428784,2.9574085 7.933128,2.9567296 Z M 7.4259761,3.5850742 7.558374,3.7664521 V 4.6906155 L 6.8537471,5.8134309 C 6.679387,6.0766361 6.6509072,6.0725423 6.9726809,6.0725423 H 8.9182593 C 9.2553904,6.0974532 9.1563364,6.038504 8.9945553,5.8134309 L 8.1777279,4.6755008 8.1552875,3.7772484 8.2742213,3.5850742 Z m 0.7427756,1.5244379 c 0.061663,-6.833e-4 0.1270302,0.013308 0.1997192,0.049663 L 8.9406997,5.9645793 6.900872,5.9667409 7.4057797,5.1742924 c 0.3107902,0.204106 0.4957673,-0.061818 0.762972,-0.06478 z M 0.68713874,13.414028 H 3.4921826 c 0.1466703,0 0.2647963,0.113662 0.2647963,0.254791 v 1.731728 c 0,0.141128 -0.118126,0.254793 -0.2647963,0.254793 H 0.68713874 c -0.14667021,0 -0.26479609,-0.113665 -0.26479609,-0.254793 v -1.731728 c 0,-0.141129 0.11812588,-0.254791 0.26479609,-0.254791 z m 5.87712796,0 h 2.8050439 c 0.1466699,0 0.264796,0.113662 0.264796,0.254791 v 1.731728 c 0,0.141128 -0.1181261,0.254793 -0.264796,0.254793 H 6.5642667 c -0.1466703,0 -0.2647962,-0.113665 -0.2647962,-0.254793 v -1.731728 c 0,-0.141129 0.1181259,-0.254791 0.2647962,-0.254791 z m 5.9668893,0 H 15.3362 c 0.14667,0 0.264798,0.113662 0.264798,0.254791 v 1.731728 c 0,0.141128 -0.118128,0.254793 -0.264798,0.254793 h -2.805044 c -0.14667,0 -0.264796,-0.113665 -0.264796,-0.254793 v -1.731728 c 0,-0.141129 0.118126,-0.254791 0.264796,-0.254791 z" />
                                            </svg>
                                            <div class="dropdown-item-caption">
                                                Action 1
                                                <small>This is the first action</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path
                                                    d="m 7.4104803,0.13635315 a 7.8846722,7.8846722 0 0 0 -7.29478929,7.86163505 7.8846722,7.8846722 0 1 0 15.76861799,0 7.8846722,7.8846722 0 0 0 -8.4738287,-7.86163505 z m 0.5895196,0.649296 A 7.2148491,7.2148491 0 0 1 15.214401,8.0000494 7.2148491,7.2148491 0 0 1 7.9999999,15.21445 7.2148491,7.2148491 0 0 1 0.78559961,8.0000494 7.2148491,7.2148491 0 0 1 7.9999999,0.78564915 Z m 0,0.89046315 A 6.3233595,6.3233595 0 0 0 1.6760627,8.0000494 6.3233595,6.3233595 0 0 0 7.9999999,14.323987 6.3233595,6.3233595 0 0 0 14.323938,8.0000494 6.3233595,6.3233595 0 0 0 7.9999999,1.6761123 Z M 7.5073594,3.0695222 A 0.49279205,0.49279205 0 0 1 7.9999999,3.5621627 V 8.6967544 L 11.201132,10.52715 a 0.49279201,0.49279201 0 0 1 -0.488518,0.855422 L 7.2620698,9.4120107 A 0.49279201,0.49279201 0 0 1 7.0147189,8.9832692 V 3.5621627 A 0.49279205,0.49279205 0 0 1 7.5073594,3.0695222 Z" />
                                            </svg>
                                            <div class="dropdown-item-caption">
                                                Action 2
                                                <small>This is the second action</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                                <path
                                                    d="M 2.9984948,0.03309117 V 2.3931627 l 1.8109364,-0.023751 1.1870945,-0.738467 h 6.7276163 v -0.00648 h 0.0023 V 1.1213555 h -0.0023 V 1.0371471 H 5.9404248 L 5.563427,0.03309117 Z M 3.4832064,1.3243287 H 12.234944 V 1.5920772 H 5.9965257 L 4.8094312,2.3283847 3.4832064,2.3434997 Z M 5.9965257,1.7497031 4.8094312,2.48817 2.4913429,2.51408 3.0635719,8.2922605 h 4.7708184 v 2.2693845 h -5.062543 v 0.0022 H 2.1098571 c -0.14667,0 -0.2647962,0.113664 -0.2647962,0.254793 v 0.360597 h -0.00223 v 1.919583 H 0.53903233 c -0.27511351,0 -0.49817563,0.212471 -0.49817563,0.477197 v 1.910944 c 0,0.26472 0.22306212,0.477196 0.49817563,0.477196 H 3.6358009 c 0.2751134,0 0.4959318,-0.212476 0.4959318,-0.477196 v -1.91094 c 0,-0.264722 -0.2208184,-0.477197 -0.4959318,-0.477197 H 2.2018624 v -2.191654 h 5.6325279 v 2.191649 H 6.4543089 c -0.2751136,0 -0.4981757,0.212475 -0.4981757,0.477198 v 1.910944 c 0,0.264719 0.2230621,0.477196 0.4981757,0.477196 h 3.0967683 c 0.2751137,0 0.4959318,-0.212477 0.4959318,-0.477196 v -1.910944 c 0,-0.264723 -0.2208181,-0.477198 -0.4959318,-0.477198 H 8.1934361 V 10.907149 H 13.758643 V 13.0988 h -1.389056 c -0.275114,0 -0.498177,0.212474 -0.498177,0.477197 v 1.910944 c 0,0.264719 0.223063,0.477196 0.498177,0.477196 h 3.096766 c 0.275115,0 0.498177,-0.212477 0.498177,-0.477196 v -1.910944 c 0,-0.264723 -0.223062,-0.477197 -0.498177,-0.477197 H 14.11769 v -2.306092 c -0.01351,-0.128774 -0.12505,-0.228882 -0.262553,-0.228882 h -0.661992 v -0.0022 H 8.1934361 V 8.2922618 H 12.724142 L 13.374914,1.7497031 Z M 7.933128,2.9567296 C 9.1239834,2.9565839 10.090417,3.8856849 10.089645,5.0317787 10.08956,6.1772902 9.1233775,7.1048133 7.933128,7.1046686 6.743484,7.1039887 5.7789392,6.1767076 5.7788543,5.0317787 5.7780828,3.8862677 6.7428784,2.9574085 7.933128,2.9567296 Z M 7.4259761,3.5850742 7.558374,3.7664521 V 4.6906155 L 6.8537471,5.8134309 C 6.679387,6.0766361 6.6509072,6.0725423 6.9726809,6.0725423 H 8.9182593 C 9.2553904,6.0974532 9.1563364,6.038504 8.9945553,5.8134309 L 8.1777279,4.6755008 8.1552875,3.7772484 8.2742213,3.5850742 Z m 0.7427756,1.5244379 c 0.061663,-6.833e-4 0.1270302,0.013308 0.1997192,0.049663 L 8.9406997,5.9645793 6.900872,5.9667409 7.4057797,5.1742924 c 0.3107902,0.204106 0.4957673,-0.061818 0.762972,-0.06478 z M 0.68713874,13.414028 H 3.4921826 c 0.1466703,0 0.2647963,0.113662 0.2647963,0.254791 v 1.731728 c 0,0.141128 -0.118126,0.254793 -0.2647963,0.254793 H 0.68713874 c -0.14667021,0 -0.26479609,-0.113665 -0.26479609,-0.254793 v -1.731728 c 0,-0.141129 0.11812588,-0.254791 0.26479609,-0.254791 z m 5.87712796,0 h 2.8050439 c 0.1466699,0 0.264796,0.113662 0.264796,0.254791 v 1.731728 c 0,0.141128 -0.1181261,0.254793 -0.264796,0.254793 H 6.5642667 c -0.1466703,0 -0.2647962,-0.113665 -0.2647962,-0.254793 v -1.731728 c 0,-0.141129 0.1181259,-0.254791 0.2647962,-0.254791 z m 5.9668893,0 H 15.3362 c 0.14667,0 0.264798,0.113662 0.264798,0.254791 v 1.731728 c 0,0.141128 -0.118128,0.254793 -0.264798,0.254793 h -2.805044 c -0.14667,0 -0.264796,-0.113665 -0.264796,-0.254793 v -1.731728 c 0,-0.141129 0.118126,-0.254791 0.264796,-0.254791 z" />
                                            </svg>
                                            <div class="dropdown-item-caption">
                                                Action 3
                                                <small>This is the third action</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="dropdown-menu min-gap" aria-labelledby="navbarDropdown">
                                    <li>
                                        Explore
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>All Features</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Documentation</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Blog</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" role="button" aria-expanded="false">
                                Experiment
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M 0.00294574,6.6362347 1.3445605,4.1207915 8.2017033,11.568477 14.462573,3.5289225 16.002945,7.5240383 8.1023243,13.837308 Z"
                                        id="path1117" />
                                </svg>
                            </a>
                            <div class="dropdown-menu-container type-1 d-none">
                                <ul class="dropdown-menu min-gap border-bottom border-2"
                                    aria-labelledby="navbarDropdown">
                                    <li>
                                        By Plan
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Enterprise</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Teams</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Compare All</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="dropdown-menu min-gap border-bottom border-2"
                                    aria-labelledby="navbarDropdown">
                                    <li>
                                        By Solution
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>CI / CD & Automation</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>DevOps</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>DevSecOps</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="dropdown-menu min-gap" aria-labelledby="navbarDropdown">
                                    <li>
                                        Case Studies
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Customer Stories</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Resources</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <div class="dropdown-item-caption">
                                                <small>Compare All</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://web.whatsapp.com/">About Us</a>
                        </li>
                    </ul>
                    <form>
                        <input class="form-control" type="search" placeholder="Enter a keyword..."
                            aria-label="Search">
                    </form>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link search-nav-btn d-block" href="#">Search</a>
                        </li>
                        @auth
                            @if (Auth::user()->email_verified_at)
                                <hr class="d-block d-lg-none">
                                <li
                                    class="navbar-profile-container nav-item d-flex align-items-center ms-lg-3 rounded-pill ps-3 p-1 p-lg-0">
                                    <a class="navbar-profile nav-link d-flex align-items-center p-0 ps-lg-3"
                                        href="{{ route('home') }}">
                                        <div class="navbar-pp-name me-auto text-truncate">
                                            Hello, Fajar Mukhlis Imanandaasdasdasdiaasdasdasasdasdasdasd
                                        </div>
                                        <img class="navbar-pp rounded-circle"
                                            src="{{ asset('assets/profile-picture.jpeg') }}" alt="">
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link logout-nav-btn d-block pe-0" href="#"
                                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="post">
                                        @csrf
                                    </form>
                                </li>
                            @endif
                        @endauth
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="">
        @yield('content')
    </main>

    {{-- <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="">Hello</a>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                        class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div> --}}

    @yield('custom_js')
</body>

</html>
