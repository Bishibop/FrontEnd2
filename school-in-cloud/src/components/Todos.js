import React from 'react';
import Todo from "./Todo"

function Todos({ things }) {

  return (
    <ul>
      {things.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
