import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const api = API();

function Volunteer(props) {
  
  const [volunteer, setVolunteer] = useState({
    volunteer_id: '',
    lastName: '',
    firstName: '',
    
  });
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    api.get(`/api/volunteer/${props.match.params.id}`).then(res => {
      setVolunteer(res.data);
      console.log("res.data in AdminVolunteer")
      console.log(res.data);
    })
    .catch(error => console.log('Error getting volunteer data: ', error));
    api.get('/api/todos')
    .then(res =>{
        console.log("todoResult in AdminVolunteer")
        console.log(res.data);
        setToDoList(res.data);
    })
        
    
    .catch(error => console.log('Error getting ToDos data: ', error));
    
   }, []);

   
      
  
  console.log("ToDoList in  AdminVolunteer")
  console.log(toDoList)
  console.log("ToDoList in Volunteer Card")
  console.log(toDoList)
  let filteredList = toDoList.filter(toDo =>(toDo.volunteer_id ===
    volunteer.volunteer_id ))
  console.log ("filteredList");
   console.log(filteredList);
  //   api.get('/api/toDoList').then(res => {
  //     settoDoList(res.data.filter(todo => {
  //       return todo.volunteer_id === props.vol.volunteer_id;
  //     }));
  //     //settoDoList(res.data);
  //     console.log('toDoList: ', res.data);
  //   });
  // }, []);
  // console.log("toDoList");
  // console.log(toDoList);

  if (!hasToken) {
    return <Redirect to="/Register" />;
  }

  return (
    <div className='volunteer-container'>
      <h2>Volunteer: {volunteer.firstName} {volunteer.lastName}</h2>
      <button>Add a TodoList</button>
      <h2>ToDoList</h2>
      <ul>
        {filteredList.map(todo => (
          <li key={todo.id}>
            {todo.title}: {todo.description}
          </li>
        ))}
      </ul>
      

    </div>
  );
}

export default Volunteer;