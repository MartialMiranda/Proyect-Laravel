@extends('layouts.app')

@section('template_title')
    {{ $dishType->name ?? "{{ __('Show') Dish Type" }}
@endsection

@section('content')
    <section class="content container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Dish Type</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('dish_types.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $dishType->name }}
                        </div>
                        <div class="form-group">
                            <strong>Description:</strong>
                            {{ $dishType->description }}
                        </div>
                        <div class="form-group">
                            <strong>Dish Count:</strong>
                            {{ $dishType->dish_count }}
                        </div>
                        <div class="form-group">
                            <strong>Status:</strong>
                            {{ $dishType->status }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection