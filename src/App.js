import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1> login </h1>
            <h2> welcome to Login page</h2>
          </Route>
          <Route path="/checkout">
            <h1> Checkout </h1>
            <h2> welcome to Checkout page</h2>
          </Route>
          <Route path="/">
            <h1> Home </h1>
            <h2> welcome to Home page</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
