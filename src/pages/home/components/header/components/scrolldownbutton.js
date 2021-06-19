import React from "react";
import { HashLink } from "react-router-hash-link";

class HomeScrolldownButton extends React.Component {
	constructor(props) {
		super(props);
		this.scrollWithOffset = this.scrollWithOffset.bind(this);
	}

	scrollWithOffset(el) {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -50;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	}

	render() {
		return (
			<div className="buttons is-justify-content-center home-scrolldown-button">
				<HashLink
					smooth
					to="#contact"
					scroll={(el) => this.scrollWithOffset(el)}
				>
					<span className="icon has-text-white is-large">
						<i className="fas fa-chevron-circle-down fa-2x"></i>
					</span>
				</HashLink>
			</div>
		);
	}
}

export default HomeScrolldownButton;
