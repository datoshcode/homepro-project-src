// Scripts are indicated there
// Open mobile menu
const menuBtn = document.querySelector('.header-menu__burger-btn');
const menuMobile = document.querySelector('.header-menu__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
})

// Swiper slider fon section Locations
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
    700: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    1030: {
      slidesPerView: 3,
    },
  },
});

// Swiper slider for section Testimonials
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

// Swiper slider for section Feed
const swiperThree = new Swiper('.feed__slider', {
  loop: true,
  slidesPerView: 4.5,

  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    873: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1375: {
      slidesPerView: 4.5,
    },
    1515: {
      slidesPerView: 5,
    },
    1630: {
      slidesPerView: 5.5,
    },
  },
});