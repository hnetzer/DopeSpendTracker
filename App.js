/**
 * DopeSpendTracker App
 *
 */

import React, { Component } from 'react';
import PlaidLink from 'react-native-plaid-link-sdk';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";

import reducers from './js/reducers'

import LoginScreen  from './js/login/LoginScreen'

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <LoginScreen />
        </SafeAreaView>
      </Provider>
    );
  }
};


export default App;
