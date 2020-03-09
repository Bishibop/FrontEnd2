import React from "react";
import { Switch, Route } from "react-router-dom";

import Admin from "./components/Admin";
import Volunteer from "./components/Volunteer";
import Student from "./components/Student";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminVolunteer from "./components/AdminVolunteer";

const App = () => (
  <div className="app">

      <Switch>
        <Route exact path="/" component={Login} />  
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Signup} />
        <Route path="/volunteer/:id" component={Volunteer} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/adminvolunteer/:id" component={AdminVolunteer}/>
        <PrivateRoute exact path="/student" component={Student} />
      </Switch>
  </div>
);

export default App;
