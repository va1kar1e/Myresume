import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Nav from "@components/nav";

function ResumeGeneral() {
  return (
    <Fragment>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="has-text-dark">Resume General</p>
            <Link to="/resume/general/download">General Version</Link>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
      <Switch>
        <Route
          path="/resume/general/download"
          component={() => {
            window.location.href = "https://example.com";
            return null;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default ResumeGeneral;
