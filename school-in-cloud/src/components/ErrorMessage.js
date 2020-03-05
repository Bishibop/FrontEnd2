import React from 'react';

function ErrorMessage(props) {

  return (
    <div className='error-message'>
      <p>
        {props.message}
      </p>
    </div>
  );
}

export default ErrorMessage;
