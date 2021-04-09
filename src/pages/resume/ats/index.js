import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

function ResumeATS() {
  return (
    <Fragment>
      <h1>Resume ATS</h1>
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
