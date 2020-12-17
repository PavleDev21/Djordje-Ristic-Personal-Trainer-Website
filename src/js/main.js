var $navigation = $('.navigation');
var $navIcon = $('.nav-toggle-icon');
var $navToggle = $('.nav-toggle');
var $header = $('.header');

$navToggle.on('click', function() {
    $navigation.toggleClass('nav-show');
    $navIcon.toggleClass('nav-toggle-active');
})

if ($(window).width() <= 768) {
    $(document).scroll(function() {
        if ( $(document).scrollTop() >= 60 ) {
            $header.addClass('color-change');
        } else {
            $header.removeClass('color-change');
        }
    });
}

