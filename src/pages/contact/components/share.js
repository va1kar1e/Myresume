import React, { Fragment } from "react";
import ContactModal from "./modal";
import mydata from "@mydata";

class ContactShare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			name: "",
			resume: "",
		};
		this.modalClick = this.modalClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			resume: mydata["profile"]["link"]["resume"],
		});
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
		const { url, name, resume } = this.state;
		return (
			<Fragment>
				<h2 className="is-size-3-desktop is-size-5-touch is-uppercase has-text-light has-text-weight-bold has-text-centered has-text-left-desktop">
					QR Code
				</h2>
				<br className="" />
				<div className="buttons">
					<button
						className="button is-primary"
						onClick={() =>
							this.modalClick(window.location.origin, "This Site")
						}
					>
						<span className="has-text-darker">This Site</span>
					</button>
					<button
						className="button is-primary"
						onClick={() =>
							this.modalClick(resume["url"], "My Resume File")
						}
					>
						<span className="has-text-darker">My Resume File</span>
					</button>
					<ContactModal url={url} name={name} />
				</div>
			</Fragment>
		);
	}
}
export default ContactShare;
