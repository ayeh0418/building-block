import React, { Component } from 'react';
import "./grid.css";
import dotPic from '../images/dot.png';

var idx = 0;

export default class grid extends Component {  
	constructor(props) {
		super(props);

		this.state = {
			dots: []
		};
	}

	_onClick(e) {
		var bounds = e.target.getBoundingClientRect();
		var xCoord = e.screenX - bounds.left - 15;
		var yCoord = e.screenY - bounds.top - 85;
		this.setState({
			dots: this.state.dots.concat([
				{
					x: xCoord, 
					y: yCoord
				}
			])
		});
	}

	render() {
		const dots = this.state.dots.map(function(data, i){
			return <img src={dotPic} alt="dot" 
					style={{width: 30, height: 30, position: 'absolute', top: data.y, left: data.x}}/>;
		});
		return (
			<div>
				<div onClick={this._onClick.bind(this)} className="board">
					{dots}
				</div> 
			</div>
		);
	}
}
