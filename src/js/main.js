var $navigation = $('.navigation');
var $navIcon = $('.nav-toggle-icon');
var $navToggle = $('.nav-toggle');
var $header = $('.header');

$navToggle.on('click', function() {
    $navigation.toggleClass('nav-show');
    $navIcon.toggleClass('nav-toggle-active');
})

function scrollHeader() {
    if ($(window).width() <= 768) {
        $(document).scroll(function() {
            if ( $(document).scrollTop() >= 60 ) {
                $header.addClass('color-change');
            } else {
                $header.removeClass('color-change');
            }
        });
    }
    else {
        $(document).scroll(function() {
            if ( $(document).scrollTop() >= 70 ) {
                $header.addClass('color-change');
                $navigation.addClass('nav-scroll');
                $('.logo-link').addClass('logo-scroll');
            } else {
                $header.removeClass('color-change');
                $navigation.removeClass('nav-scroll');
                $('.logo-link').removeClass('logo-scroll');
            }
        });
    }
}

scrollHeader();


function bannerBtn() {
    var $bannerBtn = $('.banner-btn');
    var sectionOffset = $('.about-me').offset().top - 61;
    $bannerBtn.on('click', function() {
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
    })
}

bannerBtn();

function bannerVidBtn() {
    var $bannerVidBtn = $('.banner-vid-btn');
        if ($(window).width() <= 768) {
            var sectionOffset = $('.social-and-contact').offset().top - 61;
        }
        else {
            var sectionOffset = $('.social-and-contact').offset().top - 70;
        }
    $bannerVidBtn.on('click', function() {
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
    })
}

bannerVidBtn();

function nav() {
    var $navLink = $('.nav-link');
    var $section = $('.js-section');
    var $navIcon = $('.nav-toggle-icon');
    var $navigation = $('.navigation');
  
    $navLink.each(function(i) {
    var $this = $(this);
    $this.attr('data-index', i);
    });
    $section.each(function(i) {
    $(this).attr('data-index', i);
    });
  
    $navLink.on('click', function() {
        var index = $(this).data('index');
        if ($(window).width() <= 768) {
            var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top - 61;
        }
        else {
            var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top - 70;
        }
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
        $navigation.toggleClass('nav-show');
        $navIcon.toggleClass('nav-toggle-active');
    });
}

nav();

function miniGOverlay() {
    var $btn = $('.mini-gallery-btn');
    var $close = $('.mg-overlay-btn');
    var $overlay = $('.mini-gallery-overlay');
    var $overlayImg = $('.mg-overlay-img');

    $btn.on('click', function() {
        var url = $(this).parent().data('url');
        $overlayImg.attr('src', url);
        $overlay.show();
    })
    $close.on('click', function() {
        $overlay.hide();
    })
}

miniGOverlay();