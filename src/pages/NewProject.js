import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './NewProject.css';
import logo from '../images/logo.png';

class NewProject extends Component {
	render() {
		return (
			<div className="screen-home">
				<div className="header">
					<Link to="/Home"><img className="logo-login" alt="Flyer" src={logo} /></Link>
				</div>
				<div>My Projects</div>
				<div>Share</div>
				<div>Sign Out</div>
				<div></div>
			</div>
		);
	}
}
export default NewProject;