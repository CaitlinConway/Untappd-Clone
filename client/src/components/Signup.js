import React from "react";
import { connect } from "react-redux";
import { signup } from "../store/Actions/authActions";
import { TextField } from "@material-ui/core";
class Signup extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password } = this.state;
    this.props.signup(userName, email, password);
  };
  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    const props = this.props;
    debugger;
    const { userName, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <TextField
            type="text"
            value={userName}
            onChange={this.updateUserName}
            placeholder="Username"
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
          <div className="signup-button-div">
            <button type="submit" className="button">
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     loggedIn: !!state.auth.id,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userName, email, password) =>
      dispatch(signup(userName, email, password)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
