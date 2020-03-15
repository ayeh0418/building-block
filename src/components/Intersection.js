import React, { Component } from 'react';
import './Intersection.css';
import cross from '../images/intersection.png';
import fire from '../fire';



export default class Intersection extends Component {
	constructor(prop, context) {
		super(prop, context);
		
		this.state = {
			showDot: false
		};

		this.addDot = this.addDot.bind(this);	
		this.removeDot = this.removeDot.bind(this);	
		this.show = this.show.bind(this);
	}

	show() {
		this.setState({
			showDot: true
		});
	}

	addDot() {
		this.setState ({
			showDot: true
		});
		var dotRef = fire.database().ref().child("/userData/" + this.props.user + "/formations/" + this.props.f);
		dotRef.child(this.props.index).set({
			x: this.props.x,
			y: this.props.y
		});
	}

	removeDot() {
		if (this.state.showDot) {
			this.setState ({
				showDot: false
			});
		} else {
			this.setState ({
				showDot: true
			});
		}
		fire.database().ref("/userData/" + this.props.user + "/formations/" + this.props.f + "/" + this.props.index).remove();
	}

	render() {
		return (
			<div className="intersection" id={this.props.x + "-" + this.props.y}>
				<img onClick={this.addDot} src={cross}/>
				<div onClick={this.removeDot} className="black" style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}></div>
			</div>
		);
	}
}