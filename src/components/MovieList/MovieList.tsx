import { useInfiniteScroll } from '../../hooks/useInfiniteScroll/useInfiniteScroll';
import { Movie } from '../../model/movie';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';
import { MutableRefObject, useRef } from 'react';

interface Props {
  movies: Movie[];
  updateMovies: () => void;
}

export const MovieList = ({ movies, updateMovies }: Props) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: updateMovies,
  });

  return (
    <div className="movies" ref={wrapperRef}>
      {movies.map(el => (
        <MovieCard movie={el} key={el.id} />
      ))}
      <div className="observer" ref={triggerRef}></div>
    </div>
  );
};
