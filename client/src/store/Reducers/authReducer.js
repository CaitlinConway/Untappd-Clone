import React from "react";
import { setUser, login } from "../Actions/authActions";
export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      break;
  }
}
