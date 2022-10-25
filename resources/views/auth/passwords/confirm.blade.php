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

                <form method="POST" action="{{ route('password.confirm') }}">
                    @csrf

                    <div class="row mx-3 mx-sm-0 py-5 bg-light-2 rounded justify-content-center">

                        <div class="col-12 text-center mb-4">
                            <h1>
                                {{ __('Confirm Password') }}
                            </h1>
                        </div>

                        <div class="col-12 col-sm-11 col-md-10 mb-3">
                            <div class="text-center mb-2">
                                {{ __('Please confirm your password before continuing.') }}
                            </div>
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

                        <div class="col-12 col-sm-11 col-md-10 text-center">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Confirm Password') }}
                            </button>
                        </div>

                        @if (Route::has('password.request'))
                            <div class="col-10">
                                <hr>
                            </div>

                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
