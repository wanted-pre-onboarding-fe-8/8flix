import React from 'react';

import { movieRequest } from '../services/movieService';

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);

  const getMoviesCallback = (response) => {
    setMovies(response.data);
  };

  const getMovies = () => {
    movieRequest.get('', getMoviesCallback);
  };

  const patchMovieById = async (id, data) => {
    movieRequest.patch(id, data);
  };

  const searchMovies = async (word) => {
    movieRequest.get(`?q=${word}`, getMoviesCallback);
  };

  return {
    movies,
    getMovies,
    patchMovieById,
    searchMovies,
  };
};
