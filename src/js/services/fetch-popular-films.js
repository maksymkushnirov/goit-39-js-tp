import axios from "axios";
const API_KEY = "b62c635c7989a5db57e410f2e5aadf4e";

export async function getPopularFilms(page) {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);
    return response.data;
};