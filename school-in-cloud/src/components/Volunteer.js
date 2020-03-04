import React from "react";
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const Volunteer = () => {
  if (hasToken) {
      console.log("in Volunteer");
      return (
      <div>Hello from Volunteer</div>
      )
  }
  else {
    return <Redirect to="/signup" />;
  }
};
export default Volunteer;