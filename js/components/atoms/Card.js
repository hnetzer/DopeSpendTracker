/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {base, colors, dimensions, border, basePadding} from 'js/style';

import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.background,
    width: dimensions.width - base.padding * 2,
    height: (dimensions.height / 1.8) * 0.8,
    borderRadius: border.radius,
    shadowColor: colors.grey,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
    // TODO: remove marginBottom after adding proper layout
    marginBottom: base.margin,
  },
});

export default Card;
