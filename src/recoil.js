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

      return searchMovie(movies, keyword);
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

      return searchMovie(movies, keyword).map(({ title }) => title);
    },
});

function searchMovie(movies, keyword) {
  const regexBan = /[[()+?]/g;
  if (regexBan.test(keyword)) return [];

  const regexTitle = new RegExp(`${keyword}`, 'i');

  const byTitle = movies.filter(({ title }) => regexTitle.test(title));
  const byDescription = movies.filter(({ description_full }) =>
    regexTitle.test(description_full)
  );

  const totalMovies = [...byTitle, ...byDescription];

  const result = [];
  for (const movie of totalMovies) {
    let has = false;
    for (const { id } of result) {
      if (movie.id === id) {
        has = true;
        break;
      }
    }
    if (!has) result.push(movie);
  }

  return result;
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
