import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "menu",
  initialState: { activePage: "Projects" }, // Ensure initialState is defined
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "light", 
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { setActivePage } = counterSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export default { menuReducer:counterSlice.reducer, themeReducer: themeSlice.reducer };

