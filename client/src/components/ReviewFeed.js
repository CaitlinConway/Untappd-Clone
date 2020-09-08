import React from "react";
import Review from "./Review";

const ReviewFeed = ({ reviews, userId }) => {
  return (
    <>
      <ul>
        {Object.values(reviews).map((review) => (
          <div key={review.id}>
            <Review review={review} userId={userId}></Review>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ReviewFeed;
