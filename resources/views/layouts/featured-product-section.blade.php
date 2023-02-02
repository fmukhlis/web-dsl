<div class="row g-2">
    @if ($items[0]->display_type == 'a')
        <div class="col-12 col-md-6">
            <div class="card card-home-overlay h-100">
                <span
                    class="badge fs-3 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $items[0]->product->discount }}%
                    Off</span>
                <img src="{{ asset('/') . $items[0]->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($items[0]->product->image_path))[0]->getFileName() }}"
                    class="card-img" alt="...">
                <a href="" class="card-img-overlay text-center text-color-dark d-block">
                    <div class="fs-3 fw-bolder mb-0 product-title mt-2 mb-3">
                        {{ $items[0]->product->name }}
                    </div>
                    <div class="overflow-hidden product-price">
                        <div class="slide-top">
                            <small class="text-muted fw-bolder"><span class="d-none d-lg-inline">Harga
                                    Jual :</span><span
                                    class="text-decoration-line-through ms-1">@numericToMoneyFormat($items[0]->product->price)</span></small>
                            <div class="d-flex align-items-end justify-content-center text-dark">
                                <div class="pb-2 fs-5 fw-bold">Rp</div>
                                <div class="fs-2 fw-bold">@numericToMoneyFormatWithoutPrefix($items[0]->product->price - ($items[0]->product->price * $items[0]->product->discount) / 100)</div>
                            </div>
                        </div>
                        <div class="btn px-3 px-sm-5 px-md-3 btn-outline-dark mt-5">Lihat
                            Detail</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key < 1 || $key > 2) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key < 3) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @elseif ($items[0]->display_type == 'b')
        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key > 1) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="col-12 col-md-6">
            <div class="card card-home-overlay h-100">
                <span
                    class="badge fs-3 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $items[2]->product->discount }}%
                    Off</span>
                <img src="{{ asset('/') . $items[2]->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($items[2]->product->image_path))[0]->getFileName() }}"
                    class="card-img" alt="...">
                <a href="" class="card-img-overlay text-center text-color-dark d-block">
                    <div class="fs-3 fw-bolder mb-0 product-title mt-2 mb-3">
                        {{ $items[2]->product->name }}
                    </div>
                    <div class="overflow-hidden product-price">
                        <div class="slide-top">
                            <small class="text-muted fw-bolder"><span class="d-none d-lg-inline">Harga
                                    Jual :</span><span
                                    class="text-decoration-line-through ms-1">@numericToMoneyFormat($items[2]->product->price)</span></small>
                            <div class="d-flex align-items-end justify-content-center text-dark">
                                <div class="pb-2 fs-5 fw-bold">Rp</div>
                                <div class="fs-2 fw-bold">@numericToMoneyFormatWithoutPrefix($items[2]->product->price - ($items[2]->product->price * $items[2]->product->discount) / 100)</div>
                            </div>
                        </div>
                        <div class="btn px-3 px-sm-5 px-md-3 btn-outline-dark mt-5">Lihat
                            Detail</div>
                    </div>
                </a>
            </div>
        </div>

        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key < 3) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @else
        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key > 1) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="col-12 col-md-3">
            <div class="row g-2">
                @foreach ($items as $key => $item)
                    @php
                        if ($key > 3) {
                            continue;
                        }
                    @endphp
                    <div class="col-12 col-sm-6 col-md-12">
                        <div class="card card-home">
                            <span
                                class="badge fs-6 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $item->product->discount }}%
                                Off</span>
                            <div class="overflow-hidden">
                                <a href="products/test-prod">
                                    <img src="{{ asset('/') . $item->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($item->product->image_path))[0]->getFileName() }}"
                                        class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body p-2 text-center d-flex flex-column">
                                <div class="fs-5 mb-0 product-title">
                                    <a href="products/test-prod">{{ $item->product->name }}
                                    </a>
                                </div>
                                <div class="overflow-hidden product-price">
                                    <div class="slide-top">
                                        <small class="text-muted"><span class="d-none d-lg-inline">Harga
                                                Jual :</span><span
                                                class="text-decoration-line-through ms-1">@numericToMoneyFormat($item->product->price)</span></small>
                                        <div class="d-flex align-items-end justify-content-center">
                                            <div class="pb-2 fs-6 fw-bold">Rp</div>
                                            <div class="fs-4 fw-bold">@numericToMoneyFormatWithoutPrefix($item->product->price - ($item->product->price * $item->product->discount) / 100)
                                            </div>
                                        </div>
                                    </div>
                                    <a href="products/test-prod"
                                        class="btn px-3 px-sm-5 px-md-3 px-md-3 btn-outline-dark mt-5">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card card-home-overlay h-100">
                <span
                    class="badge fs-3 bg-danger position-absolute disc-badge rounded-0 px-5">{{ $items[4]->product->discount }}%
                    Off</span>
                <img src="{{ asset('/') . $items[4]->product->image_path . '/' . \Illuminate\Support\Facades\File::allFiles(public_path($items[4]->product->image_path))[0]->getFileName() }}"
                    class="card-img" alt="...">
                <a href="" class="card-img-overlay text-center text-color-dark d-block">
                    <div class="fs-3 fw-bolder mb-0 product-title mt-2 mb-3">
                        {{ $items[4]->product->name }}
                    </div>
                    <div class="overflow-hidden product-price">
                        <div class="slide-top">
                            <small class="text-muted fw-bolder"><span class="d-none d-lg-inline">Harga
                                    Jual :</span><span
                                    class="text-decoration-line-through ms-1">@numericToMoneyFormat($items[4]->product->price)</span></small>
                            <div class="d-flex align-items-end justify-content-center text-dark">
                                <div class="pb-2 fs-5 fw-bold">Rp</div>
                                <div class="fs-2 fw-bold">@numericToMoneyFormatWithoutPrefix($items[4]->product->price - ($items[4]->product->price * $items[4]->product->discount) / 100)</div>
                            </div>
                        </div>
                        <div class="btn px-3 px-sm-5 px-md-3 btn-outline-dark mt-5">Lihat
                            Detail</div>
                    </div>
                </a>
            </div>
        </div>
    @endif
</div>
