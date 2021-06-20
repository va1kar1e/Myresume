import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
	"388796437529-h4unahnbnf4l9f1abkbpo65ps2ihbrn3.apps.googleusercontent.com";

class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onLogoutSuccess.bind(this);
		this.onFailure.bind(this);
	}

	onLogoutSuccess = (res) => {
		console.log("Logged out Success");
		alert("Logged out Successfully ✌");
		this.props.setAuthenticated();
	};

	onFailure = () => {
		console.log("Handle failure cases");
	};

	render() {
		return (
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={this.onLogoutSuccess}
				onFailure={this.onFailure}
				accessType="online"
				icon={true}
			/>
		);
	}
}

export default Logout;
