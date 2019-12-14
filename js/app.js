/**
 * DopeSpendTracker App
 *
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { connect } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'js/store'

// Screens & Navigation
import AppContainer from 'js/navigation'

const App = () => {
  return (
    <Provider store={ store }>
      <StatusBar barStyle="dark-content" />
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};


export default App;
