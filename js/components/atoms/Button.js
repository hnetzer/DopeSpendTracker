/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {

  const getContainerStyle = () => {
    if(props.disabled) {
      return [styles.container, styles.disabled]
    } else {
      return [styles.container, styles.enabled]
    }
  }

  const getTextStyles = () => {

  }

  return (<TouchableOpacity onPress={props.onPress} style={getContainerStyle()}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  disabled: {
    backgroundColor: 'gray'
  },
  enabled: {
    backgroundColor: '#4169E1'
  },
  title: {
    fontSize: 24,
    color: 'white'
  }
});

export default Button;
