/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AccountListItem = props => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      props.onSelect(props.account);
    } else {
      props.onUnselect(props.account);
    }
  }, [selected]);

  const getContainerStyle = () => {
    if (selected) {
      return [styles.container, styles.selected];
    }
    return styles.container;
  };

  return (
    <TouchableOpacity
      style={getContainerStyle()}
      onPress={() => setSelected(!selected)}>
      <Text style={styles.name}>{props.account.name}</Text>
      <Text style={styles.balance}>${props.account.balances.current}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selected: {
    backgroundColor: '#3399FF',
  },
  balance: {
    color: 'green',
    fontSize: 20,
  },
  name: {
    fontSize: 20,
  },
});

export default AccountListItem;
