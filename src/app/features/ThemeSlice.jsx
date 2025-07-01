import { createSlice } from "@reduxjs/toolkit";

// Function to get the initial theme from localStorage or default
const getInitialTheme = () => {
    try {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            document.documentElement.setAttribute("data-theme", storedTheme);
            return storedTheme;
        }
    } catch (error) {
        console.error("Could not access localStorage for theme:", error);
    }
    // Default theme if nothing in localStorage or if localStorage is disabled/errors
    const defaultTheme = "light"; // You can change this to "dark" if you prefer
    document.documentElement.setAttribute("data-theme", defaultTheme);
    return defaultTheme;
};

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: getInitialTheme(),
    },
    reducers: {
        toggleTheme: (state) => { // Renamed action
            state.value = state.value === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", state.value);
            try {
                localStorage.setItem("theme", state.value);
            } catch (error) {
                console.error("Could not save theme to localStorage:", error);
            }
         }
    }
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions; // Export corrected action name