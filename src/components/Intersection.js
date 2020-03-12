import React, { Component } from 'react';
import './Intersection.css';
import cross from '../images/intersection.png';
import fire from '../fire';

export default class Intersection extends Component {
	constructor(prop, context) {
		super(prop, context);
		
		this.state = {
			showDot: false,
			dotNum: ''
		};

		this.handleDot = this.handleDot.bind(this);	
	}

	handleDot() {
		var label = localStorage.getItem("toggleLabel");
		var number = localStorage.getItem("labelNumber");
		console.log(label);
		console.log(number);
		if(label != 1){
			this.setState(prevState => ({
				showDot: !prevState.showDot
			}));

		
			if (!this.state.showDot) {
				var dotRef = fire.database().ref().child("formations");
				dotRef.child(this.props.index).set({
					x: this.props.x,
					y: this.props.y
				});
			} else {
				fire.database().ref("formations/" + this.props.index).remove();
				if(this.state.dotNum != ''){
					this.setState({dotNum: ''});
				}
			}
		}
		else{

			this.setState({dotNum: number});
			localStorage.setItem('toggleLabel', 0);
			localStorage.setItem('labelNumber', '');
		}
	}

	render() {
		return (
			<div className="intersection" id={this.props.x + "-" + this.props.y}>
				<img onClick={this.handleDot} src={cross}/>
				<div onClick={this.handleDot} className="black" style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}>{this.state.dotNum}</div>
			</div>
		);
	}
}