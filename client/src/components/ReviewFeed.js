import React from "react";
import Review from "./Review";
import { GridList } from "@material-ui/core";

const ReviewFeed = ({ reviews }) => {
  return (
    <>
      <GridList cellHeight={160} cols={1}>
        {Object.values(reviews).map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </GridList>
    </>
  );
};

export default ReviewFeed;
