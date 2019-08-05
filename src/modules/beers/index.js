import axios from 'axios'
import {
  FETCH_BEERS,
  SORT_BY_ABV,
  FETCH_BEER_DETAILS,
  FETCH_BEERS_FAILED,
  RESET_STATE
} from './actionTypes'

// Set up ROOT_URL API
const ROOT_URL = 'https://api.punkapi.com/v2/'

// Create a state in store
const initialState = {
  beersList: [],
  beerDetails: {},
  isLoading: true,
  isError: false,
  errorMessage: ''
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        ...state,
        beersList: action.payload.data,
        isLoading: false
      }
    
    case SORT_BY_ABV:
      return {
      ...state,
      beersList: action.payload.data > 0 ? [...action.payload.data.sort((a,b) => a.abv - b.abv)] : action.payload.data
    }

    case FETCH_BEER_DETAILS:
      return {
        ...state,
        beerDetails: action.payload,
        isLoading: false
      }

    case FETCH_BEERS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        isError: true
      }

    case RESET_STATE:
      return initialState

    default:
      return state
  }
}

// Reset state
export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE
  })
}

// Get All Beers
export const fetchBeers = () => (dispatch) => {
  axios.get(`${ROOT_URL}beers`)
    .then(result => dispatch({
      type: FETCH_BEERS,
      payload: result
    }))
    .catch(error => dispatch({
      type: FETCH_BEERS_FAILED,
      payload: error.message
    }))
}

// Get Beer Details
export const fetchBeerDetails = id => (dispatch) => {
  axios.get(`${ROOT_URL}beers/${id}`)
    .then(result => dispatch({
      type: FETCH_BEER_DETAILS,
      payload: result.data
    }))
    .catch(error => dispatch({
      type: FETCH_BEERS_FAILED,
      payload: error.message
    }))
}
