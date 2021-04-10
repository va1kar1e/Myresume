import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "@images/logo.png";

class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    this.setState({
      url: window.location.hostname,
    });
  }

  render() {
    var { url } = this.state;
    return (
      <Fragment>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src={logo}
                height="50"
                alt=""
                style={{ marginRight: "0.5em" }}
              />
              <p className="title is-4">{url}</p>
            </Link>
            {/* <Link
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target=""
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link> */}
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/profile" className="navbar-item">
                Profile
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/" className="navbar-link">
                  More
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/resume" className="navbar-item">
                    Resume
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/dashboard" className="navbar-item">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-primary">
                  <strong>F</strong>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default HomeNav;
