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

var path = document.querySelector('#star-path');
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition =
  'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 2s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';
