// Code MovieReviews Here
import React from 'react'

// class MovieReviews extends React.Component {
const displayReview = ({display_title, summary_short}) => {
  return (
    <div key={display_title} className='review'>
      <h3> {display_title} </h3>
      <h5> {summary_short} </h5>
    </div>
  )
}
const MovieReviews = ({reviews}) => { //I dont understand the parameter syntax with {}

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
