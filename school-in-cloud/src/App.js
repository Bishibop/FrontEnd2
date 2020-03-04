import React from "react";
import { Switch, Route } from "react-router-dom";


import Homepage from "./components/Homepage";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Volunteer from "./components/Volunteer";




const App = () => (
  <div className="app">

      <Switch>
         <Route exact path="/" component={Login} />  
         
        
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Signup} />
        <Route path="/volunteer/:id" component={Volunteer} />
        
        {/* <PrivateRoute path="/admin" component={<Admin/>} /> */}
        
      </Switch>
  </div>
);

export default App;
