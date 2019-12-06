/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { Component } from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View, Text } from 'react-native';

import { getAccessToken } from 'js/actions';

class LoginScreen extends Component {

  onSuccess = (metadata) => {
    console.log(metadata)
    const public_token = metadata.public_token
    console.log("public_token: ", public_token)
    this.props.dispatch(getAccessToken(public_token))
  }

  renderAccessToken = () => {
    if(!this.props.accessToken) {
      return null;
    }
    return (<Text>{this.props.accessToken}</Text>)
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
        {this.renderAccessToken()}
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    accessToken: state.config.accessToken,
  }
}

module.exports = connect(mapStateToProps)(LoginScreen);
