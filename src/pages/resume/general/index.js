import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

function ResumeGeneral() {
  return (
    <Fragment>
      <h1>Resume General</h1>
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
