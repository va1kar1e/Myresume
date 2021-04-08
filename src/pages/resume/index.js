import React, { Fragment } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import ResumeGeneral from "./general";
import ResumeATS from "./ats";

function Resume() {
  let { type } = useParams();
  return (
    <Fragment>
      <h1>Resume {type}</h1>
      <Switch>
        <Route path="/resume/general" component={ResumeGeneral} />
        <Route path="/resume/ats" component={ResumeATS} />
      </Switch>
    </Fragment>
  );
}

export default Resume;
