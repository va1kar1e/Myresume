import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";

class ProfileCert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cert: "",
    };
  }

  componentDidMount() {
    this.setState({
      cert: mydata["profile"]["cert"],
    });
  }

  render() {
    var { cert } = this.state;
    return (
      <Fragment>
        <div className="content">
          <p className="title has-text-primary">Certificates</p>
        </div>
        <div className="tags are-medium">
          {cert ? (
            cert.map((c, index) => (
              <div class="card">
                <div class="card-image">
                  <figure className="image is-square">
                    <img
                      src="https://bulma.io/images/placeholders/256x256.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div class="media-content">
                      <Link to={c["id"]} className="is-6 has-text-centered">
                        {c["abb"]}
                      </Link>
                    </div>
                  </div>
                </div>
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

export default ProfileCert;
