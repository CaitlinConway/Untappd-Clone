export const ADD_REVIEW = "review/ADD_REVIEW";
export const DELETE_REVIEW = "review/DELETE_REVIEW";
export const UPDATE_REVIEW = "review/UPDATE_REVIEW";

export const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};
export const deleteReview = (review) => {
  return {
    type: DELETE_REVIEW,
  };
};
export const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review,
  };
};

export const addNewReview = (userId, beerId, rating, comments) => async (
  dispatch
) => {
  const res = await fetch("/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, beerId, rating, comments }),
  });
  res.data = await res.json();
  if (res.ok) {
    dispatch(addReview(res.data.review));
  }
  return res;
};
