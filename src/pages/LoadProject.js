import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './LoadProject.css';
import logo from '../images/logo.png';

class LoadProject extends Component {
	render() {
		return (
			<div className="screen-home">
				<div className="header">
					<img className="logo-login" alt="Flyer" src={logo} />
				</div>
				<div className="welcome">My Projects</div>
				<div>
					<button className="new-project">New Project</button>
				</div>
			</div>
		);
	}
}
export default LoadProject;