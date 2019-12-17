/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Subtitle} from '../atoms';
import {basePadding} from 'js/style';

const CardSection = ({title, children}) => {
  const renderTitle = () => {
    if (!title) {
      return null;
    }
    return <Subtitle>{title}</Subtitle>;
  };

  return (
    <View style={styles.container}>
      {renderTitle()}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: basePadding,
  },
});

export default CardSection;
