// App.js
import React from 'react';
import { useSelector } from 'react-redux';

import ProfileDetails from '../components/ProfileDetails';
import About from '../components/About';

const MenuScreen = () => {
    const activePage = useSelector((state) => state.menu.activePage);

  return (
    <>
      {/* Conditional rendering based on the selected menu item */}
      {activePage === 'Home' && <About />}
      {activePage === 'About' && <About />}
    </>
  );
};

export default MenuScreen;
