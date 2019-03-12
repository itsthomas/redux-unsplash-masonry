import { combineReducers } from "redux";
import PhotoReducer from "./photoReducer";

// WE could call our data anything. Here we called it photos
// Now we can access it in all components via this.props.photos
const rootReducer = combineReducers({
  photos: PhotoReducer
});

export default rootReducer;
