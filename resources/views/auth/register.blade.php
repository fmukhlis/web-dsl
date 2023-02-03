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

                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="row mx-3 mx-sm-0 py-4 bg-light rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1 class="fw-bold">
                                {{ __('Register') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control @error('name') is-invalid @enderror"
                                    id="name" placeholder="{{ __('Name') }}" value="{{ old('name') }}"
                                    name="name" required autocomplete="name">
                                <label for="name"
                                    class="@error('name') invalid-label @enderror">{{ __('Full Name') }}</label>
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="col-12 col-sm-11 mb-3">
                            <div class="form-floating">
                                <input type="email" class="form-control @error('email') is-invalid @enderror"
                                    id="email" placeholder="{{ __('Email Address') }}" value="{{ old('email') }}"
                                    name="email" required autocomplete="email">
                                <label for="email"
                                    class="@error('email') invalid-label @enderror">{{ __('Email Address') }}</label>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="col-12 col-sm-11 mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control @error('password') is-invalid @enderror"
                                    id="password" placeholder="{{ __('Password') }}" name="password" required
                                    autocomplete="new-password">
                                <label for="password"
                                    class="@error('password') invalid-label @enderror">{{ __('Password') }}</label>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="col-12 col-sm-11 mb-3">
                            <div class="form-floating">
                                <input type="password"
                                    class="form-control @error('password_confirmation') is-invalid @enderror"
                                    id="password_confirmation" placeholder="{{ __('Confirm Password') }}"
                                    name="password_confirmation" required autocomplete="new-password">
                                <label for="password_confirmation"
                                    class="@error('password_confirmation') invalid-label @enderror">{{ __('Confirm Password') }}</label>
                                @error('password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        <div class="col-12 col-sm-11 text-center">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Register') }}
                            </button>
                        </div>

                        @if (Route::has('login'))
                            <div class="col-11">
                                <hr>
                            </div>

                            <div class="col-12 text-center">
                                <a href="{{ route('login') }}">
                                    {{ __('Already have an account?') }}
                                </a>
                            </div>
                        @endif

                    </div>
                </form>

            </div>
        </div>
    </div>
@endsection
