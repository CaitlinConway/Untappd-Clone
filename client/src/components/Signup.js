import React from "react";
import { connect } from "react-redux";
import { signup, login } from "../store/Actions/authActions";
import { TextField } from "@material-ui/core";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    this.props.signup(username, email, password, confirmPassword);
    // window.location.href = "/";
  };
  updateUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  updateConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <div className="login-page">
        <div className="page-header">Untappd</div>
        <ul className="errors"></ul>
        <div className="login-form-div">
          <form onSubmit={this.handleSubmit} className="login-form">
            <TextField
              type="text"
              value={username}
              onChange={this.updateUsername}
              placeholder="username"
            ></TextField>
            <TextField
              type="text"
              value={email}
              onChange={this.updateEmail}
              placeholder="Email"
            ></TextField>
            <TextField
              type="password"
              value={password}
              onChange={this.updatePassword}
              placeholder="password"
            ></TextField>
            <TextField
              type="password"
              value={confirmPassword}
              onChange={this.updateConfirmPassword}
              placeholder="password"
            ></TextField>
            <div className="log-in-button-div">
              <button type="submit" className="button">
                Sign Up!
              </button>
            </div>
          </form>
        </div>
        <div className="no-account">
          Already have an account?
          <form action="/login">
            <button> Log In!</button>
          </form>
        </div>
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
    signup: (username, email, password, confirmPassword) =>
      dispatch(signup(username, email, password, confirmPassword)),
    login: (username, password) => dispatch(login(username, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
