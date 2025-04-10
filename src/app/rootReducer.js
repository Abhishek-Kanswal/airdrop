import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/TaskSlice"; // Import your TaskSlice reducer

const rootReducer = combineReducers({
  task: taskReducer,
})

export default rootReducer;