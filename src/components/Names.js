// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import "./Names.css";

export default class Names extends Component {

	render() {
    var visibility = "hide";
    console.log(visibility)
 
    if (this.props.menuVisibility) {
      visibility = "show";
      console.log(visibility);
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
        <button href="#">Add Dancers</button>
      </div>
    );
  }
}
 