<!doctype html>

<html lang="en">

<head>
    @include('be.partials.head')
</head>

<body>
    
    <div class="dash">
        
        <div class="dash-nav dash-nav-dark">
            @include('be.partials.topleft')
            @include('be.partials.sidebar')
        </div>
        
        <div class="dash-app">
            @include('be.partials.topnavbar')
            <main class="dash-content">
                <div class="container-fluid">
                    @include('spur.welcome')
                </div>
            </main>
        </div>
        
    </div>
    
    <script src="{{ asset('be/js/jq-po-bo.js') }}"></script>
    
    <script src="{{ asset('be/js/spur.js') }}"></script>
</body>

</html>