@extends('layouts.app')

@section('template_title')
{{ __('Create') }} Person
@endsection

@section('content')

<!-- Contenido -->
<div class="container">
    <div class="row">
        <div class="row">
            <!-- Imagen del restaurante -->
            <img src="{{ url('storage/img_portada/b10364f9df3b6f780f1ad8195378a9e0.png') }}" alt="image" width="100">


        </div>
        <div class="row mt-2 d-flex align-items-center justify-content-center">
            <!-- Descripción del restaurante -->
            <div class="col-md-12 text-center">
                <h2 class="mb-4">Bienvenido al Restaurante Alquimia</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
            </div>
        </div>


    </div>
</div>

@endsection