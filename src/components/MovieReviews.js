// Code MovieReviews Here
import React from 'react'

// class MovieReviews extends React.Component {
const displayReview = ({display_title, summary_short}) => {
  return (
    <div key={display_title}>
      <h3> {display_title} </h3>
      <h5> {summary_short} </h5>
    </div>
  )
}
const MovieReviews = ({reviews}) => {
  console.log(reviews);

  return (
    <div className='review-list'>
      {reviews.map(displayReview)}
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
