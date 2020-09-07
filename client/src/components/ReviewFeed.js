import React from "react";
import Review from "./Review";
import EditReview from "./EditReview";

const ReviewFeed = ({ reviews }) => {
  return (
    <>
      <ul>
        {Object.values(reviews).map((review) => (
          <div key={review.id}>
            <Review review={review}></Review>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ReviewFeed;
