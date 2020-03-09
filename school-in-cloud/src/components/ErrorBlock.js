import React from 'react';
import ErrorMessage from './ErrorMessage'

function ErrorBlock({ errors }) {

  return (
    <div className="errorBlock">
      {errors && errors.map(err => (
        <ErrorMessage key={err} message={err}/>
      ))}
    </div>
  );
}

export default ErrorBlock;
