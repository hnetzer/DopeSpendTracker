/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { Component } from 'react';
import { connect } from "react-redux";
import PlaidLink from 'react-native-plaid-link-sdk';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { getAccessToken, getTransactions } from 'js/actions';

class LoginScreen extends Component {

  getTransactions = (inst) => {
    console.log('getting transactions for...')
    console.log(inst.name)
    this.props.dispatch(getTransactions(inst.accessToken))
  }

  renderInstitutions = () => {
    return this.props.institutions.map((inst, index) => {
      return (<View style={styles.institution} key={index}>
        <Text style={styles.name}>{inst.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.getTransactions(inst)}>
          <Text style={styles.buttonText}>Get Transactions</Text>
        </TouchableOpacity>
      </View>
      )
    })
  }

  renderAccounts = () => {
    return this.props.accounts.map((account, index) => {
      return (<View style={styles.account} key={index}>
        <Text style={styles.accountName}>{account.name}</Text>
        <Text style={styles.accountBalance}>${account.balances.current}</Text>
      </View>);
    });
  }

  renderTransactions = () => {
    return this.props.transactions.map((t, index) => {
      var date = new Date(t.date)
      return (<View style={styles.account} key={index}>
        <Text style={styles.accountName}>{date.toLocaleDateString('en-US')}</Text>
        <Text style={styles.accountName}>{t.name}</Text>
      </View>);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        {this.renderInstitutions()}
        <Text style={{ fontSize: 20}}>Accounts</Text>
        {this.renderAccounts()}
        <Text style={{ fontSize: 20}}>Transactions</Text>
        {this.renderTransactions()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  institution: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  name: {
    fontSize: 16,
    color: 'red',
    padding: 5
  },
  account: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  accountName: {
    fontSize: 14,
  },
  accountBalance: {
    fontSize: 14,
    color: 'green'
  },
  button: {
    backgroundColor: '#477979',
    padding: 5,
    borderRadius: 1
  },
  buttonText: {
     color: 'white',
     fontSize: 16
  }
});

function mapStateToProps(state) {
  console.log(state)
  return {
    institutions: state.plaid.institutions,
    accounts: state.plaid.accounts,
    transactions: state.plaid.transactions
  }
}

module.exports = connect(mapStateToProps)(LoginScreen);
