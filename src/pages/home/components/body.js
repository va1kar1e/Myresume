import React from "react";
import { Link } from "react-router-dom";
import Divider from "@components/divider";

import mydata from "@mydata";

class HomeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      jobtitle: "",
      intro: "",
      linkedin: "",
      github: "",
      resume: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
      jobtitle: mydata["profile"]["aboutme"]["jobtitle"],
      intro: mydata["profile"]["aboutme"]["intro"],
      resume: mydata["profile"]["link"]["resume"],
      linkedin: mydata["profile"]["link"]["linkedin"],
      github: mydata["profile"]["link"]["github"],
    });
  }

  render() {
    var { name, jobtitle, intro, resume, linkedin, github } = this.state;
    return (
      <div className="container has-text-centered">
        <div className="content is-large">
          <h1 className="title is-size-1-tablet is-size-4-mobile is-uppercase has-text-primary has-text-centered has-text-weight-bold">
            {name}
          </h1>
          <h2 className="subtitle is-size-4-tablet is-size-5-mobile is-uppercase has-text-white has-text-centered">
            {jobtitle}
          </h2>
          <h2 className="subtitle is-size-4-tablet is-size-6-mobile has-text-white has-text-justified has-text-left-mobile">
            &emsp;&emsp;&ensp;{intro}
          </h2>
          <Divider mywidth={"10em"} />
          <div className="field is-grouped is-justify-content-center">
            <p className="control">
              <Link to="/link/linkedin" target="_blank" rel="noreference">
                <span
                  className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
                  data-tooltip="My Linkedin"
                >
                  <i className={linkedin["icon"] + " fa-2x"}></i>
                </span>
              </Link>
            </p>
            <p className="control">
              <Link to="/link/github" target="_blank" rel="noreference">
                <span
                  className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
                  data-tooltip="My Github"
                >
                  <i className={github["icon"] + " fa-2x"}></i>
                </span>
              </Link>
            </p>
            <p className="control">
              <Link to="/link/resume" target="_blank" rel="noreference">
                <span
                  className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
                  data-tooltip="Download My Resume"
                >
                  <i className={resume["icon"] + " fa-2x"}></i>
                </span>
              </Link>
            </p>
            <p className="control">
              <Link to="/contact">
                <span
                  className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
                  data-tooltip="Contact Me"
                >
                  <i className="fas fa-paper-plane fa-2x"></i>
                </span>
              </Link>
            </p>
          </div>
          <Divider mywidth={"10em"} />
        </div>
      </div>
    );
  }
}

export default HomeBody;
