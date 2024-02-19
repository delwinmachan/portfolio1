// src/components/SideMenu.js
import React, { useState } from 'react';
import styles from './SideMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../redux/counterSlice.js';

const SideMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.menu.activePage);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(setActivePage(item));
  };

  return (
    <div className={styles.sideMenu}>
      {/* Add your menu items with icons here */}
      <ul>
        <li
          className={selectedItem === 'Home' ? styles.active : ''}
          onClick={() => handleItemClick('Home')}
        >
          <FontAwesomeIcon icon={faHome} size="sm" style={{ marginRight: '8px' }} /> Home
        </li>
        <li
          className={selectedItem === 'About' ? styles.active : ''}
          onClick={() => handleItemClick('About')}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="sm" style={{ marginRight: '8px' }} /> About
        </li>
        <li
          className={selectedItem === 'Contact' ? styles.active : ''}
          onClick={() => handleItemClick('Contact')}
        >
          <FontAwesomeIcon icon={faEnvelope} size="sm" style={{ marginRight: '8px' }} /> Contact
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
