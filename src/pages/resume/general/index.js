import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";

function ResumeGeneral() {
  return (
    <Fragment>
      <div className="page">
        <p className="has-text-dark">Resume General</p>
        <Link to="/resume/general/download">General Version</Link>
      </div>
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
