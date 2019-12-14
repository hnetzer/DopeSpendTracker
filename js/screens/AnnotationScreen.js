/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { useState } from 'react';
import { connect } from "react-redux";

import { View, Text, StyleSheet, FlatList } from 'react-native';

const AnnotationScreen = (props) => {

  const renderTransaction = (t) => {
    var date = new Date(t.date)
    return (<View style={styles.transaction}>
      <Text style={styles.name}>{t.name}</Text>
      <Text style={styles.date}>{date.toLocaleDateString('en-US')}</Text>
    </View>);
  }

  return (<View style={styles.container}>
    <Text style={styles.header}>[annotation screen]</Text>
    <FlatList
      style={{ width: '100%', height: '80%' }}
      data={props.transactions}
      renderItem={({item, index}) => renderTransaction(item)}
      keyExtractor={(transaction) => transaction.transaction_id} />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 64,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 24,
    paddingBottom: 16,
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    color: 'blue'
  },
});

function mapStateToProps(state) {
  console.log(state)
  return {
    transactions: state.plaid.transactions,
  }
}

export default connect(mapStateToProps)(AnnotationScreen);
