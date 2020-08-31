import React from "react";
import { login } from "../store/Actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Container, TextField, InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons/AccountCircle";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    this.props.login(userName, password);
  };
  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    if (this.props.loggedIn) return <Redirect to="/"></Redirect>;
    const { userName, password } = this.state;
    return (
      <div className="login-page">
        <div className="page-header">Untappd</div>
        <div className="login-form-div">
          <form onSubmit={this.handleSubmit} className="login-form">
            <TextField
              type="text"
              value={userName}
              onChange={this.updateUserName}
              placeholder="Username or Email"
            ></TextField>
            <TextField
              type="password"
              value={password}
              onChange={this.updatePassword}
              placeholder="password"
            ></TextField>
            <div className="log-in-button-div">
              <button type="submit" className="log-in-button">
                Log In
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
    loggedIn: !!state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
