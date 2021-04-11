import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ResumeGeneral from "./general";
import ResumeATS from "./ats";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <Fragment>
        <section className="hero is-large has-background-white">
          <div className="container">
            <p className="has-text-dark">Resume</p>
          </div>
        </section>
        <Switch>
          <Route path="/resume/general" component={ResumeGeneral} />
          <Route path="/resume/ats" component={ResumeATS} />
        </Switch>
      </Fragment>
    );
  }
}

export default Resume;
