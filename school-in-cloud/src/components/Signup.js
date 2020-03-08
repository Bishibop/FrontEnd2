import React, { useState } from 'react';
import { CountryDropdown  } from 'react-country-region-selector';
import { connect } from "react-redux";
import * as yup from 'yup';

import { registerUser } from '../actions/auth'
import ErrorMessage from './ErrorMessage';

const signupValidationSchema = yup.object().shape({
  firstName: yup.string()
    .required('Please enter your first name'),
  lastName: yup.string()
    .required('Please enter your last name'),
  email: yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: yup.string()
    .required('Please enter a password'),
  role: yup.string()
    .required('Please select a role'),
  country: yup.string()
    .when("role", {
      is: 'volunteer',
      then: yup.string().required("Please select a country")
    }),
  availability: yup.string()
    .when("role", {
      is: 'volunteer',
      then: yup.string().required("Please set your availability")
    })
});

function Signup(props) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    country: '',
    availability: ''
  });
  const [formErrors, setFormErrors] = useState();

  function handleChange(event) {
    //console.log('Change value: ', event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    signupValidationSchema.validate(user, {abortEarly: false})
      .then(() => {
        props.registerUser(user);
        console.log(user);
      })
      .catch(err => {
        setFormErrors(err.errors);
        console.log('yup thing: ', err);
      });
  };
  

  return (
    <div className="signup">
      <h2>Signup page</h2>
      {formErrors && formErrors.map(err => (
        <ErrorMessage key={err} message={err}/>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={user.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type='text'
              name='lastName'
              value={user.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={user.email}
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
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Role:
            <select
              name='role'
              onChange={handleChange}
            >
              <option value="">Select your Role:</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </label>
        </div>
        {(user.role === 'volunteer') &&
          <>
            <div>
              <label>
                Country:
                <CountryDropdown
                  value={user.country}
                  //valueType='short'
                  name='country'
                  onChange={(val) => setUser({ ...user, country:val })}
                />
              </label>
            </div>
            <div>
              <label>
                Enter your availability:
                <input
                  type='text'
                  name='availability'
                  value={user.availability}
                  onChange={handleChange}
                />
              </label>
            </div>
          </>
        }
        <button>Signup</button>
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
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);