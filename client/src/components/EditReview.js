import React from "react";
import { TextField, GridList } from "@material-ui/core";
import { editReview } from "../store/Actions/reviewActions";
import { connect } from "react-redux";
import { Modal } from "@material-ui/core";

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: "",
      breweryName: "",
      rating: "",
      comments: "",
      userId: this.props.userId,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, beerName, breweryName, rating, comments } = this.state;
    const review = this.props.review;
    this.props.editReview(
      review,
      beerName,
      breweryName,
      userId,
      rating,
      comments
    );
    this.setState({
      beerName: "",
      breweryName: "",
      rating: "",
      comments: "",
      userId: this.props.userId,
    });
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
    const { beerName, breweryName, rating, comments } = this.state;
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
              <button type="submit" className="button">
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