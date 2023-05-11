import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const KEY = '65128993e18cf258695ad7fce6893761';

const Movies = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesBySearchQuery, setMoviesBySearchQuery] = useState([]);

  console.log(location);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(e.target.searchInput.value);
  };

  useEffect(() => {
    const fetchBySearchQuery = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}`
        );
        const newSearchQuery = response.data.results;

        setMoviesBySearchQuery(newSearchQuery);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchBySearchQuery();
  }, [searchQuery]);

  console.log(location);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {moviesBySearchQuery &&
          moviesBySearchQuery.map(movie => {
            return (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                state={{ from: '/movies' }}
              >
                <li>{movie.title}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
