import axios from 'axios';
const API_KEY = 'b62c635c7989a5db57e410f2e5aadf4e';
const spinner = document.getElementById('loading');

export async function getPopularFilms(page) {
  spinner.classList.remove('visually-hidden');
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);
  spinner.classList.add('visually-hidden');
  return response.data;
}

export async function getGenres() {
  const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function getSearch(value, page) {
  spinner.classList.remove('visually-hidden');
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false&query=${value}`
  );

  spinner.classList.add('visually-hidden');
  return response.data;
}
