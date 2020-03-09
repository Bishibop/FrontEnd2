import React from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import {NavLink } from "react-router-dom";
import {axiosWithAuth} from '../authentication/axiosWithAuth';
import DetailedTodoCard from './VolunteerCard';
import API from '../utils/API'
const api = API();
export default function VolunteerCard(props) {
  // const {volunteer_id} =props.vol;
   const [toDoList, setToDoList] = useState([]);
const DisplayCard = styled.div`

width:300px;
height:100px;
margin: 2% auto
color:white;
border-radius:15px;
border:1px solid darkblue;

background-repeat: no-repeat;
background-size: cover;
`;

const DisplayText = styled.div`

margin-top: 10px;
text-align:left;  
line-height:1.5rem;
padding-left:5%;
`;
const Container = styled.div`
background-color:lightcyan;
`
const ListCards = styled.div`
width: 98%;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin: 2% auto;


`;
useEffect(() => {
  
  
      axiosWithAuth().get("https://school-in-cloud-api.herokuapp.com/api/todos")
      api.get('/api/todos')
    .then(res =>{
        console.log("todoResult")
        console.log(res.data);
        setToDoList(res.data);
        
        console.log('todos: ', res.data);
      
      
      
    })
    
    .catch(error => console.log('Error getting ToDos data: ', error));
    
   }, []);

   
      
  
  console.log("ToDoList in Volunteer Card")
  console.log(toDoList)
  let filteredList = toDoList.filter(toDo =>(toDo.volunteer_id ===
    props.vol.volunteer_id ))
  console.log ("filteredList");
   console.log(filteredList);
  //  if (filteredList.length>0)
  //     console.log("filteredList.length:"+filteredList.length)
  return (
    
   
      
    
      <DisplayCard>
        
        <NavLink to={`/adminVolunteer/${props.vol.volunteer_id}`}>
        <DisplayText>
        <h2> {props.vol.firstName} {props.vol.lastName}  </h2>
        
        </DisplayText>
        </NavLink>
        {/* <ListCards>
        {toDoList.map((list) => 
            
            <li key={list.id}>
            {list.title}: {list.description}
          </li>
         
           )} 
        
          
        </ListCards> */}
      
      
      
      
      </DisplayCard>
          
      
     
     
        
           
               

        
        

        
        
        
        
        
    
    
      
  )
}