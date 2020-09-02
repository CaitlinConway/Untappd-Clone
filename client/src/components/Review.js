import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../store/Actions/reviewActions";
class Review extends React.Component {
  constructor(props) {
    super(props);
    const review = this.props.review;
    debugger;
    this.state = {
      beerName: review.Beer.name,
      rating: review.rating,
      comments: review.comments,
      user: review.User.username,
    };
  }
  updateReview = (e) => {};
  deleteReview = (e) => {
    e.preventDefault();
    this.props.deleteReview(this.props.review);
  };
  render() {
    const { beerName, rating, comments, user } = this.state;
    return (
      <>
        <li>
          <p>{beerName}</p>
          <p>{rating}</p>
          <p>{comments}</p>
          <p>Reviewed By: {user}</p>
          <button onClick={this.updateReview}>Update Review</button>
          <button onClick={this.deleteReview}>Delete Review</button>
        </li>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
