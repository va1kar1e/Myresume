import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognition: "",
    };
  }

  componentDidMount() {
    this.setState({
      recognition: mydata["profile"]["recognition"],
    });
  }

  render() {
    var { recognition } = this.state;
    return (
      <Fragment>
        <div className="content">
          <p className="title has-text-primary">Recognitions</p>
        </div>
        <div className="tile is-ancestor">
          {recognition ? (
            recognition.map((r, index) => (
              <div key={index} className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title is-size-4-tablet is-size-5-mobile has-text-primary is-uppercase has-text-weight-bold">
                    {r["what"]}
                  </p>
                  <p className="subtitle is-size-5-tablet is-size-6-mobile has-text-grey-dark is-italic has-text-weight-semibold">
                    {r["when"]}
                  </p>
                  <p className="is-size-5-tablet is-size-6-mobile has-text-grey-dark has-text-weight-medium">
                    {r["who"]}
                  </p>
                </article>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default ProfileRecognition;
