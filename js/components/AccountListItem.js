/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, base, text} from '../style';

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
      <Text style={styles.balance}>${props.account.mask}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: base.padding,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.accent_2,
    marginTop: base.margin,
    borderRadius: base.radius,
  },
  selected: {
    backgroundColor: '#3399FF',
  },
  balance: {
    color: 'green',
    fontSize: text.small,
    fontFamily: text.mono,
  },
  name: {
    fontSize: text.default,
    fontWeight: text.heavy,
  },
});

export default AccountListItem;
