import React from "react";
import { connect } from "react-redux";

class Review extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const review = this.props.review;
    this.state = {
      beerName: review.Beer.name,
      rating: review.rating,
      comments: review.comments,
      user: review.User.username,
    };
  }
  render() {
    const { beerName, rating, comments, user } = this.state;
    return (
      <>
        <li>
          <p>{beerName}</p>
          <p>{rating}</p>
          <p>{comments}</p>
          <p>Reviewed By: {user}</p>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
