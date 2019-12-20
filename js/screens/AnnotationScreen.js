/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState} from 'react';
import {connect} from 'react-redux';

import {base, colors} from '../style';

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
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  flatList: {
    backgroundColor: colors.background,
    padding: base.padding,
  },
});

function mapStateToProps(state) {
  return {
    transactions: state.plaid.transactions,
  };
}

export default connect(mapStateToProps)(AnnotationScreen);
