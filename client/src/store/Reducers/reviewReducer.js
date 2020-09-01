import {
  ADD_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "../Actions/reviewActions";
export default function reviewReducer(state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return action.review;
    case DELETE_REVIEW:
      return {};
    case UPDATE_REVIEW:
      return action.review;
    default:
      return state;
  }
}
