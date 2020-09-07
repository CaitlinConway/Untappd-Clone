import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../store/Actions/reviewActions";
import EditReview from "./EditReview";
class Review extends React.Component {
  constructor(props) {
    super(props);
    const review = this.props.review;
    this.state = {
      beerName: review.Beer.name,
      rating: review.rating,
      comments: review.comments,
      user: review.User.username,
      breweryName: review.Brewery.name,
      reviewId: review.id,
      Brewery: review.Brewery,
      Beer: review.Beer,
      User: review.user,
    };
  }
  updateReview = (e) => {
    let reviewForm = document.getElementById(
      `review-form-div-${e.target.value}`
    );
    reviewForm.style.display = "flex";
  };
  deleteReview = (e) => {
    e.preventDefault();
    this.props.deleteReview(this.props.review);
  };
  render() {
    const {
      beerName,
      rating,
      comments,
      user,
      breweryName,
      reviewId,
    } = this.state;
    return (
      <>
        <li>
          <p>
            {user} is drinking a {beerName} at {breweryName}
          </p>
          <p>Rating: {rating}</p>
          <p>{comments}</p>
          <div className="feed-buttons">
            <button onClick={this.updateReview} value={reviewId}>
              Update Review
            </button>
            <button onClick={this.deleteReview}>Delete Review</button>
          </div>
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
