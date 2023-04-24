import { Link } from 'react-router-dom';

const Home = ({ movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }
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
