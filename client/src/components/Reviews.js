import React from "react";
import { connect } from "react-redux";
import { getAllReviews } from "../store/Actions/reviewActions";
import ReviewFeed from "./ReviewFeed";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllReviews();
  }
  componentDidUpdate() {
    this.props.getAllReviews();
  }
  render() {
    return <ReviewFeed reviews={this.props.reviews} />;
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
