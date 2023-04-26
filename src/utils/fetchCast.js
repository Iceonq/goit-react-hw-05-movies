import axios from 'axios';
const KEY = '65128993e18cf258695ad7fce6893761';

export const fetchCast = async id => {
  if (!id) {
    return null;
  }
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(`Error:${error}`);
  }
};
