import { atom, selector, selectorFamily } from 'recoil';

export const keywordState = atom({
  key: 'keyword',
  default: '',
});

export const movieState = atom({
  key: 'movies',
  default: [],
});
// const movie = useRecoilValue(movieState);

export const myListSelector = selector({
  key: 'myListSelector',
  get: ({ get }) => {
    const movies = get(movieState);
    return movies.filter((movie) => movie.like);
  },
});
// const myList = useRecoilValue(myListSelector);

export const searchSelector = selectorFamily({
  key: 'searchSelector',
  get:
    (movieSelector) =>
    ({ get }) => {
      const keyword = get(keywordState);
      const movies = get(movieSelector);
      if (keyword === '') return movies;

      const regex = new RegExp(`^${keyword}`, 'i');
      return movies.filter(({ title }) => regex.test(title)).sort();
    },
});
// const searchedList = useRecoilValue(searchSelector(movieState));

export const sortSelector = selectorFamily({
  key: 'sortSelector',
  get:
    ({ movieSelector, order }) =>
    ({ get }) => {
      const movies = [...get(movieSelector)];
      return movies.sort((a, b) => b[order] - a[order]);
    },
});
// const sortedList = useRecoilValue(sortSelector({ movieSelector: myListSelector, order }));

export const recommendsSelector = selectorFamily({
  key: 'recommendsSelector',
  get:
    (movieSelector) =>
    ({ get }) => {
      const keyword = get(keywordState);
      if (keyword === '') return [];

      const movies = get(movieSelector);
      const regex = new RegExp(`^${keyword}`, 'i');
      const searchedMovies = movies
        .filter(({ title }) => regex.test(title))
        .sort();
      return searchedMovies.map(({ title }) => title);
    },
});
