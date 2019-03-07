import { FETCH_PHOTOS } from "./types";
import axios from "axios";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

// This is a function that returns another function
export const fetchPhotos = term => async dispatch => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${API_KEY}`
  );

  console.log(response);

  // The Action-creator fetchPhotos creates an action,
  // put the result of the API request in to the payload
  // and dispatch it.
  // The reducer inside the photoReducer.js will then add action.payload to the state
  // and generate a new state.
  dispatch({
    type: FETCH_PHOTOS,
    payload: response.data.results
  });
};
