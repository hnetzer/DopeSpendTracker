import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

import {text, colors} from '../../style';

export function Header({title, subtitle, size, inverted, aligned, style}) {
  const Title = styled.Text`
    font-size: ${size ? size : text.default}px;
    font-weight: ${text.heavy};
    color: ${inverted ? colors.background : colors.foreground};
    text-align: ${aligned === 'right' ? 'right' : 'left'};
  `;
  const Subtitle = styled.Text`
    font-size: ${size ? size * 0.7 : text.tiny}px;
    font-weight: ${text.light};
    padding-top: 2px;
    color: ${inverted ? colors.accent_3 : colors.accent_4};
    text-align: ${aligned === 'right' ? 'right' : 'left'};
  `;
  return (
    <>
      <Title style={style}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </>
  );
}
