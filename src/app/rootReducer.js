import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/TaskSlice"; 
import ShowPastProject from "./features/ShowPastProject";

const rootReducer = combineReducers({
  task: taskReducer,
  showPastProject: ShowPastProject, // Fix the key to match the slice name
});

export default rootReducer;