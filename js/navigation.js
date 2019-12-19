/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState} from 'react';

// Navigation
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from 'js/screens/LoginScreen';
import LinkPlaidScreen from 'js/screens/LinkPlaidScreen';
import SelectAccountsScreen from 'js/screens/SelectAccountsScreen';
import AnnotationScreen from 'js/screens/AnnotationScreen';
import LoadingScreen from 'js/screens/LoadingScreen';

const AccountLinkStack = createStackNavigator({
  LinkPlaid: {
    screen: LinkPlaidScreen,
  },
  SelectAccounts: {
    screen: SelectAccountsScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Annotation: {
    screen: AnnotationScreen,
  },
});

const AnnotateStack = createStackNavigator({
  Annotation: {
    screen: AnnotationScreen,
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      AccountLink: AccountLinkStack,
      Annotate: AnnotateStack,
    },
    // This should be set to Loading
    {
      initialRouteName: 'AccountLink',
    },
  ),
);
