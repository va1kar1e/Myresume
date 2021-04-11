import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Nav from "@components/nav";

function ResumeATS() {
  return (
    <Fragment>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="has-text-dark">Resume ATS</p>
            <Link to="/resume/ats/download">ATS Version</Link>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
      <Switch>
        <Route
          path="/resume/ats/download"
          component={() => {
            window.location.href = "https://example.com";
            return null;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default ResumeATS;
