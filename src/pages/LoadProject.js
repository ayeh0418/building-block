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
					<Link to={"/" + localStorage.getItem("userState")+"/Home"}><img className="logo-login" alt="Flyer" src={logo} /></Link>
				</div>
				<div className="welcome">My Projects</div>
				<div>
					<Link to={"/" + localStorage.getItem("userState")+ "/NewProject"}><button className="new-project">New Project</button></Link>
				</div>
			</div>
		);
	}
}
export default LoadProject;