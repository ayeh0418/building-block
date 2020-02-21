import React from 'react';
import './App.css';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import LoadProject from './pages/LoadProject.js';
import {  
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/Signup">
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
				</Switch>
			</div>
		</Router>
	);
}