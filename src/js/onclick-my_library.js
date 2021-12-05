
const refs = {
    /* logo: document.querySelector('.logo-link'),//Пошук Логотипа в Header */
    btnHome: document.querySelector('[data-home]'), //Пошук кнопки HOME в Header
    btnLibrary: document.querySelector('[data-library]'),//Пошук кнопки LIBRARY в Header
    changeHeader: document.querySelector('.header'), //Пошук класу Header
    searchForm: document.querySelector('.search-form'),//Пошук форми з інпутом в Header  
    openNextBtn: document.querySelector('.header-change__cont'),//Пошук контейнера з кнопками Watchd і Queve в Header 
    btnWatched: document.querySelector('[data-watched]'),//Пошук кнопки Watched в Header 
    btnQueue: document.querySelector('[data-queue]'),//Пошук кнопки Queve в Header 
    };

    refs.btnLibrary.addEventListener('click', onBtnLibrary)//Виклик слухача на кнопку LIBRARY в Header 
    
//Функція виконується при нажиманні на кнопку My Library
export function onBtnLibrary() {
    refs.btnHome.classList.remove('nav-item__list--activ');
    refs.btnLibrary.classList.add('nav-item__list--activ');
    refs.searchForm.classList.add('visually-hidden');
    refs.openNextBtn.classList.remove('visually-hidden');
    refs.changeHeader.classList.add('header-change');
}