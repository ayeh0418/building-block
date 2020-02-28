import React, { Component } from 'react';
import "./grid.css";
import dotPic from '../images/dot.png';

var idx = 0;
var onDot = false;

export default class grid extends Component {  
	constructor(props) {
		super(props);

		this.state = {
			dots: []
		};
		this.removeDot = this.removeDot.bind(this);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(e) {
		if (!onDot) {
			var bounds = e.target.getBoundingClientRect();
			var xCoord = e.screenX - bounds.left - 15;
			var yCoord = e.screenY - bounds.top - 85;
			this.setState({
				dots: this.state.dots.concat([
					{
						id: idx,
						x: xCoord, 
						y: yCoord
					}
				])
			});
			idx += 1;
		} else {
			onDot = false;
		}
	}

	removeDot(id) {
		onDot = true;
		const newState = this.state;
		const index = newState.dots.findIndex(a => a.id === id);
		if (index === -1) return;
		newState.dots.splice(index, 1);
		this.setState(newState);
	}

	render() {
		const dots = this.state.dots.map((data, i) => {
			return <img onClick={() => this.removeDot(data.id)} src={dotPic} alt="dot" 
					style={{width: 30, height: 30, position: 'absolute', top: data.y, left: data.x}}/>;
		});
		return (
			<div onClick={this._onClick} className="board">
				{dots}
			</div> 
		);
	}
}
