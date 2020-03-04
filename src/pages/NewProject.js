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
import Names from '../components/Names.js';


class NewProject extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			dancerMenu: false
		};

		this.handleDancer = this.handleDancer.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	handleDancer(e){
		this.toggleMenu();
		console.log("clicked");
		e.stopPropagation();
	}

	toggleMenu(){
		this.setState(
		{
			dancerMenu: !this.state.dancerMenu
		});
	}
	
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
				<div className="overlays">
					<Grid />
					<Names handleMouseDown={this.handleMouseDown} menuVisibility={this.state.dancerMenu}/>
				</div>
				<div className="bottom">
					<div className= "Functions">
						<img className="funcMenu" alt="Formations" src={formations} />
						<img className="funcMenu" alt="Color" src={dancerColor} />
						<img className="funcMenu" alt="Transition" src={transitions} />
						<input type="image" className="funcMenu" alt="Dancers" src={dancers} onMouseDown={this.handleDancer}/>
					</div>
				</div>
				
			</div>
		);
	}
}
export default NewProject;