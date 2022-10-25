@extends('layouts.authentication')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

                <div class="row">
                    <div class="col-12 text-center mb-4">
                        <a href="{{ route('home') }}">
                            <img class="logo-md rounded-pill border border-4" src="{{ asset('assets/auth-logo.jpg') }}"
                                alt="Logo Perusahaan">
                        </a>
                    </div>
                </div>

                <form method="GET" action="{{ route('home') }}">
                    @csrf

                    <div class="row mx-3 mx-sm-0 py-5 bg-light-2 rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1>
                                {{ __('Email Verified') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 col-md-10 text-center">
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
