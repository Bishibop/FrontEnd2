import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../utils/API'
import { hasToken } from "../utils/token";

const api = API();

function Volunteer(props) {
  if (!hasToken) {
    return <Redirect to="/Register" />;
  }
  
  const [volunteer, setVolunteer] = useState({
    email: '',
    lastName: '',
    firstName: '',
    country: '',
    formattedAvailability: ''
  });

  useEffect(() => {
    api.get(`/api/volunteer/${props.match.params.id}`).then(res => {
      let volunteerData = res.data;
      volunteerData.formattedAvailability = volunteerData.availability
        .split(',')
        .map(time => time + 'pm')
        .join(', ');
      setVolunteer(volunteerData);
    });
  }, [])

  return (
    <>
      <h2>Volunteer</h2>
      <p>Email: {volunteer.email}</p>
      <p>Name: {volunteer.firstName} {volunteer.lastName}</p>
      <p>Country: {volunteer.country}</p>
      <p>Availability: {volunteer.formattedAvailability}</p>
    </>
  );
}

export default Volunteer;