import React from "react";
import Review from "./Review";

const ReviewFeed = ({ reviews }) => {
  return (
    <>
      <ul>
        {Object.values(reviews).map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </ul>
    </>
  );
};

export default ReviewFeed;
