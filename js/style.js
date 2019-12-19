// Get screen dimensions
import {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

const dimensions = {
  screenHeight: height,
  screenWidth: width,
};

const em = 8;

// Base
const base = {
  margin: dimensions.screenHeight * 0.02,
  padding: dimensions.screenHeight * 0.02,
  radius: em,
};

// Appreciate these
const text = {
  huge: em * 2.8,
  big: em * 2.4,
  default: em * 2,
  small: em * 1.8,
  tiny: em * 1.6,
  light: '300',
  regular: '400',
  heavy: '600',
  mono: 'Menlo-Regular',
};

//  Fades
const opacities = {
  faded: 0.8,
  veryfaded: 0.7,
};

// Global colors
const colors = {
  // Depreciate these
  primary: '#3399FF',
  secondary: '#454545',
  red: '#E74C3C',
  blue: '#3498DB',
  green: '#2ECC71',
  orange: '#E67E22',
  yellow: '#F1C40F',
  teal: '#1AbC9C',
  white: '#FFFFFF',
  grey: '#999999',
  lightgrey: '#CCCCCC',
  darkgrey: '#333333',
  // Appreciate these
  background: '#FFFFFF',
  accent_1: '#FAFAFA',
  accent_2: '#EAEAEA',
  accent_3: '#999',
  accent_4: '#888',
  accent_5: '#666',
  accent_6: '#444',
  accent_7: '#333',
  accent_8: '#111',
  foreground: '#000',
  error_light: '#FF1A1A',
  error: '#E00',
  error_dark: '#C00',
  success_light: '#3291FF',
  success: '#0070F3',
  success_dark: '#0366D6',
  warning_light: '#F7B955',
  warning: '#F5A623',
  warning_dark: '#F49B0B',
  alert: '#FF0080',
  purple: '#F81CE5',
  violet: '#7928CA',
  cyan: '#79FFE1',
};

// Borders
const border = {
  radius: em,
  width: 2,
  color: colors.accent_8,
};

// Global styling
const basefontsize = em * 2;
const basePadding = dimensions.screenHeight * 0.02;

// Depreciate these
const fontSizes = {
  hugeheader: basefontsize * 2.6,
  bigheader: basefontsize * 2.2,
  header: basefontsize * 1.6,
  smallheader: basefontsize * 1.4,
  tinyheader: basefontsize * 1.1,
};

module.exports = {
  base,
  colors,
  text,
  dimensions,
  basePadding,
  border,
  fontSizes,
  opacities,
};
