/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ProgressViewIOSComponent,
} from 'react-native';

import styled from 'styled-components';
import {colors, base, text} from '../style';

import {Header} from '../components/atoms/Header';

const AccountListItem = props => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      props.onSelect(props.account);
    } else {
      props.onUnselect(props.account);
    }
  }, [selected]);

  const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: ${base.padding}px;
    border-radius: ${base.radius};
    margin-bottom: ${base.margin};
    box-shadow: 0px 1px 1px rgba(0,0,0,0.02);
    border: 1px solid ${props =>
      props.selected ? colors.accent_7 : colors.accent_2}
    background-color: ${props =>
      props.selected ? colors.accent_7 : colors.background};
  `;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setSelected(!selected)}>
      <Container selected={selected}>
        <View>
          <Header
            title={props.account.name}
            subtitle={
              props.account.official_name
                ? props.account.official_name.slice(0, 48)
                : null
            }
            inverted={selected}
          />
        </View>
        <View>
          <Header
            title={props.account.mask}
            subtitle={
              '$' + (Math.round(props.account.balances.current) || null)
            }
            inverted={selected}
            aligned={'right'}
            style={{fontFamily: 'Menlo'}}
          />
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default AccountListItem;
