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

class Home extends Component {
  render() {
    return (
      <Router>
        <Container>
          {/* nabvar */}
          <div>
            {/* <AppBar position="static"> */}
            <Toolbar style={{ backgroundColor: "white" }}>
              <Typography
                variant="h6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "mono",
                  fontSize: "25px"
                }}
              >
                Medium
              </Typography>
              <Button
                color="inherit"
                style={{
                  color: "gray",
                  marginLeft: "auto"
                }}
              >
                <IconButton aria-label="search" color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton
                  aria-label="show 11 new notifications"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
              </Button>
              <Button variant="outlined" size="small">
                Upgrade
              </Button>
              <IconButton aria-label="search" color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Toolbar>
            {/* </AppBar> */}

            {/* end navbar */}
            {/* --------------------------------------------------------------------------->scroling menu */}

            {/* --------------------------------------------------------------------------------end scroling */}
            <Grid
              container
              spacing={3}
              style={{ textAlign: "left", marginTop: 50 }}
            >
              <Grid item xs md>
                <div style={{ fontSize: 12 }}>
                  <a href="#">
                    <img
                      style={{ maxWidth: "100%", height: "auto" }}
                      src="https://cdn-images-1.medium.com/focal/454/165/50/69/1*9r56DrsLjWjzZAnc9bGHOQ.jpeg"
                    />
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }} href="">
                    <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                      When Larry Met Sergey
                    </h1>
                    <p style={{ color: "gray" }}>
                      With Google’s founders withdrawing from management duties,
                      here’s how the partnership that would organize the world’s
                      information began
                    </p>
                  </a>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{ color: "gray", textDecoration: "none" }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
              </Grid>
              <Grid item xs={12} sm style={{ textAlign: "left" }}>
                <div
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    marginBottom: 20
                  }}
                >
                  <img
                    style={{ height: 100 }}
                    src="https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg"
                  />
                  <div
                    style={{
                      fontSize: 12,
                      marginLeft: 10
                    }}
                  >
                    <h3 style={{ fontSize: 15, fontWeight: "bold" }}>
                      Democrats Should Put Republicans on Trial During
                      Impeachment
                    </h3>
                    <p style={{ color: "gray", lineHeight: 0 }}>
                      With Google’s founders withdrawing
                    </p>
                    <div
                      style={{
                        lineHeight: 0
                      }}
                    >
                      <p>
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Steven
                        </a>{" "}
                        in{" "}
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Marker
                        </a>
                      </p>
                    </div>
                    <small style={{ color: "gray" }}>
                      Des 2.{" "}
                      <a
                        href=""
                        style={{
                          color: "gray",
                          textDecoration: "none"
                        }}
                      >
                        16 min read <i class="fas fa-star"></i>
                      </a>
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    marginBottom: 20
                  }}
                >
                  <img
                    style={{ height: 100 }}
                    src="https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg"
                  />
                  <div
                    style={{
                      fontSize: 12,
                      marginLeft: 10
                    }}
                  >
                    <h3 style={{ fontSize: 15, fontWeight: "bold" }}>
                      Democrats Should Put Republicans on Trial During
                      Impeachment
                    </h3>
                    <p style={{ color: "gray", lineHeight: 0 }}>
                      With Google’s founders withdrawing
                    </p>
                    <div
                      style={{
                        lineHeight: 0
                      }}
                    >
                      <p>
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Steven
                        </a>{" "}
                        in{" "}
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Marker
                        </a>
                      </p>
                    </div>
                    <small style={{ color: "gray" }}>
                      Des 2.{" "}
                      <a
                        href=""
                        style={{
                          color: "gray",
                          textDecoration: "none"
                        }}
                      >
                        16 min read <i class="fas fa-star"></i>
                      </a>
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    marginBottom: 20
                  }}
                >
                  <img
                    style={{ height: 100 }}
                    src="https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg"
                  />
                  <div
                    style={{
                      fontSize: 12,
                      marginLeft: 10
                    }}
                  >
                    <h3 style={{ fontSize: 15, fontWeight: "bold" }}>
                      Democrats Should Put Republicans on Trial During
                      Impeachment
                    </h3>
                    <p style={{ color: "gray", lineHeight: 0 }}>
                      With Google’s founders withdrawing
                    </p>
                    <div
                      style={{
                        lineHeight: 0
                      }}
                    >
                      <p>
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Steven
                        </a>{" "}
                        in{" "}
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href=""
                        >
                          Marker
                        </a>
                      </p>
                    </div>
                    <small style={{ color: "gray" }}>
                      Des 2.{" "}
                      <a
                        href=""
                        style={{
                          color: "gray",
                          textDecoration: "none"
                        }}
                      >
                        16 min read <i class="fas fa-star"></i>
                      </a>
                    </small>
                  </div>
                </div>
              </Grid>
              <Grid item sm style={{ textAlign: "left" }}>
                <Hidden only="xs">
                  <div style={{ fontSize: 12 }}>
                    <a href="#">
                      <img
                        style={{ maxWidth: "100%", height: "auto" }}
                        src="https://cdn-images-1.medium.com/focal/550/242/52/12/1*Oz3gNvs1zsgegCyyROcvJA.jpeg"
                      />
                    </a>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href=""
                    >
                      <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                        How to Behave at Work After You Quit Your Job
                      </h1>
                      <p style={{ color: "gray" }}>
                        Those two weeks can be a huge opportunity if you
                      </p>
                    </a>
                    <p>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <small>Marvin Marco </small>
                      </a>
                      <small>
                        in
                        <a
                          href=""
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Forge
                        </a>
                      </small>
                    </p>
                    <small style={{ color: "gray" }}>
                      Des 2.{" "}
                      <a
                        href=""
                        style={{ color: "gray", textDecoration: "none" }}
                      >
                        16 min read <i class="fas fa-star"></i>
                      </a>
                    </small>
                  </div>
                </Hidden>
              </Grid>
            </Grid>
          </div>

          <small>
            <a
              style={{
                color: " #58d68d ",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row-reverse"
              }}
              href=""
            >
              See all featured &#x3e;
            </a>
          </small>

          <hr style={{ backgroundColor: "gray" }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              {/* --------------------------------------------> conten */}
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  marginTop: 50,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    marginTop: -10,
                    marginLeft: 10,
                    width: 500
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      textTransform: "uppercase",
                      lineHeight: 0
                    }}
                  >
                    Based on your reading history
                  </p>
                  <h3>
                    Democrats Should Put Republicans on Trial During Impeachment
                  </h3>
                  <p style={{ color: "gray" }}>
                    A few months ago I was looking for a clean solution to setup
                    my main desktop computer, running Windows 10, to mine while
                    I was not using…
                  </p>
                  <p>
                    <a
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <small>Steven Levy.</small>
                    </a>
                    <small>
                      in
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Maker
                      </a>
                    </small>
                  </p>
                  <small style={{ color: "gray" }}>
                    Des 2.{" "}
                    <a
                      href=""
                      style={{
                        color: "gray",
                        textDecoration: "none"
                      }}
                    >
                      16 min read <i class="fas fa-star"></i>
                    </a>
                  </small>
                </div>
                <img
                  style={{ height: 130, marginLeft: 20 }}
                  src="https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </div>
              {/* -------------------------------->end conten */}
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* popular--------------------------------------------- */}
              <div>
                <h2>Popular on Medium</h2>
                <hr style={{ borderColor: "gray" }} />
              </div>
              {/* ------------------------------------->conten */}
              <div
                style={{
                  textAlign: "left",
                  display: "flex"
                }}
              >
                <h1 style={{ color: "gray" }}>01</h1>
                <p style={{ marginLeft: 20 }}>
                  <strong>
                    The Self-Help Movement That Is Upending American
                    Christianity
                  </strong>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  marginLeft: 60
                }}
              >
                <a href="">Allegra Hobbs</a> in <a href="">Forge</a>
                <p>
                  Nov 26. <a href="">18 min read </a>
                  <i class="fas fa-star"></i>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  display: "flex"
                }}
              >
                <h1 style={{ color: "gray" }}>02</h1>
                <p style={{ marginLeft: 20 }}>
                  <strong>
                    The Self-Help Movement That Is Upending American
                    Christianity
                  </strong>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  marginLeft: 60
                }}
              >
                <a href="">Allegra Hobbs</a> in <a href="">Forge</a>
                <p>
                  Nov 26. <a href="">18 min read </a>
                  <i class="fas fa-star"></i>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  display: "flex"
                }}
              >
                <h1 style={{ color: "gray" }}>03</h1>
                <p style={{ marginLeft: 20 }}>
                  <strong>
                    The Self-Help Movement That Is Upending American
                    Christianity
                  </strong>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  marginLeft: 60
                }}
              >
                <a href="">Allegra Hobbs</a> in <a href="">Forge</a>
                <p>
                  Nov 26. <a href="">18 min read </a>
                  <i class="fas fa-star"></i>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  display: "flex"
                }}
              >
                <h1 style={{ color: "gray" }}>04</h1>
                <p style={{ marginLeft: 20 }}>
                  <strong>
                    The Self-Help Movement That Is Upending American
                    Christianity
                  </strong>
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  marginLeft: 60
                }}
              >
                <a href="">Allegra Hobbs</a> in <a href="">Forge</a>
                <p>
                  Nov 26. <a href="">18 min read </a>
                  <i class="fas fa-star"></i>
                </p>
              </div>{" "}
              <hr />
              <div style={{ fontSize: 12 }}>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Help&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Status&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Writers&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Blog&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Careers&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Privacy&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  Terms&nbsp;&nbsp;
                </a>
                <a style={{ textDecoration: "none", color: "gray" }} href="">
                  About&nbsp;&nbsp;
                </a>
              </div>
              {/* ------------------------------>end conten */}
              {/* end populaar----------------------------------------------- */}
            </Grid>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default Home;
