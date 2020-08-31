import React from "react";
export const SET_USER = "authentication/SET_USER";
export const REMOVE_USER = "authentication/REMOVE_USER";

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
export const removeUser = () => {
  return {
    type: REMOVE_USER,
    user,
  };
};

export const login = (username, password) => async (dispatch) => {
  const res = fetch("api/users/token", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const user = await res.json();
  dispatch(setUser(user));
  res.data = user;
  return res;
};

export const logout = () => async (dispatch) => {
  const res = fetch("api/users/session", {
    method: "DELETE",
  });
  const user = await res.json();
  dispatch(removeUser());
  res.data = user;
  return res;
};
