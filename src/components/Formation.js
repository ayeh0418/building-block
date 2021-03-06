import React, { Component } from 'react';
import './Formation.css';
import fire from '../fire';

var buttons = [];

class Formation extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			showBox: this.props.showBox,
			formations: []
		}

		buttons = [];

		this.display = this.display.bind(this);
		this.addFormation = this.addFormation.bind(this);
		
		var ref = fire.database().ref('/userData/' + this.props.user + '/projects/' + this.props.pCount + '/formations').orderByKey();
		ref.once('value').then(snapshot => {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.key !== "undefined") {
					buttons.push(childSnapshot.key);
				}
			});
			buttons.map(key => this.setState(prev => ({
				formations: [
					...prev.formations,
					(<div><button id={key} className="formation-button" onClick={this.display}>{"Formation" + key}</button></div>)
				]
			})));
			document.getElementsByTagName('button')[2].click();
		});
	}

	display(e) {
		var id = e.target.id;
		this.props.curr(id);

		var allDots = document.getElementsByClassName('Purple');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Red');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Orange');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Green');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Teal');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Blue');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		allDots = document.getElementsByClassName('Pink');
		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		var ref = fire.database().ref('userData/' + this.props.user + '/projects/' + this.props.pCount + '/formations').orderByKey();
		ref.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.key === id) {
					childSnapshot.forEach(function(gcs) {
						var dot = document.getElementById(gcs.val().x + "-" + gcs.val().y).children[1];
						dot.style.visibility = "visible";
					});
				}
			});
		});
	}

	addFormation() {
		var count = this.state.formations.length + 1;
		this.props.counting(count);
		this.setState(previousState => ({
			formations: [
				...previousState.formations,
				(<div><button id={count} className="formation-button" onClick={this.display}>{"Formation" + count}</button></div>)
			]
		}));
	}

	render() {
	var visibility = "hide";
	if(this.props.showBox){
		visibility = "show";
	}
		return (
			<div id="formation" className={visibility}>
				<p className="formation-title">Formation</p>
				{this.state.formations.map(formation => formation)}
				<div>
					<button onClick={this.addFormation} className="formation-add">Add Formation</button>
				</div>
			</div>
		);
	}
}
export default Formation;