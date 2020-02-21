import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picutre: ''
	}

	responseFacebook = response => {
		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		});
	}

	componentClicked = () => console.log('clicked');

	render () {
		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = (
				<div style={{
					margin: 'auto',
					background: 'white',
					pading: '20px'
				}}>
					<img src={this.state.picture} alt={this.state.name} />
					<h2>{this.state.name}</h2>
				</div>
			)
		} else {
			fbContent = (
				 <FacebookLogin
				appId="1041187736251143"
				autoLoad={true}
				fields="name,email,picture"
				onClick={this.componentClicked}
				callback={this.responseFacebook} />
			);
		}

		return (
			<div>{fbContent}</div>
		);
	}
}