import React  from 'react';
import API from '../utils/API'

const api = API();

function Todo({ todo, todos, setTodos }) {

  function updateTodo() {
    console.log('updating todo on backend', todo.id);
    api.put(`/api/admin/${todo.admin_id}/todos`, {
      id: todo.id,
      is_completed: !todo.is_completed
    }).then(res => {
      console.log('todo updated: ', res.data);
    });
  }

  function handleChange(event) {
    // Is there a way to do this without changing the whole todo list?
    // Just changing an individual todo?
    console.log('handling the checkbox chang');
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        let newTodo = {...todo};
        newTodo.is_completed = !todo.is_completed;
        return newTodo;
      } else {
        return el;
      }
    }));
    updateTodo();
  }

  return (
    <li>
      <input
        type='checkbox'
        onChange={handleChange}
        value={todo.is_completed}
        checked={todo.is_completed}
      />
      {todo.title}: {todo.description}
    </li>
  );
}

export default Todo;
