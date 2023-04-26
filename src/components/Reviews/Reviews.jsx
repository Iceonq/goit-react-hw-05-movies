import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(
    () => async () => {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    },
    [movieId]
  );

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
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
