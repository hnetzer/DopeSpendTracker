/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { useState } from 'react';
import { connect } from "react-redux";
import { Card, CardHeader } from 'js/components';

import { View, Text, StyleSheet, FlatList } from 'react-native';

const AnnotationScreen = (props) => {

  const renderTransaction = (t) => {
    var date = new Date(t.date)
    return (
      <Card>
        <CardHeader metatitle={date.toLocaleDateString('en-US')} title={t.name} />
      </Card>
    )
  }

  return (<View style={styles.container}>
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
  },
});

function mapStateToProps(state) {
  return {
    transactions: state.plaid.transactions,
  }
}

export default connect(mapStateToProps)(AnnotationScreen);
