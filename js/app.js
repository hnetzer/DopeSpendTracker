/**
 * DopeSpendTracker App
 *
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import store from 'js/store'

// Screens & Navigation
import AppContainer from 'js/navigation'

const App = () => {
  return (
    <Provider store={ store }>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </Provider>
  );
};


export default App;
