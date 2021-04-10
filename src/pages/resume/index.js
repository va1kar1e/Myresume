import React from "react";
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
      <Switch>
        <Route path="/resume/general" component={ResumeGeneral} />
        <Route path="/resume/ats" component={ResumeATS} />
      </Switch>
    );
  }
}

export default Resume;
