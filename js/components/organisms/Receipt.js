/**
 * DopeSpendTracker App
 *
 */
"use strict";

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Title, Subtitle, Card, Divider } from '../atoms'
import { CardSection } from '../molecules'

import dateformat from 'dateformat';

const Receipt = ({ transaction }) => {
  const t = transaction;
  console.log(t)
  return (
    <Card>
      <CardSection>
        <View style={styles.container}>
          <View style={{ flex: 6 }}>
            <Subtitle>{dateformat(t.date, "mmm dd, yyyy")}</Subtitle>
            <Title>{t.name}</Title>
          </View>
        </View>
      </CardSection>
      <Divider />
      <CardSection title={t.category[0]}>
        {t.category.map((c,i) => (<Text key={i}>{c}</Text>))}
      </CardSection>
      <Divider />
      <CardSection title="tags" />
      <CardSection title="memo" />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Receipt;
