/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Title, Subtitle } from '../atoms'

import dateformat from 'dateformat';

const TransactionHeader = ({ title, date}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6 }}>
        <Subtitle>{dateformat(date, "mmm dd, yyyy")}</Subtitle>
        <Title>{title}</Title>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TransactionHeader;
