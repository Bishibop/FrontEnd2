import React from "react";
import { Switch, Route } from "react-router-dom";


import Homepage from "./components/Homepage";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";




const App = () => (
  <div className="app">

      <Switch>
         <Route exact path="/" component={Login} />  
         
        
        <Route path="/" component={Login} />
        <Route path="/Register" component={Signup} />
        
        {/* <PrivateRoute path="/admin" component={<Admin/>} /> */}
        
      </Switch>
  </div>
);

export default App;
