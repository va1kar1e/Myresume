import React from "react";
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
      linkedin: mydata["profile"]["link"]["linkedin"]["username"],
      github: mydata["profile"]["link"]["github"]["username"],
      email: mydata["profile"]["aboutme"]["email"],
      hassos: mydata["profile"]["link"]["hassos"]["url"],
    });
  }

  gotolink() {
    const { type } = this.props.match.params;
    const { linkedin, github, email, hassos } = this.state;
    if (type === "github") {
      window.location.href = "https://github.com/" + github;
      return null;
    } else if (type === "linkedin") {
      window.location.href = "https://linkedin.com/in/" + linkedin;
      return null;
    } else if (type === "contact") {
      window.location.href = "mailto:" + email;
      return null;
    } else if (type === "hassos") {
      window.location.href = hassos;
      return null;
    } else {
    }
  }

  render() {
    this.gotolink();

    return (
      <div className="container">
        <div className="section is-large">
          <p className="title is-size-1-tablet is-size-2-mobile is-uppercase has-text-weight-bold has-text-primary">
            Redirect to External Link
          </p>
        </div>
      </div>
    );
  }
}
export default Link;
