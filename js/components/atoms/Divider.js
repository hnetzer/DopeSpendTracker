/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {View} from 'react-native';

const Divider = ({height = 1}) => {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: height,
        backgroundColor: 'rgba(0,0,0,0.1)',
      }}
    />
  );
};

export default Divider;
