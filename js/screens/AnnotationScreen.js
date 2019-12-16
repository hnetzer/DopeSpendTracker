/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { useState } from 'react';
import { connect } from "react-redux";
import { Card, CardSection, Divider, TransactionHeader } from 'js/components';

import { View, Text, StyleSheet, FlatList } from 'react-native';

const AnnotationScreen = (props) => {

  const renderTransaction = (t) => {
    return (
      <Card>
        <CardSection>
          <TransactionHeader date={t.date} title={t.name} />
        </CardSection>
        <Divider />
        <CardSection title="Category" />
        <Divider />
        <CardSection title="tags" />
        <CardSection title="memo" />
      </Card>
    )
  }

  return (<View style={styles.container}>
    <FlatList
      style={styles.flatList}
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
    backgroundColor: "#F1F5FF",
  },
  flatList: {

  }
});

function mapStateToProps(state) {
  return {
    transactions: state.plaid.transactions,
  }
}

export default connect(mapStateToProps)(AnnotationScreen);
