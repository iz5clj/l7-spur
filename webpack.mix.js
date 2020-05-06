const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts(
    [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/popper.js/dist/umd/popper.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "/resources/js/be/app.js"
    ],
    "public/assets/be/js/jq-po-bo.js"
).version();
mix.scripts('node_modules/chart.js/dist/Chart.js', 'public/assets/be/js/Chart-js.js').version();
mix.scripts('node_modules/spur-template/dist/js/spur.js', 'public/assets/be/js/spur.js').version();
mix.scripts('node_modules/spur-template/dist/js/chart-js-config.js', 'public/assets/be/js/chart-js-config.js').version();

mix.sass('resources/be/sass/app.scss', 'public/assets/be/css').version();

mix.browserSync({
    proxy: "spur.test",
    open: false,
    notify: {
        styles: {
            top: "auto",
            bottom: "0",
        },
    },
});
