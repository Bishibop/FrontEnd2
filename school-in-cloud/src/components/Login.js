import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as yup from 'yup';

import {authenticateUser} from '../actions/auth'
import ErrorMessage from './ErrorMessage';

const loginValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: yup.string()
    .required('Please enter a password')
});

function Login(props) {

  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState();  

  function handleChange(event) {
    setEmailAndPassword({ ...emailAndPassword, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    console.log('Email and password: ', emailAndPassword);

    loginValidationSchema.validate(emailAndPassword, {abortEarly: false})
      .then(() => {
        props.authenticateUser(emailAndPassword);
    }).catch(err => {
      setFormErrors(err.errors);
    });

    event.preventDefault();
  }


  return (
    <div className="login">
      <h2>Login Page</h2>
      {formErrors && formErrors.map(err => (
        <ErrorMessage key={err} message={err}/>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={emailAndPassword.email}
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