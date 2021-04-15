import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import mydata from "@mydata";

class ResumeGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general_link: "",
    };
  }

  componentDidMount() {
    this.setState({
      general_link: mydata["profile"]["resume"]["general"],
    });
  }

  // Create Document Component
  render() {
    const { general_link } = this.state;
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
              window.location.href = "/files/" + general_link;
              return null;
            }}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default ResumeGeneral;
