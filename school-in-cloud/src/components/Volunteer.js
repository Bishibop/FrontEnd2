import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";
import Todos from "./Todos"

const api = API();

function Volunteer(props) {
  
  const [volunteer, setVolunteer] = useState({
    volunteer_id: '',
    email: '',
    lastName: '',
    firstName: '',
    country: '',
    availability: ''
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.get(`/api/volunteer/${props.match.params.id}`).then(res => {
      setVolunteer(res.data);
    });
    api.get('/api/todos').then(res => {
      // setTodos(res.data.filter(todo => {
      //   return todo.volunteer_id === volunteer.volunteer_id;
      // }));
      setTodos(res.data);
      console.log('todos: ', res.data);
    });
  }, []);

  if (!hasToken) {
    return <Redirect to="/Register" />;
  }

  return (
    <div className='volunteer-container'>
      <h2>Volunteer: {volunteer.firstName} {volunteer.lastName}</h2>
      <h3>Profile:</h3>
      <p>Email: {volunteer.email}</p>
      <p>Country: {volunteer.country}</p>
      <p>Availability: {volunteer.availability}</p>
      <Todos things={todos} />
    </div>
  );
}

export default Volunteer;
