import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./auth.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div
        style={{
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "60vw",
          borderRadius: "5px",
          marginTop: 100
        }}
      >
        <h1>Sign With Email.</h1>
        <p style={{ fontSize: 12 }}>
          Enter the email address associated with your account, and we’ll send a
          magic link to your inbox.
        </p>

        <div style={{ marginTop: 20 }}>
          <p>Your email</p>
          <TextField
            id="standard-basic"
            type="text"
            style={{ width: "25vw" }}
          />
          <p>Password</p>
          <TextField
            id="standard-basic"
            type="password"
            style={{ width: "25vw" }}
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "0",
              marginTop: "40px",
              marginBottom: "40px"
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              Continue
            </Link>
          </Button>
        </div>
        <div className="App-text-info">
          <Button
            style={{
              color: " #2ecc71 ",
              fontWeight: "bold",
              fontSize: 10,
              marginBottom: 100
            }}
          >
            &#60; &nbsp; All Sign in option
          </Button>
        </div>
      </div>
    );
  }
}
