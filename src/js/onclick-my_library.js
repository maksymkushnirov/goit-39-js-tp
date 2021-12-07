import img from '../images/screen-library.jpg';

const refs = {
  
  logo: document.querySelector('.logo-link'),
  btnHome: document.querySelector('[data-home]'), //Пошук кнопки HOME в Header
  btnLibrary: document.querySelector('[data-library]'), //Пошук кнопки LIBRARY в Header
  changeHeader: document.querySelector('.header'), //Пошук класу Header
  searchForm: document.querySelector('.search-form'), //Пошук форми з інпутом в Header
  openNextBtn: document.querySelector('.header-change__cont'), //Пошук контейнера з кнопками Watchd і Queve в Header
  btnWatched: document.querySelector('[data-watched]'), //Пошук кнопки Watched в Header
  btnQueue: document.querySelector('[data-queue]'), //Пошук кнопки Queve в Header
  gallery: document.querySelector('.gallery') //Пошук контейнера gallery в main
};

refs.logo.addEventListener('click', onLogo);
refs.btnHome.addEventListener('click', onBtnHome);
refs.btnLibrary.addEventListener('click', onBtnLibrary); //Виклик слухача на кнопку LIBRARY
refs.btnWatched.addEventListener('click', onBtnWatchedInMyLibrary); //Виклик слухача на кнопку Watched
refs.btnQueue.addEventListener('click', onBtnQueueInMyLibrary); //Виклик слухача на кнопку Queve

refs.btnLibrary.classList.remove('nav-item__list--activ');

function onLogo(event) {
  console.log(event);
  // event.preventDefault()
  refs.btnLibrary.classList.remove('nav-item__list--activ');
  onBtnHome();
}

//Функція виконується при нажиманні на кнопку Home
function onBtnHome() {
  refs.btnHome.classList.add('nav-item__list--activ');
  refs.btnLibrary.classList.remove('nav-item__list--activ');
  refs.changeHeader.classList.remove('header-change');
  refs.searchForm.classList.remove('visually-hidden');
  refs.openNextBtn.classList.add('visually-hidden');
}

//Функція виконується при нажиманні на кнопку My Library
export function onBtnLibrary() {
  refs.btnHome.classList.remove('nav-item__list--activ');
  refs.btnLibrary.classList.add('nav-item__list--activ');
  refs.searchForm.classList.add('visually-hidden');
  refs.openNextBtn.classList.remove('visually-hidden');
  refs.changeHeader.classList.add('header-change');
  onBtnWatchedInMyLibrary();
  
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
  if (localStorage.getItem('key') === null || localStorage.getItem('key') === null) {//Потрібно поєднати ключ localStorage з Дмитром
    
        refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;
  } else {
    //додається функція Дмитра//
  }
}
//markUpLibraryScreen()
