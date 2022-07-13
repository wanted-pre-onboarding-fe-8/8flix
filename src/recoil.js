import { atom, selector, selectorFamily } from 'recoil';

export const keywordState = atom({
  key: 'keyword',
  default: '',
});

export const themeState = atom({
  key: 'isLightMode',
  default: true,
});

export const movieState = atom({
  key: 'movies',
  default: [],
});

export const myListSelector = selector({
  key: 'myListSelector',
  get: ({ get }) => {
    const movies = get(movieState);
    return movies.filter((movie) => movie.like);
  },
});

export const searchSelector = selectorFamily({
  key: 'searchSelector',
  get:
    (movieSelector) =>
    ({ get }) => {
      const movies = get(movieSelector);
      const keyword = get(keywordState);
      if (keyword === '') return movies;

      return searchMovieByTitle(movies, keyword);
    },
});

export const recommendsSelector = selectorFamily({
  key: 'recommendsSelector',
  get:
    (movieSelector) =>
    ({ get }) => {
      const movies = get(movieSelector);
      const keyword = get(keywordState);
      if (keyword === '') return [];

      const searchedMovies = searchMovieByTitle(movies, keyword);
      return searchedMovies.map(({ title }) => title);
    },
});

function searchMovieByTitle(movies, keyword) {
  const regexBan = /[[()+?]/g;
  if (regexBan.test(keyword)) return [];

  const regexTitle = new RegExp(`${keyword}`, 'i');
  return movies.filter(({ title }) => regexTitle.test(title)).sort();
}

export const sortSelector = selectorFamily({
  key: 'sortSelector',
  get:
    ({ movieSelector, order }) =>
    ({ get }) => {
      const movies = [...get(movieSelector)];
      return movies.sort((a, b) => b[order] - a[order]);
    },
});
