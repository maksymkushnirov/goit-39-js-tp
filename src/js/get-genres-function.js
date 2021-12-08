import { getGenres } from './services/fetch-backend';

getGenres()
  .then((value) => {
    localStorage.setItem('genres', JSON.stringify(value));
  })
  .catch((error) => console.log(error));
