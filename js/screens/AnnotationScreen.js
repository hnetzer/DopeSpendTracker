/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React, { useState } from 'react';
import { connect } from "react-redux";

import { View, Text, StyleSheet } from 'react-native';

const AnnotationScreen = (props) => {
  return (<View style={styles.container}>
    <Text styles={styles.header}>[annotation screen]</Text>
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
});

export default AnnotationScreen;
