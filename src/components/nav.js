import React from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";
import logo from "@images/logo.png";
import Resume from "@pages/resume";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      linkedin: "",
      resume: "",
    };
  }

  componentDidMount() {
    this.setState({
      linkedin: mydata["profile"]["link"]["linkedin"]["icon"],
      resume: mydata["profile"]["link"]["resume"]["icon"],
      url: window.location.hostname,
    });
  }

  render() {
    var { url, linkedin, resume } = this.state;
    return (
      <header
        className="navbar has-background-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} height="50" alt="" className="pr-2" />
              <p className="title is-size-3-tablet is-size-5-mobile has-text-primary is-capitalized">
                {url}
              </p>
            </Link>
            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={() => {
                var burger = document.querySelector(".burger");
                var nav = document.querySelector("#navMenu");
                burger.classList.toggle("is-active");
                nav.classList.toggle("is-active");
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item has-text-white">
                Home
              </Link>
              <Link to="/profile" className="navbar-item has-text-white">
                Profile
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link has-text-white is-hidden-touch">
                  More
                </div>
                <div className="navbar-dropdown">
                  <Link to="/dashboard" className="navbar-item has-text-white">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <Link
                to="/link/linkedin"
                className="navbar-item"
                target="_blank"
                rel="noreference"
              >
                <span className="icon has-text-primary is-hidden-touch">
                  <i className={linkedin}></i>
                </span>
                <span className="has-text-primary">Linkedin</span>
              </Link>
              <div
                role="button"
                className="navbar-item has-text-white"
                aria-label="menu"
                aria-expanded="true"
                data-target="navMenu"
                onClick={() => {
                  var modal = document.querySelector(".modal");
                  modal.classList.toggle("is-active");
                }}
              >
                <span className="icon has-text-primary is-hidden-touch">
                  <i className={resume}></i>
                </span>
                <span className="has-text-primary">Resume</span>
              </div>
              <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title has-text-primary has-text-weight-semibold">
                      Resume
                    </p>
                    <button
                      className="delete"
                      aria-label="close"
                      onClick={() => {
                        var modal = document.querySelector(".modal");
                        modal.classList.remove("is-active");
                      }}
                    ></button>
                  </header>
                  <section className="modal-card-body">
                    <Resume />
                  </section>
                </div>
              </div>
              <Link
                to="/link/contact"
                className="navbar-item"
                target="_blank"
                rel="noreference"
              >
                <span className="icon has-text-primary is-hidden-touch">
                  <i className="fas fa-paper-plane"></i>
                </span>
                <span className="has-text-primary">Contact Me</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
