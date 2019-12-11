import React, { Component, Fragment } from "react";
import Home from "./Home";
import Regist from "./Register";
import Login from "./Login";
import Categori from "./Categori";
import Article from "./Article-detail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/regist">
            <Regist />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/category">
            <Categori />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
      </div>
    );
  }
}
