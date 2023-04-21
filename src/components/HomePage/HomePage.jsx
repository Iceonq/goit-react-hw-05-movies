import { Link } from 'react-router-dom';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <Link to={`/movies/${movie.id}`}>
                <li id={movie.id}>{movie.title}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
