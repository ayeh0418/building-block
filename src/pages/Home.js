import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../images/logo.png';
import Facebook from '../components/Facebook.js';

class Home extends Component {
	render() {
		return (
			<div className="screen-home">
				<div className="header">
					<img className="logo-login" alt="Flyer" src={logo} />
				</div>
				<Facebook />
				<div className="welcome">Welcom Back</div>
				<div className="prompt">what would you like to do?</div>
				<div>
					<button className="new-project">New Project</button>
				</div>
				<div>
					<Link to="/LoadProject"><button className="load-project">Load Project</button></Link>
				</div>
				<div>
					<Link to="/"><button className="signout">Sign Out</button></Link>
				</div>
			</div>
		);
	}
}
export default Home;