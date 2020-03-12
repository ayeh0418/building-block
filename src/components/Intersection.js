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

		this.addDot = this.addDot.bind(this);	
		this.removeDot = this.removeDot.bind(this);	
		this.show = this.show.bind(this);
		// this.myRef = React.createRef();
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
		var dotRef = fire.database().ref().child("formations/" + this.props.f);
		dotRef.child(this.props.index).set({
			x: this.props.x,
			y: this.props.y
		});
	}

	removeDot() {
		var label = localStorage.getItem("toggleLabel");
		var number = localStorage.getItem("labelNumber");
		if (label != 1){
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
			if(this.state.dotNum != ''){
					this.setState({dotNum: ''});
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
			<div /*ref="hi"*/ className="intersection" id={this.props.x + "-" + this.props.y}>
				<img onClick={this.addDot} src={cross}/>
				<div onClick={this.removeDot} className="black" style={{visibility: this.state.showDot ? 'visible' : 'hidden' }}>{this.state.dotNum}</div>
			</div>
		);
	}
}