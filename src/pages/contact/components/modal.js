import React from "react";
import MyQRCode from "@components/qrcode";

class ContactModal extends React.Component {
  render() {
    const { url, name } = this.props;
    return (
      <div className="modal">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-primary has-text-weight-semibold">
              My QR Code for {name}
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => {
                var modal = document.querySelector(".modal");
                modal.classList.remove("is-active");
              }}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="is-hidden-touch">
              <MyQRCode link={url} size={200} />
            </div>
            <div className="is-hidden-desktop">
              <MyQRCode link={url} size={150} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default ContactModal;
