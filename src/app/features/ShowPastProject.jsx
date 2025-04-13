import { createSlice } from "@reduxjs/toolkit";


const showPastProjectSlice = createSlice({
    name: "showPastProject",
    initialState: {
        value: false,
    },
    reducers: {
        toggleShowPastProject: (state) => {
            state.value = !state.value;
        },
    }
})

export default showPastProjectSlice.reducer;
export const { toggleShowPastProject } = showPastProjectSlice.actions;