/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from 'react';
import { colors, dimensions, border, basePadding } from 'js/style'

import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (<View style={styles.card}>
    {props.children}
  </View>);
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    width: dimensions.screenWidth - basePadding * 2,
    height: (dimensions.screenHeight / 1.8) * 0.8,
    borderRadius: border.radius,
    shadowColor: colors.grey,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    padding: basePadding / 2
  }
});

export default Card;
