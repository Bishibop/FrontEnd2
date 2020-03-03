import React, { useState } from 'react';
import { CountryDropdown  } from 'react-country-region-selector';

function Signup() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    country: '',
    availability: {
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false
    } 
  });

  function handleChange(event) {
    console.log('Change value: ', event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function availabilityChange(event) {
    let updatedUser = user;
    updatedUser.availability[event.target.value] = !user.availability[event.target.value]
    setUser(updatedUser);
    console.log('Change value: ', event.target.value, user.availability);
  }

  function handleSubmit(event) {
    console.log('User: ', user);
    // Do the thing you want to do with the combo
    event.preventDefault();
  }

  return (
    <div className="signup">
      <h2>Signup page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={user.firstName}
              placeholder='John'
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
              placeholder='Doe'
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
                {Object.keys(user.availability).map(timeslot => 
                  <React.Fragment key={timeslot} >
                    <input
                      type='checkbox'
                      name='availability'
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

export default Signup;
