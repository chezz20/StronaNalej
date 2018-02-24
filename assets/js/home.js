$(document).ready(function () {
    $('button.menu').on('click', function () {
        $('nav').animate({
            left: 0
        }, 500);
    });
    $('nav button.zamknij').on('click', function () {
        $('nav').animate({
            left: -300
        }, 500);
    });

});

// otwieranie / zamykanie menu
$('button.menu').on('click', function () {
    $('nav').animate({
        left: 0
    }, 300);
});

$('nav button.zamknij').on('click', function () {
    $('nav').animate({
        left: -300
    }, 300);
});

// scroll do sekcji
$('nav .list-group a').on('click', function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var offset = $(href).offset();
    var body = $('body, html');
    body.stop().animate({ scrollTop: offset.top }, '500');
});