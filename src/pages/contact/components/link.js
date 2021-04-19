import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";

class ContactLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: "",
      github: "",
    };
  }

  componentDidMount() {
    this.setState({
      linkedin: mydata["profile"]["link"]["linkedin"]["icon"],
      github: mydata["profile"]["link"]["github"]["icon"],
    });
  }

  render() {
    const { linkedin, github } = this.state;
    return (
      <Fragment>
        <section className="section is-small">
          <h1 className="title is-size-5-touch is-size-4-desktop">Links</h1>
        </section>
        <section className="section is-small">
          <Link
            to="/link/linkedin"
            className="button has-background-primary is-fullwidth"
            target="_blank"
            rel="noreference"
          >
            <span className="icon has-text-white">
              <i className={linkedin}></i>
            </span>
            <span className="has-text-white">Linkedin</span>
          </Link>
          <Link
            to="/link/github"
            className="button has-background-primary is-fullwidth"
            target="_blank"
            rel="noreference"
          >
            <span className="icon has-text-white">
              <i className={github}></i>
            </span>
            <span className="has-text-white">github</span>
          </Link>
        </section>
      </Fragment>
    );
  }
}
export default ContactLink;
