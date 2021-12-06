const refs = {
    btnHome: document.querySelector('[data-home]'), //Пошук кнопки HOME в Header
    btnLibrary: document.querySelector('[data-library]'),//Пошук кнопки LIBRARY в Header
    changeHeader: document.querySelector('.header'), //Пошук класу Header
    searchForm: document.querySelector('.search-form'),//Пошук форми з інпутом в Header  
    openNextBtn: document.querySelector('.header-change__cont'),//Пошук контейнера з кнопками Watchd і Queve в Header 
    btnWatched: document.querySelector('[data-watched]'),//Пошук кнопки Watched в Header 
    btnQueue: document.querySelector('[data-queue]'),//Пошук кнопки Queve в Header 
    gallery: document.querySelector(".gallery")
    };

    refs.btnLibrary.addEventListener('click', onBtnLibrary)//Виклик слухача на кнопку LIBRARY в Header 
   
   
   
     //Функція виконується при нажиманні на кнопку My Library
export function onBtnLibrary() {
    refs.btnHome.classList.remove('nav-item__list--activ');
    refs.btnLibrary.classList.add('nav-item__list--activ');
    refs.searchForm.classList.add('visually-hidden');
    refs.openNextBtn.classList.remove('visually-hidden');
    refs.changeHeader.classList.add('header-change');
    onBtnInMyLibrary();
    markUpLibraryScreen();
}

//Функція - переключатель на кнопки Watchd і Queve в My LIBRARY 
function onBtnInMyLibrary() {
    refs.btnWatched.addEventListener('click', onBtnInMyLibrary);
    refs.btnQueue.addEventListener('click', onBtnInMyLibrary);
    if (!refs.btnWatched.classList.contains('header-change__cont-btn--activ')) {
        
        onBtnWatchedInMyLibrary();
        return refs.btnWatched.removeEventListener('click', onBtnInMyLibrary);
    }
   else {
        onBtnQueueInMyLibrary();
        return refs.btnQueue.removeEventListener('click', onBtnInMyLibrary);
       
    };
    
     
    
}
 
//Функція виконується при нажиманні на кнопку Watched
function onBtnWatchedInMyLibrary() {
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    
}

//Функція виконується при нажиманні на кнопку Queue
function onBtnQueueInMyLibrary() {
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    
}
//Функція - рендер пустого екрана My Library
function markUpLibraryScreen() {
    if (localStorage.getItem("key") === null || localStorage.getItem("key") === null ) {//Потрібно поєднати ключ localStorage з Дмитром
        refs.gallery.innerHTML =
        `<p class="library-screen__text">The library is currently empty!</p>
        <img src="./images/svg/film.svg" alt="logo" />`
    } else {
        //додається функція Дмитра//
    }
  
}