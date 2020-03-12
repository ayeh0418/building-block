import React from 'react';
import './App.css';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import LoadProject from './pages/LoadProject.js';
import NewProject from './pages/NewProject.js';
import {  
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';
import { Component } from 'react';

/* cant get it to work yet
 const history = createBrowserHistory();
	const initGA = (history) => {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-159907469-1', 'auto');
	ga('send', 'pageview');

	history.listen((location) => {
    console.log("tracking page view: " + location.pathname);
    ga('send', 'pageview', location.pathname);
  });
};
initGA(history);
*/


export default class App extends Component {

 constructor(props) {
		super(props);
		this.state = {
			username: ''
		};
		this.setUser = this.setUser.bind(this);
	}
//will work but only tracks '/'
 //ReactGA.initialize('UA-159925384-1');
 //ReactGA.pageview('/NewProject');
 
 /*ReactGA.event({
  category: 'User',
  action: 'Created account'
});
*/

	componentDidMount () {
    const persistState = localStorage.getItem('userState');
    console.log(persistState);
    if (persistState) {
      try {
        this.setState({ username: persistState});
      } catch (e) {
        // is not json
      }
    }
  }

	setUser = (name) => {
		this.setState({username: name}, () => {localStorage.setItem('userState', this.state.username)});

	}

	render(){
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/Signup">
						<Signup setUser={this.setUser}/>
					</Route>
					<Route exact path="/"  >					 
						<Login setUser={this.setUser} />
					</Route>
					<Route exact path={"/" + this.state.username + "/Home"}>
						<Home />
					</Route>
					<Route exact path={"/" + this.state.username + "/LoadProject"}>
						<LoadProject />
					</Route>
					<Route exact path={"/" + this.state.username + "/NewProject"}>
						<NewProject />
					</Route>
				</Switch>
			</div>
		</Router>
	);
	}
}