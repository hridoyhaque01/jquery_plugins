$(".slick_slider_content").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 4,
  stagePadding: 70,
  autoplay: 300,
  responsive: {
    1200: {
      items: 4,
    },
    992: {
      items: 3,
    },
    768: {
      items: 2,
    },
    576: {
      items: 1,
    },
  },
});
