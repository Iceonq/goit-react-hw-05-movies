import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/fetchTrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>

      <ul>
        {movies.map(movie => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li id={movie.id}>{movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
