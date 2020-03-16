import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './LoadProject.css';
import logo from '../images/logo.png';

var loadButtons = [];

class LoadProject extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			projectIndex: 1,
			projects: []
		};

		this.addProject = this.addProject.bind(this);
		this.loadProject = this.loadProject.bind(this);

		loadButtons = [];

		var ref = fire.database().ref('/userData/' + this.props.user + '/projects').orderByKey();
		ref.once('value').then(snapshot => {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.key !== "undefined") {
					loadButtons.push(childSnapshot.key);
				}
			});

			loadButtons.map(key => this.setState(prev => ({
				projects: [
					...prev.projects,
					(<div>
						<Link to={"/" + localStorage.getItem("userState")+ "/Project/" + key}>
							<button id={key} className="new-project" onClick={this.loadProject}>{"Project" + key}</button>
						</Link>
					</div>)
				]
			})));
			var count = loadButtons.length;
			this.props.pCount(count);
		});
		
	}

	loadProject(e) {
		this.props.pCount(e.target.id);
		this.setState({
			projectIndex: e.target.id
		})
	}

	addProject() {
		var count = loadButtons.length + 1;
		this.props.pCount(count);
		this.setState(previousState => ({
			projectIndex: previousState.projectIndex + 1,
			projects: [
				...previousState.projects,
				(<div><button id={count} className="formation-button" onClick={this.loadProject}>{"Project" + loadButtons.length}</button></div>)
			]
			
		}));
	}

	render() {
		return (
			<div className="screen-home">
				<div className="header">
					<Link to={"/" + localStorage.getItem("userState")+"/Home"}><img className="logo-login" alt="Flyer" src={logo} /></Link>
				</div>
				<div className="welcome">My Projects</div>
				{this.state.projects}
				<div>
					<Link to={"/" + localStorage.getItem("userState")+ "/Project/" + loadButtons.length}><button onClick={this.addProject} className="new-project">New Project</button></Link>
				</div>
			</div>
		);
	}
}
export default LoadProject;