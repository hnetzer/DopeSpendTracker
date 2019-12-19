/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Title, Subtitle, Card, Divider, Header} from '../atoms';
import {CardSection} from '../molecules';

import {base, text} from '../../style';

import dateformat from 'dateformat';

const Receipt = ({transaction}) => {
  const t = transaction;
  // console.log(t);
  return (
    <Card>
      <CardSection title={'Preview'}>
        <Header title={t.amount} subtitle={'Amount'} />
        <Header title={dateformat(t.date, 'mmm dd, yyyy')} subtitle={'Date'} />
        <Header title={t.name} subtitle={'Merchant'} />
        <Header
          title={t.pending ? 'Pending' : 'Not Pending'}
          subtitle={'Pending'}
        />
        <Header title={t.transaction_type} subtitle={'Type'} />
      </CardSection>
      <CardSection title={t.category[0]}>
        {t.category.map((c, i) => (
          <Text key={i}>{c}</Text>
        ))}
      </CardSection>
      <Divider />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Receipt;
