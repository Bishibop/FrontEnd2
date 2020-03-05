import { push } from "connected-react-router";
import API from "../utils/API";

export const LOGOUT_USER='LOGOUT_USER'

export function logoutUser (history) {
  return dispatch =>{
    dispatch({type: LOGOUT_USER});
    localStorage.removeItem('token')
    history.push('/login')
  }
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function authenticateUser (userData , props) {

  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });

  API().post("https://school-in-cloud-api.herokuapp.com/api/auth/login", userData)
    .then(response => {
      console.log("response")
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      
         
      
      dispatch({type: LOGIN_SUCCESS, payload: response.data})
      if (response.data.user.role ==="admin") {
        dispatch(push("/admin"));
        
      }
      else if (response.data.user.role ==="student") {
        dispatch(push("/student"));
      }
      else {
        dispatch(push("/volunteer"));
      }
    })
    .catch(error =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      })
    );
}};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = (userData) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  API().post("https://school-in-cloud-api.herokuapp.com/api/auth/register", userData)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      console.log(response.data);
      dispatch(push("/login"));
    })
    .catch(error =>
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data.message
      })
    );
};

const ID = localStorage.getItem("userID");



