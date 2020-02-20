import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';

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
		var ref = fire.database().ref('users/' + this.state.email);
		ref.on("value", function(snapshot) {
			if (snapshot.val().password == pw) {
				alert("log in!");
			}
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
		/*
		var usersRef = fire.database().ref("users");
		usersRef.on('child_added', snapshot => {
			/* Update React state when message is added at Firebase Database //
			let user = { email: snapshot.val(), id: snapshot.key };
			this.setState({ email: [user].concat(this.state.email) });
	    })
		fire.database().ref('users').push( this.inputEl.value );
		*/
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<img alt="Flyer" src={logo} />
				<h1 className="title">Building Block</h1>
				<p>collaborative blocking redesigned</p>
				<h1>Login</h1>
				<p>Welcome back to Building Block, please log in</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						Email
						<input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
					</label>
					<label>
						Password
						<input type="text" value={this.state.password} onChange={this.handleChangePassword} />
					</label>
					<p>Forgot password?</p>
					<input type="submit" value="Log In" />
				</form>
				<h3>Don't have an account? <Link to="/signup"><button>SIGN UP</button></Link></h3>
			</div>
		);
	}
}
export default Login;

/*
import React, { Component } from 'react';
import fire from '../fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		email: "", 
		password: "" 
	}; // <- set up react state

	this.addMessage = this.addMessage.bind(this);
  }
  
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
	/*
	var postsRef = fire.database().ref().child("users");
	var newPostRef = postsRef.push();
	newPostRef.set({
		email: "@",
		password: "@@"
	});
	*/
	/*
	var usersRef = fire.database().ref();
	usersRef = usersRef.child("users");
	usersRef.child(0).set({
	
		email: "yes",
		password: "no"
 
  });
  */
  /*
	var ref = fire.database().ref("users/0");
	ref.on("value", function(snapshot) {
		console.log(snapshot.val().email);
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
  }

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="submit"/>
      </form>
    );
  }
}

export default Login;
*/