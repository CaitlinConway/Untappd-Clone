import React from "react";
import Review from "./Review";
import EditReview from "./EditReview";

const ReviewFeed = ({ reviews, reRender }) => {
  return (
    <>
      <ul>
        {Object.values(reviews).map((review) => (
          <div key={review.id}>
            <div id={`review-form-div-${review.id}`} hidden>
              <EditReview review={review} reRender={reRender}></EditReview>
            </div>
            <Review review={review}></Review>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ReviewFeed;
