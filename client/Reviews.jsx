import React from 'react';
import Review from './Review.jsx';

function Reviews({ reviews }) {
  return reviews.map((review, i) => <Review key={i} review={review}/>)
}

export default Reviews;