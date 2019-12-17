/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Receipt} from 'js/components';

import {View, Text, StyleSheet, FlatList} from 'react-native';

const AnnotationScreen = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={props.transactions}
        renderItem={({item, index}) => <Receipt transaction={item} />}
        keyExtractor={transaction => transaction.transaction_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 64,
    alignItems: 'center',
    backgroundColor: '#F1F5FF',
  },
  flatList: {},
});

function mapStateToProps(state) {
  return {
    transactions: state.plaid.transactions,
  };
}

export default connect(mapStateToProps)(AnnotationScreen);
