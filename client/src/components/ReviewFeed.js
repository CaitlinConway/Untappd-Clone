import React from "react";
import Review from "./Review";

const ReviewFeed = ({ reviews, userId }) => {
  return (
    <>
      <p id="feed-title"> Recent Friend Activity</p>
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
