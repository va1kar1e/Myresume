import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer has-background-grey-darker">
				<div className="content has-text-centered">
					<p className="is-size-6-desktop is-size-7-touch has-text-primary is-capitalized has-text-weight-light">
						{window.location.hostname}
						<br className="is-hidden-touch" />
						<span className="is-hidden-desktop">, </span>
						Copyright &copy; 2021, Siwanont Sittinam.
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
