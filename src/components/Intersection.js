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

		this.handleDot = this.handleDot.bind(this);	
		this.show = this.show.bind(this);
		// this.myRef = React.createRef();
	}

	show() {
		this.setState({
			showDot: true
		});
	}

	handleDot() {
		this.setState(prevState => ({
			showDot: !prevState.showDot
		}));

		
		if (!this.state.showDot) {
			var dotRef = fire.database().ref().child("formations/" + this.props.f);
			dotRef.child(this.props.index).set({
				x: this.props.x,
				y: this.props.y
			});
		} else {
			fire.database().ref("formations/" + this.props.index).remove();
		}
	}

	render() {
		return (
			<div /*ref="hi"*/ className="intersection" id={this.props.x + "-" + this.props.y}>
				<img onClick={this.handleDot} src={cross}/>
				<div onClick={this.handleDot} className="black" style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}></div>
			</div>
		);
	}
}