import React from "react";
import Review from "./Review";
import { GridList } from "@material-ui/core";
import EditReview from "./EditReview";

const ReviewFeed = ({ reviews, reRender }) => {
  return (
    <>
      <ul>
        {Object.values(reviews).map((review) => (
          <>
            <div id={`review-form-div-${review.id}`} hidden key={review.id}>
              <EditReview
                review={review}
                key={review.id}
                reRender={reRender}
              ></EditReview>
            </div>
            <Review review={review} key={review.id}></Review>
          </>
        ))}
      </ul>
    </>
  );
};

export default ReviewFeed;
