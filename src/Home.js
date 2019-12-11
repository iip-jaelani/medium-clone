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
import "./App.css";
const articleone = [
  {
    title: "Douchebag: The White Racial Slur We’ve All Been Waiting For",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/454/165/50/69/1*9r56DrsLjWjzZAnc9bGHOQ.jpeg",
      artic:
        "With Google’s founders withdrawing from management duties, here’s how the partnership that would organize the world’s information began",
      date: "Dec 12 . 3 min read"
    }
  }
];

const articletwo = [
  {
    title: "Douchebag: The White Racial Slur We’ve All Been Waiting For",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg",
      artic: "With Google’s founders withdrawing",
      date: "Dec 12 . 3 min read",
      name: "Michael inav"
    }
  },
  {
    title: "Douchebag: The White Racial Slur We’ve All Been Waiting For",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg",
      artic: "With Google’s founders withdrawing",
      date: "Dec 12 . 3 min read",
      name: "Michael inav"
    }
  },
  {
    title: "Douchebag: The White Racial Slur We’ve All Been Waiting For",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/51/47/1*H8un6HJcjT96zcbdiLDm9g.jpeg",
      artic: "With Google’s founders withdrawing",
      date: "Dec 12 . 3 min read",
      name: "Michael inav"
    }
  }
];
const articlethree = [
  {
    title: "Democrats Should Put Republicans on Trial During Impeachment",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/550/242/52/12/1*Oz3gNvs1zsgegCyyROcvJA.jpeg",
      artic: "Those two weeks can be a huge opportunity if you",
      date: "Dec 12 . 3 min read",
      name: "sterven in osjd"
    }
  }
];

const articleEmpat = [
  {
    title: " Democrats Should Put Republicans on Trial During Impeachment",
    titel1: "Based on your reading history",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg",
      artic:
        "A few months ago I was looking for a clean solution to setup my main desktop computer, running Windows 10, to mine while I was not using…",
      date: "Dec 12 . 3 min read",
      name: "sterven in osjd"
    }
  },
  {
    title: " Democrats Should Put Republicans on Trial During Impeachment",
    titel1: "Based on your reading history",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg",
      artic:
        "A few months ago I was looking for a clean solution to setup my main desktop computer, running Windows 10, to mine while I was not using…",
      date: "Dec 12 . 3 min read",
      name: "sterven in osjd"
    }
  },
  {
    title: " Democrats Should Put Republicans on Trial During Impeachment",
    titel1: "Based on your reading history",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg",
      artic:
        "A few months ago I was looking for a clean solution to setup my main desktop computer, running Windows 10, to mine while I was not using…",
      date: "Dec 12 . 3 min read",
      name: "sterven in osjd"
    }
  },
  {
    title: " Democrats Should Put Republicans on Trial During Impeachment",
    titel1: "Based on your reading history",
    link: "./home",
    data: {
      image:
        "https://cdn-images-1.medium.com/focal/109/109/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg",
      artic:
        "A few months ago I was looking for a clean solution to setup my main desktop computer, running Windows 10, to mine while I was not using…",
      date: "Dec 12 . 3 min read",
      name: "sterven in osjd"
    }
  }
];

const articleRight = [
  {
    nomber: "01",
    title: "The Self-Help Movement That Is Upending American Christianity",
    link: "./home",
    data: {
      date: "Dec 12 . 3 min read",
      name: "sterven"
    }
  },
  {
    nomber: "02",
    title: "The Self-Help Movement That Is Upending American Christianity",
    link: "./home",
    data: {
      date: "Dec 12 . 3 min read",
      name: "sterven"
    }
  },
  {
    nomber: "03",
    title: "The Self-Help Movement That Is Upending American Christianity",
    link: "./home",
    data: {
      date: "Dec 12 . 3 min read",
      name: "sterven"
    }
  },
  {
    nomber: "04",
    title: "The Self-Help Movement That Is Upending American Christianity",
    link: "./home",
    data: {
      date: "Dec 12 . 3 min read",
      name: "sterven"
    }
  }
];
const list = [
  { name: "HOME" },
  { name: <a href="/category">ONEZERO</a> },
  { name: "ELEMENTAL" },
  { name: "GEN" },
  { name: "ZORA" },
  { name: "FORGE" },
  { name: "HUMAN PARTS" },
  { name: "MARKER" },
  { name: "LEVEL" },
  { name: "HEATED" },
  { name: "MODUS" },
  { name: "MORE" }
];
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = list =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Home extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: "item1",
    translate: 0,
    transition: 0.4,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: "5px 10px"
    };
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

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
            <Container>
              <ScrollMenu
                ref={el => (this.menu = el)}
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                hideArrows={hideArrows}
                hideSingleArrow={hideSingleArrow}
                transition={+transition}
                onUpdate={this.onUpdate}
                onSelect={this.onSelect}
                selected={selected}
                translate={translate}
                alignCenter={alignCenter}
                dragging={dragging}
                clickWhenDrag={clickWhenDrag}
                wheel={wheel}
              />
            </Container>
            {/* end navbar */}
            {/* --------------------------------------------------------------------------->scroling menu */}

            {/* --------------------------------------------------------------------------------end scroling */}
            <Grid
              container
              spacing={3}
              style={{ textAlign: "left", marginTop: 50 }}
            >
              <Grid item xs md>
                {articleone.map(one => (
                  <div style={{ fontSize: 12 }}>
                    <a href="#">
                      <img
                        style={{ maxWidth: "100%", height: "auto" }}
                        src={one.data.image}
                      />
                    </a>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href=""
                    >
                      <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                        {one.title}
                      </h1>
                      <p style={{ color: "gray" }}>{one.data.artic}</p>
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
                      {one.data.date}
                      <i class="fas fa-star"></i>
                    </small>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} sm style={{ textAlign: "left" }}>
                {articletwo.map(two => (
                  <div
                    style={{
                      maxWidth: "100%",
                      display: "flex",
                      marginBottom: 20
                    }}
                  >
                    <img style={{ height: 100 }} src={two.data.image} />
                    <div
                      style={{
                        fontSize: 12,
                        marginLeft: 10
                      }}
                    >
                      <h3 style={{ fontSize: 15, fontWeight: "bold" }}>
                        {two.title}
                      </h3>
                      <p style={{ color: "gray", lineHeight: 0 }}>
                        {two.data.artic}
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
                            {two.data.name}
                          </a>
                        </p>
                      </div>
                      <small style={{ color: "gray" }}>
                        {two.data.date}
                        <i class="fas fa-star"></i>
                      </small>
                    </div>
                  </div>
                ))}
              </Grid>
              <Grid item sm style={{ textAlign: "left" }}>
                <Hidden only="xs">
                  {articlethree.map(tree => (
                    <div style={{ fontSize: 12 }}>
                      <a href="#">
                        <img
                          style={{ maxWidth: "100%", height: "auto" }}
                          src={tree.data.image}
                        />
                      </a>
                      <a
                        style={{ color: "black", textDecoration: "none" }}
                        href=""
                      >
                        <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                          {tree.title}
                        </h1>
                        <p style={{ color: "gray" }}>{tree.data.artic} </p>
                      </a>
                      <p>
                        <a
                          href="#"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {tree.data.name}
                        </a>
                      </p>
                      <small style={{ color: "gray" }}>
                        {tree.data.date} <i class="fas fa-star"></i>
                      </small>
                    </div>
                  ))}
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
              {articleEmpat.map(empat => (
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
                      {empat.titel1}
                    </p>
                    <h3>{empat.title}</h3>
                    <p style={{ color: "gray" }}>{empat.data.artic}</p>
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
                    src={empat.data.image}
                  />
                </div>
              ))}
              {/* -------------------------------->end conten */}
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* popular--------------------------------------------- */}
              <div>
                <h2>Popular on Medium</h2>
                <hr style={{ borderColor: "gray" }} />
              </div>
              {/* ------------------------------------->conten */}
              {articleRight.map(apaaja => (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex"
                    }}
                  >
                    <h1 style={{ color: "gray" }}>{apaaja.nomber}</h1>
                    <p style={{ marginLeft: 20 }}>
                      <strong>{apaaja.title}</strong>
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: 12,
                      marginLeft: 60
                    }}
                  >
                    <a href="">{apaaja.data.name}</a> in{" "}
                    <a href="">{apaaja.data.name}</a>
                    <p>
                      {apaaja.data.date}
                      <i class="fas fa-star"></i>
                    </p>
                  </div>
                </>
              ))}

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
