// кнопка обратная связь в main
const feedbackSidebarButton = document.getElementById('sidebar-feedback-btn');
// кнопка обратная связь в sidebar
const feedbackHeaderButton = document.getElementById('header-feedback-btn');
// кнопка закрыть окно "обратной связи"
const closeFeedbackButton = document.getElementById('closeFeedback');
// окно "обратной связи"
const feedbackModal = document.querySelector('.modal__feedback');


// кнопка "заказать звонок" связь в main
const callbackMainBtn = document.getElementById('sidebar-callback-btn');
// кнопка "заказать звонок" в sidebar
const callbackSidebarBtn = document.getElementById('header-callback-btn');
// кнопка закрыть окно ""заказать звонок""
const closeCallbackBtn = document.getElementById('closeCallback');
// окно "обратной связи"
const callbackModal = document.querySelector('.modal__callback');

export  {
    feedbackSidebarButton,
    feedbackHeaderButton,
    closeFeedbackButton,
    feedbackModal,
    callbackMainBtn,
    callbackSidebarBtn,
    closeCallbackBtn,
    callbackModal
};
