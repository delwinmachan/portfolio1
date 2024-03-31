import { configureStore } from "@reduxjs/toolkit";
import slices from "./counterSlice"; // Assuming the above code is in counterSlice.js

const store = configureStore({
  reducer: {
    menu: slices.menuReducer,
    theme: slices.themeReducer,
  },
});

export default store;
