// JavaScript source code
import React, { Component } from 'react';
import "./addMenu.css";

export default class addMenu extends Component {

	render() {
    var visibility = "hide";
    console.log(visibility)
 
    if (this.props.menuVisibility) {
      visibility = "show";
      console.log(visibility);
    }
 
    return (
      <div id="addFlyout"
           //onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h4>New Dancer</h4>
        <input className="dancerName" type="text" /><br/>
        <input className="addButton" type="submit" value="Add" onMouseDown={this.props.handleMouseDown}/>
      </div>
    );
  }
}
 