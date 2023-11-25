@extends('layouts.app')

@section('template_title')
    {{ __('Create') }} Drink Consumption
@endsection

@section('content')
    <section class="content container">
        <div class="row">
            <div class="col-md-12">

                @includeif('partials.errors')

                <div class="card card-default">
                    <div class="card-header">
                        <span class="card-title">{{ __('Create') }} Drink Consumption</span>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('drink_consumptions.store') }}"  role="form" enctype="multipart/form-data">
                            @csrf

                            @include('drink-consumption.form')

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection