import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileEdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: "",
      thesis: "",
      internship: "",
      work: "",
      project: "",
    };
  }

  componentDidMount() {
    this.setState({
      general: mydata["profile"]["education"]["general"],
      thesis: mydata["profile"]["education"]["thesis"],
      internship: mydata["profile"]["education"]["internship"],
      work: mydata["profile"]["education"]["work"],
      project: mydata["profile"]["education"]["project"],
    });
  }

  render() {
    var { general, thesis, internship, work, project } = this.state;
    return (
      <Fragment>
        <div className="content">
          <p className="title has-text-primary">Education</p>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <h1 className="title is-size-3-tablet is-size-4-mobile has-text-white is-uppercase">
                {general["university"]}
              </h1>
              <p className="subtitle is-size-5-tablet is-size-6-mobile has-text-white is-uppercase has-text-weight-bold">
                {general["faculty"]}
                <br />
                <small className="subtitle is-size-6-tablet is-size-7-mobile has-text-white">
                  Period: {general["period"]}
                </small>
              </p>
            </article>
            <article className="tile is-child notification has-background-warning">
              <h1 className="title is-size-3-tablet is-size-4-mobile has-text-white is-uppercase">
                Internship
              </h1>
              <p className="subtitle is-size-5-tablet is-size-6-mobile has-text-white is-uppercase has-text-weight-bold">
                {internship["university"]}
                <br />
                {internship["laboratory"]}
              </p>
              <div className="content">
                <p className="is-size-6-tablet is-size-7-mobile has-text-white is-capitalized has-text-weight-bold">
                  {internship["project"]}
                </p>
                <ol>
                  {internship ? (
                    internship["archievement"].map((arch, index) => (
                      <li
                        key={index}
                        className="is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-semibold"
                      >
                        {arch}
                      </li>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </ol>
              </div>
            </article>
            <article className="tile is-child notification has-background-danger-dark">
              <p className="title is-size-3-tablet is-size-4-mobile has-text-white is-uppercase">
                Work
              </p>
              {work ? (
                work.map((w, index) => (
                  <section key={index}>
                    <div className="content">
                      <p className="subtitle is-size-6-tablet is-size-7-mobile has-text-white is-capitalized has-text-weight-bold">
                        {w["where"]}
                      </p>
                      <ul>
                        {w["do"].map((wdo, index) => (
                          <li
                            key={index}
                            className="is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-semibold"
                          >
                            {wdo["name"]}
                            <ol>
                              {wdo["archievement"].map((arch, index) => (
                                <li
                                  key={index}
                                  className="is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-semibold"
                                >
                                  {arch}
                                </li>
                              ))}
                            </ol>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification has-background-info">
              <p className="title is-size-3-tablet is-size-4-mobile has-text-white is-uppercase">
                Thesis
              </p>
              <div className="content">
                <p className="is-size-6-tablet is-size-7-mobile has-text-white is-capitalized has-text-weight-bold">
                  {thesis["name"]}
                </p>
                <ol>
                  {thesis ? (
                    thesis["archievement"].map((arch, index) => (
                      <li
                        key={index}
                        className="is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-semibold"
                      >
                        {arch}
                      </li>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </ol>
              </div>
            </article>
            <article className="tile is-child notification has-background-link-dark">
              <p className="title is-size-3-tablet is-size-4-mobile has-text-white is-uppercase">
                Project
              </p>
              {project ? (
                project.map((p, index) => (
                  <section key={index}>
                    <div className="content">
                      <p className="subtitle is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-bold">
                        {p["name"]}
                      </p>
                      <ol>
                        {p["archievement"].map((arch, index) => (
                          <li
                            key={index}
                            className="is-size-6-tablet is-size-7-mobile has-text-white has-text-weight-semibold"
                          >
                            {arch}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </section>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </article>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProfileEdu;
