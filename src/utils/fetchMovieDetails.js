import axios from 'axios';
const KEY = '65128993e18cf258695ad7fce6893761';

export const fetchMovieDetails = async id => {
  if (!id) {
    return null;
  }
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
