import React from "react";
import { connect } from "react-redux";
import { getAllReviews } from "../store/Actions/reviewActions";
import ReviewFeed from "./ReviewFeed";
import AddReview from "./AddReview";
import UserTile from "./UserTile";
class Reviews extends React.Component {
  componentDidMount() {
    this.props.getAllReviews();
  }
  componentDidUpdate(prevProps) {
    if (this.props.reviews.length !== prevProps.reviews.length) {
      // const reviews = this.props.reviews;
      // for (let reviewId in reviews) {
      //   let review = reviews[reviewId];
      //   if (Object.keys(prevProps.reviews).length !== 0) {
      //     let prevReview = prevProps.reviews[reviewId];
      //     if (
      //       review.Beer.name !== prevReview.Beer.name ||
      //       review.Brewery.name !== prevReview.Brewery.name
      //     ) {
      //       this.props.getAllReviews();
      //     }
      //   }
      // }
      this.props.getAllReviews();
    }
  }
  render() {
    return (
      <>
        <ReviewFeed reviews={this.props.reviews} userId={this.props.userId} />
        <AddReview reviews={this.props.reviews} />
        <UserTile
          reviews={this.props.reviews}
          userId={this.props.userId}
        ></UserTile>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  reviews: state.reviews,
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllReviews: () => dispatch(getAllReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
