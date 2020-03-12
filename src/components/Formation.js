import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Formation.css';
import fire from '../fire';

class Formation extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			showBox: this.props.showBox,
			formations: []
		}

		this.display = this.display.bind(this);
		this.addFormation = this.addFormation.bind(this);
	}

	display(e) {
		var id = e.target.id;
		this.props.curr(id);

		var allDots = document.getElementsByClassName('black');

		for (var i = 0; i < allDots.length; i ++) {
			allDots[i].style.visibility = 'hidden';
		}

		var ref = fire.database().ref('formations').orderByKey();
		ref.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.key == id) {
					childSnapshot.forEach(function(gcs) {
						var dot = document.getElementById(gcs.val().x + "-" + gcs.val().y).children[1];
						dot.style.visibility = "visible";
					});
				}
				
			});
			
		});
	}

	addFormation() {
		var count = this.props.count;
		this.props.counting(count + 1);
		this.setState(previousState => ({
			formations: [
				...previousState.formations,
				(<div><button id={count} className="formation-button" onClick={this.display}>{"Formation" + count}</button></div>)
			]
		}));
	}

	render() {
		return (
			<div id="formation" className="formation" style={{visibility: this.props.showBox ? 'visible' : 'hidden' }}>
				<p className="formation-title">Formation</p>
				{this.state.formations.map(formation => formation)}
				<div>
					<button onClick={this.addFormation} className="formation-add">Add Formation</button>
				</div>
			</div>
		);
	}
}
export default Formation;