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
    borderColor: colors.accent_2,
    borderWidth: 1,
    borderRadius: border.radius,
    shadowColor: colors.grey,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    // TODO: remove marginBottom after adding proper layout
    marginBottom: base.margin,
  },
});

export default Card;
