import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <h1>Home</h1>
      <div className="navbar-end">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/profile" className="navbar-item">
          Profile
        </Link>
        <Link to="/link" className="navbar-item">
          Link
        </Link>
        <Link to="/resume" className="navbar-item">
          Resume
        </Link>
        <Link to="/dashboard" className="navbar-item">
          Dashboard
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
