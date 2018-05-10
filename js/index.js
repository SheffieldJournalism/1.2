//Wow JS
new WOW().init();

//AOS JS
AOS.init();

// Slick Slider carousel
$('#main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      arrows: true,

  });

  var video = $('#main-slider .slick-active').find('iframe').get(0).play();

  $('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#main-slider .slick-slide').find('video').get(0).pause();
    var video = $('#main-slider .slick-active').find('video').get(0).play();
});
