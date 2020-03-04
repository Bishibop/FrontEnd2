import axios from "axios";

export function getToken() {
	return localStorage.getItem("token")
}

export default function() { 
  return axios.create({
  baseURL: "https://school-in-cloud-api.herokuapp.com/",
  headers: {
    Authorization: getToken()
  },
  responseType: "json"
})
}
