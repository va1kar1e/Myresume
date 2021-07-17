import React from "react";
import { GoogleLogin } from "react-google-login";

// refresh token
import { refreshTokenSetup } from "@components/refreshToken";

const clientId =
	"388796437529-h4unahnbnf4l9f1abkbpo65ps2ihbrn3.apps.googleusercontent.com";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onLoginSuccess = this.onLoginSuccess.bind(this);
		this.onFailure = this.onFailure.bind(this);
	}

	onLoginSuccess = (res) => {
		// console.log("Login Success: currentUser:", res.profileObj["givenName"]);
		refreshTokenSetup(res);
		this.props.setAuthenticated(
			res.profileObj["name"],
			res.profileObj["googleId"]
		);
	};

	onFailure = () => {
		// console.log("Handle failure cases");
	};

	render() {
		return (
			<GoogleLogin
				clientId={clientId}
				buttonText="Login with Google"
				onSuccess={this.onLoginSuccess}
				onFailure={this.onFailure}
				isSignedIn={true}
				cookiePolicy={"single_host_origin"}
				accessType="online"
				icon={true}
				prompt="consent"
			/>
		);
	}
}

export default Login;
