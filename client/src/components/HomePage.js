import React from "react";
import AddReview from "./AddReview";
import Logout from "./Logout";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="page-header">Untappd</div>
        <AddReview></AddReview>
        <Logout></Logout>
      </>
    );
  }
}

export default HomePage;
