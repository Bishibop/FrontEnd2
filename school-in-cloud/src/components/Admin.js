import React from "react";
// import { Redirect } from "react-router-dom";
// import { hasToken } from "../utils/token";
import { useEffect, useState } from "react";
import API from '../utils/API'
import styled,{keyframes} from 'styled-components';
import VolunteerCard from './VolunteerCard';




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

const SearchName = styled.div`
width: 180px;
height: 28px;
margin-top:4%
margin-left:2%;
padding:10px;

`

const animationHeader = keyframes`

from {
  width:0;
}         
to {
  width:20ch;
}  
  
`


const PageHeader = styled.h1`

 
  color: lightgray;
  font-size:3rem;
  text-align: center;
  
  text-shadow: 3px 3px 3px darkblue,
                3px 3px 3px darkblue, 
                3px 3px 3px  darkblue;
  
  animation:${animationHeader}   2s steps(18) ;
  overflow:hidden
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size:1.4rem;
    margin-top:40px;
  }
  
` 



const Header = styled.div`
display:flex;
justify-content:space-evenly;

`

const LoadingError=styled.p`
margin:100px
`


export default function Admin() {
  const [volList, setVolList] = useState(
    [{
      volunteer_id: '',
      user_id: '',
      email: '',
      firstName: '',
      lastName: '',
      availability: '',
      country: "USA"
          }]
  );
  
  const api = API();
   const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    
    api.get('/api/volunteer')
      .then(res =>{
        console.log("hello res.data:");
        console.log(res.data);
        setVolList(res.data)
        console.log (volList);})
      .catch(err => console.log('Error: ', err));
    
      
      
      
      
      }, []);
  
      
        
         
         
      
   if (!volList) {
     return <LoadingError>Loading data...</LoadingError>
   }
   
       console.log("VolListArray:");
       console.log (volList);
       console.log("TodoListArray");
       console.log(toDoList);

      
  

   return (
    <Container>
      <Header>
         <PageHeader>Administer Page</PageHeader>
        
      </Header>
  
          
      <ListCards>        
         {volList.map((vol) => 
            
            <VolunteerCard vol={vol} key={vol.volunteer_id}/>
         
           )} 
        
       </ListCards> 
     
     </Container>
   );
 }

