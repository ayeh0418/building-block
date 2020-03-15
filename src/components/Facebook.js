import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import fire from '../fire';
import { Redirect } from 'react-router-dom';

export default class Facebook extends Component {
	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: '',
		redirect: false
	}

	responseFacebook = response => {
		this.setState({
			isLoggedIn: false,
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		});

		var redirect = false;
		var fblogin = false;
		var ref = fire.database().ref('users');
		var userEmail = this.state.email.replace(/\./g, ',');

		ref.on("value", function(snapshot) {
			if(snapshot.hasChild(userEmail)){
				console.log("good");
				redirect = true;
				console.log(redirect);
				fblogin = true;
				console.log(fblogin);
			}
			else{
				console.log("bad");
				redirect = false;
			}
			
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
			redirect = false;
			alert('wrong info');
		});

		if(fblogin){
			this.setState({isLoggedIn: true });
			console.log(this.state.isLoggedIn);
		}

		
	}
	
	componentClicked = () => console.log('clicked');

	render () {

		let fbContent;

		if (this.state.isLoggedIn) {
			return <Redirect push to="/Home" />;
			fbContent = (
				<div style={{
					margin: 'auto',
					background: 'white',
					pading: '20px'
				}}>
					<img src={this.state.picture} alt={this.state.name} />
					<h2>{this.state.name}</h2>
					console.log(this.state.isLoggedIn);
				</div>
				
			)
		} else {
			fbContent = (
				 <FacebookLogin
				appId="1041187736251143"
				autoLoad={false}
				fields="name,email,picture"
				onClick={this.componentClicked}
				callback={this.responseFacebook} />
			);
		}

		if(this.state.redirect === true){
				return <Redirect push to="/Home" />;
		}
		return (
			<div>{fbContent}</div>
		);
	}
}