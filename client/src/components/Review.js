import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../store/Actions/reviewActions";
class Review extends React.Component {
  constructor(props) {
    super(props);
    const review = this.props.review;
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
          <p>Beer: {beerName}</p>
          <p>Rating: {rating}</p>
          <p>{comments}</p>
          <p>Reviewed By: {user}</p>
          <div className="feed-buttons">
            <button onClick={this.updateReview}>Update Review</button>
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
