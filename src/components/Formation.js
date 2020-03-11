import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Formation.css';
import fire from '../fire';

export default class Formation extends Component {
	construct(props, context) {
		//super(props, context);
		this.state = {
			showBox: false
		}

		this.display = this.display.bind(this);
		this.close = this.close.bind(this);
	}
	/*
	close () {
		
		this.setState({
			showBox: false
		});
		
		var menu = document.getElementById('formation');
		menu.visibility = 'hidden';
	}
	*/
	display() {
		var ref = fire.database().ref('formations').orderByKey();

		ref.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				childSnapshot.forEach(function(gcs) {
					// alert(gcs.key);
					// alert(gcs.val().x);
					// alert(gcs.val().y);

					var dot = document.getElementById(gcs.val().x + "-" + gcs.val().y);
					dot.style.display = "none";
					// var dot = ReactDOM.findDOMNode(this.refs.hi);
					// alert(dot);
					// dot.show();
				});
				
			});
			
		});
	}

	render() {
		return (
			<div id="formation" className="formation" /*style={{visibility: this.state.showBox ? 'visible' : 'hidden' }}*/>
				<p className="formation-title">Formation</p>
				<button onClick={this.display}>Formation1</button>
			</div>
		);
	}
}