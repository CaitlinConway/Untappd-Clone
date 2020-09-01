import React from "react";

const Review = ({ review }) => {
  return (
    <>
      <li>
        <p>{review.Beer.name}</p>
        <p>{review.rating}</p>
        <p>{review.comments}</p>
        <p>Reviewed By: {review.User.username}</p>
      </li>
    </>
  );
};

export default Review;
