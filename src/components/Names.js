// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import "./Names.css";
import fire from '../fire';

export default class Names extends Component {
constructor(props) {
    super(props);

    var dancerList = [];

    var query = fire.database().ref("dancers");
    query.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
  
        var childId = childSnapshot.val().id;
        var childName = childSnapshot.val().name;
        dancerList.push({
            id: childId + 1,
            name: childName
        });
        });
    });

    this.state = { dancerList };
}

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
            {this.state.dancerList.map((dancer, index) => (
        <div className="dancerOption">
        <p id="delete" onMouseDown={() => window.location.reload()}  onClick={() => fire.database().ref("dancers/" + dancer.name).remove()} >x</p>
        <p id="name" key={index}>{dancer.name}</p>
        </div>
        ))}
        </div>
        <button id="addMenu" onMouseDown={this.props.addDancer}>Add Dancers</button>
      </div>
    );
  }
}
 