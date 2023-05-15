import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const KEY = '65128993e18cf258695ad7fce6893761';

const Movies = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [moviesBySearchQuery, setMoviesBySearchQuery] = useState([]);
  const realQuery = searchQuery.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery({ query: e.target.searchInput.value });
  };

  useEffect(() => {
    const fetchBySearchQuery = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${realQuery}`
        );
        const newSearchQuery = response.data.results;

        setMoviesBySearchQuery(newSearchQuery);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    if (realQuery) {
      fetchBySearchQuery();
    } else {
      setMoviesBySearchQuery([]);
    }
  }, [realQuery, searchQuery]);

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
                state={{ from: location }}
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
