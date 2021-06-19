import React from "react";
import MyQRCode from "@components/qrcode";

class ContactModal extends React.Component {
	render() {
		const { url, name } = this.props;
		return (
			<div className="modal home-modal">
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title is-size-4-desktop is-size-6-touch has-text-primary has-text-weight-semibold">
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
					<footer className="modal-card-foot is-justify-content-center">
						<div className="is-hidden-touch">
							<MyQRCode link={url} size={250} />
						</div>
						<div className="is-hidden-desktop">
							<MyQRCode link={url} size={200} />
						</div>
					</footer>
				</div>
			</div>
		);
	}
}
export default ContactModal;
