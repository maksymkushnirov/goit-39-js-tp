import modalMovieCard from '../templates/modal-oneMoovie.hbs';
const close = document.querySelector('.modal-close-icon');
const modalWindow = document.querySelector('.modal-movie-template');
const galery = document.querySelector('.gallery');
const modalBackdrop = document.querySelector('.backdrop');
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'fe9ed89434aaae0a5431bf6fa09118e9';
// ============================================================================
close.addEventListener('click', closeModal);
galery.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  getIdMovie;
  openModal(id);
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
function getIdMovie() {
  const condition = e.target.className === 'modalBtn';
  if (condition) {
    const id = e.target.getAttribute('data-id');
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
  const cardCreate = createCard(data);
}

async function openModal(id) {
  console.log(id);
  modalBackdrop.classList.remove('is-hidden');
  const infoMovie = await fetch(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });

  modalWindow.innerHTML = modalMovieCard(infoMovie);
}

function closeModal() {
  modalBackdrop.classList.add('is-hidden');
}
