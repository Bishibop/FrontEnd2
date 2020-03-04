import React from "react";
import { Switch, Route } from "react-router-dom";


import Homepage from "./components/Homepage";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";




const App = () => (
  <div className="app">

      <Switch>
        <Route exact path="/" component={Homepage} /> 
         
        <Route path="/Register" component={Signup} /> 
        <Route path="/login" component={Login} />
        
        {/* <PrivateRoute path="/admin" component={<Admin/>} /> */}
        
      </Switch>
  </div>
);

export default App;
