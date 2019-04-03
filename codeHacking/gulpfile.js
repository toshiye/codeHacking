var elixir = require('laravel-elixir');

elixir(function(mix){
    mix.sass('app.scss')

        .styles([
        'libs/blog-post.css',
        'libs/bootstrap.css',
        'libs/font-awesome.css',
        'metisMenu.css',
        'sb-admin-2.css',
        'styles.css'

    ], './public/css/libs.css')

        .scripts([
            'libs/bootstrap.js',
            'libs/jquery.js',
            'metisMenu.js',
            'sb-admin-2.js',
            'scripts.js'
        ], './public/js/libs.js')
});


