/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors, fontSizes, opacities} from 'js/style';

const Title = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.header,
    fontWeight: 'bold',
    color: colors.darkgrey,
  },
});

export default Title;
