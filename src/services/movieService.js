import axios from 'axios';

export const movieService = axios.create({
  baseURL: 'http://localhost:8000/movie',
});
