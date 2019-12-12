import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import AppBar from "@material-ui/core/AppBar";
import { Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

class Related extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: " #f8f9f9  ",
            height: "100%",
            textAlign: "left"
          }}
        >
          <Container style={{ margin: "auto" }}>
            <h4 style={{ fontWeight: "200 bold", textAlign: "left" }}>
              More From Medium
            </h4>
            <hr />
            <Grid container xs sm md lg spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ color: "gray" }}>More from The Startup</p>
                <Card style={{ borderRadius: 0 }}>
                  <img
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/358/1*gYFnqSQMGtaHG-R2x6B8zw.jpeg"
                  />
                </Card>
                <p
                  style={{
                    fontSize: 30,
                    fontFamily: "mono",
                    fontWeight: "100 bold"
                  }}
                >
                  How to Escape Competition (and Build a Business on Your Own
                  Terms)
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex"
                  }}
                >
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/44/44/0*gi1nFF9e2YRkEE9O.jpeg"
                  />
                  <p style={{ marginRight: 100 }}>
                    Ali Mese in The Startup
                    <br />
                    <small>Dec 2 · 9 min read 5.9K </small>
                  </p>
                  <i style={{}} class="far fa-bookmark"></i>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ backgroundColor: "white" }}>sgdjsfhgasfa</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ backgroundColor: "white" }}>sgdjsfhgasfa</p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  }
}
export default Related;
