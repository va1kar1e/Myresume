import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";
import logo from "@images/logo.png";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
      url: window.location.hostname,
    });
  }

  render() {
    var { name, url } = this.state;
    return (
      <Fragment>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} height="50" alt="" />
              <p className="title is-4">{" " + url}</p>
            </Link>
            <Link
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <Link to="/" class="navbar-item">
                Home
              </Link>
              <Link to="/profile" class="navbar-item">
                Profile
              </Link>
              <div class="navbar-item has-dropdown is-hoverable">
                <Link to="/" class="navbar-link">
                  More
                </Link>
                <div class="navbar-dropdown">
                  <Link to="/dashboard" class="navbar-item">
                    Dashboard
                  </Link>
                  <hr class="navbar-divider" />
                  <Link to="/resume" class="navbar-item">
                    Resume
                  </Link>
                </div>
              </div>
            </div>
            {/* <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <Link class="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <a class="button is-light">Log in</Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
        <section class="section is-large">
          <h1 class="title">{name}</h1>
          <h2 class="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
        <div class="columns is-desktop">
          <div class="column">1</div>
          <div class="column">2</div>
          <div class="column">3</div>
          <div class="column">4</div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
