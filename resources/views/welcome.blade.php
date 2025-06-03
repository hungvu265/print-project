<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">

        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
    </head>
    <body class="classic scroll-up">
        <div id="app"></div>
        <script src="{{ mix('js/app.js') }}"></script>
        <script>
            const body = document.getElementsByTagName('body')[0].classList
            document.addEventListener('scroll', () => {
                if (window.pageYOffset > 0) {
                    body.remove('scroll-up')
                    body.add('scroll-down')
                } else {
                    body.remove('scroll-down')
                    body.add('scroll-up')
                }
            })

            setTimeout(() => {
                new Splide('.splide', {
                    type     : 'loop',
                    height   : '10rem',
                    focus    : 'center',
                    autoWidth: true,
                });
            }, 2000)

        </script>
    </body>
</html>
