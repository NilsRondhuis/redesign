import Swiper, { Autoplay, Navigation } from "swiper";
Swiper.use([Autoplay, Navigation]);

const swiperHero = new Swiper(".swiper", {
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  speed: 1000,
});

const swiperWorks = new Swiper(".works-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
