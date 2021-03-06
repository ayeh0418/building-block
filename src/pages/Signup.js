import React from 'react';
import fire from '../fire';
import './signup.css';
import logo from '../images/logo.png';
import bar from '../images/bar.png';
import corner from '../images/corner.png';
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';


export default class Signup extends Component {
    render(){
	    return (
		    <div className="signup">
			    <div className="header">
				    <img className="logo-login" alt="Flyer" src={logo} />
				    <div className="header-text">
				    	<div className="header-title">Building Block</div>
				    	<div className="slogan">collaborative blocking redesigned</div>
				    </div>
			    </div>
			    <div className="form">
				    <div className="title">Sign Up</div>
				    <img className="bar" src={bar} />
				    <div className="instruction-signup">Create an account to get started</div>
			    </div>
                <NameForm setUser={this.props.setUser} ></NameForm>
                <Link to="/"><p>Already have an account? <b>LOG IN</b></p></Link>
			    <div className="corner-login">
				    <img className="corner" src={corner} />
			    </div>
		    </div>
	    );
    }
}
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        errors: {
            name: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
        },
        valid: false,
        username: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
        case 'name': 
            errors.name = 
                value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
        case 'email': 
            errors.email = 
                validEmailRegex.test(value)
                ? ' '
                : 'Email is not valid!';
            break;
        case 'confirmEmail':
            errors.confirmEmail = 
                value != this.state.email
                ? 'Email does not match!'
                : '';
            break;
        case 'password': 
            errors.password = 
                value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
        case 'confirmPassword':
            errors.confirmPassword =
                value != this.state.password
                ? 'Password does not match!'
                : '';
            break;
        default:
        break;
    }

    this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
    })
  }
 
 handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
        console.error('Invalid Form');
    }else{
		console.info('Valid Form');
        var usersRef = fire.database().ref().child("users");
		usersRef.child(this.state.email.replace(/\./g, ',')).set({
			name: this.state.name,
			password: this.state.password
		});
        var name  = this.state.email.substring(0, this.state.email.lastIndexOf("@"));
        this.setState({valid: true, username: name}, () => {this.props.setUser(name)});
        localStorage.setItem('userState', name);
    }
}

  render() {
  if(this.state.valid == true){
 
      return <Redirect push to={"/" + localStorage.getItem("userState") + "/Home"}/>;
      
  }
  const {errors} = this.state;
  const isEnabled = this.state.name.length > 0 && this.state.email.length > 0 && this.state.confirmEmail.length > 0
                        &&this.state.password.length > 0 && this.state.confirmPassword.length > 0;
    return (
     <form onSubmit={this.handleSubmit}>
        <label>
            <div className= 'name'>
                <input type="text" name='name' onChange={this.handleChange} placeholder = "Name"/><br/>
                {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
            </div>
            <div className= 'email'>
                <input type="text" name='email' onChange={this.handleChange} placeholder = "Email"/><br/>
                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
            </div>
            <div className= 'confEmail'>
                <input type="text" name='confirmEmail' onChange={this.handleChange} placeholder = "Confirm Email"/><br/>
                {errors.confirmEmail.length > 0 && <span className='error'>{errors.confirmEmail}</span>}
            </div>
            <div className='pass'>
                <input type="password" name='password' onChange={this.handleChange} placeholder = "Password"/><br/>
                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
            </div>
            <div className='confPass'>
                <input type="password" name='confirmPassword' onChange={this.handleChange} placeholder = "Confirm Password"/><br/>
                {errors.confirmPassword.length > 0 && <span className='error'>{errors.confirmPassword}</span>}
            </div>
            <div>
                <button disabled={!isEnabled}>Sign Up</button>
            </div>
        </label>
    </form>
    );
  }
}