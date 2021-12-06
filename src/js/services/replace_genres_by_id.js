export function replaceGenresById(filmData) {
  const genres = localStorage.getItem('genres');
  const parsedGenres = JSON.parse(genres);
  const genresById = parsedGenres.genres.filter(({ id }) => filmData.genre_ids.includes(id));
  const arrayGenres = genresById.map((genre) => {
    return genre.name;
  });
  if (arrayGenres.length > 3) {
    arrayGenres.splice(2, 10, 'other...');
  }
  filmData.genre_ids = arrayGenres;
}
