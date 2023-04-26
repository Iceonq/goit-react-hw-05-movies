import axios from 'axios';
const KEY = '65128993e18cf258695ad7fce6893761';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};
