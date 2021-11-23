var thumbs_fullscreen = new Swiper(".js-detail-thumbs-fullscreen", {
  loop: true,
  slidesPerView: 'auto',
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".full-screen .detail-images__thumbs-block .swiper-button-next",
    prevEl: ".full-screen .detail-images__thumbs-block .swiper-button-prev",
  },
  breakpoints: {
    768: {
      direction: 'vertical',
      spaceBetween: 8
    }
  }
});

var swiper_fullscreen = new Swiper(".js-detail-slider-fullscreen", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".full-screen .js-detail-slider-fullscreen .swiper-button-next",
    prevEl: ".full-screen .js-detail-slider-fullscreen .swiper-button-prev",
  },
  thumbs: {
    swiper: thumbs_fullscreen,
  },
});
