$('.testimonialslider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.sucessstorieslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    dots: false,
    arrows: true,
});
$(".humburgur").click(function() {
    $('.menuwrapper').show();
});
$(".menuwrapper .close").click(function() {
    $('.menuwrapper').hide();
});
$("#aboutsection").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutsection").offset().top},
        'slow');
});
$("#featuresection").click(function() {
    $('html,body').animate({
        scrollTop: $(".featuresection").offset().top},
        'slow');
});
$("#sucessstoriesection").click(function() {
    $('html,body').animate({
        scrollTop: $(".sucessstoriesection").offset().top},
        'slow');
});
$("#Testimonialssection").click(function() {
    $('html,body').animate({
        scrollTop: $(".ourtestimonialsec").offset().top},
        'slow');
});
$("#getintouch").click(function() {
    $('html,body').animate({
        scrollTop: $(".ourofficesec").offset().top},
        'slow');
});