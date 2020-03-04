import React from "react";
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const Homepage = () => {
  if (hasToken) {
    return <Redirect to="/" />;
  } else {
    return <Redirect to="/signup" />;
  }
};

export default Homepage;
