import React from 'react';
import './App.css';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
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
					<Route path="/Signup">
						<Signup />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}