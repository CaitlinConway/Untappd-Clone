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
        <div className="homepage-div">
          <div className="feed-div">
            <Reviews>
              <div className="add-div">
                <AddReview></AddReview>
              </div>
            </Reviews>
          </div>
          <div className="logout-div">
            <Logout></Logout>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
