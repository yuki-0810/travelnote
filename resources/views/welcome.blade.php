@extends('layouts.app')

@section('cover')
    <div class="cover">
        <div class="cover-inner">
            <div class="cover-contents">
                <h1>旅の思い出を記録するノート</h1>
                @if (!Auth::check())
                    <a href="{{ route('signup.get') }}" class="btn btn-success btn-lg">TravelNoteを始める</a>
                @endif
            </div>
        </div>
    </div>
@endsection

@section('content')
    <div class="buttons text-center">
        @if (Auth::check())
            @include('maps.maps',['test' => $test])
        @endif
    </div>
@endsection