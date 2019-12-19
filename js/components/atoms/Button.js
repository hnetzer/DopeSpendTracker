/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import {colors, base, text} from '../../style';

const Button = props => {
  const Container = styled.View`
    justify-content: center;
    padding: ${base.padding * 0.8}px ${base.padding * 1.8}px;
    border-radius: ${base.radius};
    box-shadow: 0px 2px 2px
      ${props => (props.disabled ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.05)')};
    background-color: ${props =>
      props.disabled ? colors.accent_2 : colors.cyan};
  `;
  const Title = styled.Text`
    font-size: ${text.big}px;
    font-weight: ${text.heavy};
    color: ${props => (props.disabled ? colors.accent_1 : colors.accent_7)};
  `;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <Container disabled={props.disabled}>
        <Title disabled={props.disabled}>{props.title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
