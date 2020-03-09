import React, { useState, useEffect } from 'react';
import Todo from "./Todo"

function Todos({ things }) {

  const [todos, setTodos] = useState(things);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      console.log("setting the initial render");
      setInitialRender(false);
    } else {
      console.log('firing the api request');
    }
  }, []);

  return (
    <div className="todos">
      <h3>Your Todos:</h3>
      <ul>
        {things.filter(todo => !todo.is_completed).map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={things}
            setTodos={setTodos}
            initialRender={initialRender}
          />
        ))}
      </ul>
      <h3>Completed:</h3>
      <ul>
        {things.filter(todo => todo.is_completed).map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={things}
            setTodos={setTodos}
            initialRender={initialRender}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
