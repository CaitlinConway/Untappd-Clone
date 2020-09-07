import React from "react";
import { TextField } from "@material-ui/core";
import { editReview } from "../store/Actions/reviewActions";
import { connect } from "react-redux";

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    const review = this.props.review;
    this.state = {
      beerName: review.Beer.name,
      rating: review.rating,
      comments: review.comments,
      userId: review.User.id,
      breweryName: review.Brewery.name,
      reviewId: review.id,
      Brewery: review.Brewery,
      Beer: review.Beer,
      User: review.User,
    };
  }
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
    debugger;
    let reviewForm = document.getElementById(`review-form-div-${reviewId}`);
    reviewForm.style.display = "none";
    // this.props.reRender();
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
  render() {
    const { beerName, breweryName, rating, comments, reviewId } = this.state;
    return (
      <div className="edit-review-div">
        <div className="error-container">
          <ul id="errors" className="errors"></ul>
        </div>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editReview: (review, beerName, breweryName, userId, rating, comments) =>
      dispatch(
        editReview(review, beerName, breweryName, userId, rating, comments)
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditReview);
