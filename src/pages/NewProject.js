import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './NewProject.css';
import logo from '../images/logo.png';
import Grid from '../components/grid.js';
import Formation from '../components/Formation.js';
import Instruction from '../components/Instruction.js';
import formations from '../images/formations.png';
import dancerColor from '../images/color.png';
import transitions from '../images/transitions.png';
import dancers from '../images/dancers.png';
import Names from '../components/Names.js';
import AddMenu from '../components/addMenu.js';
import ColorChanger from '../components/Color.js';
import Share from '../components/share.js';

class NewProject extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			dancerMenu: false,
			addMenu: false,
			showFormation: false,

			colorMenu: false,
			formationCount: 1,
			formationIndex: 1,
			share: false

		};

		this.handleDancer = this.handleDancer.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.addDancer = this.addDancer.bind(this);
		this.toggleAdd = this.toggleAdd.bind(this);
		this.handleFormation = this.handleFormation.bind(this);
		this.addSubmit = this.addSubmit.bind(this);

		this.handleColor = this.handleColor.bind(this);

		this.showCurrFormation = this.showCurrFormation.bind(this);
		this.share = this.share.bind(this);

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
	
	addDancer(e){
		this.toggleAdd();
		console.log("add");
		e.stopPropagation();
	}

	toggleAdd(){
		this.setState({
			addMenu: !this.state.addMenu
		});
	}

	handleFormation() {
		this.setState(prevState => ({
			showFormation: !prevState.showFormation
		}));
	}


	countFormation = (childData) =>{
		this.setState({formationCount: childData});
	}

	currFormation = (childData) => {
		this.setState({formationIndex: childData});
	}

	addSubmit(event, name, id){
		var nameRef = fire.database().ref().child('dancers');
		nameRef.child(name).set({
			id: id,
			name: name
		});
	}
	
	handleColor(){
		var colorToggle = this.state.colorMenu;
		if (colorToggle == 1){
			this.setState({colorMenu: 0}, () =>{localStorage.setItem('toggleColor', this.state.colorMenu)});
		}
		else if (colorToggle == 0){
			this.setState({colorMenu: 1}, () =>{localStorage.setItem('toggleColor', this.state.colorMenu)});
		}
	}

	showCurrFormation() {
		return <p className="formation-indicator">{"Project" + this.props.projCount + "-Formation" + this.state.formationIndex}</p>;
	}

	share() {
		this.setState(prev => ({
			share: !prev.share
		}));
	}

	render() {
		return (
			<div className="screen-home">
				<div className="header-newProj">
					<Link to={ "/" + localStorage.getItem("userState") + "/Home"}><img className="logo-login" alt="Flyer" src={logo} /></Link>
					<div className="navigation">
						<Link to={ "/" + localStorage.getItem("userState") + "/LoadProject"}><div className="navButton">My Projects</div></Link>
						<div className="navButton">Share</div>
						<Link to="/"  style={{ textDecoration: 'none', color: 'black'}}><div className="navButton">Sign Out</div></Link>
					</div>
				</div>
				{this.showCurrFormation()}
				<Instruction />
				<Grid pCount={this.props.projCount} user={this.props.user} currForm={this.state.formationIndex} />
				<div className="overlays">
					<Names handleMouseDown={this.handleMouseDown} menuVisibility={this.state.dancerMenu} addDancer={this.addDancer} addMenu={this.state.addMenu}/>
					<AddMenu handleMouseDown={this.addDancer} menuVisibility={this.state.addMenu} addSubmit={this.addSubmit} />
					<ColorChanger visibility={this.state.colorMenu} handleColor={this.handleColor}/>
				</div>
				<Formation pCount={this.props.projCount} user={this.props.user} count={this.state.formationCount} counting={this.countFormation} curr={this.currFormation} showBox={this.state.showFormation}/>
				{this.state.share ? <Share url={window.location.href} /> : null }
				<div className="bottom">
					<div className= "Functions">
						<img onClick={this.handleFormation} className="funcMenu" alt="Formations" src={formations} />
						<input type="image" onMouseDown={this.handleColor} className="funcMenu" alt="Color" src={dancerColor} />
						<img className="funcMenu" alt="Transition" src={transitions} />
						<input type="image" className="funcMenu" alt="Dancers" src={dancers} onMouseDown={this.handleDancer}/>
					</div>
				</div>
			</div>
		);
	}
}
export default NewProject;