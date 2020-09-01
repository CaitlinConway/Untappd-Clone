import Cookies from "js-cookie";

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

export const addNewReview = (
  beerName,
  breweryName,
  userId,
  rating,
  comments
) => async (dispatch) => {
  const res = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
    },
    body: JSON.stringify({ beerName, breweryName, userId, rating, comments }),
  });
  res.data = await res.json();
  console.log(res.data);
  const { error } = res.data;
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";
  errorsContainer.style.display = "none";
  if (error) {
    errorsContainer.style.display = "flex";
    let message = error.errors;
    const errorLi = document.createElement("li");
    errorLi.innerHTML = message;
    errorsContainer.appendChild(errorLi);
  }
  if (res.ok) {
    dispatch(addReview(res.data.review));
  }
  return res;
};
