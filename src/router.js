import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "@pages/home";
import Profile from "@pages/profile";
import Dashboard from "@pages/dashboard";
import ResumeGeneral from "@pages/resume/general";
import ResumeATS from "@pages/resume/ats";
import Link from "@pages/link";
import NotFound from "./pages/notfound";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/resume/general/:type" component={ResumeGeneral} />
          <Route path="/resume/ats/:type" component={ResumeATS} />
          <Route path="/link/:type" component={Link} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
