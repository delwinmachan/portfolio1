// src/App.js
import React from "react";
import SideMenu from "./components/SideMenu";
import ProfileDetails from "./components/ProfileDetails";
import styles from "./App.module.scss";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store.js";
import MenuScreen from "./screen/MenuScreens.js";
import ThemeToggle from "./components/LightMode.js";
import MainScreen from "./screen/MainScreens.js";
const App = () => {
  return (
    <Provider store={store}>
      <div className={styles["app-container"]}>
        <MainScreen></MainScreen>
      </div>
    </Provider>
  );
};

export default App;
