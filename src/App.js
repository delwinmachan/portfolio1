// src/App.js
import React from 'react';
import SideMenu from './components/SideMenu';
import ProfileDetails from './components/ProfileDetails';
import styles from './App.module.scss';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import MenuScreen from './screen/MenuScreens.js';
const App = () => {
  return (
    <Provider  store={store}>
    <div className={styles['app-container']}>
      <SideMenu />
      <MenuScreen />
    </div>
    </Provider>
  );
};

export default App;
