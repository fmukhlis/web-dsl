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

                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="row mx-3 mx-sm-0 py-5 bg-light-2 rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1>
                                {{ __('Login') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 col-md-10 mb-3">
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

                        <div class="col-12 col-sm-11 col-md-10 mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control @error('password') is-invalid @enderror"
                                    id="floatingInput" placeholder="{{ __('Password') }}" name="password" required
                                    autocomplete="current-password">
                                <label for="floatingInput"
                                    class="@error('password') invalid-label @enderror">{{ __('Password') }}</label>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="col-7 col-md-6">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                    {{ old('remember') ? 'checked' : '' }}>

                                <label class="form-check-label" for="remember">
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>

                        <div class="col-5 col-sm-4 mb-3 text-end">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Login') }}
                            </button>
                        </div>

                        @if (Route::has('register') && Route::has('password.request'))
                            <div class="col-10">
                                <hr>
                            </div>
                        @endif

                        @if (Route::has('password.request'))
                            <div class="col-12 text-center">
                                <a href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            </div>
                        @endif

                        @if (Route::has('register') && Route::has('password.request'))
                            <div class="col-12 text-center mt-1">
                                Or
                            </div>
                        @endif

                        @if (Route::has('register'))
                            <div class="col-12 text-center">
                                <a href="{{ route('register') }}">
                                    {{ __('Create a new account?') }}
                                </a>
                            </div>
                        @endif

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
