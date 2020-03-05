// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import "./Names.css";

export default class Names extends Component {

	render() {
    var visibility = "hide";
    console.log(visibility);
    //document.getElementById('addMenu').innerHTML = "Add Dancers";
 
    if (this.props.menuVisibility) {
      visibility = "show";
      console.log(visibility);
    }

    if(this.props.addMenu){
        console.log(this.props.addMenu);
        document.getElementById('addMenu').innerHTML = "Close Menu";
	}
    else if(!this.props.addMenu && document.getElementById('addMenu') != null){
        document.getElementById('addMenu').innerHTML = "Add Dancers";
	}

    return (
      <div id="flyoutMenu"
           //onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
           <h2>Dancers</h2>
        <div className="dancerContainer">
            <p>Arthur Tran</p>
            <p>Andrew Yeh</p>
            <p>Jenny Li</p>
        </div>
        <button id="addMenu" onMouseDown={this.props.addDancer}>Add Dancers</button>
      </div>
    );
  }
}
 