import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

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
  const [toDoList, setToDoList] = useState([]);
  

  const initialState = {
    id: '',
    title: '',
    description: '',
    is_completed: '',
    created_by: '',
    volunteer_id: ''
  }
  const [memberToEdit, setMemberToEdit] =useState(initialState)
    
  const [newToDo, setNewToDo] = useState(initialState)

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

    useEffect(() => {
         
        if (memberToEdit.name){
                       
            setNewFriend(memberToEdit);
        }  
        
        },[memberToEdit]);

        
    const handleChange = (e) => {
      if (!memberToEdit.name){
      setNewToDo({
          ...newToDo,
          [e.target.name]: e.target.value,id:max_id+1
      })}
      else {
      setNewToDo({
        ...newToDo,
        [e.target.name]: e.target.value
      })
        }
      }
    const editMember = (e,friend )=> {
      e.preventDefault();
        
        const newArray = props.friends.filter(member => {
          return member.id === friend.id;
        });
        
        setMemberToEdit(newArray[0]);
    }
    
    
    const delMember = (e, friend) => {
           e.preventDefault();
          
            props.deleteFriend(friend);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        
        if (memberToEdit.name) {
          
            props.updateFriend(newFriend)
            
            setMemberToEdit({name:"",age:"",email:""});
      
          }
          else {
               props.addFriend(newFriend)
         
          }
          // clears out the input values
          setNewFriend({name:"",age:"",email:"", id:null});
    } 
      
  
  console.log("ToDoList in  AdminVolunteer")
  console.log(toDoList)
  console.log("ToDoList in Volunteer Card")
  console.log(toDoList)
  let max_id = Math.max(...toDoList.id);
  let filteredList = toDoList.filter(toDo =>(toDo.volunteer_id ===
    volunteer.volunteer_id ))
  console.log ("filteredList");
   console.log(filteredList);
   console.log("maxId:"+ max_id);
  
  useEffect(() => {
         
    if (memberToEdit.name){
                   
        setNewFriend(memberToEdit);
    }  
    
    },[memberToEdit]);

    
const handleChange = (e) => {
  if (!memberToEdit.name){
  setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,id:props.friends.length+1
  })}
  else {
  setNewFriend({
    ...newFriend,
    [e.target.name]: e.target.value
  })
    }
  }
const editMember = (e,friend )=> {
  e.preventDefault();
    
    const newArray = props.friends.filter(member => {
      return member.id === friend.id;
    });
    
    setMemberToEdit(newArray[0]);
}


const delMember = (e, friend) => {
       e.preventDefault();
      
        props.deleteFriend(friend);
}

const handleSubmit = (e) => {
    
    e.preventDefault();

    
    if (memberToEdit.name) {
      
        props.updateFriend(newFriend)
        
        setMemberToEdit({name:"",age:"",email:""});
  
      }
      else {
           props.addFriend(newFriend)
     
      }
      // clears out the input values
      setNewFriend({name:"",age:"",email:"", id:null});
}
  if (!hasToken) {
    return <Redirect to="/Register" />;
  }

  return (
    <div className='volunteer-container'>
      <h2>Volunteer: {volunteer.firstName} {volunteer.lastName}</h2>
      
      <h2>ToDoList</h2>
      <ul>
        {filteredList.map(todo => (
          <li key={todo.id}>
            {todo.title}: {todo.description}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="text"
          name="title"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="title..."
        />
        <input 
          type="text"
          name="Description"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="age..."
        />
        
        
        <button type="submit">Add a ToDo</button>
      </form>
      

    </div>
  );
}

export default Volunteer;