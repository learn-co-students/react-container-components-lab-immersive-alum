// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews.js'
import 'isomorphic-fetch';

const KEY = '94faf6eeb9f0410c9d9e616cd4d2fc6e'
let URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state ={
      reviews: [],
      searchTerm: 'lil uzi vert'
    }

    this.updateSearch = this.updateSearch.bind(this)
    // this.searchReviews = this.searchReviews.bind(this)
  }

  updateSearch(e){
      this.setState({searchTerm: e.target.value})
  }

  componentWillMount(){
    fetch(URL+this.state.searchTerm)
      .then(res => res.json())
      .then(data => this.setState({reviews: data.results}))
  }

  // Why does this not render when called in the render function?
  // But line 31 renders
  // searchReviews(){
  //   return (
  //     <div>
  //     <input type='text' />
  //     </div>
  //   )
  // }



  render(){
    return (
      <div className='searchable-movie-reviews'>
        <input type='text' onChange={this.updateSearch} value={this.state.searchTerm} />
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;

// notes on the workflow:
// renders and input
// input sets the value equal to state prop and listens for a change
// when a change occurs, that event is fired and updateSearch updates the state's search term
// then before the component mounts, we query the api with the new search term
// the results of that query are stored in the state and
// when that component is rendered, we pass the state in via a `reviews` prop to MovieReviews
