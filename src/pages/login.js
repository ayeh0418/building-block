import React from 'react';
import './Login.css';
import logo from '../images/logo.png';

export default function Login() {
	return (
		<div>
			<img alt="Flyer" src={logo} />
			<h1>Building Block</h1>
			<p>collaborative blocking redesigned</p>
			<h1>Login</h1>
			<p>Welcome back to Building Block, please log in</p>
			<p>Forgot password?</p>
			<button>Log in</button>
			<h3>Don't have an account? <button>SIGN UP</button></h3>
		</div>
	);
}