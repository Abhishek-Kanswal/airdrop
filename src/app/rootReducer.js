import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/TaskSlice"; 
import ThemeSlice from "./features/ThemeSlice";
import airdropSlice from "./features/AirdropSlice";

const rootReducer = combineReducers({
  task: taskReducer,
  theme: ThemeSlice,
  airdrop: airdropSlice,          
});

export default rootReducer;