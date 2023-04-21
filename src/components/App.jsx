import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Link } from './App.styled';

import axios from 'axios';

import Home from './HomePage/HomePage';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const KEY = '65128993e18cf258695ad7fce6893761';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
        );
        const newMovies = response.data.results;

        setMovies(newMovies);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails movies={movies} />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home movies={movies} />} />
      </Routes>
    </div>
  );
};
