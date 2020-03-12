// JavaScript source code
import React, { Component } from 'react';
import "./addMenu.css";
import fire from '../fire';

export default class addMenu extends Component {

    constructor(props){
        super(props);
        var query = fire.database().ref("dancers");

        var dancerList = [];
        var dancerId;
        this.state ={ 
            id: 0,
            name: ''
		};
        var number = query.once("value")
            .then(function(snapshot) {
  
            var numDancers = snapshot.numChildren();  
        });


        //this.setState({id: numDancers.id})
        console.log(this.state.id);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddName = this.handleAddName.bind(this);
	}

    handleAddName(event){
        this.setState({name: event.target.value})
	}

    handleSubmit(event){
        this.setState({id: this.state.id + 1});
        console.log(this.state.id +" " + this.state.name);
        this.props.addSubmit(event, this.state.name, this.state.id);
        this.setState({name: " "});
        //event.preventDefault();
	}
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
        <form onSubmit={this.handleSubmit}>
            <input className="dancerName" id="dancerName" type="text" value={this.state.name} onChange={this.handleAddName} /><br/>
            <input className="addButton" type="submit" value="Add" onClick={this.props.handleMouseDown} />
        </form>
      </div>
    );
  }
}
 