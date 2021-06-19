import React, { Fragment } from "react";
import mydata from "@mydata";

class ContactEmail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			subject: "",
			body: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
	}

	componentDidMount() {
		this.setState({
			email: mydata["profile"]["aboutme"]["email"],
		});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	sendEmail(event) {
		const { email, subject, body } = this.state;
		window.location.href =
			"mailto:" + email + "?subject=" + subject + "&body=" + body;
		return null;
	}

	render() {
		const { email, subject, body } = this.state;
		return (
			<Fragment>
				<h2 className="is-size-3-desktop is-size-5-touch is-uppercase has-text-light has-text-weight-bold has-text-centered has-text-left-desktop">
					Contact Me
				</h2>
				<br className="is-hidden-touch" />
				<form onSubmit={this.sendEmail}>
					<div className="field is-horizontal">
						<div className="field-label is-medium">
							<label className="label has-text-white">TO</label>
						</div>
						<div className="field-body">
							<div className="field">
								<p className="control is-expanded has-icons-left">
									<input
										className="input is-primary"
										type="email"
										name="email"
										value={email}
										readOnly
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-envelope"></i>
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-medium">
							<label className="label has-text-white">
								SUBJECT
							</label>
						</div>
						<div className="field-body">
							<div className="field">
								<p className="control is-expanded has-icons-left">
									<input
										className="input"
										type="text"
										name="subject"
										placeholder="Subject"
										value={subject}
										onChange={this.handleInputChange}
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-heading"></i>
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-medium">
							<label className="label has-text-white">
								MESSAGE
							</label>
						</div>
						<div className="field-body">
							<div className="field">
								<p className="control is-expanded has-icons-left">
									<textarea
										className="textarea has-fixed-size"
										name="body"
										placeholder="Message"
										value={body}
										onChange={this.handleInputChange}
										rows="6"
									></textarea>
								</p>
							</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-medium">
							<label className="label has-text-white"></label>
						</div>
						<div className="field-body">
							<div className="field">
								<div className="control">
									<button
										className="button is-primary is-fullwidth"
										type="submit"
										value="Submit"
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</Fragment>
		);
	}
}
export default ContactEmail;
