import {
  ADD_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
  GET_REVIEWS,
} from "../Actions/reviewActions";
export default function reviewReducer(state = {}, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_REVIEW:
      debugger;
      newState[action.review.id] = action.review;
      return newState;
    case DELETE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    case UPDATE_REVIEW:
      return action.review;
    case GET_REVIEWS:
      action.reviews.forEach((review) => {
        // const reviewClone = {};
        // Object.keys(review).forEach((key) => {
        //   reviewClone[key] = review[key];
        // });
        newState[review.id] = review;
      });
      return newState;
    // return Object.assign({}, newState, action.reviews);
    // return newState;
    default:
      return state;
  }
}
