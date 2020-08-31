import { combineReducers } from "redux";
import authReducer from "./authReducer";
import drinkReducer from "./drinkReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // users: userReducer,
  // drinks: drinkReducer,
});

export default rootReducer;
