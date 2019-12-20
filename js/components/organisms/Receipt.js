/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Title, Subtitle, Card, Divider, Header} from '../atoms';
import {CardSection} from '../molecules';

import styled from 'styled-components';

import {base, colors, text} from '../../style';

import dateformat from 'dateformat';

const Receipt = ({transaction}) => {
  const t = transaction;
  const HeaderRow = styled.View`
    padding: ${base.padding}px;
  `;
  const Date = styled.Text`
    font-size: ${text.small}px;
    font-weight: ${text.heavy};
    color: ${colors.accent_3};
    text-align: center;
    padding-top: ${base.padding}px;
  `;
  const Merchant = styled.Text`
    font-size: ${text.big}px;
    font-weight: ${text.black};
    padding-top: ${base.padding}px;
    color: ${colors.foreground};
    text-align: center;
  `;
  const Categories = styled.View`
    flex-direction: row;
    justify-content: center;
  `;
  const Category = styled.Text`
    font-size: ${text.tiny}px;
    color: ${colors.accent_3};
    text-transform: uppercase;
    padding: ${base.padding}px;
  `;
  const Amount = styled.Text`
    font-size: ${text.huge}px;
    font-weight: ${text.heavy};
    padding-top: ${base.padding}px;
    color: ${colors.foreground};
    text-align: center;
    letter-spacing: 2px;
  `;
  const DetailRow = styled.View`
    flex-direction: row;
    padding: ${base.padding}px;
  `;
  const Where = styled.View`
    flex: 1;
  `;
  const Account = styled.View`
    align-items: flex-end;
  `;
  const Subheader = styled.Text`
    font-size: ${text.tiny}px;
    color: ${colors.accent_3};
    text-transform: uppercase;
    padding-bottom: ${base.padding}px;
    font-weight: ${text.heavy};
  `;
  const LabelRow = styled.View`
    padding: ${base.padding}px;
  `;
  const MemoRow = styled.View`
    flex: 1;
    padding: ${base.padding}px;
    border-top-width: 1px;
    border-top-color: ${colors.accent_2};
    background-color: ${colors.accent_1};
    border-bottom-left-radius: ${base.radius};
    border-bottom-right-radius: ${base.radius};
  `;
  console.log(t);
  return (
    <Card>
      <HeaderRow>
        <Date>{dateformat(t.date, 'dddd, mmm dS, yyyy')}</Date>
        <Merchant>{t.name}</Merchant>
        <Categories>
          {t.category.map((c, i) => (
            <Category key={i}>{c}</Category>
          ))}
        </Categories>
        <Amount>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: t.iso_currency_code || 'USD',
          }).format(t.amount)}
        </Amount>
      </HeaderRow>
      <DetailRow>
        <Where>
          <Subheader>Where</Subheader>
          <View
            style={{
              backgroundColor: colors.accent_2,
              width: 150,
              height: 70,
              borderRadius: base.radius,
            }}
          />
        </Where>
        <Account>
          <Subheader>Account</Subheader>
          <View
            style={{
              backgroundColor: colors.violet,
              width: 100,
              height: 70,
              borderRadius: base.radius,
            }}
          />
        </Account>
      </DetailRow>
      <LabelRow>
        <Subheader>Labels</Subheader>
      </LabelRow>
      <MemoRow>
        <Subheader>Memo</Subheader>
      </MemoRow>
      {/* TODO: Create pending flag */}
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
