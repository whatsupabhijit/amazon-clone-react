import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import Checkout from "./components/js/Checkout";
// import { useStateValue } from "./StateProvider";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <h1> login </h1>
            <h2> welcome to Login page</h2>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
