import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/TaskSlice"; 
import ShowPastProject from "./features/ShowPastProject";
import ThemeSlice from "./features/ThemeSlice";

const rootReducer = combineReducers({
  task: taskReducer,
  showPastProject: ShowPastProject,
  theme: ThemeSlice,
});

export default rootReducer;