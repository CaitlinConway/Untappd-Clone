import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
function App() {
  const store = configureStore();
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
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/">
          <h1>My Home Page</h1>
        </Route>
        <Route exact path="/login" component={Login} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
