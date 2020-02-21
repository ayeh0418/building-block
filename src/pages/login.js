import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';
import bar from '../images/bar.png';
import corner from '../images/corner.png';
import topCorner from '../images/corner-top.png';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '', 
			password: ''
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(event) {
		this.setState({email: event.target.value});
	}

	handleChangePassword(event) {
		this.setState({password: event.target.value});
	}

	handleSubmit(event) {
		var pw = this.state.password;
		var ref = fire.database().ref('users/' + this.state.email.replace(/\./g, ','));
		ref.on("value", function(snapshot) {
			if (snapshot.val().password == pw) {
				alert("log in!");
			}
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
		event.preventDefault();
	}

	render() {
		return (
			<div className="screen">
				<div className="header">
					<img className="logo" alt="Flyer" src={logo} />
					<div className="header-text">
						<div className="header-title">Building Block</div>
						<div className="slogan">collaborative blocking redesigned</div>
					</div>
				</div>
				<div className="form">
					<div className="title">Login</div>
					<img className="bar" src={bar} />
					<div className="instruction">Welcome back to Building Block, please log in</div>
					<form onSubmit={this.handleSubmit}>
						<div className="login-email">
							<label>
								<input type="text" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email"/>
							</label>
						</div>
						<div className="login-password">
							<label>
								<input type="text" value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Password"/>
							</label>
						</div>
						<div className="forgot-password">Forgot password?</div>
						<input className="login-button" type="submit" value="Log In" />
					</form>
					<div className="no-account">Don't have an account?<Link to="/signup"><button className="signup-button">SIGN UP</button></Link></div>
				</div>
				<div className="corner">
					<img className="corner-top-img" src={topCorner} />
					<img className="corner-img" src={corner} />
				</div>
			</div>
		);
	}
}
export default Login;