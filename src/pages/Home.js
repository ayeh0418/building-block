import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../images/logo.png';

class Home extends Component {
	render() {
		return (
			<div className="screen-home">
				<div className="header">
					<img className="logo-login" alt="Flyer" src={logo} />
				</div>
				<div className="welcome">Welcom Back</div>
				<div className="prompt">what would you like to do?</div>
				<div>
					<button className="new-project">New Project</button>
				</div>
				<div>
					<button className="load-project">Load Project</button>
				</div>
				<div>
					<button className="signout">Sign Out</button>
				</div>
			</div>
		);
	}
}
export default Home;