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
      return action.review;
    case DELETE_REVIEW:
      return {};
    case UPDATE_REVIEW:
      return action.review;
    case GET_REVIEWS:
      // action.reviews.forEach((review) => {
      //   const reviewClone = {};
      //   Object.keys(review).forEach((key) => {
      //     if (key !== "User") reviewClone[key] = review[key];
      //   });
      //   newState[reviewClone.id] = reviewClone;
      // });
      // return newState;

      return action.reviews;
    default:
      return state;
  }
}
