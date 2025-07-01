import { createSlice } from "@reduxjs/toolkit";
import airdropData from "../../components/common/AirdropData";

// Function to load state from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("taskState");
    return savedState ? JSON.parse(savedState) : null;
  } catch (error) {
    console.error("Failed to load state from localStorage", error);
    return null;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    localStorage.setItem("taskState", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to localStorage", error);
  }
};

// Load stored state OR set default
const initialState = {
  value:
    loadState() ||
    Object.fromEntries(
      Object.entries(airdropData).map(([key]) => [key, false]) // Default all tasks to false
    ),
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskTrue: (state, action) => {
      const taskId = action.payload;
      if (state.value[taskId] !== undefined) {
        state.value[taskId] = true; // Mark the task as done
        saveState(state.value); // Save updated state to localStorage
        console.log("Updated TaskSlice State:", state.value);
      }
    },

    setTaskReset: (state) => {
      Object.keys(state.value).forEach((key) => {
        state.value[key] = false; // Reset all tasks to false
      });
      saveState(state.value); // Save reset state to localStorage
      console.log("TaskSlice State Reset:", state.value);
    },
  },
});

export const { setTaskTrue, setTaskReset } = TaskSlice.actions;
export default TaskSlice.reducer;
