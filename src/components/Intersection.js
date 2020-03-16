import React, { Component } from 'react';
import './Intersection.css';
import cross from '../images/intersection.png';
import fire from '../fire';



export default class Intersection extends Component {
	constructor(prop, context) {
		super(prop, context);
		
		this.state = {
			showDot: false,
			dotNum: '',
			dotColor: 'Purple'
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
		if (!this.state.showDot) {
		this.setState ({
			showDot: true
		});
		}
		var dotRef = fire.database().ref().child("/userData/" + this.props.user + "/projects/" + this.props.pCount + "/formations/" + this.props.f);
		dotRef.child(this.props.index).set({
			x: this.props.x,
			y: this.props.y
		});
	}

	removeDot() {
		var label = localStorage.getItem("toggleLabel");
		var number = localStorage.getItem("labelNumber");
		var colorToggle = localStorage.getItem('toggleColor');
		var hue = localStorage.getItem('color');
		console.log(colorToggle);
		console.log(hue);
		if (label != 1 && colorToggle != 1){
			if (this.state.showDot) {
				this.setState ({
					showDot: false
				});
			} else {
				this.setState ({
					showDot: true
				});
			}
			fire.database().ref("formations/" + this.props.f + "/" + this.props.index).remove();
			if(this.state.dotNum != '' || this.state.dotColor != 'Purple'){
					this.setState({dotNum: '', dotColor: 'Purple'});
			}
		}
		else{
			if(label == 1){
			this.setState({dotNum: number});
			localStorage.setItem('toggleLabel', 0);
			localStorage.setItem('labelNumber', '');
			}
			if(colorToggle==1) {
				this.setState({dotColor: hue});
			}
		}
		fire.database().ref("/userData/" + this.props.user + "/projects/" + this.props.pCount + "/formations/" + this.props.f + "/" + this.props.index).remove();
	}

	render() {
		return (
			<div className="intersection" id={this.props.x + "-" + this.props.y}>
				<img onClick={this.addDot} src={cross}/>
				<div onClick={this.removeDot} className={this.state.dotColor} style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}>{this.state.dotNum}</div>
			</div>
		);
	}
}