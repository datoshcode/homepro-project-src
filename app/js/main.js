// Scripts are indicated there
// Swiper slider
const swiperOne = new Swiper('.locations__slider', {
  loop: true,
  speed: 600,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  simulateTouch: false,
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
  },
});

const swiperTwo = new Swiper('.testimonials__slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});
