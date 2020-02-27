import React, { Component } from 'react';
import fire from '../fire';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';
import bar from '../images/bar.png';
import corner from '../images/corner.png';
import Facebook from '../components/Facebook.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '', 
			password: '',
			redirect: false
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
		console.log(this.state.facebook);
		var redirect = false;
		var pw = this.state.password;
		var ref = fire.database().ref('users/' + this.state.email.replace(/\./g, ','));
		ref.on("value", function(snapshot) {
			if (snapshot.val().password == pw) {
				redirect = true;
			}
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
			redirect = false;
			alert('wrong info');
		});
		event.preventDefault();
		console.log(redirect);
		this.setState({redirect: redirect});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to="/Home" />;
		}

		return (
			<div className="screen">
				<div className="header">
					<img className="logo-login" alt="Flyer" src={logo} />
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
					<div className="no-account">Don't have an account?<Link to="/Signup"><button className="signup-button">SIGN UP</button></Link></div>
				</div>
				<Facebook />
				<div className="corner-login">
					<img className="corner-img" src={corner} />
				</div>
			</div>
		);
	}
}
export default Login;
