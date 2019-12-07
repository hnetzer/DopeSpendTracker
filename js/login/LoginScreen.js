/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { Component } from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View, Text, TouchableOpacity } from 'react-native';

import { getAccessToken } from 'js/actions';

class LoginScreen extends Component {

  onSuccess = (metadata) => {
    const linkData = {
      accounts: metadata.accounts,
      institution: metadata.institution,
      publicToken: metadata.public_token
    }
    this.props.dispatch(getAccessToken(linkData))
  }

  renderAccessToken = () => {
    return this.props.institutions.map(inst => {
      return (<View>
        <Text>{inst.name}</Text>
        <TouchableOpacity><Text>Get Transactions</Text></TouchableOpacity>
      </View>
      )
    })
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
  console.log(state)
  return {
    institutions: state.plaid.institutions,
  }
}

module.exports = connect(mapStateToProps)(LoginScreen);
