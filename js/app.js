/**
 * DopeSpendTracker App
 *
 */

import React, {Component} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import {colors} from './style';

// Redux
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'js/store';

// Screens & Navigation
import AppContainer from 'js/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, background: 'transparent'}}>
        <StatusBar barStyle="dark-content" />
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
