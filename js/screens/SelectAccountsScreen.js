/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { AccountListItem } from 'js/components'

import { getAccessToken } from 'js/actions';

const SelectAccountsScreen = (props) => {

  const onSelectAccount = (account) => {
    console.log("selected account!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Accounts</Text>
      <FlatList
        style={{ width: '100%' }}
        data={props.accounts}
        renderItem={({item, index}) => <AccountListItem account={item} onSelect={onSelectAccount} />}
        keyExtractor={(item, index) => index} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    paddingBottom: 16,
  },
});

function mapStateToProps(state) {
  return {
    institutions: state.plaid.institutions,
    accounts: state.plaid.accounts,
    transactions: state.plaid.transactions
  }
}

export default connect(mapStateToProps)(SelectAccountsScreen);
