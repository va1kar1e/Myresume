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
                  <p className="title is-uppercase">{r["what"]}</p>
                  <p className="subtitle is-italic">{r["when"]}</p>
                  <p className="">{r["who"]}</p>
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
