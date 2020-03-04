import React from "react";
import { Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const Admin = () => {
  if (hasToken) {
      console.log("in Admin");
      return (
      <div>Hello from admin</div>
      //   useEffect(() => {
//     axiosWithAuth()
//         .get(``)
//         .then(res => {
//             setColorList(res.data);
//         })
//         .catch(err => console.log(err.response));
// }, []);
      )
  }
  else {
    return <Redirect to="/signup" />;
  }
};
export default Admin;