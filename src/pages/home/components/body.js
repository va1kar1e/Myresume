import React from "react";
import { Link } from "react-router-dom";
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
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
      jobtitle: mydata["profile"]["aboutme"]["jobtitle"],
      intro: mydata["profile"]["aboutme"]["intro"],
      linkedin: mydata["profile"]["link"]["linkedin"],
      github: mydata["profile"]["link"]["github"],
    });
  }

  render() {
    var { name, jobtitle, intro, linkedin, github } = this.state;
    return (
      <div class="container has-text-centered">
        <div class="content is-large">
          <h1 className="title is-size-1-tablet is-size-4-mobile is-uppercase has-text-white has-text-centered has-text-weight-bold">
            {name}
          </h1>
          <h2 className="subtitle is-size-3-tablet is-size-5-mobile is-uppercase has-text-white-bis has-text-centered">
            {jobtitle}
          </h2>
          <h2 className="subtitle is-size-4-tablet is-size-6-mobile has-text-white-bis has-text-justified has-text-left-mobile">
            &emsp;&emsp;&ensp;{intro}
          </h2>
        </div>
        <div class="field is-grouped is-justify-content-center is-hidden-touch">
          <p class="control">
            <Link
              to="/link/linkedin"
              className="button is-dark is-large is-fullwidth"
              target="_blank"
              rel="noreference"
            >
              <span className="icon has-text-white">
                <i className={linkedin["icon"]}></i>
              </span>
              <span className="has-text-white">Linkedin</span>
            </Link>
          </p>
          <p class="control">
            <Link
              to="/link/github"
              className="button is-dark is-large is-fullwidth"
              target="_blank"
              rel="noreference"
            >
              <span className="icon has-text-white">
                <i className={github["icon"]}></i>
              </span>
              <span className="has-text-white">Github</span>
            </Link>
          </p>
          <p class="control">
            <Link
              to="/link/contact"
              className="button is-dark is-large is-fullwidth"
              target="_blank"
              rel="noreference"
            >
              <span className="icon has-text-white">
                <i className="fas fa-paper-plane"></i>
              </span>
              <span className="has-text-white">Contact Me</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeBody;
