import { SET_USER, REMOVE_USER, REGISTER_USER } from "../Actions/authActions";
export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    case REGISTER_USER:
      return action.user;
    default:
      return state;
  }
}
