// src/components/SideMenu.js
import React, { useState } from "react";
import styles from "./SideMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/counterSlice";


const SideMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(setActivePage(item));
  };

  return (
    <div className={styles.sideMenu} id="side">
      {/* Add your menu items with icons here */}
      <ul>
        <li
          className={selectedItem === "Home" ? styles.active : ""}
          onClick={() => handleItemClick("Home")}
        >
          <FontAwesomeIcon
            icon={faHome}
            size='sm'
            style={{ marginRight: "8px" }}
          />{" "}
          Home
        </li>
        <li
          className={selectedItem === "About" ? styles.active : ""}
          onClick={() => handleItemClick("About")}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            size='sm'
            style={{ marginRight: "8px" }}
          />{" "}
          About
        </li>
        <li
          className={selectedItem === "Projects" ? styles.active : ""}
          onClick={() => handleItemClick("Projects")}
        >
          <FontAwesomeIcon
            icon={faSheetPlastic}
            size='sm'
            style={{ marginRight: "8px" }}
          />{" "}
          Projects
        </li> 
      </ul>
    </div>
  );
};

export default SideMenu;
