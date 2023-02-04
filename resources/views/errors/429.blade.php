@extends('layouts.error')

@section('title', 'Error | Dharma Sejahtera Lestari')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <img class="logo-md rounded-pill border border-4" src="{{ asset('assets/auth-logo.jpg') }}"
                    alt="Logo Perusahaan">
            </div>
        </div>
        <div class="row text-center">
            <h1 class="col-12">Error 429</h1>
            <div class="col-12">Too many request</div>
        </div>
    </div>
@endsection
