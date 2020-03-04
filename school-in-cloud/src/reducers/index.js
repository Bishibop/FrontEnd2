import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer as auth } from "./Auth";


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history)
    
});

export default createRootReducer
