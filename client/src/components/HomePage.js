import React from "react";
import AddReview from "./AddReview";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="page-header">Untappd</div>
        <AddReview></AddReview>
      </>
    );
  }
}

export default HomePage;
