@extends('layouts.authentication')

@section('title', 'Email Verified | Dharma Sejahtera Lestari')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

                <div class="d-flex justify-content-center mb-4">
                    <a href="{{ route('home') }}">
                        <img class="logo-md" src="{{ asset('assets/Logo-DSL.png') }}" alt="Logo Perusahaan">
                    </a>
                </div>

                <form method="GET" action="{{ route('home') }}">
                    @csrf

                    <div class="row mx-3 mx-sm-0 py-4 bg-light rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1 class="fw-bold">
                                {{ __('Email Verified') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 text-center">
                            <div class="alert alert-success" role="alert">
                                <strong>{{ __('Your email address has been verified.') }}</strong>
                            </div>
                            {{ __('Thanks for using our application!') }}

                            <br>

                            {{ __('Now, you can continue using this website as an admin.') }}
                            <hr>

                            <button type="submit" class="btn btn-link">{{ __('Continue to Homepage') }}</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection
