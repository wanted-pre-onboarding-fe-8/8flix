import { genreEnglishToKoreanMapper as mapper } from '../constants';

export function cutString(str, maxLength) {
  if (maxLength <= str.length) {
    str = str.substring(0, maxLength - 3);
    if (str[str.length - 1] === ' ') {
      str = str.substring(0, maxLength - 4);
    }
    str += '...';
  }
  return str;
}

export function debounce(action, delay = 300) {
  let timer = null;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      action(event);
    }, delay);
  };
}

export function genresToKorean(genres) {
  const koreanGenres = genres.map((genre) => mapper[genre]);
  return koreanGenres;
}
