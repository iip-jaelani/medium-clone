import React, { Component, Fragment } from "react";
import Home from "./Home";
import Regist from "./Register";
import Login from "./Login";
import Categori from "./Categori";
import Article from "./Article-detail";
import Follow from "./Follow";
import Button from "./button";
import Related from "./Related-article";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    title: "Log In"
  };
  ubah = () => {
    this.setState({
      title: "cek"
    });
  };
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
          <Route path="/follow">
            <Follow />
          </Route>
          <Route path="/related">
            <Related />
          </Route>
          <Route path="/button">
            <Button
              judul={this.state.title}
              data={this.ubah}
              color="red"
              notif={() => alert("cek")}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
