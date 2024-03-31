// App.js
import React from 'react';
import { useSelector } from 'react-redux';

import ProfileDetails from '../components/ProfileDetails';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';

import styles from "./MenuScreen.module.scss";
const MenuScreen = () => {
    const activePage = useSelector((state) => state.menu.activePage);

  return (
    <div  className={styles.menuScreenContainer}>
    
      {activePage === 'Home' && <ProfileDetails />}
      {activePage === 'About' && <About />}
      {activePage === 'Projects' && <Projects />}
      {/* {activePage === 'Contacts' && <ContactInfo />} */}
    </div>
  );
};

export default MenuScreen;
