import React from "react";
import { connect } from "react-redux";
import { getAllReviews } from "../store/Actions/reviewActions";
import ReviewFeed from "./ReviewFeed";
import AddReview from "./AddReview";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllReviews();
  }
  componentDidUpdate(prevProps) {
    if (this.props.reviews.length !== prevProps.reviews.length) {
      this.props.getAllReviews();
    }
  }
  render() {
    return (
      <>
        <ReviewFeed reviews={this.props.reviews} />
        <AddReview reviews={this.props.reviews} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllReviews: () => dispatch(getAllReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
