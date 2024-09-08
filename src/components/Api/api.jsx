import axios from "axios";

const API_KEY = "399525c39a0d6fd96b6bcda252b0f447";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTk1MjVjMzlhMGQ2ZmQ5NmI2YmNkYTI1MmIwZjQ0NyIsIm5iZiI6MTcyNTY0NTEzMi42MzYwNjEsInN1YiI6IjY2ZGIzZDIwYzUwYWI2NzM0YzY0MzQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9g-1BstKK49l4mH0UFm-0D8qmfMbbKeU_LTJNbj_Ml4`;

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};
