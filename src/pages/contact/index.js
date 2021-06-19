import React from "react";
import ContactEmail from "./components/email";
import ContactLink from "./components/link";
import ContactShare from "./components/share";

class Contact extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="columns is-variable is-8">
					<div className="column">
						<ContactEmail />
					</div>
					<div className="column">
						<ContactLink />
						<ContactShare />
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
