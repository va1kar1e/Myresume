import React from "react";
import mydata from "@mydata";

class ProfileBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: "",
    };
  }

  componentDidMount() {
    this.setState({
      works: mydata["profile"]["work"],
    });
  }

  render() {
    var { works } = this.state;
    return (
      <div className="container has-text-left">
        <div className="content">
          <p className="title has-text-primary">Works</p>
        </div>
        {works ? (
          works.map((work, index) => (
            <article className="is-white media" key={index}>
              <figure className="media-left" style={{ color: work["color"] }}>
                <span className="icon is-large">
                  <i className={work["icon"] + " fa-2x"}></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong
                      className="is-capitalized"
                      style={{ color: work["color"] }}
                    >
                      {work["role"]}
                    </strong>{" "}
                    <medium
                      className="is-uppercase"
                      style={{ color: work["color"] }}
                    >
                      @{work["name"]}
                    </medium>{" "}
                    <small> Period {work["year"]}</small>
                    <br />
                    {work["keyword"]}
                  </p>
                </div>
                <article className="media">
                  <div className="content">
                    <p style={{ color: work["color"] }}>Team: {work["team"]}</p>
                  </div>
                </article>
                <article className="media has-text-grey-darker">
                  <div className="content">
                    <p className="has-text-weight-bold">Archievement</p>
                    <ol>
                      {work["archiev"].map((arch, index) => (
                        <li>{arch}</li>
                      ))}
                    </ol>
                  </div>
                </article>
              </div>
            </article>
          ))
        ) : (
          <div className="is-loading">Loading...</div>
        )}
      </div>
    );
  }
}

export default ProfileBody;
