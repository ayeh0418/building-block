// JavaScript source code
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Color.css';
import fire from '../fire';

class Color extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			visibility: this.props.visibility,
            color: ''
		}
        this.setColor = this.setColor.bind(this);
	}
   
    setColor(){
     this.setState({color: localStorage.getItem('color')});
	}

	render() {
    var visibility = "hide";


    if (this.props.visibility) {
      visibility = "show";
    }

    return (
      <div id="colorMenu"
          // onClick={() => {localStorage.setItem('toggleColor', 1)}}
           className={visibility}>
        <div className="colorContainer">
            <div className="Red" onMouseDown={() => {localStorage.setItem('color', "Red")}} onClick={() => this.setColor()}></div>
            <div className="Orange" onMouseDown={() => {localStorage.setItem('color', "Orange")}} onClick={() => this.setColor()}> </div>
            <div className="Green" onMouseDown={() => {localStorage.setItem('color', "Green")}} onClick={() => this.setColor()}></div>
            <div className="Teal" onMouseDown={() => {localStorage.setItem('color', "Teal")}} onClick={() => this.setColor()}></div>
            <div className="Blue" onMouseDown={() => {localStorage.setItem('color', "Blue")}} onClick={() => this.setColor()}></div>
            <div className="Purple" onMouseDown={() => {localStorage.setItem('color', "Purple")}} onClick={() => this.setColor()}></div>
            <div className="Pink" onMouseDown={() => {localStorage.setItem('color', "Pink")}} onClick={() => this.setColor()}></div>
            <p> Color: {this.state.color}</p>
        </div>
     </div>
    );
  }
}
export default Color;