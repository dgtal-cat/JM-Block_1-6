// блок brands
let brands = document.querySelector('.brands-board__wrapper');
// кнопака "Показать все" в блоке brands
let showBrandsBtn = document.getElementById('brands-show-all-btn').querySelector('button');
// Картинака из кнопки "Показать все" в блоке brands
let showBrandsImg = document.getElementById('brands-show-all-btn').querySelector('img');

// блок repairs
let repairs = document.querySelector('.repairs__slider');
// кнопака "Показать все" в блоке repairs
let showRepairsBtn = document.getElementById('repairs-show-all-btn').querySelector('button');
// Картинака из кнопки "Показать все" в блоке repairs
let showRepairsImg = document.getElementById('repairs-show-all-btn').querySelector('img');

function showBlock(block, btnImg, btnText) {
  block.style.height = '100%';
  btnImg.src = './img/arrows-up.svg';
  btnText.textContent = 'Скрыть';
}

function hideBlock(block, btnImg, btnText) {
  block.style.height = '200px';
  btnImg.src = './img/arrows-down.svg';
  btnText.textContent = 'Показать все';
}

export {
  showBlock,
  hideBlock,
  brands,
  showBrandsBtn,
  showBrandsImg,
  repairs,
  showRepairsBtn,
  showRepairsImg
};
