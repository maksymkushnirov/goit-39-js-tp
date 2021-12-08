import modalMovieCard from '../templates/modal-oneMoovie.hbs';
const close = document.querySelector('.modal-close-icon');
const modalWindow = document.querySelector('.modal-movie-template');
const galery = document.querySelector('.gallery');
const modalBackdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modalBtn')
const modalImg = document.querySelector('.img-mdl');
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'fe9ed89434aaae0a5431bf6fa09118e9';

// ============================================================================
close.addEventListener('click', closeModal);
galery.addEventListener('click', (e) => {
  // const id = e.target.getAttribute('data-id');
  e.preventDefault();
  getIdMovie(e);
  
});

// close по escape==============================================================================
window.addEventListener('keydown', (e) => {
  const condition = e.code === 'Escape';

  if (condition) {
    closeModal();
  }
});
// close по бекдропу==========================================================================
modalBackdrop.addEventListener('click', (e) => {
  const condition = e.target.classList.contains('backdrop');
  if (condition) {
    closeModal();
  }
});
// ============================================================================
function getIdMovie(e) {
  console.log(e.target.className);
  const condition = e.target.className.includes('modalBtn')
  console.log(condition);
  if (condition ) {
    const id = e.target.getAttribute('data-id');
    openModal(id);
  }
}
// =====================================================================================================================================
fetchMovieModal();

async function fetchMovieModal() {
  const data = await fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
// открытие модалки===отрисовка контента в модалку===апи запрос 1-го элемента по id
async function openModal(id) {
  
     modalBackdrop.classList.remove('is-hidden');
  
  const infoMovie = await fetch(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
  modalWindow.innerHTML = modalMovieCard(infoMovie);
}



//  закрытие модалки=== зачистка src
function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  modalImg.setAttribute('src', ''); // зачистка src
}
