import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const KEY = '65128993e18cf258695ad7fce6893761';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
        );
        const newReviews = response.data.results;

        setReviews(newReviews);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchReviews();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
