import { combineReducers } from "redux";
import employeeReducer from "./employeeReducers/employeeReducer.js";

const rootReducer = combineReducers({
    employee: employeeReducer
});

export default rootReducer;