
import { MoviesResponse } from '../model/movie';
import { useHttp } from './http.hook';

const ApiService = () => {
  const { request } = useHttp();
  const _apiBase = 'https://api.themoviedb.org/3';
  const _apiLang = 'language=en-US';
  const _apiKey3 = 'api_key=62050b72659b37dc215bf1de992857d4';
  // export const _imageBig = 'https://image.tmdb.org/t/p/w500';

  const getPopularMovies = async (page: number) =>
    (await request(`${_apiBase}/movie/popular?${_apiKey3}&${_apiLang}&page=${page}`)) as MoviesResponse;

  return {
    getPopularMovies
  };
};

export default ApiService;
