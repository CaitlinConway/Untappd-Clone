import React from "react";
import AddReview from "./AddReview";
import Logout from "./Logout";
import Reviews from "./Reviews";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="page-header">Untappd</div>

        <Reviews>
          <AddReview></AddReview>
        </Reviews>
        <Logout></Logout>
      </>
    );
  }
}

export default HomePage;
