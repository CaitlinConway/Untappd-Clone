import { combineReducers } from "redux";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // users: userReducer,
  reviews: reviewReducer,
});

export default rootReducer;
