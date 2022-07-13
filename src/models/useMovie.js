import { useRequest } from '../http/useRequest';
import { GET, PATCH, POST } from '../utils/constants/request';
import { movieService } from '../services/movieService';
import { useSetRecoilState } from 'recoil';
import { movieState } from '../store/recoil';

export function useMovie() {
  const setMovies = useSetRecoilState(movieState);
  const {
    data: movies,
    loading: isLoadedMovie,
    error: loadMovieError,
    httpRequest: getRequest,
  } = useRequest(movieService, {
    onError: (e) => {},
    onComplete: (res) => {
      setMovies(res.data);
    },
  });

  const { httpRequest: patchRequest } = useRequest(movieService, {
    onComplete: () => {
      getMovies();
    },
  });

  const getMovies = async () => {
    getRequest(GET, '');
  };

  const patchMovieById = (id, data) => {
    patchRequest(PATCH, '', id, data);
  };

  return {
    movies,
    isLoadedMovie,
    loadMovieError,
    getMovies,
    patchMovieById,
  };
}
