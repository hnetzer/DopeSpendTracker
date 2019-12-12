/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View } from 'react-native';

import { getAccessToken } from 'js/actions';

const LinkPlaidScreen = (props) => {
  const onSuccess = (metadata) => {
    const linkData = {
      accounts: metadata.accounts,
      institution: metadata.institution,
      publicToken: metadata.public_token
    }
    props.dispatch(getAccessToken(linkData))

    // TODO: Maybe we should wait for a successfull response here?

    props.navigation.navigate('SelectAccounts')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PlaidLink
        title='Link Financial Accounts'
        publicKey='38164201fbd7637a405a30149427cf'
        clientName='Spend Tracker'
        env='sandbox'
        onSuccess={onSuccess}
        onExit={e => console.log('exit: ', e)}
        product={['transactions']}
        language='en'
        countryCodes={['US']}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    institutions: state.plaid.institutions,
  }
}

module.exports = connect(mapStateToProps)(LinkPlaidScreen);
