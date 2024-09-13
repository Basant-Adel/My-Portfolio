// Window Scroll
$(window).on("scroll", function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
})

// Document Ready
$(document).ready(function() {

    //Typing Animation
    new Typed('#type-it', {
        strings: [
            'Front-End Developer',
            'Software Engineering',
            'Graphic Designer',
            'Freelancer',
        ],
        typeSpeed: 100,
        loop: true,
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 1,
            },
        },
    });

    // One Page Scroll
    $.scrollIt({
        easing: 'linear',
        topOffset: -70,
    });
});