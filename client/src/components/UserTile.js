import React from "react";

const UserTile = ({ reviews, userId }) => {
  debugger;
  let total = 0;
  Object.values(reviews).map((review) => {
    if ((review.userId = userId)) {
      total++;
    }
  });
  return (
    <>
      <div id="user-tile">You've drunk {total} distinct beers!</div>
    </>
  );
};

export default UserTile;
