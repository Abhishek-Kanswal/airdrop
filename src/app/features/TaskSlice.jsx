import { createSlice } from "@reduxjs/toolkit";
import airdropData from "../../components/common/AirdropData";

// Add this check temporarily at the top of your slice file or main App
if (localStorage.getItem("taskState")) {
  try {
    const parsed = JSON.parse(localStorage.getItem("taskState"));
    const isOldFormat = Object.values(parsed)[0] === true || false;
    if (isOldFormat) {
      localStorage.removeItem("taskState");
      console.log("Old localStorage format detected — clearing it.");
    }
  } catch (e) {
    localStorage.removeItem("taskState");
    console.log("Corrupted taskState — removed.");
  }
}

const loadState = () => {
  try {
    const savedState = localStorage.getItem("taskState");
    return savedState ? JSON.parse(savedState) : null;
  } catch (error) {
    console.error("Failed to load state from localStorage", error);
    return null;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("taskState", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to localStorage", error);
  }
};

const initialState = {
  value:
    loadState() ||
    Object.fromEntries(
      Object.entries(airdropData).map(([key]) => [
        key,
        { status: false, date: "" },
      ])
    ),
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskTrue: (state, action) => {
      const taskId = action.payload;
      if (state.value[taskId]) {
        state.value[taskId].status = true;
        state.value[taskId].date = new Date().toISOString().split("T")[0];
        saveState(state.value);
      } else {
        console.log("Before saving:", JSON.parse(JSON.stringify(state.value)));
      }
    },

    dailyTaskReset: (state) => {
      let date = new Date().toISOString().split("T")[0];
      let hasChanged = false;

      Object.entries(state.value).forEach(([key, value]) => {
        if (value.date && date !== value.date) {
          state.value[key].status = false;
          state.value[key].date = date;
          hasChanged = true;
        }
      });

      if (hasChanged) {
        saveState(state.value);
      }
    },
  },
});

export const { setTaskTrue, dailyTaskReset } = TaskSlice.actions;
export default TaskSlice.reducer;