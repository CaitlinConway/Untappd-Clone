import Cookies from "js-cookie";

export const ADD_REVIEW = "review/ADD_REVIEW";
export const DELETE_REVIEW = "review/DELETE_REVIEW";
export const UPDATE_REVIEW = "review/UPDATE_REVIEW";
export const GET_REVIEWS = "review/GET_REVIEWS";

export const addReview = (review) => {
  debugger;
  return {
    type: ADD_REVIEW,
    review,
  };
};
export const removeReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId,
  };
};
export const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review,
  };
};
export const fetchReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

export const addNewReview = (
  beerName,
  breweryName,
  userId,
  rating,
  comments
) => async (dispatch) => {
  debugger;
  const res = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
    },
    body: JSON.stringify({ beerName, breweryName, userId, rating, comments }),
  });

  res.data = await res.json();
  debugger;
  const { error } = res.data;
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";
  errorsContainer.style.display = "none";
  if (error) {
    errorsContainer.style.display = "flex";
    let errors = error.errors;
    for (let i = 0; i < errors.length; ++i) {
      let message = errors[i];
      const errorLi = document.createElement("li");
      errorLi.innerHTML = message;
      errorsContainer.appendChild(errorLi);
    }
  }
  dispatch(addReview(res.data.review));

  return res;
};

export const getAllReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews");
  let data = await res.json();
  if (res.ok) {
    dispatch(fetchReviews(data.reviews));
  }
  return data.reviews;
};

export const deleteReview = (review) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${review.id}`, {
    headers: {
      _csrf: Cookies.get("_csrf"),
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
    },
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeReview(review.id));
  }
};
