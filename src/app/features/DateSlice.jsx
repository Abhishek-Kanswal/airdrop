import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch date from API
const fetchDate = createAsyncThunk("date/fetchDate", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json()
});

const initialState = {
  tasks: {},
  status: "idle",
  error: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},

  extraReducers : (builder) => {
    builder
    .addCase(fetchDate.pending, (state) => {
      state.status = "loading"
    })

    .addCase(fetchDate.fulfilled, (state, action)=> {
      state.status = "succeeded"
      state.tasks = action.payload.reduce((acc , currentValue)=> {
        acc[currentValue.id] = currentValue.completed
        return acc
      },{})
    })

    .addCase(fetchDate.rejected, (state, action)=> {
      state.status = "failed"
      state.error = action.error.message
    })
  }
});

export default dateSlice.reducer;
