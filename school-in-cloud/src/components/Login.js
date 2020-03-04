import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import { connect } from "react-redux";

import {authenticateUser} from '../actions/auth'
function Login(props) {
  

  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    console.log('Change value: ', event.target.value);
    setEmailAndPassword({ ...emailAndPassword, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    console.log('Email and password: ', emailAndPassword);
    event.preventDefault();
    props.authenticateUser(emailAndPassword)
    console.log(emailAndPassword)


    setEmailAndPassword({
      email: '',
      password: ''
    });
    event.preventDefault();
  }


  return (
    <div className="login">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={emailAndPassword.email}
              placeholder='johndoe@gmail.com'
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={emailAndPassword.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Login</button>
        <Link to="/Register">
                {"Don't have an account? Register"}
        </Link>
      </form>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  authenticateUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


