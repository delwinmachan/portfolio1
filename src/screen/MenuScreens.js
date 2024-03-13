// App.js
import React from 'react';
import { useSelector } from 'react-redux';

import ProfileDetails from '../components/ProfileDetails';
import About from '../components/About';
import Projects from '../components/Projects';

const MenuScreen = () => {
    const activePage = useSelector((state) => state.menu.activePage);

  return (
    <>
      {/* Conditional rendering based on the selected menu item */}
      {activePage === 'Home' && <Projects />}
      {activePage === 'About' && <Projects />}
      {activePage === 'Projects' && <Projects />}
    </>
  );
};

export default MenuScreen;
