const swiper = new Swiper('.js-main-slider', {
  loop: true,

  autoplay: {
    delay: 5000
  },
  
  pagination: {
    el: '.js-main-slider .swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.js-main-slider .swiper-button-next',
    prevEl: '.js-main-slider .swiper-button-prev',
  },
});
