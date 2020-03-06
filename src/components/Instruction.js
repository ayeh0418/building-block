import React, { Component } from 'react';
import "./Instruction.css";
import fire from '../fire';

var clickCount = 0;

export default class Instruction extends Component {
	constructor(prop, context) {
		super(prop, context);

		var ref = fire.database().ref('clicks/');

		ref.once("value", function(snapshot) {
			clickCount = snapshot.val().clicks;
		});

		this.addClick = this.addClick.bind(this);
	}

	addClick() {
		var dotRef = fire.database().ref('clicks/');
		var ref = fire.database().ref('clicks/');

		ref.on("value", function(snapshot) {
			clickCount = snapshot.val().clicks;
		});

		ref.set({
			clicks: clickCount + 1
		});

		alert("Click on the grid to add/remove dots. Click 'Dancers' to manage dancers. Click 'Formations' to manage formations")
	}

	render() {
		return (
			<div className="instruction-button">
				<button onClick={this.addClick} className="login-button">Instruction</button>
			</div>
		);
	}
}