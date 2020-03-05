import React from "react";
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const Student = () => {
  if (hasToken) {
      console.log("in Student");
      return (
      <div>Hello from Student</div>
      )
  }
  else {
    return <Redirect to="/signup" />;
  }
};

export default Student;
