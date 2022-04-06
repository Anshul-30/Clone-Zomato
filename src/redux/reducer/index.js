import React from "react";
import { combineReducers} from 'redux'
import userStatus from "./ContinueLogin";

const rootReducer = combineReducers(
    {
       userStatus
       
    }
)
export default rootReducer