
import { axiosWithAuth } from '../authentication/axiosWithAuth';
export * from "./auth";
export const ERROR = 'ERROR';
export const GETTING_START = 'GETTING_START';
export const GET_SUCCESS = 'GET_SUCCESS';



export const POSTING_START = 'POSTING_START';
export const POST_SUCCESS = 'POST_SUCCESS';

export const UPDATING_START = 'UPDATING_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const DELETING_START = 'DELETING_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';


export const getVolunteers = () => dispatch => {
  dispatch({ type: GETTING_START });
  axiosWithAuth()
    .get('https://school-in-cloud-api.herokuapp.com/api/volunteer')
    .then(res => {
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const getToDo = () => dispatch => {
    dispatch({ type: GETTING_START });
    axiosWithAuth()
      .get(`https://school-in-cloud-api.herokuapp.com/api/admin/6/todos`)
      .then(res => {
        dispatch({ type: GET_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }

export const addToDo = data => dispatch => {
  
  dispatch({ type: POSTING_START });
  
  axiosWithAuth()
    .post('https://school-in-cloud-api.herokuapp.com/api/admin/8/todos', data)
    .then(res => {
      
      dispatch({ type: POST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}



export const updateToDo = (data) => dispatch => {
  
  dispatch({ type: UPDATING_START });
  axiosWithAuth()
    .put(`https://school-in-cloud-api.herokuapp.com/api/admin/6/todos/${data.id}`, data)
    .then(res => {
      
      dispatch({ type: UPDATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const deleteTodo = (data) => dispatch => {
  dispatch({ type: DELETING_START });
  
  axiosWithAuth()
    .delete(`https://school-in-cloud-api.herokuapp.com/api/admin/8/todos/${data.id}`,data)
    .then(res => {
      
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

