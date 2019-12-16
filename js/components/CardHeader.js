/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { colors, fontSizes, opacities } from 'js/style'

const CardHeader = (props) => {
  const renderMetaTitle = () => {
    if(!props.metatitle) { return null; }
    return (
      <Text style={styles.metatitle}>
        {props.metatitle}
      </Text>);
  }

  const renderTitle = () => {
    if(!props.title) { return null; }
    return (
      <Text style={styles.title}>
        {props.title}
      </Text>);
  }

  const renderSubtitle = () => {
    if(!props.subtitle) { return null; }
    return (<Text style={styles.subtitle}>
      {props.subtitle}
    </Text>);
  }

  return (
    <View style={styles.container}>
      {/* Icon stuff was here */}
      <View style={{ flex: 6 }}>
        {renderMetaTitle()}
        {renderTitle()}
        {renderSubtitle()}
      </View>
      {/* Right Content stuff was here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
  },
  metatitle: {
    fontSize: fontSizes.header * 0.6,
    fontWeight: "600",
    paddingBottom: 1,
    textTransform: "uppercase"
  },
  title: {
    fontSize: fontSizes.header,
    fontWeight: "bold",
    color: colors.darkgray
  },
  subtitle: {
    fontSize: fontSizes.header * 0.7,
    color: colors.darkgrey,
    opacity: opacities.faded,
    paddingTop: 1
  }
});

export default CardHeader;
