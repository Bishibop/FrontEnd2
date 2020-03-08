import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { hasToken } from '../utils/token';
import API from '../utils/API'

const api = API();

const Student = () => {

  const [volunteers, setVolunteers] = useState([]);
  const [searchQuery, setSearchQuery] = useState();  
  const [searchResults, setSearchResults] = useState([]);  


  useEffect(() => {
    api.get('/api/volunteer/').then(res => {
      console.log('volunteers data: ', res.data);
      setVolunteers(res.data);
      setSearchResults(res.data);
    });
  }, []);

  function handleSubmit(event) {
    setSearchResults(volunteers.filter(volunteer => {
      const searchableFields = volunteer.availability + volunteer.country;
      return searchableFields
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }));
    setSearchQuery('');
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  if (!hasToken) {
    return <Redirect to='/signup' />;
  }

  return (
    <div className='student-container'>
      <h2>Our Volunteers:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Search by country or availability:
            <input
              type='text'
              name='query'
              value={searchQuery}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Search</button>
      </form>
      {searchResults.map(volunteer => (
        <div key={volunteer.user_id} className='volunteer-profile'>
          <p>Name: {volunteer.firstName + ' ' + volunteer.lastName}</p>
          <p>Email: {volunteer.email}</p>
          <p>Availability: {volunteer.availability}</p>
          <p>Country: {volunteer.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
