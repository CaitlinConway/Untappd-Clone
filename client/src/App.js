import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import { Provider, connect } from "react-redux";
import configureStore from "./store/configureStore";
import { CssBaseline } from "@material-ui/core";
import Signup from "./components/Signup.js";
import HomePage from "./components/HomePage.js";
const store = configureStore();
if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  if (loggedIn) return <Route {...rest} component={Component} />;
  else return <Redirect to="/login" />;
};
const mapStateToProps = (state) => {
  return { loggedIn: !!state.auth.id };
};

const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  if (loading) return null;

  return (
    <>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <ConnectedProtectedRoute
              exact
              path="/"
              component={HomePage}
            ></ConnectedProtectedRoute>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
