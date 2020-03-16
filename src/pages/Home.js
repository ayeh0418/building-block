import React, { Component } from 'react';
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
				<div className="welcome">Welcome Back</div>
				<div className="prompt">what would you like to do?</div>
				<div>
					<Link to={ "/" + localStorage.getItem("userState") + "/NewProject"}><button className="new-project">New Project</button></Link>
				</div>
				<div>
					<Link to={ "/" + localStorage.getItem("userState") + "/LoadProject"}><button className="load-project">Load Project</button></Link>
				</div>
				<div>
					<Link to="/"><button className="signout">Sign Out</button></Link>
				</div>
			</div>
		);
	}
}
export default Home;