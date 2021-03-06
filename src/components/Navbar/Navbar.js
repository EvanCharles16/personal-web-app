import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<div className="container nav " id="home" fixed="top">
				<label className="logo">Evan Charles</label>
				<ul className="list">
					<li>
						<a className="active" href="#home">
							Home
						</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
