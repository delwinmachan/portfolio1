import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "menu",
  initialState: { activePage: "Home" }, // Ensure initialState is defined
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = counterSlice.actions;
export default counterSlice.reducer;
