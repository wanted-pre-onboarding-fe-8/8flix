import React from 'react';

import { movieRequest } from '../services/movieService';

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);
  const [lists, setLists] = React.useState(null);

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
  const searchLikedMovies = async () => {
    movieRequest.get('?like=true', getMoviesCallback);
  };

  const getMoviesByListsCallback = (response) => {
    const movieLists = response.data;
    let lists = [];
    for (let movie of movieLists) {
      lists.push(movie.title);
    }
    setLists(lists);
  };

  const getMoviesByLists = () => {
    movieRequest.get('', getMoviesByListsCallback);
  };

  return {
    movies,
    getMovies,
    patchMovieById,
    searchMovies,
    searchLikedMovies,
    lists,
    getMoviesByLists,
  };
};
