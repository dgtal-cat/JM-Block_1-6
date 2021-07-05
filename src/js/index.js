import '../scss/style.scss';
// sliders
import {
  brandsSlider,
  repairsSlider,
  pricesSlider
} from './swiper';

// sidebar
import {
  openModal,
  sidebar,
  closeModal,
  openSidebarBtn,
  closeSidebarBtn
} from './sidebar';

// modals
import {
  feedbackSidebarButton,
  feedbackHeaderButton,
  closeFeedbackButton,
  feedbackModal,
  callbackMainBtn,
  callbackSidebarBtn,
  closeCallbackBtn,
  callbackModal

} from './modal';

// showAll
import {
  showBlock,
  hideBlock,
  brands,
  showBrandsBtn,
  showBrandsImg,
  repairs,
  showRepairsBtn,
  showRepairsImg

} from './showAll';

// открыть sidebar по клику на бургер
openSidebarBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(sidebar, 'sidebar__show');
});
// закрыть sidebar по клику на бургер
closeSidebarBtn.addEventListener('click', function () {
  closeModal(sidebar, 'sidebar__show');
});
// закрыть sidebar по клику вне его
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target)) {
    closeModal(sidebar, 'sidebar__show');
  }
});


// открыть окно "обратной связи" по клику на кнопку в sidebar
feedbackHeaderButton.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(feedbackModal, 'modal__show');
});
// открыть окно "обратной связи" по клику на кнопку в header
feedbackSidebarButton.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(feedbackModal, 'modal__show');
});

// закрыть окно "обратной связи"
closeFeedbackButton.addEventListener('click', function () {
  closeModal(feedbackModal, 'modal__show');
});


// открыть окно "заказать звонок" по клику на кнопку в sidebar
callbackMainBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(callbackModal, 'modal__show');
});
// открыть окно "заказать звонок" по клику на кнопку в main
callbackSidebarBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(callbackModal, 'modal__show');
});

// закрыть окно "заказать звонок"
closeCallbackBtn.addEventListener('click', function () {
  closeModal(callbackModal, 'modal__show');
});


// меняем высоту блока brands по click
showBrandsBtn.addEventListener('click', function () {
  if (brands.style.height !== '100%') {
    showBlock(brands, showBrandsImg, showBrandsBtn);
  } else {
    hideBlock(brands, showBrandsImg, showBrandsBtn);
  }
});
// меняем высоту блока repairs по click
showRepairsBtn.addEventListener('click', function () {
  if (repairs.style.height !== '100%') {
    showBlock(repairs, showRepairsImg, showRepairsBtn);
  } else {
    hideBlock(repairs, showRepairsImg, showRepairsBtn);
  }
});
