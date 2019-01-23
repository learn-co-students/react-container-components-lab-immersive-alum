import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'gFPOGNhPX5Ao8qGZAN6jIZ4R7l2yXmpk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount = () => {
        fetch(URL).then(resp => resp.json()).then(data => this.setState({
            ...this.state,
            reviews: data.results
        }))
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h2>Latest Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;