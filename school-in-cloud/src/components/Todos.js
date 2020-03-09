import React, { useState, useEffect } from 'react';
import Todo from "./Todo"

function Todos({ things }) {

  const [todos, setTodos] = useState(things);

  // I need this? What???
  useEffect(() => {
    setTodos(things);
  }, [things]);

  return (
    <div className="todos">
      <h3>Your Todos:</h3>
      <ul>
        {todos.filter(todo => !todo.is_completed).map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <h3>Completed:</h3>
      <ul>
        {todos.filter(todo => todo.is_completed).map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
