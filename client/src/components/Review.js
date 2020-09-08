import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../store/Actions/reviewActions";
import EditReview from "./EditReview";
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: this.props.review.Beer.name,
      rating: this.props.review.rating,
      comments: this.props.review.comments,
      user: this.props.review.User.username,
      breweryName: this.props.review.Brewery.name,
      reviewId: this.props.review.id,
      Brewery: this.props.review.Brewery,
      Beer: this.props.review.Beer,
      reviewUserId: this.props.review.userId,
      review: this.props.review,
      userId: this.props.userId,
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
      userId,
      reviewUserId,
    } = this.state;
    let shouldHide;
    shouldHide = userId !== reviewUserId ? "true" : "";
    debugger;
    return (
      <>
        <li>
          <p>
            {user} is drinking a {beerName} at {breweryName}
          </p>
          <p>Rating: {rating}</p>
          <p>{comments}</p>
          <div id={`review-form-div-${this.props.review.id}`} hidden>
            <EditReview
              review={this.props.review}
              userId={this.props.user}
            ></EditReview>
          </div>
          <div className="feed-buttons">
            <button
              id={`update-review-${reviewId}`}
              onClick={this.updateReview}
              value={reviewId}
              className={shouldHide ? "hidden" : ""}
            >
              Update Review
            </button>
            <button
              id={`delete-review-${reviewId}`}
              onClick={this.deleteReview}
              className={shouldHide ? "hidden" : ""}
            >
              Delete Review
            </button>
          </div>
        </li>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    userId: state.auth.id,
    shouldHide: state.shouldHide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
