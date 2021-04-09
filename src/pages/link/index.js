import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

function Link() {
  return (
    <Fragment>
      <h1>Link</h1>
      <Switch>
        <Route
          path="/link/github"
          component={() => {
            window.location.href = "https://github.com";
            return null;
          }}
        />
        <Route
          path="/link/linkedin"
          component={() => {
            window.location.href = "https://linkedin.com";
            return null;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default Link;
