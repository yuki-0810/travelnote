    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <div id="main">
        @if (count($test) > 0)
        <ul>
            @foreach ($test as $ts)
                <li>{{ $ts->cityname }}</li>
            @endforeach
        </ul>
        @endif
    </div>