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
  // availability: yup.mixed()
  //   .when("role", {
  //     is: 'volunteer',
  //     then: yup.mixed().test(
  //       'has-availablity',
  //       'Please select your availability',
  //       (value) => Object.values(value).includes(true)
  //   )})
});

function Signup(props) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    country: '',
    formAvailability: {
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false
    },
  });
  const [formErrors, setFormErrors] = useState();

  function handleChange(event) {
    console.log('Change value: ', event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function availabilityChange(event) {
    let updatedUser = user;
    updatedUser.formAvailability[event.target.value] = !user.formAvailability[event.target.value]
    setUser(updatedUser);
    console.log('Change value: ', event.target.value, user.formAvailability);
  }

  const handleSubmit = event => {
    event.preventDefault();
    signupValidationSchema.validate(user, {abortEarly: false})
      .then(() => {
        let updatedUser = user;
        updatedUser.availability = Object.keys(user.formAvailability)
          .filter(key => user.formAvailability[key])
          .join(',');
        props.registerUser(updatedUser);
        console.log(updatedUser);
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
                Availability (select all that apply):
                <br/>
                {Object.keys(user.formAvailability).map(timeslot => 
                  <React.Fragment key={timeslot} >
                    <input
                      type='checkbox'
                      name='formAvailability'
                      onChange={availabilityChange}
                      value={timeslot}
                    />
                    {timeslot}pm
                    <br/>
                  </React.Fragment>
                  )}
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
