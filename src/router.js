import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "@pages/home";
import Profile from "@pages/profile";
import Dashboard from "@pages/dashboard";
import ResumeGeneral from "@pages/resume/general";
import ResumeATS from "@pages/resume/ats";
import Link from "@pages/link";
import NotFound from "./pages/notfound";

function Router() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/link" component={Link} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/resume/general" component={ResumeGeneral} />
        <Route path="/resume/ats" component={ResumeATS} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Router;
