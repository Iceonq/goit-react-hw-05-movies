import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';

const KEY = '65128993e18cf258695ad7fce6893761';

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find(movie => movie.id === Number(movieId));
  const averageScore = Math.ceil(movie.vote_average * 10);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
        );
        const newGenres = response.data.genres;

        setGenres(newGenres);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchGenres();
  }, []);

  const movieByIdGenres = genres.filter(genre =>
    movie.genre_ids.includes(genre.id)
  );

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
        {movieByIdGenres &&
          movieByIdGenres.map(movieByIdGenre => {
            return <li key={nanoid()}>{movieByIdGenre.name}</li>;
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
