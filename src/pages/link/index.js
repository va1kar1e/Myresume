import React from "react";
import { Route, Switch } from "react-router-dom";
import mydata from "@mydata";

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: "",
      github: "",
      email: "",
      hassos: "",
    };
  }

  componentDidMount() {
    this.setState({
      linkedin: mydata["profile"]["link"]["linkedin"],
      github: mydata["profile"]["link"]["github"],
      email: mydata["profile"]["aboutme"]["email"],
      hassos: mydata["profile"]["link"]["hassos"],
    });
  }

  render() {
    var { linkedin, github, email, hassos } = this.state;
    return (
      <Switch>
        <Route
          path="/link/github"
          component={() => {
            window.location.href = "https://github.com/" + github["username"];
            return null;
          }}
        />
        <Route
          path="/link/linkedin"
          component={() => {
            window.location.href =
              "https://linkedin.com/in/" + linkedin["username"];
            return null;
          }}
        />
        <Route
          path="/link/contact"
          component={() => {
            window.location.href = "mailto:" + email;
            return null;
          }}
        />
        <Route
          path="/link/hassos"
          component={() => {
            window.location.href = "http://" + hassos["url"];
            return null;
          }}
        />
      </Switch>
    );
  }
}
export default Link;
