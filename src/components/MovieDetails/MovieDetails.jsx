import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchMovieDetails } from '../../utils/fetchMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(
    () => async () => {
      const movieData = await fetchMovieDetails(movieId);
      if (movieData) {
        setMovie(movieData);
      }
    },
    [movieId]
  );

  if (!movie) {
    return null;
  }
  const averageScore = Math.ceil(movie.vote_average * 10);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
        alt="cze"
      />
      <Link to="/">Go back</Link>
      <h2>Title: {movie.title}</h2>
      <p>User Score: {averageScore}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>

      <ul>
        {movie.genres &&
          movie.genres.map(movieGenre => {
            return <li key={nanoid()}>{movieGenre.name}</li>;
          })}
      </ul>
      <span>Additional information</span>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
