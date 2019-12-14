/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from 'react';
import { connect } from "react-redux";
import { View, Text } from 'react-native';

import { getAccessToken } from 'js/actions';

const LinkPlaidScreen = (props) => {
  if(props.accounts.length > 1) {
    props.navigation.navigate('Annotate')
  } else {
    props.navigation.navigate('AccountLink')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    accounts: state.plaid.accounts,
  }
}

module.exports = connect(mapStateToProps)(LinkPlaidScreen);
