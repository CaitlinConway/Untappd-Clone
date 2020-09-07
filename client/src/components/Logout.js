import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/Actions/authActions";
class Logout extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="logout-button-div">
        <form onSubmit={this.handleLogout}>
          <button type="submit" className="button">
            Log Out
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userId) => dispatch(logout(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
