import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactCardCarousel from "react-card-carousel";
import mydata from "@mydata";

class ProfileCert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cert: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      cert: mydata["profile"]["cert"],
    });
  }

  CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "30vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      textAlign: "center",
      background: "#ffffff",
      color: "#86c232",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    var { cert } = this.state;
    return (
      <Fragment>
        <div className="content">
          <p className="title has-text-primary">Certificates</p>
        </div>
        <div style={this.CONTAINER_STYLE()}>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            {cert ? (
              cert.map((c, index) => {
                const badge = require(`@images/cert/${c["badge"]}`);
                return (
                  <div key={index} style={this.CARD_STYLE()} className="">
                    <figure className="image is-square">
                      <img src={badge["default"]} alt={c["badge"]} />
                    </figure>
                    <br />
                    <Link to={c["id"]} className="is-6 has-text-centered">
                      <p className="subtitle is-5 has-text-primary has-text-weight-bold">
                        {c["abb"]}
                      </p>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </ReactCardCarousel>
        </div>
      </Fragment>
    );
  }
}

export default ProfileCert;
