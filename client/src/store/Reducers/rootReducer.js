import { combineReducers } from "redux";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  reviews: reviewReducer,
});

export default rootReducer;
