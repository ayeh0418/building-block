import React, { Component } from 'react';
import "./grid.css";
import Intersection from './Intersection.js';

export default class grid extends Component {  
	constructor(props) {
		super(props);

		this.state = {
			width: 0,
			height: 0,
			rows: 0,
			columns: 0,
			r: 0,
			c: 0
		};

		this.updateWindowDimensions = this.updateWindowDimensions;
		this.createGrid = this.createGrid.bind(this);
	}

	updateDimensions() {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
			rows: (window.innerHeight - 200) / 24,
			columns: (window.innerWidth - 40) / 24
		});
		this.createGrid();
	}

	createGrid() {
		let grid = [];
		let ind = 0;
		for (let i = 0; i < this.state.rows; i++) {
			let gridRow = [];

			for (let j = 0; j < this.state.columns; j++) {
				ind += 1;
				gridRow.push(<Intersection pCount={this.props.pCount} user={this.props.user} f={this.props.currForm} x={i} y={j} index={ind} id={ind} />);
			}
			grid.push(<div className="grid-row">{gridRow}</div>);
		}
		return grid;
	}

	/**
	* Add event listener
	*/
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	/**
	* Remove event listener
	*/
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}
	
	render() {
		return (
			<div className="board">
				{this.createGrid()}
			</div>
		);
	}
}
