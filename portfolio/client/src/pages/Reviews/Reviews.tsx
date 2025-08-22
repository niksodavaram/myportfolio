// src/pages/ReviewsPage.tsx
import React from 'react';
import { Review } from '.';

interface ReviewsPageProps {
  reviews: Review[];
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ reviews }) => (
  <div className="reviews-page">
    <h2>All Reviews</h2>
    {reviews.length === 0 ? (
      <p>No reviews yet. Be the first to leave one!</p>
    ) : (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.name}</strong>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ReviewsPage;