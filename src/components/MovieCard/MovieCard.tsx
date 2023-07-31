import { Movie } from '../../model/movie';
import './MovieCard.scss';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <p className="title">{movie.title}</p>
      <p className="overview">{movie.overview}</p>
      <p className="release-date">Release date: {movie.release_date}</p>
    </div>
  );
};
