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
			redirect: false,
			username: '',
			submitted: false
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleValidCheck = this.handleValidCheck.bind(this);
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
		var name   = this.state.email.substring(0, this.state.email.lastIndexOf("@"));
		var that = this;
		ref.on("value", function(snapshot) {
			if(snapshot.exists()){
				if (snapshot.val().password === pw) {
					redirect = true;	
					that.setState({redirect: redirect}, () => {that.handleValidCheck()});
				}
				else{
					redirect = false;	
					that.setState({redirect: redirect}, () => {that.handleValidCheck()});
				}
			}
			else{
				redirect = false;	
				that.setState({redirect: redirect}, () => {that.handleValidCheck()});
			}
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
			redirect = false;
			alert('wrong info');
		});
		event.preventDefault();
		this.setState({redirect: redirect, username: name}, () => {this.props.setUser(name)} );
		console.log(this.state.username);
	}
	handleValidCheck(){
		if(!this.state.redirect && this.state.submitted){
			alert("Invalid Username or Password");
			this.setState({submitted: false});
		}
	}

	render() {

		if (this.state.redirect) {
			return <Redirect push to={this.state.username + "/Home"}/>;
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
						<input className="login-button" type="submit" value="Log In" onClick={() => this.setState({submitted:true})} />
					</form>
					<div className="no-account">Don't have an account?<Link to="/Signup"><button className="signup-button">SIGN UP</button></Link></div>
				</div>
				<div className="corner-login">
					<img className="corner-img" src={corner} />
				</div>
			</div>
		);
	}
}
export default Login;
