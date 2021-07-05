// функция открытия модального окна или сайдбара
function openModal(modal, className) {
  modal.classList.add(className);
  blur.style.display = 'block';
}
// функция закрытия модального окна или сайдбара
function closeModal(modal, className) {
  modal.classList.remove(className);
  blur.style.display = 'none';
}

// кнопка меню
const openSidebarBtn = document.getElementById('openSidebar');
// кнопка закрыть sidebar
const closeSidebarBtn = document.getElementById('closeSidebar');
// блок sidebar
const sidebar = document.querySelector('.sidebar-wrapper');
// слой блюра
const blur = document.getElementById('blur-layer');


export  {
  openModal,
  closeModal,
  sidebar,
  openSidebarBtn,
  closeSidebarBtn,
  blur
};
