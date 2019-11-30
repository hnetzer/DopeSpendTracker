/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { Component } from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View } from 'react-native';

import { getAccessToken } from 'js/actions';

class LoginScreen extends Component {

  onSuccess = (metadata) => {
    console.log(metadata)
    const public_token = metadata.public_token
    console.log("public_token: ", public_token)
    this.props.dispatch(getAccessToken(public_token))
  }


  render() {
    return (
      <View>
        <PlaidLink
          title='Link Financial Accounts'
          publicKey='38164201fbd7637a405a30149427cf'
          clientName='Spend Tracker'
          env='sandbox'
          onSuccess={this.onSuccess}
          onExit={e => console.log('exit: ', e)}
          product={['transactions']}
          language='en'
          countryCodes={['US']}
        />
      </View>
    );
  }
};



module.exports = connect()(LoginScreen);
