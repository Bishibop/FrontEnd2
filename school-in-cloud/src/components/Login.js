import React, { useState } from 'react';

function Login() {
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
    // Do the thing you want to do with the combo
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
      </form>
    </div>
  );
}

export default Login;

