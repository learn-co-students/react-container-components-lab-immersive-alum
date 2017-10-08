// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews.js'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state ={
      reviews: [],
      searchTerm: ''
    }
  }

  render(){
    return <div className='searchable-movie-reviews'><MovieReviews /></div>
  }
}

export default SearchableMovieReviewsContainer;
