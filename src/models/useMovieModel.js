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
  const searchLikedMovies = async (id) => {
    movieRequest.get(`?like=true&q=${id}`, getMoviesCallback);
  };

  const getMoviesByListsCallback = (response) => {
    const movieLists = response.data;
    const lists = movieLists.map((movie) => movie.title);
    setLists(lists);
  };

  const getMoviesByLists = () => {
    console.log('추천 검색어 API 조회');
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
