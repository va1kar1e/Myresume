import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "@pages/home";
import Profile from "@pages/profile";
import Resume from "@pages/resume";
import Dashboard from "@pages/dashboard";
import NotFound from "./notfound";

function Router() {
  return (
    <div className="App container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/resume/:type" component={Resume} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Router;
