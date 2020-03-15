import React, { Component } from 'react';
import './share.css';

class Share extends Component {
	constructor(props, context) {
		super(props, context);		

		this.copy = this.copy.bind(this);
	}

	copy() {
		navigator.clipboard.writeText(this.props.url);
		document.getElementById("copy-button").innerHTML = "Link Copied";
	}

	render() {
		return (
			<div className="share-box">
				<p className="share-title">Share</p>
				<input className="share-input" type="text" placeholder={this.props.url} />
				<button id="copy-button" className="formation-add" onClick={this.copy}>Copy Link</button>
			</div>
		);
	}
}
export default Share;