import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import ResumeGeneral from "./general";
import ResumeATS from "./ats";

function Resume() {
  return (
    <Fragment>
      <h1>Resume</h1>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/resume/general" className="navbar-item">
        General
      </Link>
      <Link to="/resume/ats" className="navbar-item">
        ATS
      </Link>

      <Switch>
        <Route path="/resume/general" component={ResumeGeneral} />
        <Route path="/resume/ats" component={ResumeATS} />
      </Switch>
    </Fragment>
  );
}

export default Resume;
