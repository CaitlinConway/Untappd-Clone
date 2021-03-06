import Cookies from "js-cookie";
export const SET_USER = "authentication/SET_USER";
export const REMOVE_USER = "authentication/REMOVE_USER";
export const REGISTER_USER = "authentication/REGISTER_USER";

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
export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    user,
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
  res.data = await res.json();
  const { message } = res.data;
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";
  if (message) {
    errorsContainer.style.display = "flex";
    const errorLi = document.createElement("li");
    errorLi.innerHTML = message;
    errorsContainer.appendChild(errorLi);
  }
  if (res.ok) {
    dispatch(setUser(res.data.user));
  }
  return res;
};

export const logout = () => async (dispatch) => {
  const res = fetch("api/session", {
    method: "DELETE",
  });
  const user = await res.json();
  dispatch(removeUser());
  res.data = user;
  return res;
};

export const signup = (username, email, password, confirmPassword) => async (
  dispatch
) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
    },
    body: JSON.stringify({
      username,
      email,
      password,
      confirmPassword,
    }),
  });
  res.data = await res.json();
  const { error } = res.data;
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";
  errorsContainer.style.display = "none";
  if (error) {
    errorsContainer.style.display = "flex";
    const errors = error.errors;
    for (let error1 of errors) {
      const errorLi = document.createElement("li");
      errorLi.innerHTML = error1;
      errorsContainer.appendChild(errorLi);
    }
  }
  if (res.ok) {
    dispatch(registerUser(res.data.user));
    alert("Signup successful! Return to login page");
  }
  return res;
};
