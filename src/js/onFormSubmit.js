// import { refs } from './refs';
// import { getSearch } from './services/fetch-backend';
import axios from 'axios';

 async function getSearch(value) {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`);
   return response.data
   
}

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  error: document.querySelector('.header-error__text'),
};

refs.searchForm.addEventListener('submit', onSubmit);


async function onSubmit(event) {
  event.preventDefault();
  const inputValue = event.srcElement[0].value;

  if (!inputValue) {
    refs.error.classList.remove('visually-hidden')
  } else {
    refs.error.classList.add('visually-hidden')
  }
  await getSearch(inputValue).then(data => {
    if (data.results.length === 0) {
      refs.error.classList.remove('visually-hidden')
    }
  })

}