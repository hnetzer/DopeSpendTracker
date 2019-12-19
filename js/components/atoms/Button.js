/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, border, text} from '../../style';

const Button = props => {
  const getContainerStyle = () => {
    if (props.disabled) {
      return [styles.container, styles.disabled];
    } else {
      return [styles.container, styles.enabled];
    }
  };

  const getTextStyles = () => {};

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={getContainerStyle()}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: border.radius,
  },
  disabled: {
    backgroundColor: colors.accent_4,
  },
  enabled: {
    backgroundColor: colors.accent_7,
  },
  title: {
    fontSize: text.big,
    color: 'white',
  },
});

export default Button;
