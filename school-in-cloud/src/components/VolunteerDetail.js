import React,{ useEffect, useState } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
} from "./VolunteerDetailCard";
import {axiosWithAuth} from '../authentication/axiosWithAuth';

function VolunteerDetail(props) {
  
  //const [toDoList, setToDoList] = useState([]);
  
  // useEffect(() => {
  //   const id = Number(props.match.params.volunteer_id);
  
  //   axiosWithAuth().get("https://school-in-cloud-api.herokuapp.com/api/todos")
  // .then(result =>{
  //   setToDoList(result.data)
    
  //   console.log("todoList")
  //   console.log(result.data);
  // })
  
  // .catch(error => console.log('Error getting data: ', error));
  
  // }, [props.match.params.id]);

  
  // console.log(toDoList);
  // let filteredList = toDoList.filter(toDo =>(Number(toDo.volunteer_id) ===
  //   props.match.params.id ))
  // console.log ("filteredList");
  // console.log(filteredList);


  
  return (
    <div class="test">
      <h2>hello lkdlfdlfklf</h2>
     
     </div> 
  );
}

export default VolunteerDetail;

{/* <CardWrapper>
        <CardHeader>
          <CardHeading>To Do Items</CardHeading>
        </CardHeader>
        <CardBody>
         

          

          <CardFieldset>
            <CardOptionsNote></CardOptionsNote>
          </CardFieldset>

          

          <CardFieldset>
            <CardButton type="button">Add ToDoItem</CardButton>
          </CardFieldset>
          
         
        </CardBody>
      </CardWrapper> */}