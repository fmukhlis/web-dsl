<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container px-0 align-items-center align-items-lg-end">
        <button class="btn btn-outline-light sign-up-nav-btn" type="button">Cart</button>
        <a class="navbar-brand mb-1" href="{{ route('home') }}">
            <img class="logo-navbar" src="{{ asset('assets/Logo-DSL.png') }}" alt="Logo PT Dharma Sejahtera Lestari">
        </a>
        <button class="navbar-toggler ps-0" type="button" aria-controls="navbar-menu" aria-expanded="false"
            aria-label="Toggle navigation">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div class="bg-modal collapse d-lg-none"></div>
        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="navbar-nav me-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" aria-expanded="false">
                        Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M 0.00294574,6.6362347 1.3445605,4.1207915 8.2017033,11.568477 14.462573,3.5289225 16.002945,7.5240383 8.1023243,13.837308 Z"
                                id="path1117" />
                        </svg>
                    </a>
                    <div class="dropdown-menu-container type-2 d-none">
                        <ul class="dropdown-menu border-end border-2" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#carousel">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                        <path
                                            d="M 14.570312 0.31640625 L 2.3984375 0.36132812 L 1.3457031 1.6894531 L 1.390625 12.443359 L 2.5820312 14.341797 L 15.029297 14.089844 L 15.808594 13.128906 L 15.714844 1.734375 L 14.570312 0.31640625 z M 1.0292969 2.0898438 L 0.29492188 3.015625 L 0.33984375 13.769531 L 1.5292969 15.667969 L 13.978516 15.417969 L 14.705078 14.498047 L 2.3222656 14.763672 L 1.0703125 12.648438 L 1.0292969 2.0898438 z M 3.0664062 2.4746094 L 14.054688 2.5332031 L 14.013672 8.8769531 L 3.1347656 8.9257812 L 3.0664062 2.4746094 z M 3.2363281 2.640625 L 3.2949219 8.7597656 L 13.855469 8.7148438 L 13.886719 2.6953125 L 3.2363281 2.640625 z M 8.4707031 3.671875 L 10.628906 4.1933594 L 10.560547 6.9042969 L 8.5351562 7.7109375 L 6.4550781 7.1640625 L 6.2617188 4.2480469 L 8.4707031 3.671875 z M 8.5136719 3.8105469 L 6.65625 4.3027344 L 7.484375 4.5136719 L 9.3144531 3.9941406 L 8.5136719 3.8105469 z M 9.46875 4.0625 L 7.6914062 4.578125 L 8.5195312 4.7890625 L 10.351562 4.2363281 L 9.46875 4.0625 z M 10.498047 4.3691406 L 8.625 4.9355469 L 8.6171875 7.5097656 L 10.457031 6.8027344 L 10.498047 4.3691406 z M 6.4414062 4.40625 L 6.5996094 7.0332031 L 8.4609375 7.5390625 L 8.4453125 4.9453125 L 6.4414062 4.40625 z M 10.396484 4.5644531 L 10.396484 5.0410156 L 9.5332031 5.3691406 L 9.5332031 4.8359375 L 10.396484 4.5644531 z M 10.3125 4.7011719 L 10.042969 4.7851562 L 10.042969 4.9511719 L 10.3125 4.8496094 L 10.3125 4.7011719 z M 10.273438 9.2714844 L 10.273438 11.988281 L 6.8476562 11.988281 L 6.8476562 9.3203125 L 10.273438 9.2714844 z M 10.136719 9.4101562 L 6.984375 9.453125 L 6.984375 11.849609 L 10.136719 11.849609 L 10.136719 9.4101562 z M 4.1484375 9.8007812 L 4.1484375 11.566406 L 3.1347656 11.566406 L 3.1347656 11.417969 L 3.9863281 11.417969 L 3.9863281 9.9472656 L 3.1347656 9.9589844 L 3.1347656 9.8144531 L 4.1484375 9.8007812 z M 6.6113281 9.8007812 L 6.6113281 11.566406 L 4.3847656 11.566406 L 4.3847656 9.8320312 L 6.6113281 9.8007812 z M 12.736328 9.8007812 L 12.736328 11.566406 L 10.509766 11.566406 L 10.509766 9.8320312 L 12.736328 9.8007812 z M 13.855469 9.8183594 L 13.855469 9.9628906 L 13.134766 9.9726562 L 13.134766 11.417969 L 13.855469 11.417969 L 13.855469 11.566406 L 12.974609 11.566406 L 12.974609 9.8320312 L 13.855469 9.8183594 z M 6.4492188 9.9472656 L 4.546875 9.9726562 L 4.546875 11.417969 L 6.4492188 11.417969 L 6.4492188 9.9472656 z M 12.574219 9.9472656 L 10.671875 9.9726562 L 10.671875 11.417969 L 12.574219 11.417969 L 12.574219 9.9472656 z " />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Carousel Product
                                        <small>Lihat Produk Paling Populer</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#featured-product">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                        <path
                                            d="M 14.570312 0.31640625 L 2.3984375 0.36132812 L 1.3457031 1.6894531 L 1.390625 12.443359 L 2.5820312 14.341797 L 15.029297 14.089844 L 15.808594 13.128906 L 15.714844 1.734375 L 14.570312 0.31640625 z M 1.0292969 2.0898438 L 0.29492188 3.015625 L 0.33984375 13.769531 L 1.5292969 15.667969 L 13.978516 15.417969 L 14.705078 14.498047 L 2.3222656 14.763672 L 1.0703125 12.648438 L 1.0292969 2.0898438 z M 8.6152344 2.3339844 L 14.099609 3.6582031 L 13.923828 10.542969 L 8.7773438 12.595703 L 3.4902344 11.203125 L 3.0039062 3.796875 L 8.6152344 2.3339844 z M 8.625 2.5273438 L 3.3925781 3.890625 L 5.9277344 4.5292969 L 10.871094 3.0644531 L 8.625 2.5273438 z M 11.109375 3.1308594 L 6.1953125 4.6367188 L 8.7382812 5.2851562 L 13.679688 3.734375 L 11.109375 3.1308594 z M 13.90625 3.90625 L 8.8496094 5.5019531 L 8.8339844 12.316406 L 13.753906 10.365234 L 13.90625 3.90625 z M 3.2011719 4.0761719 L 3.609375 11.027344 L 8.6347656 12.353516 L 8.6601562 5.4882812 L 3.2011719 4.0761719 z M 13.507812 4.5996094 L 13.507812 5.8125 L 11.314453 6.6464844 L 11.314453 5.2890625 L 13.507812 4.5996094 z M 13.289062 4.9472656 L 12.607422 5.1601562 L 12.607422 5.5839844 L 13.289062 5.3242188 L 13.289062 4.9472656 z M 7.1269531 6.8417969 L 7.7753906 8.1015625 L 5.4238281 10.009766 L 4.3535156 8.6386719 L 4.78125 7.8359375 L 5.4101562 9.2226562 L 7.1269531 6.8417969 z M 12.994141 9.515625 L 13.019531 9.6328125 L 10.873047 10.458984 L 10.880859 10.279297 L 12.994141 9.515625 z M 10.59375 10.419922 L 10.621094 10.537109 L 9.3339844 11.007812 L 9.3417969 10.828125 L 10.59375 10.419922 z M 11.8125 10.515625 L 11.837891 10.632812 L 9.3339844 11.574219 L 9.3417969 11.392578 L 11.8125 10.515625 z " />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Featured Product
                                        <small>Lihat Produk Yang Kami Rekomendasikan</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#medical-devices">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                        <path
                                            d="M 14.546167,0.36814655 2.373007,0.41331195 1.3212977,1.7403155 1.3664631,12.49399 2.5579702,14.393089 15.004274,14.141453 15.78284,13.180074 15.690358,1.7854809 Z M 1.0051396,2.1403523 0.26958817,3.067319 0.31475358,13.820994 1.5041101,15.720093 13.952565,15.468456 14.679513,14.550093 2.2977313,14.814633 1.0460036,12.70046 Z M 9.2252486,2.9920432 9.6855059,3.1813079 9.7263695,6.3149288 12.816977,6.1987891 13.006241,7.63548 12.870745,8.3538256 9.6769026,8.4312515 9.7435756,11.627243 9.0252301,11.760589 7.5863885,11.571324 7.5584285,8.4828691 4.4269584,8.411895 4.2376937,7.9516378 4.3968482,6.3686968 7.5498257,6.2783663 7.6444575,3.1533484 Z" />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Medical Devices
                                        <small>Temukan Produk Alat Kesehatan Terbaru</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#laboratory-devices">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="m 14.570935,0.3167043 -12.1718746,0.044922 -1.052734,1.328125 0.044921,10.7539067 1.191407,1.898436 12.4472646,-0.251953 0.779297,-0.960937 -0.09375,-11.3945317 z m -5.7460936,1.496094 2.8496086,0.722656 -0.628906,0.8125 -0.607422,2.078125 1.40625,6.4707037 -0.501953,0.710937 -7.4824216,-1.957031 -0.09375,-0.9355477 4.556641,-4.816406 0.566406,-2.064453 z m -7.794922,0.277343 -0.73437503,0.925781 0.044922,10.7539067 1.18945303,1.898437 12.4492186,-0.25 0.726562,-0.919922 -12.3828116,0.265625 -1.251953,-2.115233 z m 8.195313,0.117188 0.037109,0.671875 -0.564453,2.101562 -4.470703,4.71875 0.072265,0.7265627 6.7499996,1.791016 0.388672,-0.554687 -1.355468,-6.3203137 0.654296,-2.066406 0.414063,-0.578125 z m -0.449219,3.839843 c 0.00938,1.01e-4 0.019997,5.54e-4 0.029297,0.00195 0.107762,0.00793 0.188941,0.095682 0.18164,0.195312 -0.00843,0.099538 -0.103283,0.171409 -0.210937,0.16211 -0.106757,-0.00905 -0.186888,-0.09458 -0.179687,-0.19336 0.0065,-0.089562 0.082897,-0.160315 0.179687,-0.166016 z m 0.751953,0.810547 c 0.185018,0.014319 0.3232471,0.16485 0.3105471,0.335938 -0.01309,0.171907 -0.1735161,0.298493 -0.3593751,0.283203 -0.185929,-0.014391 -0.32656,-0.164109 -0.3125,-0.335938 0.014312,-0.170959 0.176381,-0.298413 0.361328,-0.283203 z m -1.603516,0.220703 c 0.035246,-0.00375 0.070609,-0.00298 0.107422,0 0.294558,0.023199 0.516654,0.260819 0.496094,0.533204 -0.021233,0.27318 -0.2788,0.477025 -0.574219,0.453125 -0.295469,-0.02327 -0.51605,-0.263984 -0.49414,-0.53711 0.019648,-0.238205 0.218123,-0.422963 0.464843,-0.449219 z m 2.0292971,1.078126 0.6582025,2.8828127 -0.292968,0.351562 -4.9980466,-1.306641 -0.101563,-0.4999997 1.195313,-1.273438 c 0.651801,0.746124 1.942856,0.038805 3.5390621,-0.154296 z" />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Laboratory Devices
                                        <small>Temukan Produk Alat Laboratorium Terbaru</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#chemical-devices">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16" class="align-middle">
                                        <path
                                            d="M 14.570312 0.31640625 L 2.3984375 0.36132812 L 1.3457031 1.6894531 L 1.390625 12.443359 L 2.5820312 14.341797 L 15.029297 14.089844 L 15.808594 13.128906 L 15.714844 1.734375 L 14.570312 0.31640625 z M 1.0292969 2.0898438 L 0.29492188 3.015625 L 0.33984375 13.769531 L 1.5292969 15.667969 L 13.978516 15.417969 L 14.705078 14.498047 L 2.3222656 14.763672 L 1.0703125 12.648438 L 1.0292969 2.0898438 z M 8.3984375 2.3574219 L 8.4453125 3.1835938 L 8.0429688 3.2070312 L 8.625 11.269531 L 8.3867188 12.152344 L 7.4003906 12.386719 L 6.6503906 12.240234 L 6.1894531 11.498047 L 5.5996094 3.3476562 L 5.234375 3.3691406 L 5.078125 2.5488281 L 8.3984375 2.3574219 z M 7.6035156 3.1972656 L 6.0605469 3.3183594 L 6.5878906 11.347656 L 6.8847656 11.849609 L 7.375 11.982422 L 8.0234375 11.765625 L 8.2246094 11.181641 L 7.6035156 3.1972656 z M 8.7890625 4.359375 L 11.972656 5.3183594 L 11.734375 6.1113281 L 11.347656 5.9941406 L 9.9160156 11.150391 L 9.390625 11.896484 L 8.9257812 11.841797 L 8.8945312 11.400391 L 9.1835938 11.410156 L 9.5703125 10.927734 L 10.939453 5.8339844 L 9.4492188 5.4199219 L 8.6621094 8.140625 L 8.5703125 6.8457031 L 9.0039062 5.2871094 L 8.6523438 5.1816406 L 8.7890625 4.359375 z M 7.3183594 5.796875 C 7.4092165 5.7880223 7.5129901 5.8112245 7.6308594 5.8847656 L 8.015625 11.162109 L 7.8632812 11.587891 L 7.375 11.75 L 7.0039062 11.652344 L 6.78125 11.285156 L 6.4414062 5.9511719 C 6.7459454 6.4510496 6.9246457 5.8352376 7.3183594 5.796875 z M 9.8144531 7.75 C 9.9289361 7.7421897 10.045849 7.7645796 10.158203 7.8457031 L 9.3066406 10.632812 L 9.0722656 10.996094 L 8.859375 10.986328 L 8.7226562 8.5996094 L 9.0058594 7.7988281 C 9.1455106 8.0623656 9.4709975 7.7734282 9.8144531 7.75 z " />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Chemical Devices
                                        <small>Temukan Produk Alat Kimia Terbaru</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#others">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M 14.496094 -0.12695312 L 2.3242188 -0.08203125 L 1.2714844 1.2460938 L 1.3164062 12 L 2.5078125 13.896484 L 14.955078 13.644531 L 15.734375 12.685547 L 15.640625 1.2890625 L 14.496094 -0.12695312 z M 0.95507812 1.6464844 L 0.22070312 2.5703125 L 0.265625 13.326172 L 1.4550781 15.222656 L 13.904297 14.972656 L 14.630859 14.052734 L 2.2480469 14.318359 L 0.99609375 12.205078 L 0.95507812 1.6464844 z M 4.3105469 5.265625 L 5.1191406 6.0488281 L 5.3886719 7.2285156 L 4.9277344 8.1386719 L 3.9785156 8.9160156 L 2.9101562 8.8417969 L 2.5039062 8.0449219 L 2.2636719 6.8144531 L 3.1503906 5.3769531 L 4.3105469 5.265625 z M 8.3242188 5.265625 L 9.3945312 5.3417969 L 9.8007812 6.1386719 L 10.039062 7.3671875 L 9.1542969 8.8066406 L 7.9921875 8.9160156 L 7.1835938 8.1328125 L 6.9140625 6.953125 L 7.375 6.0429688 L 8.3242188 5.265625 z M 12.642578 5.265625 L 13.804688 5.3769531 L 14.6875 6.8144531 L 14.449219 8.0449219 L 14.044922 8.8417969 L 12.974609 8.9160156 L 12.025391 8.1386719 L 11.564453 7.2285156 L 11.832031 6.0488281 L 12.642578 5.265625 z " />
                                    </svg>
                                    <div class="dropdown-item-caption">
                                        Others
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="dropdown-menu min-gap" aria-labelledby="navbarDropdown">
                            <li class="disabled">
                                FAQ
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <div class="dropdown-item-caption">
                                        <small>Cara Pembayaran</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <div class="dropdown-item-caption">
                                        <small>Cara Pemesanan</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" aria-expanded="false">
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M 0.00294574,6.6362347 1.3445605,4.1207915 8.2017033,11.568477 14.462573,3.5289225 16.002945,7.5240383 8.1023243,13.837308 Z"
                                id="path1117" />
                        </svg>
                    </a>
                    <div class="dropdown-menu-container type-1 d-none">
                        <ul class="dropdown-menu min-gap border-bottom border-2" aria-labelledby="navbarDropdown">
                            <li class="disabled">
                                By Category
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['medical' => 1]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Medical</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['laboratory' => 1]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Laboratory</small>
                                    </div>
                                </a>
                            </li>
                            <li class="">
                                <a class="dropdown-item" href="{{ route('products', ['chemical' => 1]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Chemical</small>
                                    </div>
                                </a>
                            </li>
                            <li class="">
                                <a class="dropdown-item" href="{{ route('products', ['other' => 1]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Other</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="dropdown-menu min-gap border-bottom border-2" aria-labelledby="navbarDropdown">
                            <li class="disabled">
                                By Availability
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['is_available' => [0]]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Pre Order</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['is_available' => [1]]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Ready Stock</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="dropdown-menu min-gap" aria-labelledby="navbarDropdown">
                            <li class="disabled">
                                By Condition
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['is_new' => [1]]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>New Product</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('products', ['is_new' => [0]]) }}">
                                    <div class="dropdown-item-caption">
                                        <small>Second-Hand Product</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">About Us</a>
                </li>
            </ul>
            <form id="search-form" class="ml-auto" action="{{ route('products') }}">
                <input class="form-control" type="search" placeholder="Enter product's name..." aria-label="Search"
                    name="search" value="{{ request('search') }}">
            </form>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link search-nav-btn d-block"
                        onclick="document.querySelector('#search-form').submit()">Search</a>
                </li>
                @guest
                    <li class="nav-item ms-lg-2">
                        <a class="nav-link search-nav-btn d-block" href="{{ route('login') }}">Sign
                            In</a>
                    </li>
                @endguest
                @auth
                    @if (Auth::user()->email_verified_at)
                        <hr class="d-block d-lg-none">
                        <li
                            class="navbar-profile-container nav-item d-flex align-items-center rounded-pill ps-3 p-1 p-lg-0">
                            <a class="navbar-profile nav-link d-flex align-items-center p-0 ps-lg-3"
                                href="{{ route('admin.dashboard') }}">
                                <div class="navbar-pp-name me-auto text-truncate">
                                    Hello, {{ auth()->user()->name }}
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="m 7.955078,0.39843925 a 7.6897864,7.6897864 0 0 0 -7.68945,7.68945305 7.6897864,7.6897864 0 0 0 7.68945,7.6894497 7.6897864,7.6897864 0 0 0 7.68945,-7.6894497 7.6897864,7.6897864 0 0 0 -7.68945,-7.68945305 z m -0.0781,1.90429705 a 2.7730265,2.7730265 0 0 1 2.77148,2.773436 2.7730265,2.7730265 0 0 1 -2.77148,2.77344 2.7730265,2.7730265 0 0 1 -2.77344,-2.77344 2.7730265,2.7730265 0 0 1 2.77344,-2.773436 z m 2.19336,5.134766 a 4.9192732,4.61538 0 0 1 2.77149,4.0468697 6.60968,6.60968 0 0 1 -4.89063,2.17774 6.60968,6.60968 0 0 1 -4.92578,-2.21289 4.9192732,4.61538 0 0 1 2.69727,-3.9706997 3.2288666,3.2288666 0 0 0 2.15429,0.82812 3.2288666,3.2288666 0 0 0 2.19336,-0.86914 z" />
                                </svg>
                                {{-- <img class="navbar-pp rounded-circle" src="{{ asset('assets/icons/1-profile.svg') }}"
                                    alt=""> --}}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link logout-nav-btn d-block px-0 ps-lg-2 pb-2" href="#"
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
