import React, { Fragment } from "react";
import mydata from "@mydata";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
    });
  }

  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <section className="section is-small">
          <h1 className="title is-size-5-touch is-size-4-desktop">
            Infomation
          </h1>
        </section>
        <section className="section is-small">
          <p className="is-size-6-touch is-size-5-desktop has-text-left">
            NAME :{" "}
            <span className="is-size-6-touch is-size-5-desktop is-uppercase has-text-left">
              {name}
            </span>
          </p>
        </section>
      </Fragment>
    );
  }
}
export default ContactInfo;
