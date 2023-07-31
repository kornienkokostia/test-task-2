import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import { Movie } from '../../model/movie';
import { MovieList } from '../../components/MovieList/MovieList';

export const TaskOne = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const fetchMovies = async (page: number) => {
    const movies = await ApiService().getPopularMovies(page);
    setData([...data, ...movies.results]);
  };

  const updateMovies = () => {
    setPage(cur => cur + 1);
    if (page > 1) {
      fetchMovies(page);
    }
  };

  return <MovieList movies={data} updateMovies={updateMovies} />;
};
