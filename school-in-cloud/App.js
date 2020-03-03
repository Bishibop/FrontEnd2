import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


// import NavBar from './components/nav-bar/nav-bar';

import './App.css';
import PrivateRouteWithProps from './authentication/PrivateRouteWithProps';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={NavBar} />
			<Switch>
				
				<PrivateRouteWithProps exact path='/admin' component={admin} />
				
			</Switch>
		</div>
	);
}

export default App;
