@extends('layouts.authentication')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

                <div class="d-flex justify-content-center mb-4">
                    <a href="{{ route('home') }}">
                        <img class="logo-md" src="{{ asset('assets/Logo-DSL.png') }}" alt="Logo Perusahaan">
                    </a>
                </div>

                <form method="POST" action="{{ route('verification.resend') }}">
                    @csrf

                    <div class="row mx-3 mx-sm-0 py-4 bg-light rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1 class="fw-bold">
                                {{ __('Confirm Email') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 text-center">
                            @if (session('resent'))
                                <div class="alert alert-success" role="alert">
                                    {{ __('A fresh verification link has been sent to your email address.') }}
                                </div>
                            @endif

                            {{ __('Before proceeding, please check your email for a verification link.') }}

                            <hr>

                            {{ __('If you did not receive the email') }},
                            <button type="submit" class="btn btn-link">{{ __('Click here to request another!') }}</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection
