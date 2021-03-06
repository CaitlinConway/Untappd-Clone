import React from "react";

import Logout from "./Logout";
import Reviews from "./Reviews";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="page-header">Untappd</div>
        <div className="homepage-div">
          <div className="feed-div">
            <Reviews>
              <div className="error-container">
                <ul id="errors" className="errors"></ul>
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
