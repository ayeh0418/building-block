import React from 'react';
import './App.css';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import LoadProject from './pages/LoadProject.js';
import NewProject from './pages/NewProject.js';
import {  
	BrowserRouter as Router,
	//Router,
	Switch,
	Route
} from 'react-router-dom';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';

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

export default function App() {

//will work but only tracks '/'
 ReactGA.initialize('UA-159907469-1');
 ReactGA.pageview('/');
 
 ReactGA.event({
  category: 'User',
  action: 'Created account'
});
	return (
		<Router /*history={history} */>
			<div>
				<Switch>
					<Route exact path="/Signup" >
						<Signup />
					</Route>
					<Route exact path="/">					 
						<Login />
					</Route>
					<Route exact path="/Home">
						<Home />
					</Route>
					<Route exact path="/LoadProject">
						<LoadProject />
					</Route>
					<Route exact path="/NewProject">
						<NewProject />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}