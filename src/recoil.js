import { atom, selector, selectorFamily } from 'recoil';

export const keywordState = atom({
  key: 'keyword',
  default: '',
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
      const keyword = get(keywordState);
      const movies = get(movieSelector);
      if (keyword === '') return movies;
      if (keyword.includes('[')) return [];

      const regexTitle = new RegExp(`${keyword}`, 'i');
      return movies.filter(({ title }) => regexTitle.test(title)).sort();
    },
});

export const sortSelector = selectorFamily({
  key: 'sortSelector',
  get:
    ({ movieSelector, order }) =>
    ({ get }) => {
      const movies = [...get(movieSelector)];
      return movies.sort((a, b) => b[order] - a[order]);
    },
});

export const recommendsSelector = selectorFamily({
  key: 'recommendsSelector',
  get:
    (movieSelector) =>
    ({ get }) => {
      const keyword = get(keywordState);
      if (keyword === '') return [];
      if (keyword.includes('[')) return [];

      const movies = get(movieSelector);
      const regexTitle = new RegExp(`${keyword}`, 'i');
      const searchedMovies = movies
        .filter(({ title }) => regexTitle.test(title))
        .sort();
      return searchedMovies.map(({ title }) => title);
    },
});
