import React from "react";
import { TextField } from "@material-ui/core";
import { addNewReview } from "../store/Actions/reviewActions";
import { connect } from "react-redux";
class AddReview extends React.Component {
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
    this.props.addNewReview(beerName, breweryName, userId, rating, comments);
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
      <>
        <div className="error-container">
          <ul id="errors" className="errors"></ul>
        </div>
        <div className="add-review-form-div">
          <form onSubmit={this.handleSubmit} className="review-form">
            <TextField
              type="text"
              value={beerName}
              onChange={this.updateBeerName}
              placeholder="beer name"
            ></TextField>
            <TextField
              type="text"
              value={breweryName}
              onChange={this.updateBreweryName}
              placeholder="brewery name"
            ></TextField>
            <TextField
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={this.updateRating}
              placeholder="rating"
            ></TextField>
            <TextField
              type="text"
              value={comments}
              onChange={this.updateComments}
              placeholder="comments"
            ></TextField>
            <div className="review-button-div">
              <button type="submit" className="button">
                Add review!
              </button>
            </div>
          </form>
        </div>
      </>
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
    addNewReview: (beerName, breweryName, userId, rating, comments) =>
      dispatch(addNewReview(beerName, breweryName, userId, rating, comments)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
