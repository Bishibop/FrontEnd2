import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
// import NavBar from './components/nav-bar/nav-bar';

import './App.css';
import PrivateRouteWithProps from './authentication/PrivateRouteWithProps';

function App() {
	return (
		<div className='App'>
      <header className="App-header">
        <h1>School in the Cloud</h1>
      </header>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
		{/*
			<Route path='/' component={NavBar} />
			<Switch>
				
				<PrivateRouteWithProps exact path='/admin' component={admin} />
				
			</Switch>
		*/}
		</div>
	);
}

export default App;
