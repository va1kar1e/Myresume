import React from "react";
import Nav from "@components/nav";
import ContactEmail from "./components/email";
import ContactInfo from "./components/info";
import ContactLink from "./components/link";
import ContactShare from "./components/share";

class Contact extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body hero-body-profile">
          <div className="container section has-background-white">
            <section className="section is-small">
              <h1 className="title">Contact</h1>
            </section>
            <div className="columns">
              <div className="column">
                <ContactEmail />
              </div>
              <div className="column">
                <ContactInfo />
                <ContactLink />
                <ContactShare />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
