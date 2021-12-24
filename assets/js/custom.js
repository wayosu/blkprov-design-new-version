// Owl Carousel Initialization

$('.home-slider').owlCarousel({
    loop: true,
    autplay: true,
    margin: 10,
    nav: true,
    autplayHoverPause: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<span class='fas fa-chevron-left'></span>","<span class='fas fa-chevron-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true
        }
    }
});