import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./auth.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Content />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <h1>Join Medium.</h1>
        <p style={{ width: 400, margin: "auto", fontSize: 13 }}>
          Create an account to receive great stories in your inbox, personalize
          your homepage, and follow authors and topics that you love.
        </p>

        <FormInput />

        <div className="App-text-info">
          <p>Already have an account?</p>
          <Button style={{ color: " #2ecc71 ", fontWeight: "bold" }}>
            <Link
              style={{ textDecoration: "none", color: " #82e0aa " }}
              to="/login"
            >
              Sign In
            </Link>
          </Button>
        </div>

        <p className="p1">
          To make Medium work, we log user data and share it with service
          providers. Click “Sign up” above to accept Medium’s Terms of Service &
          Privacy Policy.
        </p>
      </div>
    );
  }
}

class FormInput extends Component {
  render() {
    return (
      <div className="App-form">
        <div>
          <TextField
            id="standard-basic"
            label="Your username"
            type="text"
            style={{ width: "20vw" }}
          />
        </div>

        <div>
          <TextField
            id="standard-basic"
            label="Your password"
            type="password"
            style={{ width: "20vw" }}
          />
        </div>

        <div>
          <TextField
            id="standard-basic"
            label="Your email"
            type="email"
            style={{ width: "20vw" }}
          />
        </div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "0",
            marginTop: "20px"
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            reg
          </Link>
        </Button>
      </div>
    );
  }
}

export default App;
