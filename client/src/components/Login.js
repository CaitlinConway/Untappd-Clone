import React from "react";
import { login } from "../store/Actions/authActions";
import { connect } from "react-redux";

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
    const { userName, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={this.updateUserName}
        ></input>
        <input
          type="password"
          value={password}
          onChange={this.updatePassword}
        ></input>
        <button type="submit">Log In</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
