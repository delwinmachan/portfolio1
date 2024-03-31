import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/counterSlice.js";
// Import the action to toggle the theme

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      style={{ position: "fixed", top: 0, right: 0 }}
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};

export default ThemeToggle;
