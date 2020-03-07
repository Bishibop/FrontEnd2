import React from 'react';

function Todo({ todo }) {

  return (
    <li key={todo.id}>
      {todo.title}: {todo.description}
    </li>
  );
}

export default Todo;
