@extends('layouts.authentication')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

                <div class="row">
                    <div class="col-12 text-center mb-4">
                        <img class="logo-md rounded-pill border border-4" src="{{ asset('assets/auth-logo.jpg') }}"
                            alt="Logo Perusahaan">
                    </div>
                </div>

                <form method="POST" action="{{ route('password.email') }}">
                    @csrf

                    <div class="row mx-3 mx-sm-0 py-5 bg-light-2 rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1>
                                {{ __('Reset Password') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 col-md-10 mb-3">
                            @if (session('status'))
                                <div class="alert alert-success" role="alert">
                                    {{ session('status') }}
                                </div>
                            @endif

                            <div class="form-floating">
                                <input type="email" class="form-control @error('email') is-invalid @enderror"
                                    id="floatingInput" placeholder="{{ __('Email Address') }}" value="{{ old('email') }}"
                                    name="email" required autocomplete="email">
                                <label for="floatingInput"
                                    class="@error('email') invalid-label @enderror">{{ __('Email Address') }}</label>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="col-12 col-sm-11 col-md-10 text-center">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Send Password Reset Link') }}
                            </button>
                        </div>

                        @if (Route::has('login'))
                            <div class="col-10">
                                <hr>
                            </div>

                            <div class="col-12 text-center">
                                <a href="{{ route('login') }}">
                                    {{ __('Go back to login page') }}
                                </a>
                            </div>
                        @endif
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
