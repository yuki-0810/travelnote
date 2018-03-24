<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>TravelNote</title>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        
        <!-- Jquery UI -->
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css" >
        
        <!-- CSS/JSの読み込み -->
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script type="text/javascript" src="{{ asset('js/googlemap.js') }}"></script>

    </head>
    
    <body>
        @include('commons.navbar')

        @yield('cover')

        <div class="container">
            @include('commons.error_messages')
            @yield('content')
        </div>

        @include('commons.footer')
    </body>
    
    <!-- Google Map API の読み込み-->
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeEYoCpO1oFoxejIkMRnVfb3Zr932L0XQ&callback=initMap">
    </script>
</html>