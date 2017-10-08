// Code MovieReviews Here
import React from 'react'

// class MovieReviews extends React.Component {
const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      <ul>
      reviews.map(review => <li>review</li>)
      </ul>
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
