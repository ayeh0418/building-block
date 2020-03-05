import React, { Component } from 'react';
import './Intersection.css';
import cross from '../images/intersection.png';

export default class Intersection extends Component {
	constructor(prop, context) {
		super(prop, context);
		
		this.state = {
			showDot: false
		};

		this.handleDot = this.handleDot.bind(this);	
	}

	handleDot() {
		this.setState(prevState => ({
			showDot: !prevState.showDot
		}));
	}

	render() {
		return (
			<div className="intersection">
				<img onClick={this.handleDot} src={cross}/>
				<div onClick={this.handleDot} className="black" style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}></div>
			</div>
		);
	}
}