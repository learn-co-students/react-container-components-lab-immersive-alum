import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=f98593a095b44546bf4073744b540da0`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }
  componentWillMount(){
    fetch(URL)
      .then( response => response.json())
      .then( data => this.setState({reviews: data.results}))
  }

  render(){
    return (
        <MovieReviews reviews={this.state.reviews} className='latest-movie-reviews' />
    )
  }
}

export default LatestMovieReviewsContainer;
