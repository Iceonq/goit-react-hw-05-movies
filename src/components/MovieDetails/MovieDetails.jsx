import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find(movie => movie.id === Number(movieId));

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

      <span>Additional information</span>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetails;
