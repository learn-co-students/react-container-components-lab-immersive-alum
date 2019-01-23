import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'gFPOGNhPX5Ao8qGZAN6jIZ4R7l2yXmpk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            ...this.state, 
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + this.state.searchTerm).then(resp => resp.json()).then(data => this.setState({
            ...this.state,
            reviews: data.results
        }))
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <h2>Search Results</h2>
                <form onSubmit={this.handleSubmit}>
                    Search: <input type='text' placeholder='Search For Review' onChange={this.handleChange}/>
                    <button type='Submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
                <br />
                <hr />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
