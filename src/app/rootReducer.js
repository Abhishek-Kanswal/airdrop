import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/TaskSlice"; 
import ThemeSlice from "./features/ThemeSlice";

const rootReducer = combineReducers({
  task: taskReducer,
  theme: ThemeSlice,
});

export default rootReducer;