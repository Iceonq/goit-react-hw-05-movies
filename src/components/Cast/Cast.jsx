import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const KEY = '65128993e18cf258695ad7fce6893761';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
        );
        const newCast = response.data.cast;

        setCast(newCast);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchCast();
  }, []);

  return (
    <ul>
      {cast &&
        cast.map(castSinglePerson => {
          return (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w200${castSinglePerson.profile_path} `}
              />
              <p>{castSinglePerson.name}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
