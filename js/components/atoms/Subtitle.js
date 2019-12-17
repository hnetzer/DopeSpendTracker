/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors, fontSizes, opacities} from 'js/style';

const Subtitle = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.header * 0.6,
    fontWeight: '600',
    paddingBottom: 1,
    textTransform: 'uppercase',
    color: colors.grey,
  },
});

export default Subtitle;
