import modalMovieCard from "../templates/modal-oneMoovie.hbs"
const close = document.querySelector('.modal-close-icon')
const modalWindow = document.querySelector('.modal-content')
// const body = document.querySelector('body')

close.addEventListener('click', closeModal)
const galery = document.querySelector('.gallery')
galery.addEventListener('click', (e) => {getIdMovie
   
    const id = e.target.getAttribute('data-id')
    openModal(id)
   // console.log(e.target.className);
})
function getIdMovie() {const condition = e.target.className === "modalBtn"
     if (condition) {
      const id = e.target.getAttribute('data-id')
   }
}
const modalBackdrop = document.querySelector('.backdrop')
fetchMovieModal();
console.log('helo');
async function fetchMovieModal() {
   const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=fe9ed89434aaae0a5431bf6fa09118e9&language=en-US`)
      .then(response => {
         if (!response.ok) {
           throw Error(response.statusText)
         }
         return response.json()
       });
   const cardCreate = createCard(data)
   console.log(cardCreate);
    body.innerHTML = cardCreate
   //  modalWindow.innerHTML = cardCreate 
}

async function openModal(id) {
    console.log(id);
    modalBackdrop.classList.remove('is-hidden')
    const infoMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fe9ed89434aaae0a5431bf6fa09118e9&language=en-US`)
    .then(response => {
         if (!response.ok) {
           throw Error(response.statusText)
         }
         return response.json()
    });
    console.log(infoMovie);
    console.log( modalMovieCard(infoMovie));
    
   modalWindow.innerHTML = modalMovieCard(infoMovie)
 }
function closeModal() {
    modalBackdrop.classList.add('is-hidden')
}
function createCard(data) {
//   return data.results[0].id; 
   
   return data.results.map(modalMovieCard).join('')
}
