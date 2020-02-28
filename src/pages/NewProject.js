import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './NewProject.css';
import logo from '../images/logo.png';
import Grid from '../components/grid.js';
import formations from '../images/formations.png';
import dancerColor from '../images/color.png';
import transitions from '../images/transitions.png';
import dancers from '../images/dancers.png';


class NewProject extends Component {

	
	render() {
		return (
			<div className="screen-home">
				<div className="header-newProj">
					<Link to="/Home"><img className="logo-login" alt="Flyer" src={logo} /></Link>
					<div className="navigation">
						<div className="navButton">My Projects</div>
						<div className="navButton">Share</div>
						<Link to="/"  style={{ textDecoration: 'none', color: 'black'}}><div className="navButton">Sign Out</div></Link>
					</div>	
				</div>
				<Grid />	
				<div className="bottom">
					<div className= "Functions">
						<img className="funcMenu" alt="Formations" src={formations} />
						<img className="funcMenu" alt="Color" src={dancerColor} />
						<img className="funcMenu" alt="Transition" src={transitions} />
						<img className="funcMenu" alt="Dancers" src={dancers} />
					</div>
				</div>
			</div>
		);
	}
}
export default NewProject;