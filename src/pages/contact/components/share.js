import React, { Fragment } from "react";
import ContactModal from "./modal";

class ContactShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      name: "",
    };
    this.modalClick = this.modalClick.bind(this);
  }

  modalClick(url, name) {
    this.setState({
      url: url,
      name: name,
    });

    var modal = document.querySelector(".modal");
    modal.classList.toggle("is-active");
  }

  render() {
    const { url, name } = this.state;
    return (
      <Fragment>
        <section className="section is-small">
          <h1 className="title is-size-5-touch is-size-4-desktop">Share</h1>
        </section>
        <section className="section is-small">
          <button
            className="button has-background-primary is-fullwidth"
            onClick={() => this.modalClick(window.location.origin, "this site")}
          >
            <span className="has-text-white">QR Code for This Site</span>
          </button>
          <button
            className="button has-background-primary is-fullwidth"
            onClick={() =>
              this.modalClick(
                window.location.origin + "/link/resume",
                "My Resume Link"
              )
            }
          >
            <span className="has-text-white">QR Code for Resume File Link</span>
          </button>
          <ContactModal url={url} name={name} />
        </section>
      </Fragment>
    );
  }
}
export default ContactShare;
