import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CompanyReducer } from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootreducer=combineReducers({company:CompanyReducer})
const compstore=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
export default compstore;