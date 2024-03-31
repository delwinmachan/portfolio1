// App.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./MainScreen.module.scss";
import ThemeToggle from "../components/LightMode";
import SideMenu from "../components/SideMenu";
import MenuScreen from "./MenuScreens";

const MainScreen = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
  },[theme])
  return (
    <div className={theme === "light" ? `${styles.lightTheme}` :`${styles.darkTheme}` }>
      <ThemeToggle />
      <SideMenu />
      <MenuScreen />
    </div>
  );
};

export default MainScreen;
