$(function () {
  $('.slick-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="custom-arrow next-arrow" aria-label="Next" type="button"><i class="icofont-hand-drawn-right"></i></div>',
    prevArrow: '<div class="custom-arrow prev-arrow" aria-label="Next" type="button"><i class="icofont-hand-drawn-alt-left"></i></div>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


