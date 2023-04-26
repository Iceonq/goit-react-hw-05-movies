import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchCast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(
    () => async () => {
      const castData = await fetchCast(movieId);
      setCast(castData);
    },
    []
  );

  return (
    <ul>
      {cast &&
        cast.map(castSinglePerson => {
          return (
            <li key={castSinglePerson.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${castSinglePerson.profile_path}`}
                alt="cze"
              />
              <p>{castSinglePerson.name}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
