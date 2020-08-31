import Cookies from "js-cookie";
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
  };
};

export const login = (username, password) => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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
