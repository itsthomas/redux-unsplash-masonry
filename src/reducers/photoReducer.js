import { FETCH_PHOTOS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload;

    // If you want add result of each search to previous result, use this
    // return [...state, ...action.payload];

    default:
      return state;
  }
};
