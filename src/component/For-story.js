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
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Popover from "@material-ui/core/Popover";
import Avatar from "@material-ui/core/Avatar";

const menuSatu = [
  {
    name: "Nem story"
  },
  {
    name: "Stories"
  },
  {
    name: "series"
  }
];
const menuDua = [
  {
    name: "Bookmar"
  },
  {
    name: "Provile"
  },
  {
    name: "Setting"
  },
  {
    name: "Help"
  },
  {
    name: "Sign out"
  }
];

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Toolbar className="App-ToolBar">
        <Typography>
          <a
            style={{
              backgroundColor: "black",
              padding: 5,
              color: "white",
              fontFamily: "mono",
              fontSize: 20,
              textDecoration: "none",
              marginLeft: "-20px"
            }}
            href="/home"
          >
            M
          </a>
        </Typography>
        <p style={{ marginLeft: 20, marginTop: "auto", marginBottom: "auto" }}>
          Draf
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-beetween",
            marginLeft: "auto",
            alignItems: "center",
            letterSpacing: "20px"
          }}
        >
          <SearchIcon className="coba" />
          <NotificationsIcon />
          <Button variant="outlined" size="small">
            Upgrade
          </Button>

          <IconButton
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <Avatar
              style={{ border: "1px solid gray" }}
              alt="Remy Sharp"
              src="https://cdn-images-1.medium.com/fit/c/55/55/0*0mfE3YsYI3LBr_vG"
            />
          </IconButton>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom"
          }}
          transformOrigin={{
            vertical: "top"
          }}
        >
          <Typography className="App-poper">
            <div className="App-poperAvatar">
              <Avatar
                className="App-avatar"
                alt="Remy Sharp"
                src="https://cdn-images-1.medium.com/fit/c/55/55/0*0mfE3YsYI3LBr_vG"
              />
              <p>
                <strong>Iip Jaelani</strong>
                <br />
                <a href="">@iipjaelani12345</a>
              </p>
            </div>

            <div>
              <a href="">Become a member</a>
            </div>
            <hr />
            {menuSatu.map(satu => (
              <div className="App-subMenu">
                <a className="menu" href="">
                  {satu.name}
                </a>
              </div>
            ))}

            <hr />
            {menuDua.map(dua => (
              <div className="App-subMenu">
                <a className="menu" href="">
                  {dua.name}
                </a>
              </div>
            ))}
          </Typography>
        </Popover>
      </Toolbar>
    </div>
  );
}
