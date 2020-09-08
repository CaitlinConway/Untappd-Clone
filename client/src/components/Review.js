import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../store/Actions/reviewActions";
import { editReview } from "../store/Actions/reviewActions";
import { TextField } from "@material-ui/core";
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
  updateBeerName = (e) => {
    this.setState({ beerName: e.target.value });
  };
  updateBreweryName = (e) => {
    this.setState({ breweryName: e.target.value });
  };
  updateRating = (e) => {
    this.setState({ rating: e.target.value });
  };
  updateComments = (e) => {
    this.setState({ comments: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userId,
      beerName,
      breweryName,
      rating,
      comments,
      reviewId,
    } = this.state;
    const review = this.props.review;
    await this.props.editReview(
      review,
      beerName,
      breweryName,
      userId,
      rating,
      comments
    );
    let reviewForm = document.getElementById(`review-form-div-${reviewId}`);
    reviewForm.style.display = "none";
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
            <div className="edit-review-div">
              {/* <div className="error-container">
          <ul id="errors" className="errors"></ul>
        </div> */}
              <div className="edit-review-form-div">
                <form onSubmit={this.handleSubmit} className="review-form">
                  <TextField
                    type="text"
                    value={beerName}
                    onChange={this.updateBeerName}
                    placeholder="beer name"
                    fullWidth
                  ></TextField>
                  <TextField
                    type="text"
                    value={breweryName}
                    onChange={this.updateBreweryName}
                    placeholder="brewery name"
                    fullWidth
                  ></TextField>
                  <TextField
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 5,
                        min: 1,
                      },
                    }}
                    value={rating}
                    onChange={this.updateRating}
                    placeholder="rating"
                    fullWidth
                  ></TextField>
                  <TextField
                    type="text"
                    value={comments}
                    onChange={this.updateComments}
                    placeholder="comments"
                    fullWidth
                  ></TextField>
                  <div className="review-button-div">
                    <button
                      onClick={this.handleSubmit}
                      type="submit"
                      className="button"
                      value={reviewId}
                    >
                      Edit review!
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
    editReview: (review, beerName, breweryName, userId, rating, comments) =>
      dispatch(
        editReview(review, beerName, breweryName, userId, rating, comments)
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
