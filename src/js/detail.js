var swiper = new Swiper(".js-detail-thumbs", {
  loop: true,
  slidesPerView: 4,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".detail-images__thumbs-block .swiper-button-next",
    prevEl: ".detail-images__thumbs-block .swiper-button-prev",
  },
  breakpoints: {
    768: {
      direction: 'vertical',
      spaceBetween: 8
    }
  }
});

var swiper2 = new Swiper(".js-detail-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".js-detail-slider .swiper-button-next",
    prevEl: ".js-detail-slider .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".js-detail-slider-only", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".js-detail-slider-only .swiper-button-next",
    prevEl: ".js-detail-slider-only .swiper-button-prev",
  }
});
