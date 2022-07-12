import { useRequest } from '../http/useRequest';
import { GET, PATCH, POST } from '../utils/constants/request';
import { movieService } from '../services/movieService';

export function useMovie() {
  const {
    data: movies,
    loading: isLoadedMovie,
    error: loadMovieError,
    httpRequest: getRequest,
  } = useRequest(movieService, {
    onError: (e) => {
      //에러 발생 시 실행시킬 에러핸들러 등록.
    },
    onComplete: (res) => {
      //요청/응답 성공 시 실행시킬 핸들러 등록. res에 응답정보 담겨 있음.
    },
  });

  const { httpRequest: patchRequest } = useRequest(movieService, {
    onComplete: () => {
      getMovies();
    },
  });

  const getMovies = () => {
    getRequest(GET, '');
  };

  const patchMovieById = (id, data) => {
    patchRequest(PATCH, '', id, data);
  };

  const searchMovies = (word) => {
    getRequest(GET, `?q=${word}`);
  };
  const searchLikedMovies = () => {
    getRequest(GET, '?like=true');
  };

  return {
    movies,
    isLoadedMovie,
    loadMovieError,
    getMovies,
    patchMovieById,
    searchMovies,
    searchLikedMovies,
  };
}
