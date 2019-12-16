import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import NavbarArticle from "./component/For-article";

export default class Categori extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <NavbarArticle />
        </Container>
        {/* ---------------------------------------------------------------------------------------------conten pertama */}
        <Container maxWidth="md">
          <div
            style={{
              marginTop: 50,
              display: "flex",
              flexDirection: "row",
              textAlign: "left"
            }}
          >
            <div>
              <img
                style={{ width: 200 }}
                src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png"
              />
            </div>
            <p style={{ width: 350, marginLeft: 20 }}>
              <a href="">The front lines of the future.</a> A Medium publication
              about tech and science.
            </p>
            <Button
              style={{ height: 30, fontSize: 10, marginLeft: "auto" }}
              variant="outlined"
              color="primary"
            >
              FOLLOW
            </Button>
          </div>
        </Container>

        <Container maxWidth="md" style={{ marginTop: 30 }}>
          <div style={{ width: "100%", marginBottom: 40 }}>
            <Grid container xs>
              <Grid item sm={8} xs={12}>
                <Card style={{ borderRadius: 0, width: "100%", height: 300 }}>
                  <img
                    style={{ width: "100%", minWidth: 500 }}
                    src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
                  ></img>
                </Card>
              </Grid>
              <Grid item sm xs={12}>
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "blue"
                  }}
                >
                  <div
                    style={{ padding: "15% 8%", color: "white", fontSize: 13 }}
                  >
                    <h3>The Influencer and the Hit Man</h3>
                    <p>
                      How a years-long domain name feud ended in a bloody
                      shootout
                    </p>
                    <a
                      style={{ color: "yellow", textDecoration: "none" }}
                      href=""
                    >
                      Ian Frisch
                    </a>
                    <p>Dec 10 · 24 min read</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ width: "100%" }}>
            <Grid container xs>
              <Grid item sm xs={12}>
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "white"
                  }}
                >
                  <div style={{ padding: "15% 8%", fontSize: 13 }}>
                    <h3>The Influencer and the Hit Man</h3>
                    <p>
                      How a years-long domain name feud ended in a bloody
                      shootout
                    </p>
                    <a style={{ textDecoration: "none" }} href="">
                      Ian Frisch
                    </a>
                    <p>Dec 10 · 24 min read</p>
                  </div>
                </div>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Card style={{ borderRadius: 0, width: "100%", height: 300 }}>
                  <img
                    style={{ width: "100%", minWidth: 600 }}
                    src="https://miro.medium.com/max/1512/1*MDxT8MJL3DmelDMv3-gd9A.gif"
                  ></img>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>

        <Container maxWidth="md" style={{ marginTop: 30 }}>
          <div style={{ width: "100%", marginBottom: 40 }}>
            <Grid container xs>
              <Grid item sm={8} xs={12}>
                <Card style={{ borderRadius: 0, width: "100%", height: 300 }}>
                  <img
                    style={{ width: "100%", minWidth: 500 }}
                    src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
                  ></img>
                </Card>
              </Grid>
              <Grid item sm xs={12}>
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "blue"
                  }}
                >
                  <div
                    style={{ padding: "15% 8%", color: "white", fontSize: 13 }}
                  >
                    <h3>The Influencer and the Hit Man</h3>
                    <p>
                      How a years-long domain name feud ended in a bloody
                      shootout
                    </p>
                    <a
                      style={{ color: "yellow", textDecoration: "none" }}
                      href=""
                    >
                      Ian Frisch
                    </a>
                    <p>Dec 10 · 24 min read</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ width: "100%" }}>
            <Grid container xs>
              <Grid item sm xs={12}>
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "white"
                  }}
                >
                  <div style={{ padding: "15% 8%", fontSize: 13 }}>
                    <h3>The Influencer and the Hit Man</h3>
                    <p>
                      How a years-long domain name feud ended in a bloody
                      shootout
                    </p>
                    <a style={{ textDecoration: "none" }} href="">
                      Ian Frisch
                    </a>
                    <p>Dec 10 · 24 min read</p>
                  </div>
                </div>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Card style={{ borderRadius: 0, width: "100%", height: 300 }}>
                  <img
                    style={{ width: "100%", minWidth: 600 }}
                    src="https://miro.medium.com/max/1512/1*MDxT8MJL3DmelDMv3-gd9A.gif"
                  ></img>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* ---------------------------------------------------------------------------------------------end conten pertama */}
        <Container maxWidth="sm">
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400, textAlign: "left", marginRight: 20 }}>
              <p style={{ fontWeight: "bold" }}>
                An Eerie Historical Deepfake Imagines Nixon Telling the World
                the Moon Landing Failed
              </p>
              <p style={{ color: "gray", fontSize: 12 }}>
                A team of scientists created a convincing facsimile of a speech
                that never happened, and put the threat of fake information
                front and center
              </p>
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  textDecoration: "none"
                }}
                href=""
              >
                Andrew Dickson
              </a>
              <p style={{ color: "gray", fontSize: 12, marginTop: 0 }}>
                Dec 10 · 6 min read
              </p>
            </div>
            <div>
              <img
                style={{ width: 180 }}
                src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400, textAlign: "left", marginRight: 20 }}>
              <p style={{ fontWeight: "bold" }}>
                An Eerie Historical Deepfake Imagines Nixon Telling the World
                the Moon Landing Failed
              </p>
              <p style={{ color: "gray", fontSize: 12 }}>
                A team of scientists created a convincing facsimile of a speech
                that never happened, and put the threat of fake information
                front and center
              </p>
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  textDecoration: "none"
                }}
                href=""
              >
                Andrew Dickson
              </a>
              <p style={{ color: "gray", fontSize: 12, marginTop: 0 }}>
                Dec 10 · 6 min read
              </p>
            </div>
            <div>
              <img
                style={{ width: 180 }}
                src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400, textAlign: "left", marginRight: 20 }}>
              <p style={{ fontWeight: "bold" }}>
                An Eerie Historical Deepfake Imagines Nixon Telling the World
                the Moon Landing Failed
              </p>
              <p style={{ color: "gray", fontSize: 12 }}>
                A team of scientists created a convincing facsimile of a speech
                that never happened, and put the threat of fake information
                front and center
              </p>
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  textDecoration: "none"
                }}
                href=""
              >
                Andrew Dickson
              </a>
              <p style={{ color: "gray", fontSize: 12, marginTop: 0 }}>
                Dec 10 · 6 min read
              </p>
            </div>
            <div>
              <img
                style={{ width: 180 }}
                src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400, textAlign: "left", marginRight: 20 }}>
              <p style={{ fontWeight: "bold" }}>
                An Eerie Historical Deepfake Imagines Nixon Telling the World
                the Moon Landing Failed
              </p>
              <p style={{ color: "gray", fontSize: 12 }}>
                A team of scientists created a convincing facsimile of a speech
                that never happened, and put the threat of fake information
                front and center
              </p>
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  textDecoration: "none"
                }}
                href=""
              >
                Andrew Dickson
              </a>
              <p style={{ color: "gray", fontSize: 12, marginTop: 0 }}>
                Dec 10 · 6 min read
              </p>
            </div>
            <div>
              <img
                style={{ width: 180 }}
                src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400, textAlign: "left", marginRight: 20 }}>
              <p style={{ fontWeight: "bold" }}>
                An Eerie Historical Deepfake Imagines Nixon Telling the World
                the Moon Landing Failed
              </p>
              <p style={{ color: "gray", fontSize: 12 }}>
                A team of scientists created a convincing facsimile of a speech
                that never happened, and put the threat of fake information
                front and center
              </p>
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  textDecoration: "none"
                }}
                href=""
              >
                Andrew Dickson
              </a>
              <p style={{ color: "gray", fontSize: 12, marginTop: 0 }}>
                Dec 10 · 6 min read
              </p>
            </div>
            <div>
              <img
                style={{ width: 180 }}
                src="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
            </div>
          </div>
          <hr />
        </Container>
        <hr />
        <div
          style={{
            marginBottom: 50,
            fontSize: 13,
            textDecoration: "none",
            display: "flex",
            flexDirection: "row-reverse",
            padding: ""
          }}
        >
          <a style={{ textDecoration: "none", color: "gray" }} href="">
            Privacy&nbsp;&nbsp;
          </a>
          <a style={{ textDecoration: "none", color: "gray" }} href="">
            Trems&nbsp;&nbsp;.
          </a>
          <a style={{ textDecoration: "none", color: "gray" }} href="">
            About OneZero&nbsp;&nbsp;.
          </a>
          <a style={{ textDecoration: "none", color: "gray" }} href="">
            About Medium&nbsp;&nbsp;.
          </a>
        </div>
      </div>
    );
  }
}
