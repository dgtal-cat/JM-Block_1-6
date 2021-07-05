import Swiper from 'swiper/bundle';

const brandsSlider = new Swiper('.brands-board__slider', {
  freeMode: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.brands__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
    },

  },

});
const repairsSlider = new Swiper('.repairs__slider', {
  freeMode: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.repairs__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
    },

  },

});
const pricesSlider = new Swiper('.prices__table-content', {
  freeMode: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.prices__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
    },

  },

});
export {
  brandsSlider,
  repairsSlider,
  pricesSlider
}
