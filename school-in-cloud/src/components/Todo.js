import React, { useState, useEffect } from 'react';
import API from '../utils/API'

const api = API();

function Todo({ todo, todos, setTodos, initialRender }) {

  const [isCompleted, setIsCompleted] = useState(todo.is_completed);

  useEffect(() => {
    if (initialRender) {
      // Do nothing
    } else {
      console.log('firing the api request');
      api.put(`/api/admin/${todo.admin_id}/todos`, {
        id: todo.id,
        is_completed: isCompleted
      }).then(res => {
        console.log('todo data: ', res.data);
      });
    }
  }, [isCompleted]);

  function handleChange(event) {
    // Is there a way to do this without changing the whole todo list?
    // Just changing an individual todo?
    setIsCompleted(!isCompleted);
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        todo.is_completed = !todo.is_completed;
      }
      return todo;
    }));
  }

  return (
    <li>
      <input
        type='checkbox'
        onChange={handleChange}
        value={isCompleted}
        checked={isCompleted}
      />
      {todo.title}: {todo.description}
    </li>
  );
}

export default Todo;
